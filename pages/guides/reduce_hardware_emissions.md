---
layout: guidesNavigation
title: How to reduce hardware related emissions
permalink: /guides/reduce-hardware-emissions
published: true
---

# How to reduce hardware related emissions

Hardware—laptops, servers, networks, storage and edge / IoT devices—underpins every digital service and carries a sizeable climate impact. Its footprint spans embodied emissions (materials, manufacturing, logistics and end-of-life processing) and operational emissions (energy to run and cool equipment).

Cutting this impact is one of the fastest ways to reduce your organisation's technology footprint. This guide, aligned with the Tech Carbon Standard, sets out practical actions across the hardware life cycle: procurement, deployment, operation, optimisation and end-of-life. It focuses on lowering both embodied and operational (usage) emissions through better inventory, utilisation, longevity, circular procurement and governance.

{% include linkedHeading.html heading="Related hardware life cycle examples & case study" level=3 %}
To see practical applications of these principles and real data breakdowns, explore:

- **Employee Hardware Example:** Allocation of embodied and operational emissions – [/technology-categories/life cycle/example/employee](/technology-categories/life cycle/example/employee)
- **Server Hardware Example:** Utilisation, rightsizing and payback illustration – [/technology-categories/life cycle/example/server](/technology-categories/life cycle/example/server)
- **Green Web Foundation Case Study:** Organisational emissions assessment – overview [/case-studies/green-web-foundation/overview](/case-studies/green-web-foundation/overview) and reduction strategies [/case-studies/green-web-foundation/reducing-impact](/case-studies/green-web-foundation/reducing-impact)

{% include linkedHeading.html heading="1. Understand your hardware footprint" level=3 %}

Before taking action, map the major life cycle stages and emission types:

The first step is to understand what you have. Perform an IT asset inventory to map every major hardware category: employee devices, data-centre servers, and any off-site or leased hardware. For each, note the approximate age, model, and manufacturer.

These details help you calculate the embodied emissions of your devices—those produced during manufacturing—and the operational emissions from their electricity use.

For examples of how to structure this analysis, see the [Green Web Foundation case study](/case-studies/green-web-foundation), which shows how to track and estimate embodied and operational impacts within an organisation’s IT footprint.

Focus on:

- **Embodied carbon**: raw material extraction, component manufacturing, assembly, transport, packaging.
- **Usage carbon**: operational energy consumption (compute, networking, cooling, power conversion losses).
- **End-of-life**: recycling, refurbishment, landfill impacts, data sanitisation processes.

Capturing these allows clearer trade-offs between upgrading vs extending lifespan.

{% include linkedHeading.html heading="2. Measure and attribute embodied emissions" level=3 %}

Once you have documented and mapped your IT estate, you need to research, estimate, and/or measure, its carbon footprint.

Actions:

- Request Product Carbon Footprints (PCFs) from vendors or use industry averages where unavailable[^1].
- Prefer vendors publishing third-party assured life cycle assessments.[^2]
- Allocate embodied emissions over expected useful life (straight-line amortisation) or per utilisation hour for shared infrastructure to better inform refresh decisions.[^3]
- Track re-deployment and second-life use to avoid prematurely writing off remaining embodied value.

{% include linkedHeading.html heading="3. Extend useful life responsibly" level=3 %}

The most sustainable device is the one you already own. Extending the lifespan of laptops, desktops, and servers reduces embodied carbon by spreading manufacturing emissions over a longer period.

- Maintain, don’t replace. Simple actions such as upgrading storage or memory, replacing batteries, or cleaning fans, can add years of use.
- Choose repairable hardware. When purchasing new devices, prioritise models designed for easy component replacement and supported by long-term firmware updates.
- Adopt a five-year replacement cycle. Many organisations replace laptops every three years, but extending to five can reduce embodied emissions per user by around 40%.
- Maintain firmware, drivers, and security posture to safely extend lifespan without risking vulnerabilities.
- Use component upgrades (RAM, SSD) instead of full system replacement when performance bottlenecks are isolated.
- Establish refurbishment pathways (internal cascade from high to lower intensity workloads) before external disposal.

When replacement is unavoidable, ensure retired devices are resold, refurbished, or responsibly recycled through certified e-waste channels.

{% include linkedHeading.html heading="4. Right-Size and consolidate your estate" level=3 %}

Idle hardware is a silent emitter. Servers or devices operating far below capacity still consume energy and require maintenance.

Review server utilisation levels, both on-premise and in co-located data centres, and consolidate workloads where possible.

If you have three servers running at 10% utilisation, combining them into one system running at 30–40% utilisation can deliver both energy and carbon savings, as long as failover and redundancy needs are still met.

