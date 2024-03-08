---
layout: category
title: Embodied Carbon Emissions
permalink: /information/lifecycle/embodied
---

# Embodied Carbon Emissions

Embodied carbon refers to the emissions associated with the manufacture, transportation, installation, maintenance and end-of-life of a device or product. Embodied carbon excludes emissions associated with the usage of a device or product, which instead falls under [operational emissions](/glossary#operational-carbon). [Read more about life cycle emissions.](../lifecycle)

Technology hardware can be associated with large embodied carbon emissions due to resource-intensive electronics production and complex global supply chains. In 2021, the World Economic Forum (WEF) reported that 77% of greenhouse gas (GHG) emissions from the electronics industry are attributed to the supply chain, including raw materials mining, manufacture, assembly and transportation of the finished product. Supply-chain decarbonisation presents a huge opportunity to reduce climate impacts. Notably, 35% of supply-chain emissions could be abated through renewable power, and efficiency improvements could further reduce emissions by ~20%[^WEF]. 

End-of-life processes like reuse, recycling and disposal contribute a relatively small portion of a product's embodied carbon emissions compared to the supply chain. Manufacturers typically provide expected life spans for devices, ranging from 3 to 5 years in most cases. Extending a device's life span can reduce the annual or [amortized](/glossary#amortisation) embodied carbon emissions. However, factors like market demand for newer technology, built-in obsolescence, performance requirements and non-repairable design often limit device life spans, counteracting potential carbon savings.

Focusing carbon reduction efforts on operational emissions only fails to capture the full carbon footprint. While difficult to quantify, considering embodied carbon emissions is critical for comprehensive carbon accounting and driving responsible procurement and development of lower-impact technologies.

{% include linkedHeading.html heading="A high level approach to estimation" level=3 %}

The [ratio of embodied carbon to operational carbon](../lifecycle#embodied-vs-operational-carbon) varies across different device types. 
In the absence of more granular emissions data (such as [Product Carbon Footprint (PCF)](/glossary#product-carbon-footprint-pcf) data), industry-wide ratios can be applied to estimated operational emissions to approximate embodied emissions. Typically, it is easier to [estimate operational emissions at a high level](operational#a-high-level-approach-to-estimation). 

$$ C_E = C_O \times \frac{P_E}{P_O} $$

Where
- C<sub>E</sub> is embodied carbon (kg CO2e).
- C<sub>O</sub> is operational carbon (kg CO2e).
- P<sub>E</sub> is the embodied carbon proportion (%).
- P<sub>O</sub> is the operational carbon proportion (%).

When employing this approach, using annual operational emissions will provide an estimate of amortised embodied emissions, whereas leveraging total operational emissions spanning the device's expected life span will yield an approximation of the total embodied emissions. 

Consider a laptop with annual operational emissions of ~10 kg CO2 per year per device. Typically, operational emissions account for 20% of a laptop's life cycle emissions and embodied emissions account for 80%. Using this 80/20 ratio, the amortised embodied carbon can be approximated as four times the annual operational carbon, i.e., ~40 kg CO2e per year.  

It is important to emphasise this is a high level approach. Estimates may differ from those derived from manufacturer-provided PCF data, underscoring the importance of consistency and transparency when approximating emissions.

{% include linkedHeading.html heading="Using emissions data provided by manufacturers" level=3 %}

Many manufacturers choose to provide [life cycle emissions data](../lifecycle#life-cycle-emissions-data) such as information relating to the [Product Carbon Footprint (PCF)](/glossary#product-carbon-footprint-pcf) of a product. A PCF provides an estimate of the total greenhouse gas emissions associated with a product across its entire life cycle, including the proportional allocation of emissions to each distinct life cycle stage.  

Embodied carbon varies between different devices, as illustrated below:

![embodied-carbon](/assets/images/embodied-carbon.png)

*Source: Dell Product Carbon Footprint (PCF) documents for an example model of Laptop[^laptop], Desktop[^desktop], Monitor[^monitor] and Server[^server].*

The following examples look at PCF data for a laptop (employee or end-user device) and a server (on-premise infrastructure). 

{% include linkedHeading.html heading="Laptop" level=4 %}

Consider the [PCF for a Dell XPS 13 9310 Laptop](https://www.delltechnologies.com/asset/en-us/products/laptops-and-2-in-1s/technical-support/xps-13-9310.pdf). This is the same example model considered in the [operational emissions](operational#laptop) section.

![dell-pcf](/assets/images/dell-pcf.PNG)

Dell estimates the total carbon footprint of this laptop to be approximately 322 kg CO2e. The breakdown of emissions across the life cycle stages are summarised in the table below:

| Life Cycle Stage | Proportion (%) | Emissions (kg CO2e) |
|-----|-----|-----|
| Manufacturing | 81.4 | 262 |
| Transportation | 4.4 | 14 |
| Use | 13.9 | 45 |
| End-of-life | 0.3 |0.1 |

Manufacturing accounts for the largest share (81.4%), followed by usage (13.9%), with relatively small contributions from transportation (4.4%) and end-of-life (0.3%).

Splitting into embodied (manufacturing, transportation and end-of-life) and operational (usage) emissions:

| Life Cycle Emissions | Proportion (%) | Emissions (kg CO2e) |
|-----|-----|-----|
| Embodied | 86.1 | 277 |
| Operational | 13.9 | 45 |

The embodied-to-operational ratio of 86.1/13.9 (embodied being approximately six times larger than operational) deviates slighly from the typical 80/20 industry average for laptops mentioned previously in [embodied vs operational carbon](../lifecycle#embodied-vs-operational-carbon). Based on this manufacturer data, the embodied carbon per device is approximately 277 kg CO2e. 

![dell-pcf-assumptions](/assets/images/dell-pcf-assumptions.PNG)

The PCF document also outlines the key assumptions used. With the 4-year lifetime assumed by the manufacturer, embodied emissions can be [amortised](/glossary#amortisation) over the expected lifespan and allocated as approximately 69 kg CO2e per year. 

Interestingly, the PCF above has assumed an annual [typical energy consumption (TEC)](/glossary#typical-energy-consumption-tec) value of 21.43 kWh. As discussed in the [operational emissions](operational#typical-energy-consumption-tec) section, TEC is a means of estimating expected annual energy consumption of a product under standard usage, i.e. for a typical household. For employee devices, the stated TEC value may be an underestimate as hardware is likely to run for longer periods (8 hours a day). Considering business usage, a typical annual energy consumption may be estimated to be 26.4 kWh (see [operational emissions](operational#a-high-level-approach-to-estimation) for how this figure is derived). This would shift the percentage of emissions due to the use phase to approximately 17% as opposed to 13.9%, and upstream emissions down to approximately 83% from 85.5%. While this does not change the upstream emissions figure provided by the manufacturer (276 kg CO2e), it is useful to understand the constitution of a product's carbon footprint and how proportions can shift depending on various factors such as uptime.

{% include linkedHeading.html heading="Server" level=4 %}

Consider the [PCF for a HPE ProLiant DL380 Gen10 server](https://www.hpe.com/psnow/doc/a50004545enw). This is the same example model considered in the [operational emissions](operational#server) section.

![server-pcf-proportions](/assets/images/server-pcf-proportions.PNG)

The total carbon footprint varies significantly, ranging from approximately 2,410 kg CO2e for a base server operating in Europe to approximately 13,402 kg CO2e for a performance server operating in Japan.

Unlike employee or end-user devices such as laptops, server hardware can be highly customisable. The performance server, featuring more powerful CPUs, increased memory capacity, and higher energy consumption, results in a significantly higher carbon footprint across all usage locations – Europe, USA, and Japan. 

In contrast to employee and end-user devices such as laptops or smartphones, usage accounts for the largest share of emissions for servers, ranging from 56.7% for a base server operating in Europe to 84.6% for a performance server operating in Japan. Embodied emissions (primarily from manufacturing, with small contributions from transportation and end-of-life) range from 15.4% for a performance server in Japan to 43.3% for a base server in Europe of total lifecycle emissions. Transportation emissions are estimated based on product packaging weight, shipping mode, distance travelled and emissions intensity data, accounting for varying emissions associated with different transportation modes and routes based on the usage location.

The pie charts are also summarised in the table below. 

![server-pcf-amounts](/assets/images/server-pcf-amounts.PNG)

Consider a mainstream server operating in the United States. The total product carbon footprint is approximately 5,657 kg CO2e. 

Splitting into embodied (manufacturing, transportation and end-of-life) and operational (usage) emissions:

| Life Cycle Emissions | Proportion (%) | Emissions (kg CO2e) |
|-----|-----|-----|
| Embodied | 30.5 | 1,725 |
| Operational | 69.5 | 3,932 |

The embodied-to-operational ratio of 30.5/69.5 (operational being just over two times larger than embodied) deviates slighly from the typical 20/80 industry average for servers mentioned previously in [embodied vs operational carbon](../lifecycle#embodied-vs-operational-carbon). Based on this manufacturer data, the embodied carbon per this device is approximately 1,725 kg CO2e. 

![server-pcf-inputs](/assets/images/server-pcf-inputs.PNG)

The document outlines the key assumptions used in the calculation of PCF for this server. With the 4-year lifetime assumed by the manufacturer, upstream emissions can be [amortised](/glossary#amortisation) over the expected lifespan and allocated as approximately 431 kg CO2e per year. 

## References

[^WEF]: [Net-Zero Challenge: The supply chain opportunity, World Economic Forum, Jan. Online, 2021](https://www.weforum.org/reports/net-zero-challenge-the-supply-chain-opportunity/)
[^laptop]: [XPS 13 9310 PCF datasheet (delltechnologies.com)](https://www.delltechnologies.com/asset/en-gb/products/laptops-and-2-in-1s/technical-support/xps-13-9310.pdf)
[^desktop]: [OptiPlex 7090 Tower PCF Datasheet (delltechnologies.com)](https://www.delltechnologies.com/asset/en-gb/products/desktops-and-all-in-ones/technical-support/optiplex-7090-tower-pcf-datasheet.pdf)
[^monitor]: [P2422H Monitor PCF datasheet (delltechnologies.com)](https://www.delltechnologies.com/asset/en-gb/products/electronics-and-accessories/technical-support/p2422h-monitor-pcf-datasheet.pdf)
[^server]: [carbon-footprint-poweredge-r640.pdf (dell.com)](https://i.dell.com/sites/csdocuments/CorpComm_Docs/en/carbon-footprint-poweredge-r640.pdf)