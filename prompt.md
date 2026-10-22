# GREENFLEET-Q — COMPLETE UI/UX REFINEMENT

## ROLE

Act as a senior product designer, UI/UX architect, and expert React frontend engineer specializing in premium SaaS products, maritime technology, data visualization, and high-quality web experiences.

Your task is to enhance the existing GreenFleet-Q website using the attached screenshot as the primary visual reference.

The website already exists. Do not rebuild it from scratch.

**Preserve the current design direction and improve its execution.** Focus on visual hierarchy, typography, spacing, composition, responsiveness, and meaningful interactions.

The final result should feel like a premium maritime intelligence platform: clean, elegant, trustworthy, modern, and technically credible.

---

## 1. FIRST, INSPECT THE EXISTING PROJECT

Before modifying anything, inspect the existing repository.

Identify:

* React + Vite frontend structure.
* Current landing-page components.
* Navigation and routing.
* Existing ship Lottie animation.
* Route visualization and SVG overlays.
* Floating metric cards.
* Dashboard preview.
* Existing dashboard implementation.
* CSS variables and styling conventions.
* FastAPI integration and existing API calls.
* Installed dependencies.

Understand the existing implementation before making changes.

Reuse working components whenever possible.

Do not replace functioning features with static mockups.

Do not rewrite the backend.

Do not remove working API integrations, optimization logic, fuel prediction, route evaluation, or fleet allocation.

Make targeted improvements directly in the existing codebase.

---

## 2. OVERALL DESIGN DIRECTION

Use the attached screenshot as the primary visual reference.

Preserve:

* White and pale-blue backgrounds.
* Emerald-green accents.
* Dark navy typography.
* Clean navigation.
* Two-column hero.
* Animated maritime vessel.
* Floating metric cards.
* Four capability cards.
* Five-step workflow.
* Dashboard preview.
* Fuel intelligence section.
* Final CTA and footer.

Improve the existing design without introducing a different visual identity.

### Design principles

* Clean, spacious layouts.
* Strong typography.
* Consistent spacing.
* Restrained shadows.
* Subtle borders.
* Clear content hierarchy.
* Purposeful animation.
* High readability.
* Consistent responsive behavior.

Avoid generic AI landing-page aesthetics.

Do not add decorative effects simply because they are available.

---

## 3. DESIGN SYSTEM

Create or refine a reusable design system using CSS variables.

Use the following as a starting point:

```css
:root {
  --background: #ffffff;
  --background-soft: #f7fbfc;
  --background-blue: #eef7fa;

  --surface: #ffffff;
  --surface-muted: #f4f8fa;

  --text-primary: #10212d;
  --text-secondary: #586b79;
  --text-muted: #80909b;

  --brand-primary: #08b887;
  --brand-hover: #079d74;
  --brand-light: #e5f8f1;

  --accent-cyan: #15c7c4;

  --border: #e2eaee;
  --border-strong: #cddde4;

  --shadow-soft: 0 8px 28px rgba(22, 52, 67, 0.06);
  --shadow-card: 0 12px 32px rgba(22, 52, 67, 0.08);

  --radius-sm: 10px;
  --radius-md: 16px;
  --radius-lg: 24px;

  --content-width: 1360px;
}
```

Use one consistent typography system.

Prefer Manrope, Inter, or Plus Jakarta Sans.

Use responsive font sizes with `clamp()`.

Maintain comfortable body-text line height and consistent heading weights.

Do not make the interface excessively rounded or use heavy shadows on every card.

Keep the entire website in a consistent light theme, including the dashboard.

---

## 4. HERO SECTION — HIGHEST PRIORITY

Refine the existing hero before modifying the lower sections.

### Layout

Maintain a balanced two-column desktop layout.

* Left column: approximately 42–45%.
* Right column: approximately 55–58%.

Use CSS Grid and flexible spacing.

The hero should feel spacious without excessive empty areas.

### Eyebrow

`AI + QUANTUM-INSPIRED MARITIME DECISION SUPPORT`

Use small uppercase emerald-green text and a short horizontal line.

### Headline

**Plan smarter
voyages.
Sail greener.**

