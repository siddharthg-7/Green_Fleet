import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useApp } from '../context/AppContext';
import { ArrowRight, Ship, Package, TrendingUp } from 'lucide-react';
import {
  BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer,
  CartesianGrid, Cell,
} from 'recharts';

const fmt = n => Number(n || 0).toLocaleString(undefined, { maximumFractionDigits: 2 });
const COLORS = ['#0f6b64', '#ff6f59', '#168077', '#f59e0b', '#3b82f6'];

export default function FleetAllocation() {
  const navigate = useNavigate();
  const { result, selected } = useApp();

  if (!result) {
    return (
      <div className="page-empty">
        <div className="page-empty-inner">
          <h2>No Fleet Data</h2>
          <p>Run a voyage optimisation to see fleet allocation.</p>
          <button className="btn-primary" onClick={() => navigate('/voyage')}>
            <ArrowRight size={16} /> Go to Voyage Planning
          </button>
        </div>
      </div>
    );
  }

  const fp = selected?.fleet_plan || result.fleet_plan;
  const o  = selected?.optimized  || result.optimized;

  const chartData = fp?.ships?.map(s => ({
    name:  `Ship #${s.ship_no}`,
    cargo: s.cargo_tonnes,
    cap:   s.capacity_tonnes,
    util:  s.utilization_percent,
  })) || [];

  return (
    <div className="page-fleet">
      {/* Fleet KPI cards */}
      <div className="kpi-grid">
        <div className="kpi-card" style={{ borderTopColor: '#0f6b64' }}>
          <div className="kpi-icon" style={{ color: '#0f6b64' }}><Ship size={20} /></div>
          <div className="kpi-body">
            <div className="kpi-value">{fp?.fleet_count}</div>
            <div className="kpi-label">Ships Selected</div>
          </div>
        </div>
        <div className="kpi-card" style={{ borderTopColor: '#ff6f59' }}>
          <div className="kpi-icon" style={{ color: '#ff6f59' }}><Package size={20} /></div>
          <div className="kpi-body">
            <div className="kpi-value">{fmt(fp?.cargo_tonnes)} <span className="kpi-unit">t</span></div>
            <div className="kpi-label">Total Cargo</div>
          </div>
        </div>
        <div className="kpi-card" style={{ borderTopColor: '#f59e0b' }}>
          <div className="kpi-icon" style={{ color: '#f59e0b' }}><TrendingUp size={20} /></div>
          <div className="kpi-body">
            <div className="kpi-value">{fp?.capacity_utilization_percent} <span className="kpi-unit">%</span></div>
            <div className="kpi-label">Capacity Utilization</div>
          </div>
        </div>
        <div className="kpi-card" style={{ borderTopColor: '#ef4444' }}>
          <div className="kpi-body">
            <div className="kpi-value">{fmt(fp?.unused_capacity_tonnes)} <span className="kpi-unit">t</span></div>
            <div className="kpi-label">Unused Capacity</div>
          </div>
        </div>
        <div className="kpi-card" style={{ borderTopColor: '#8b5cf6' }}>
          <div className="kpi-body">
            <div className="kpi-value">{fmt(fp?.fuel_litres)} <span className="kpi-unit">L</span></div>
            <div className="kpi-label">Fleet Total Fuel</div>
          </div>
        </div>
        <div className="kpi-card" style={{ borderTopColor: '#0f6b64' }}>
          <div className="kpi-body">
            <div className="kpi-value">{fmt(fp?.co2_kg)} <span className="kpi-unit">kg</span></div>
            <div className="kpi-label">Fleet CO₂</div>
          </div>
        </div>
      </div>

      {/* Ship-by-ship table */}
      <div className="card">
        <div className="section-heading">
          <div>
            <div className="eyebrow">FLEET ALLOCATION</div>
            <h2>Vessel Assignment</h2>
            <p className="section-copy">{fmt(fp?.cargo_tonnes)} t demand fully allocated across {fp?.fleet_count} ship{fp?.fleet_count !== 1 ? 's' : ''}.</p>
          </div>
        </div>
        <div className="table-responsive">
          <table className="fuel-table">
            <thead>
              <tr>
                <th>Ship</th>
                <th>Type</th>
                <th>Cargo (t)</th>
                <th>Capacity (t)</th>
                <th>Utilization</th>
                <th>Fuel (L)</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {fp?.ships?.map(s => (
                <tr key={s.ship_no}>
                  <td><strong>#{s.ship_no}</strong></td>
                  <td>{s.fleet_type}</td>
                  <td>{s.cargo_tonnes?.toLocaleString()}</td>
                  <td>{s.capacity_tonnes?.toLocaleString()}</td>
                  <td>
                    <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                      <div style={{
                        flex: 1, height: 6, background: '#e5ded3', borderRadius: 3, overflow: 'hidden',
                      }}>
                        <div style={{
                          width: `${s.utilization_percent}%`, height: '100%',
                          background: s.utilization_percent > 80 ? '#0f6b64' : '#ff6f59',
                          borderRadius: 3,
                        }} />
                      </div>
                      <span style={{ fontSize: 12, color: '#8ea7b3' }}>{s.utilization_percent}%</span>
                    </div>
                  </td>
                  <td>{s.fuel_litres?.toLocaleString()}</td>
                  <td><span className="pill" style={{ color: '#0f6b64', borderColor: '#0f6b64' }}>Selected</span></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Cargo allocation chart */}
      <div className="card charts">
        <h3>Cargo &amp; Capacity by Vessel</h3>
        <p>Cargo assigned vs total capacity per ship.</p>
        <ResponsiveContainer width="100%" height={240}>
          <BarChart data={chartData}>
            <CartesianGrid strokeDasharray="3 3" stroke="#e5ded3" />
            <XAxis dataKey="name" tick={{ fill: '#7d8e98', fontSize: 11 }} />
            <YAxis tick={{ fill: '#7d8e98', fontSize: 11 }} />
            <Tooltip contentStyle={{ background: '#fdfbf7', border: '1px solid #e5ded3', color: '#16242b', borderRadius: 8 }} />
            <Bar dataKey="cap"   name="Capacity (t)" fill="#dcd4c7" radius={[4, 4, 0, 0]} />
            <Bar dataKey="cargo" name="Cargo (t)"    fill="#0f6b64" radius={[4, 4, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
