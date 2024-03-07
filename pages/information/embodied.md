---
layout: category
title: Embodied Carbon Emissions
permalink: /information/lifecycle/embodied
---

# Embodied Carbon Emissions

Embodied carbon refers to the emissions associated with the manufacture, transportation, installation, maintenance and end-of-life of a device or product. Embodied carbon excludes emissions associated with the operation and use of a device or product, which instead falls under the [operational carbon footprint](operational). 

Technology hardware can be associated with large embodied carbon emissions due to resource-intensive electronics production and complex global supply chains. In 2021, the World Economic Forum (WEF) reported that 77% of greenhouse gas (GHG) emissions from the electronics industry are attributed to the supply chain, including raw materials mining, manufacture, assembly and transportation of the finished product. Supply-chain decarbonisation presents a huge opportunity to reduce climate impacts. Notably, 35% of supply-chain emissions could be abated through renewable power, and efficiency improvements could further reduce emissions by ~20%[^WEF]. 

End-of-life processes like reuse, recycling and disposal contribute a relatively small portion of a product's embodied carbon emissions compared to the supply chain. While manufacturers provide expected life spans, extending a device's life span can reduce [amortized embodied carbon emissions](/glossary#amortisation). However, factors like market demand for newer technology, built-in obsolescence, performance requirements and unreparability often limit device life spans, counteracting potential carbon savings.

Focusing carbon reduction efforts on operational emissions only fails to capture the full carbon footprint. While difficult to quantify, considering embodied carbon emissions is critical for comprehensive carbon accounting and driving responsible procurement and development of lower-impact technologies.

{% include linkedHeading.html heading="A high level approach to estimation" level=3 %}

The [ratio of embodied carbon to operational carbon](../lifecycle#embodied-vs-operational-carbon) varies across different device types. While many manufacturers provide [Product Carbon Footprint (PCF)](/glossary#product-carbon-footprint-pcf) data, in its absence, such industry-wide ratios can be applied to estimated operational emissions to approximate embodied emissions. Typically, operational carbon is easier to estimate at a high level. 

$$ E_C = O_C \times \frac{E_P}{O_P} $$

Where
- E<sub>C</sub> is embodied carbon (kg CO2e).
- O<sub>C</sub> is operational carbon (kg CO2e).
- E<sub>P</sub> is the embodied carbon proportion (%).
- O<sub>P</sub> is the operational carbon proportion (%).

When employing this approach, using annual operational emissions will provide an estimate of amortised embodied emissions, whereas leveraging total operational emissions spanning the device's expected life span will yield an approximation of the total embodied emissions. 

Consider a laptop with annual operational emissions of ~10 kg CO2 per year per device. Typically, operational emissions account for 20% of a laptop's life cycle emissions and embodied emissions account for 80%. Using this 80/20 ratio, the amortised embodied carbon can be approximated as four times the annual operational carbon, i.e., ~40 kg CO2e per year.  

It is important to emphasise this is a high level approach. Estimates may differ from those derived from LCAs or manufacturer-provided PCF data, underscoring the importance of consistency and transparency when approximating emissions.

{% include linkedHeading.html heading="Using emissions data provided by manufacturers" level=3 %}

Many manufacturers choose to provide [life cycle emissions data](../lifecycle#life-cycle-emissions-data) such as information relating to the [Product Carbon Footprint (PCF)](/glossary#product-carbon-footprint-pcf) of a product. A PCF provides an estimate of the total greenhouse gas emissions associated with a product across its entire life cycle, including the proportional allocation of emissions to each distinct life cycle stage.  

Embodied carbon varies between different devices, as illustrated below:

![embodied-carbon](/assets/images/embodied-carbon.png)

*Source: Dell Product Carbon Footprint (PCF) documents for an example model of Laptop[^laptop], Desktop[^desktop], Monitor[^monitor] and Server[^server].*

The following examples look at PCF data for a laptop (employee or end-user device) and a server (on-premise infrastructure). 

{% include linkedHeading.html heading="Laptop" level=4 %}

Consider the [PCF for a Dell XPS 13 9310 Laptop](https://www.delltechnologies.com/asset/en-us/products/laptops-and-2-in-1s/technical-support/xps-13-9310.pdf). 

![dell-pcf](/assets/images/dell-pcf.PNG)

Dell estimates the total carbon footprint of this laptop to be ~322 kg CO2e. The pie chart shows the breakdown across the lifecycle stages, summarised in the table below:

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

The embodied-to-operational ratio of 86.1/13.9 (embodied being approximately six times larger than operational) deviates slighly from the typical 80/20 industry average for laptops mentioned previously in [operational vs. embodied ratios](../lifecycle#embodied-vs-operational-carbon). Based on this manufacturer data, the embodied carbon per device is ~277 kg CO2e. 

![dell-pcf-assumptions](/assets/images/dell-pcf-assumptions.PNG)

The document outlines the key assumptions used in the calculation of PCF for this laptop. With the 4-year lifetime assumed by the manufacturer, embodied emissions can be [amortised](/glossary#amortisation) over the expected lifespan and allocated as ~69 kg CO2e per year. 

Interestingly, the PCF above has assumed an annual typical energy consumption (TEC) value of 21.43 kWh. As discussed in the [operational emissions](operational#using-emissions-data-provided-by-manufacturers) section, TEC is a means of estimating expected annual energy consumption of a product under standard usage, i.e. for a typical household. For employee devices, the stated TEC value may be an underestimate as hardware is likely to run for longer periods (8 hours a day). Considering business usage, a typical annual energy consumption may be estimated to be 26.4 kWh (see [operational emissions](operational#using-emissions-data-provided-by-manufacturers) for how this figure is derived). This would shift the percentage of emissions due to the use phase to ~17% as opposed to 13.9%, and upstream emissions down to ~83% from 85.5%. While this does not change the upstream emissions figure provided by the manufacturer (~276 kg CO2e), it is useful to understand the constitution of a product's carbon footprint and its significance with regards to each life cycle phase.

{% include linkedHeading.html heading="Server" level=4 %}

Consider the [PCF for a HPE ProLiant DL380 Gen10 server](https://www.hpe.com/psnow/doc/a50004545enw). 

![server-pcf-proportions](/assets/images/server-pcf-proportions.PNG)

The total carbon footprint varies significantly, ranging from approximately 2,410 kg CO2e for a base server operating in Europe to approximately 13,402 kg CO2e for a performance server operating in Japan.

Unlike employee or end-user devices such as laptops, server hardware can be highly customisable. The performance server, featuring more powerful CPUs, increased memory capacity, and higher energy consumption, results in a significantly higher carbon footprint across all usage locations – Europe, USA, and Japan. 

In contrast to employee and end-user devices such as laptops or smartphones, usage accounts for the largest share of emissions for servers, ranging from 56.7% for a base server operating in Europe to 84.6% for a performance server operating in Japan. [Read more about usage (operational) emissions... ](!!!)

Embodied emissions (primarily from manufacturing, with small contributions from transportation and end-of-life) range from 15.4% for a performance server in Japan to 43.3% for a base server in Europe of total lifecycle emissions. Transportation emissions are estimated based on product packaging weight, shipping mode, distance travelled and emissions intensity data, accounting for varying emissions associated with different transportation modes and routes based on the usage location.

The pie charts are also summarised in the table below. 

![server-pcf-amounts](/assets/images/server-pcf-amounts.PNG)

Consider a mainstream server operating in the United States. The total product carbon footprint is approximately 5,657 kg CO2e. 

Splitting into embodied (manufacturing, transportation and end-of-life) and operational (usage) emissions:

| Life Cycle Emissions | Proportion (%) | Emissions (kg CO2e) |
|-----|-----|-----|
| Embodied | 30.5 | 1,725 |
| Operational | 69.5 | 3,932 |

The embodied-to-operational ratio of 30.5/69.5 (operational being just over two times larger than embodied) deviates slighly from the typical 20/80 industry average for servers mentioned previously in [operational vs. embodied ratios](../lifecycle#embodied-vs-operational-carbon). Based on this manufacturer data, the embodied carbon per this device is ~1,725 kg CO2e. 

![server-pcf-inputs](/assets/images/server-pcf-inputs.PNG)

The document outlines the key assumptions used in the calculation of PCF for this server. With the 4-year lifetime assumed by the manufacturer, upstream emissions can be [amortised](/glossary#amortisation) over the expected lifespan and allocated as ~431 kg CO2e per year. 

## References

[^WEF]: [Net-Zero Challenge: The supply chain opportunity, World Economic Forum, Jan. Online, 2021](https://www.weforum.org/reports/net-zero-challenge-the-supply-chain-opportunity/)
[^laptop]: [XPS 13 9310 PCF datasheet (delltechnologies.com)](https://www.delltechnologies.com/asset/en-gb/products/laptops-and-2-in-1s/technical-support/xps-13-9310.pdf)
[^desktop]: [OptiPlex 7090 Tower PCF Datasheet (delltechnologies.com)](https://www.delltechnologies.com/asset/en-gb/products/desktops-and-all-in-ones/technical-support/optiplex-7090-tower-pcf-datasheet.pdf)
[^monitor]: [P2422H Monitor PCF datasheet (delltechnologies.com)](https://www.delltechnologies.com/asset/en-gb/products/electronics-and-accessories/technical-support/p2422h-monitor-pcf-datasheet.pdf)
[^server]: [carbon-footprint-poweredge-r640.pdf (dell.com)](https://i.dell.com/sites/csdocuments/CorpComm_Docs/en/carbon-footprint-poweredge-r640.pdf)