Use:

* Large, bold typography.
* Dark navy for the first two lines.
* Emerald green for `Sail greener.`
* Tight but readable line height.
* Responsive sizing.
* Intentional line breaks on desktop.

The headline must remain the strongest element in the left column.

### Supporting text

"Predict fuel consumption, compare cleaner fuels, optimize routes and speed, and allocate your fleet with AI-powered intelligence."

Improve readability by adjusting the text width, font size, line height, and spacing.

### Buttons

Primary:

`Explore GreenFleet-Q →`

Secondary:

`Watch Demo`

Use a green primary button and a white secondary button with a fine border.

Implement meaningful hover, focus, and active states.

Do not make buttons excessively large.

Preserve their existing functional destinations.

### Capability indicators

Keep three compact indicators:

* Fuel-aware ML predictions.
* QPSO speed + fuel optimization.
* Marine & weather context.

Use consistent outline icons and subtle separators.

Do not turn these indicators into additional cards.

---

## 5. SHIP ANIMATION AND ROUTE COMPOSITION

The ship animation is a central visual feature.

Preserve the existing Lottie animation and improve its integration into the hero.

### Ship animation

* Inspect the actual animation and its background.
* Preserve its aspect ratio.
* Avoid stretching or cropping.
* Position it centrally in the right-side visual area.
* Ensure the vessel remains recognizable.
* Remove any redundant static ship image.
* Avoid visible background clashes.
* Maintain a suitable size across desktop and mobile.

If the animation has a transparent background, blend it naturally into the light background.

If it has a solid background, use a compatible visual container rather than arbitrary blend modes.

Do not replace the existing animation with a random stock photograph.

### Route visualization

Use a single elegant emerald-green route curve with a restrained cyan dashed companion.

Include:

* A few route nodes.
* A clear origin marker.
* A clear destination marker.
* Compact Mumbai and Singapore labels where appropriate.

Use SVG for route overlays if the existing implementation supports it.

Keep the route behind the ship where possible.

Avoid multiple competing routes, excessive glow, random particles, decorative clouds, or unrelated map graphics.

Add a subtle route-drawing animation only if it improves the presentation.

Respect reduced-motion preferences.

The route is a prototype visualization and must not be represented as a certified maritime navigation route.

---

## 6. FLOATING METRIC CARDS

Retain exactly four metric cards.

### Fuel efficiency

`+18.4%`

`vs baseline (est.)`

### CO₂ reduction

`−12.8%`

`operational estimate`

### Optimal speed

`14.2 knots`

`QPSO selected`

### Route candidates

`2 evaluated`

`cleaner + faster routes`

These are reference values and must be treated as illustrative unless verified by actual application results.

### Visual improvements

Use:

* White surfaces.
* Fine blue-gray borders.
* Subtle shadows.
* Consistent internal padding.
* Consistent typography.
* Small emerald or cyan icons.
* Clear hierarchy between labels and values.

### Positioning

Arrange the cards around the vessel without covering important parts of the animation.

Avoid brittle, hardcoded positioning that breaks at other viewport sizes.

Use a responsive composition.

On mobile, move the cards beneath the ship into a compact grid.

Do not add more metric cards.

---

## 7. NAVIGATION REFINEMENT

Create a polished, restrained navigation bar.

### Left

* GF monogram.
* GreenFleet-Q wordmark.
* Emerald Q accent.
* Optional short product descriptor if it fits without crowding the header.

### Center

* Product.
* Capabilities.
* How It Works.
* About.

### Right

`Launch Dashboard ↗`

### Styling

* White background.
* Fine bottom border.
* Centered maximum-width container.
* Balanced horizontal spacing.
* Consistent vertical alignment.
* Clean typography.
* Subtle hover states.
* Accessible focus states.

Keep the header compact.

Do not add heavy shadows, excessive blur, or elaborate animated navigation effects.

Use the existing dashboard route.

Implement an accessible mobile menu.

---

## 8. PLATFORM INTRODUCTION

Retain the existing section.

Eyebrow:

`THE GREENFLEET-Q PLATFORM`

