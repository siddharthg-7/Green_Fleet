import axios from 'axios';

export const API_BASE = (import.meta.env.VITE_API_BASE_URL || '/api').replace(/\/+$/, '');
export const api = axios.create({ baseURL: API_BASE });
export const searchPorts=q=>api.get('/ports',{params:{query:q,limit:50}}).then(r=>r.data);
export const getPort=id=>api.get(`/ports/${id}`).then(r=>r.data);
export const optimize=x=>api.post('/optimize',x).then(r=>r.data);
export const scenario=x=>api.post('/scenario',x).then(r=>r.data);
export const benchmark=x=>api.post('/benchmark',x).then(r=>r.data);
export const getParameters=x=>api.post('/parameters',x).then(r=>r.data);
