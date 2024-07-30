---
layout: projects
title: Green Web Foundation
permalink: /projects/green-web-foundation/reducing-impact
project: gwf
---

# Reducing impact - our what-if scenarios

In this section, we look beyond estimations/reporting and think about what factors affect the emissions of our digital estate. We're calling this our what-if scenarios. 

*What would happen if* we switched cloud provider? *What would happen if* we only used refurbed hardware from now on. Here's what we explored in these sections:

<p style="color: red">Still to do:</p>

<p style="color: red">what-if employee hardware - section about the impact of using all new equipment instead of refurbed and how that would change the estimates</p>
<p style="color: red">what-if cloud service - section about using different services that aren't so low carbon - how would our estimates change</p>

## Employee Hardware

What if GWF purchased new hardware rather than refurbished?

Of the four laptops acquired in 2023, two of them were purchased new, and two purchased refurbished. Those refurbished laptops use a condition factor of 15% attribution, the new laptops use 100% attribution.

Returning to the [formula we used in the upstream emissions section](upstream#detailed-estimate-methodology), we can recalculate the total embodied carbon emissions assuming all four laptops were acquired as new:

$$ Attributed\_Carbon = Embodied\_Carbon \times Condition\_Factor \times BYOD\_Attribution\_Factor $$

| Laptop Manufacturer and Model | PCF Data Sheet (or approx. equivalent) | Product Carbon Footprint kgCO<sub>2</sub>e | Embodied Carbon kgCO<sub>2</sub>e | Condition Factor |  BYOD? | Attribution Factor | GWF Attributable kgCO<sub>2</sub>e |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Apple 2021 MacBook Pro 16" M1 Pro | [Apple 16inch MacBook Pro](https://www.apple.com/environment/pdf/products/notebooks/16-inch_MacBook_Pro_PER_Oct2021.pdf) | 349 | 255 | New (100%) | Yes | 57% | 145 |
| Apple 2020 MacBook Pro 13" M1 | [Apple 13inch MacBook Pro](https://www.apple.com/environment/pdf/products/notebooks/13-inch_MacBookPro_PER_Nov2020.pdf) | 185 | 150 | New (100%) | No | 100% | 150 |
| Apple 2022 MacBook Air 13.6" M2 | [Apple MacBook Air M2](https://www.apple.com/environment/pdf/products/notebooks/M2_MacBook_Air_PER_June2022.pdf)| 147 | 115  | New (100%) | Yes | 57% | 66 |
| Apple 2023 MacBook Air 13.6" M2 | [Apple MacBook Air M2](https://www.apple.com/environment/pdf/products/notebooks/M2_MacBook_Air_PER_June2022.pdf)| 171 | 133  | New (100%) | Yes | 57% | 76 |
| **Laptop Total** | | | | | | | **437** |

With two refurbished and two new laptops, we previously calculated a total of **186 kgCO<sub>2</sub>e**. If they were all purchased new, that total becomes **437 kgCO<sub>2</sub>e**. Purchasing refurbished hardware clearly brings significant carbon savings.

## Cloud Services

What if GWF used a regular cloud service provider, that uses the regional grid rather than renewable energy sources?

If we take a closer look at the detailed estimation for the Greencheck API servers operational emissions, we established a total energy use of 48.05 kWh/year. To calculate the emissions, we multiplied this by the renewable energy carbon intensity of 0.0195 kgCO<sub>2</sub>e/kWh (a mix of hydro and wind power) for 0.94 kgCO<sub>2</sub>e/year. To establish this what-if scenario, we can simply replace this carbon intensity for the region's carbon intensity. For this we'll assume GWF would use a cloud service provider with a geographically local datacenter in Germany. Germany's grid carbon intensity is 0.364 kgCO<sub>2</sub>e/kWh, so:

$$ 48.05\ kWh/year \times 0.364\ kgCO_2e/kWh = 17.49\ kgCO_2e/year $$

Just by using a cloud service provider that does not commit to using only renewable energy sources, the operational emissions leap from less than **1 kgCO<sub>2</sub>e/year** to over **17 kgCO<sub>2</sub>e/year**. It is a massive saving in carbon emissions for simply choosing a renewable energy cloud provider.

---

[Next - Appendix](appendix)

---