Heading:

**One platform for smarter maritime decisions.**

Description:

"Combine AI, optimization, and real-world marine signals to plan safer, cleaner, and more cost-efficient voyages across your entire fleet."

Use a balanced two-column layout.

Improve the image size and text readability.

Use a genuine project visual or a properly licensed maritime image.

Do not introduce unnecessary decorative elements.

---

## 9. CAPABILITIES SECTION

Heading:

**End-to-end capabilities for a greener tomorrow.**

Keep four cards.

### Fuel Intelligence

Predict fuel consumption and compare supported fuel options under consistent voyage conditions.

### Marine Routing

Evaluate prototype route alternatives using weather, marine conditions, and environmental penalties.

### AI Optimization

Evaluate speed and fuel choices using quantum-inspired optimization.

### Fleet Allocation

Explore cargo distribution across prototype vessel capacities and understand utilization.

Improve:

* Card spacing.
* Icon consistency.
* Text contrast.
* Heading hierarchy.
* Internal padding.
* Alignment.
* Hover states.

Use white cards and subtle borders.

Keep the descriptions concise and readable.

Do not use unnecessary gradients or 3D effects.

---

## 10. HOW IT WORKS

Heading:

**From voyage data to an optimized decision.**

Retain the five stages:

1. Voyage Inputs.
2. AI Prediction.
3. Optimization.
4. Route Evaluation.
5. Best Decision.

Use a clean horizontal timeline on desktop and a vertical timeline on mobile.

Improve the step labels and supporting descriptions.

Use subtle connecting lines and consistent icons.

Keep the workflow understandable without excessive explanation.

---

## 11. DASHBOARD PREVIEW

This section should demonstrate that GreenFleet-Q is a functioning application, not just a marketing website.

Heading:

**Interactive dashboard for real-world insights.**

Description:

"Explore routes, visualize marine conditions, compare fuels, and see optimized recommendations in one intuitive workspace."

Use an actual screenshot or existing dashboard components.

Do not create a fake screenshot and present it as the real dashboard.

Improve:

* Dashboard preview size.
* Legibility of metric labels.
* Route map visibility.
* Fuel comparison hierarchy.
* Chart contrast.
* Spacing.
* Border treatment.

Make the dashboard preview large enough to understand at normal desktop viewing size.

Keep the preview consistent with the light theme.

---

## 12. FUEL INTELLIGENCE AND KEY METRICS

Retain the fuel intelligence section.

Show the five supported fuel options:

* HFO.
* LNG.
* Methanol.
* Hydrogen.
* Ammonia.

Present the most relevant metrics clearly:

* Fuel consumption.
* Route alternatives.
* Optimized speed.
* Fuel efficiency.
* Operational CO₂ estimate.

Use a clear grid and restrained visual hierarchy.

Ensure each metric has an understandable label.

Do not invent additional features or claim unverified environmental benefits.

Clearly distinguish prototype estimates from real operational measurements.

---

## 13. FINAL CTA AND FOOTER

### Final CTA

Heading:

**Make every voyage a smarter, greener decision.**

Description:

"Turn voyage data into actionable insights with AI-powered maritime planning."

Button:

`Launch GreenFleet-Q →`

Use a white or pale-mint background with generous whitespace.

Keep the section simple and focused.

### Footer

Include:

* GreenFleet-Q branding.
* A short product description.
* Product links.
* Capabilities.
* How It Works.
* About.
* Dashboard link.
* GitHub link only if the actual repository URL is available.

Improve readability, spacing, and alignment.

Do not invent social profiles or external links.

---

## 14. OPEN-SOURCE DESIGN RESOURCES

Prefer open-source libraries and free resources that fit the existing React + Vite stack.

Potential options:

* Motion: https://motion.dev/
* React Bits: https://reactbits.dev/
* Lucide React: https://lucide.dev/
* Kokonut UI: https://kokonutui.com/
* Recharts: https://recharts.org/
* Lottie React: https://github.com/Gamote/lottie-react

Use these resources selectively.

Verify licensing, current package compatibility, and maintenance status before integrating them.

Do not install a large collection of libraries for minor visual changes.

