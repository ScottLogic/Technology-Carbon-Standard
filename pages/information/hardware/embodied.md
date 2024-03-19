---
layout: explore
title: Embodied Carbon Emissions
permalink: /information/lifecycle/embodied
---

# Hardware Embodied Carbon Emissions

Embodied carbon refers to the emissions associated with the manufacture, transportation, installation, maintenance, and end-of-life of a device or product. Embodied carbon excludes emissions associated with the usage of a device or product, which instead falls under [usage carbon](/glossary#usage-carbon). [Read more about life cycle emissions.](../lifecycle)

Technology hardware can be associated with large embodied carbon emissions due to resource-intensive electronics production and complex global supply chains. In 2021, the World Economic Forum (WEF) reported that 77% of greenhouse gas (GHG) emissions from the electronics industry are attributed to the supply chain, including raw materials mining, manufacture, assembly, and transportation of the finished product. Supply-chain decarbonisation presents a huge opportunity to reduce climate impacts. Notably, 35% of supply-chain emissions could be abated through renewable power, and efficiency improvements could further reduce emissions by ~20%[^WEF]. 

End-of-life processes like reuse, recycling, and disposal contribute a relatively small portion of a product's embodied carbon emissions compared to the supply chain. Manufacturers typically provide expected life spans for devices, ranging from 3 to 5 years in most cases. Extending a device's life span can reduce the annual or [amortised](/glossary#amortisation) embodied carbon emissions. However, factors such as market demand for newer technology, built-in obsolescence, performance requirements, and non-repairable design often limit device life spans, impeding potential carbon savings.

Focusing carbon reduction efforts on only usage emissions fails to capture the full carbon footprint. While difficult to quantify, considering embodied carbon emissions is critical for comprehensive carbon accounting and driving responsible procurement and development of lower-impact technologies.

{% include linkedHeading.html heading="A High-Level Approach for Estimating Embodied Emissions" level=2 %}

The [ratio of embodied carbon to usage carbon](../lifecycle#embodied-vs-usage-carbon) varies across different device types. 
In the absence of more granular emissions data (such as [Product Carbon Footprint (PCF)](/glossary#product-carbon-footprint-pcf) data), industry-wide ratios can be applied to estimated usage emissions to approximate embodied emissions. Typically, it can be easier to [estimate usage emissions at a high level](usage#a-high-level-approach-for-estimating-usage-emissions). 

With these ratios and usage carbon data, the following formula can be used to estimate embodied carbon:

$$ C_E = C_U \times \frac{P_E}{P_U} $$

Where
- C<sub>E</sub> is embodied carbon (kg CO2e).
- C<sub>U</sub> is usage carbon (kg CO2e).
- P<sub>E</sub> is the embodied carbon proportion (%).
- P<sub>U</sub> is the usage carbon proportion (%).

When employing this approach, using annual usage emissions will provide an estimate of amortised embodied emissions, whereas leveraging total usage emissions spanning the device's expected life span will yield an approximation of the total embodied emissions. 

It is important to emphasise this is a high-level approach. In reality, ratios can vary considerably depending on factors such as hardware specifications, manufacturing processes, usage patterns, and the device's life span. Estimates may differ from those derived from manufacturer-provided PCF data, underscoring the importance of consistency and transparency when approximating emissions.

[See worked examples.](#worked-examples)

{% include linkedHeading.html heading="Using Manufacturer Data for Estimating Embodied Emissions" level=2 %}

Many manufacturers choose to provide life cycle emissions data such as information relating to the [Product Carbon Footprint (PCF)](/glossary#product-carbon-footprint-pcf) of a product or device. [Read more about life cycle emissions data.](../lifecycle#life-cycle-emissions-data)

Typically, PCF documentation breaks down the total carbon footprint of a product or device into life cycle stages: manufacturing, transportation, use, and end-of-life. An embodied carbon estimate can be derived by combining the emissions estimates not attributable to the use stage (typically manufacturing, transportation, and end-of-life emissions). Reported figures typically represent lifetime emissions and can be [amortised](/glossary#amortisation) to estimate annual contributions based on the assumed device lifespan outlined in the PCF.

Embodied carbon varies between different devices, as illustrated by the following example:

![embodied-carbon](/assets/images/embodied-carbon.png)

*Source: Dell Product Carbon Footprint (PCF) documents for an example model of Laptop[^laptop], Desktop[^desktop], Monitor[^monitor], and Server[^server].*

Servers have relatively high embodied carbon emissions due to their complex and energy-intensive manufacturing processes, as well as the use of specialised components and materials. However, their usage carbon emissions still contribute the larger portion of their overall carbon footprint. In contrast, for user devices like laptops and desktops, embodied carbon forms a larger component than usage carbon. [Read more about embodied vs usage carbon emissions.](../lifecycle#embodied-vs-usage-carbon)

{% include linkedHeading.html heading=" Worked Examples" level=2 %}

[Click here to see a worked example of estimating embodied emissions for a laptop.](../lifecycle/example/employee#embodied-carbon-emissions)

[Click here to see a worked example of estimating embodied emissions for a server.](../lifecycle/example/server#embodied-carbon-emissions)

## References

[^WEF]: [Net-Zero Challenge: The supply chain opportunity, World Economic Forum, Jan. Online, 2021](https://www.weforum.org/reports/net-zero-challenge-the-supply-chain-opportunity/)
[^laptop]: [Dell; XPS 13 9310 PCF Datasheet](https://www.delltechnologies.com/asset/en-gb/products/laptops-and-2-in-1s/technical-support/xps-13-9310.pdf)
[^desktop]: [Dell; OptiPlex 7090 Tower PCF Datasheet](https://www.delltechnologies.com/asset/en-gb/products/desktops-and-all-in-ones/technical-support/optiplex-7090-tower-pcf-datasheet.pdf)
[^monitor]: [Dell; P2422H Monitor PCF Datasheet](https://www.delltechnologies.com/asset/en-gb/products/electronics-and-accessories/technical-support/p2422h-monitor-pcf-datasheet.pdf)
[^server]: [Dell; PowerEdge R640 PCF Datasheet](https://i.dell.com/sites/csdocuments/CorpComm_Docs/en/carbon-footprint-poweredge-r640.pdf)