Virtualisation and containerisation technologies can further increase utilisation efficiency while maintaining isolation and flexibility.

{% include linkedHeading.html heading="5. Procure lower‑impact hardware" level=3 %}

Procurement is an opportunity to drive systemic change. The choices you make influence the entire supply chain.

- **Request environmental data**: Ask suppliers for embodied carbon disclosures or life cycle assessments for major hardware categories.
- **Prefer circular suppliers**: Many vendors now offer “take-back” or device-as-a-service programmes that include refurbishment and responsible recycling.
- **Set procurement standards**: Establish an internal sustainability criterion, such as an average embodied carbon target per device type or mandatory repairability score, to guide future purchases.

Aligning supplier expectations with [Tech Carbon Standard impact categories](https://www.techcarbonstandard.org/impact-categories/upstream#employee-hardware) ensures consistency across your reporting and decision-making.

- Select models with high energy efficiency metrics (SPECpower for servers, Energy Star / 80 PLUS for PSUs).[^5]
- Prefer modular / repairable designs to enable component replacement (Framework, certified modular servers).[^6]
- Favour manufacturers with recycled / low-carbon materials commitments and renewable-powered manufacturing.[^7]
- Include take-back / certified recycling clauses in procurement contracts.
- Avoid early adoption of bleeding-edge components where efficiency per watt has not stabilised.

{% include linkedHeading.html heading="6. Improve operational energy efficiency" level=3 %}

Operational emissions come from the electricity used to power and cool equipment. Reducing this can be achieved in several ways:

- **Power management**: Enable sleep modes, automated shutdowns, and smart power scheduling for both employee devices and on-prem servers.
- **Efficient environments**: Keep server rooms well-ventilated and avoid over-cooling. Even raising the ambient temperature by just one or two degrees can noticeably reduce cooling energy demand without compromising hardware performance or reliability.

For data-centre operations, check whether your provider publishes a Power Usage Effectiveness (PUE) score. In theory, the lower the PUE, the less energy is wasted on cooling and overheads. However, in practice focusing on just PUE can lead to other climate impacts such as increased water usage. PUE is still useful for many carbon estimation calculations, so is handy to have.

Key levers:

- Increase average utilisation through workload consolidation, orchestration, and capacity planning (avoid stranded hardware).[^8]
- Apply power management (CPU frequency scaling, sleep states, device power profiles) while respecting latency SLAs.[^9]
- Use container density and efficient virtualization (lightweight hypervisors) to reduce idle overhead.[^10]
- Monitor component-level power with RAPL (x86), IPMI, or vendor telemetry to identify hotspots for optimisation.[^11]
- Regularly retire persistently under-utilised assets (e.g. <10–15% CPU utilisation over 30 days) after confirming no hidden reliability role.

{% include linkedHeading.html heading="7. Optimise employee devices" level=3 %}

Employee devices (laptops, monitors, and peripherals) often account for a substantial portion of an organisation’s hardware footprint, particularly in remote or hybrid workplaces.

- **Standardise configurations**: Avoid over-specification. Not every employee needs a high-performance laptop or dual 4K displays. Match performance to role requirements.
- **Encourage shared peripherals**: Docking stations, monitors, and chargers can often be shared across workspaces.
- **Adopt energy-efficient settings**: Encourage power-saving defaults, such as dimmed screens, auto-sleep, and reduced background sync frequency.

If you manage a large remote workforce, provide guidance for home setups to minimise unnecessary energy draw, including switching off equipment at the end of the workday.

{% include linkedHeading.html heading="8. Decommissioning and circularity" level=3 %}

When hardware reaches the end of its usable life, ensure it is handled responsibly to prevent e-waste and data risks.

- **Wipe and refurbish**: Use certified data-erasure services and prioritise reuse within your organisation or through donation schemes.[^16]
- **Recycle**: Where reuse isn’t possible, recycle through certified WEEE or e-waste partners to recover valuable materials like copper, aluminium, and rare earth metals.[^17]
- **Track outcomes**: Document where devices end up. Transparency helps verify that recycling does not become export dumping.

The [Green Web Foundation](https://www.techcarbonstandard.org/case-studies/green-web-foundation) example demonstrates how tracking disposal routes improves both accountability and carbon reporting.

{% include linkedHeading.html heading="9. Decision frameworks and trade‑offs" level=3 %}

When considering a refresh:

1. Quantify residual embodied emissions of existing device (remaining amortised portion).
2. Estimate embodied emissions of new replacement.
3. Model usage energy delta (old vs new efficiency at expected utilisation + grid intensity forecast).
4. Include rebound risks (greater capacity encourages more workload growth) and e-waste handling pathway.

Only proceed if life cycle emissions savings (usage reduction over remaining life + circular recovery benefits) outweigh new embodied cost within a reasonable timeframe.

{% include linkedHeading.html heading="10. Metrics & instrumentation" level=3 %}

Reducing hardware emissions is not a one-off activity—it’s an ongoing process of measurement and improvement.

Use the Tech Carbon Standard’s categories to structure your tracking:

| Category                                    | Description                                                                                |
| ------------------------------------------- | ------------------------------------------------------------------------------------------ |
| **Upstream: Employee Hardware**             | Embodied carbon from laptops, monitors, and peripherals used by staff.                     |
| **Upstream: Data Centre & Server Hardware** | Embodied carbon from purchased and replacement servers, storage, and networking equipment. |
| **Operational: On-site Employee Devices**   | Energy used by employee devices in offices and managed facilities.                         |
| **Operational: Servers & Storage**          | Electricity used to power and cool on-premises infrastructure.                             |
| **Operational: Off-site Employee Devices**  | Energy used by remote or hybrid workers in home environments.                              |

Establish baseline metrics such as average embodied kgCO₂e per employee or annual operational emissions per server. Use them to track year-on-year improvements.

Possible metrics:

- Utilisation (CPU, memory, storage IOPS, network) vs capacity.
- Power (Watts) and energy (kWh) per asset class; normalise by useful work (e.g. requests, inference tokens, batch jobs).
- PUE (Power Usage Effectiveness) and trend toward <1.3 for on-premise facilities.[^14]
- WUE (Water Usage Effectiveness) for facilities using evaporative cooling.[^15]
- Embodied emissions inventory (amortised remaining vs retired vs incoming).
- Refresh payback ratio: (Projected usage CO2e savings over remainder of original life) / (Embodied CO2e of new asset).

{% include linkedHeading.html heading="11. Governance & policy" level=3 %}

Your organisation's policies can help to drive change. Consider the following:

- Set minimum utilisation thresholds before procurement approval.
- Mandate carbon impact assessment for large fleet refreshes.
- Publish a hardware circularity scorecard (repairability, recycled content, take-back compliance, second-life rate).
- Include environmental KPIs in vendor performance reviews.
- Report your carbon footprint to downstream clients using the [Technical Carbon Standard Schema](https://www.techcarbonstandard.org/schemas/implementation-guide) for transparent reporting.

{% include linkedHeading.html heading="Quick wins" level=2 %}

- Turn on advanced power management profiles for employee endpoints (sleep <10 min idle, screen power save).
- Remove abandoned / zombie servers after 30‑day idle validation.
- Adopt automated rightsizing / consolidation tooling in virtualised estates.
- Capture PCFs for next procurement cycle and begin amortisation tracking.

{% include linkedHeading.html heading="Longer term investments" level=2 %}

- Implement granular real‑time asset power telemetry.
- Introduce circular procurement clauses (take-back, recycled materials).
- Deploy carbon aware scheduling into CI / batch pipelines.
- Optimise facility cooling (containment, liquid cooling evaluation).
- Establish refurbishment & second-life programme with measurable avoided emissions.

## References
[^1]: Electronic Product Carbon Footprints – Emerging vendor disclosures (e.g. Dell, HP sustainability reports).
[^2]: ISO 14044 / ISO 14067 compliant third‑party assured Life Cycle Assessments.
[^3]: Green Software Foundation – Software Carbon Intensity specification (allocation guidance).
[^4]: Uptime Institute – Data Center Capacity Management Reports.
[^5]: SPECpower_ssj2008 benchmark results; 80 PLUS certification program.
[^6]: iFixit Repairability Scores; Framework Laptop sustainability disclosures.
[^7]: Manufacturer sustainability reports (renewable procurement & recycled content commitments).
[^8]: VMware / KVM consolidation efficiency case studies; academic utilisation analyses.
[^9]: ACPI power state management; CPU frequency scaling research (DVFS energy savings).
[^10]: Container vs VM overhead benchmarking studies (e.g. IBM / Red Hat performance blogs).
[^11]: Intel Running Average Power Limit (RAPL) Interface documentation; IPMI sensor guides.
[^12]: Electricity Maps API; WattTime carbon intensity service.
[^13]: carbon aware scheduling critiques (grid rebound risk discussions – climateaction.tech resources).
[^14]: ASHRAE thermal guidelines; PUE improvement case studies (The Green Grid).
[^15]: WUE metrics – The Green Grid whitepapers.
[^16]: NIST SP 800-88 Rev.1 Guidelines for Media Sanitization.
[^17]: e-Stewards & R2 Responsible Recycling standards.

---
*This guide will evolve as better data sources and methodologies emerge. Contributions welcome.*