Prefer the existing project dependencies whenever possible.

Do not introduce Three.js unless a genuine 3D requirement justifies its performance and maintenance cost.

---

## 15. ANIMATION PRINCIPLES

Use animation sparingly.

Appropriate options:

* Subtle button hover effects.
* Small icon interactions.
* Gentle section entrance reveals.
* A restrained SVG route animation.
* Lightweight card transitions.
* The existing ship animation.

Avoid:

* Excessive parallax.
* Constantly floating cards.
* Random particles.
* Multiple glowing backgrounds.
* Heavy 3D effects.
* Scroll-jacking.
* Animations that interfere with reading.
* Decorative movement without a clear purpose.

Respect `prefers-reduced-motion`.

Keep interactions responsive and performant.

---

## 16. RESPONSIVE DESIGN

Verify the website at:

* 1440 × 900.
* 1280 × 800.
* 1024 × 768.
* 768 × 1024.
* 390 × 844.
* 360 × 800.

Desktop:

* Balanced two-column hero.
* Large, legible headline.
* Clearly visible ship animation.
* Carefully positioned metric cards.

Tablet:

* Adjust column widths.
* Reduce headline size.
* Simplify the visual overlays if necessary.

Mobile:

* Stack the hero vertically.
* Keep the headline and CTAs readable.
* Place the ship below the text.
* Move metric cards into a grid.
* Use a mobile navigation menu.
* Stack capability cards.
* Convert the workflow to a vertical timeline.
* Ensure charts and dashboard previews remain usable.

Prevent horizontal overflow.

Do not simply shrink the desktop layout.

---

## 17. PRESERVE EXISTING FUNCTIONALITY

GreenFleet-Q includes a React + Vite frontend and a FastAPI backend.

Preserve the working functionality for:

* Random Forest fuel-consumption prediction.
* Fuel comparison.
* Marine and weather data.
* Route evaluation.
* Baseline speed-grid optimization.
* QPSO speed and fuel optimization.
* Fleet allocation.
* Scenario analysis.
* Dashboard charts and map layers.

Do not replace working features with static data.

Do not modify the model or optimization logic for cosmetic reasons.

Do not change API contracts unnecessarily.

Do not break the existing dashboard route.

Keep illustrative hero metrics separate from live application data.

---

## 18. IMPLEMENTATION WORKFLOW

### Phase 1

Audit the current project and identify the highest-impact UI/UX issues.

### Phase 2

Refine the design system, typography, spacing, and navigation.

### Phase 3

Improve the hero, ship animation, route visualization, and metric card composition.

### Phase 4

Refine the remaining landing-page sections.

### Phase 5

Improve the dashboard preview and verify the light theme across the application.

### Phase 6

Implement responsive behavior and restrained interactions.

### Phase 7

Run the application and inspect the actual rendered result.

Compare it against the attached screenshot.

Correct alignment, spacing, readability, and visual inconsistencies.

### Phase 8

Run the existing build and relevant tests.

Check for broken imports, missing assets, console errors, and regressions.

Do not claim tests passed unless they were actually run.

---

## DEFINITION OF DONE

The task is complete when:

1. The landing page retains the reference's visual identity.
2. Typography and supporting text are readable.
3. The ship animation and route visualization form a coherent composition.
4. Metric cards are consistently styled and properly positioned.
5. Navigation is polished and responsive.
6. Every landing-page section uses a consistent design system.
7. The dashboard preview is clear and visually convincing.
8. The complete website uses the light theme.
9. Existing application functionality is preserved.
10. The website works across desktop, tablet, and mobile.
11. Animations are restrained and purposeful.
12. The frontend builds successfully.

## FINAL DIRECTIVE

Inspect the existing codebase and attached screenshot.

Improve the website directly in the existing project.

Do not rebuild the application unnecessarily.

Do not add decoration simply to make the interface look more complex.

Prioritize typography, spacing, visual hierarchy, the ship animation, and a polished dashboard preview.

**The result should feel like a premium maritime intelligence product designed by an experienced product design team: clean, elegant, credible, accessible, and functional.**
