---
layout: projects
title: Green Web Foundation
permalink: /projects/green-web-foundation/reducing-impact
project: gwf
---

# Reducing impact - our what-if scenarios

In this section, we look beyond estimations/reporting and think about what factors affect the emissions estimates of our digital estate. We're calling this our what-if scenarios. 

*What would happen if* we switched cloud provider? *What would happen if* we only used refurbed hardware from now on. Here's what we explored in these sections:

- [Employee hardware](#employee-hardware)
- [Cloud services](#cloud-services)


## Employee Hardware

### What-if question

*What if GWF purchased new laptops rather than refurbished ones?*

### Exploration

Of the four laptops acquired in 2023, two were purchased new and two refurbished. Those refurbished laptops use a condition factor of 15% attribution, the new laptops use 100% attribution.

Returning to the [formula we used in the upstream emissions section](upstream#detailed-estimate-methodology), we can recalculate the total embodied carbon emissions assuming all four laptops were acquired as new:

$$ Attributed\_Carbon = Embodied\_Carbon \times Condition\_Factor \times BYOD\_Attribution\_Factor $$

| Laptop Manufacturer and Model | PCF Data Sheet (or approx. equivalent) | Product Carbon Footprint kgCO<sub>2</sub>e | Embodied Carbon kgCO<sub>2</sub>e | Condition Factor |  BYOD? | Attribution Factor | GWF Attributable kgCO<sub>2</sub>e |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Apple 2021 MacBook Pro 16" M1 Pro | [Apple 16inch MacBook Pro](https://www.apple.com/environment/pdf/products/notebooks/16-inch_MacBook_Pro_PER_Oct2021.pdf) | 349 | 255 | New (100%) | Yes | 57% | 145 |
| Apple 2020 MacBook Pro 13" M1 | [Apple 13inch MacBook Pro](https://www.apple.com/environment/pdf/products/notebooks/13-inch_MacBookPro_PER_Nov2020.pdf) | 185 | 150 | New (100%) | No | 100% | 150 |
| Apple 2022 MacBook Air 13.6" M2 | [Apple MacBook Air M2](https://www.apple.com/environment/pdf/products/notebooks/M2_MacBook_Air_PER_June2022.pdf)| 147 | 115  | New (100%) | Yes | 57% | 66 |
| Apple 2023 MacBook Air 13.6" M2 | [Apple MacBook Air M2](https://www.apple.com/environment/pdf/products/notebooks/M2_MacBook_Air_PER_June2022.pdf)| 171 | 133  | New (100%) | Yes | 57% | 76 |
| **Laptop Total** | | | | | | | **437** |

With two refurbished and two new laptops, we previously calculated a total of 186 kgCO<sub>2</sub>e. If they were all purchased new, that total becomes 437 kgCO<sub>2</sub>e. That's a difference of **251 kgCO<sub>2</sub>e**.

> Purchasing refurbished hardware clearly brings significant carbon savings.

## Cloud Services

### What-if question

*What if GWF uses a cloud service provider that runs on Germany's regional grid rather than renewable energy sources?*

### Exploration

Let's revisit the [detailed estimation for Hetzner VMs operational emissions](operational#hetzner-vm-detail). The resulting detailed operational carbon emissions estimate for the four Hetzner VMs was 0.94 kgCO2e/year.

To estimate those emissions, we used a renewable energy carbon intensity value of 0.0195 kgCO<sub>2</sub>e/kWh which represents a mix of hydro and wind power. To model our what-if scenario we can replace this carbon intensity for the region's carbon intensity. 

For this we'll assume a replacement cloud service provider with a datacenter located in Germany using the local energy grid. Germany's grid carbon intensity is 0.364 kgCO<sub>2</sub>e/kWh, so:

$$ 48.05\ kWh/year \times 0.364\ kgCO_2e/kWh = 17.49\ kgCO_2e/year $$

Just by using a cloud service provider that does not commit to only using renewable energy sources, the operational emissions leap from less than **1 kgCO<sub>2</sub>e/year** to over **17 kgCO<sub>2</sub>e/year**. 

> It's a massive saving in carbon emissions for simply choosing a renewable energy cloud provider. When changes like this are made at scale, the impacts from emission reduction are likely to be significant.

---

[Next - Appendix](appendix)

---
