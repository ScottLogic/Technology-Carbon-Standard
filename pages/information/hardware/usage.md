---
layout: explore
title: Usage Carbon Emissions
permalink: /information/lifecycle/usage
---

# Hardware Usage Carbon Emissions 

Usage emissions refer to the [greenhouse gas (GHG)](/glossary#greenhouse-gases-ghgs) emissions associated with the actual operation and use of a device or product over its lifetime. Usage carbon excludes emissions from the manufacturing, transportation, maintenance, consumables/replacements, and end-of-life disposal phases, which instead fall under [embodied carbon](/glossary#embodied-carbon). [Read more about life cycle emissions.](../lifecycle)

Factors influencing usage emissions include the device's energy efficiency, usage patterns, life span, and the [carbon intensity](/glossary#carbon-intensity) of the energy grid powering it.

The ICT sector's electricity consumption was estimated at 1,183 TWh in 2022, accounting for 4.7 percent of the world's total electricity use in 2021[^worldbank]. With the accelerating pace of digitalisation and the increasing reliance on ICT services and infrastructure, the energy demands of the sector are projected to rise further in the coming years. Minimising usage emissions through efficiency improvements and cleaner energy sources is therefore crucial, in conjunction with reducing embodied emissions, to comprehensively reduce the greenhouse gas impact of a product or device across its complete life cycle.

{% include linkedHeading.html heading="A High-Level Approach for Estimating Usage Emissions" level=2 %}

At a high level, the energy consumption of a device can be estimated using the following formula:

$$ E = P \times t $$

Where
- E is energy consumption (kWh).
- P is average power draw (kW).
- t is time i.e. duration of usage (hours).

The average power draw (P) can be obtained from industry averages, manufacturer data, or actual readings, in increasing order of precision but also complexity. Organisations should balance the need for precision with practical considerations when selecting the source for P, keeping in mind the goal of effectively directing technology optimisation efforts.

Estimated energy consumption can be combined with a [carbon intensity](/glossary#carbon-intensity) factor to estimate usage emissions using the following formula:

$$ U = E \times C_I $$

Where
- U is usage emissions (kg CO2e).
- E is energy consumption (kWh).
- C<sub>I</sub> is carbon intensity (kg CO2e per kWh).

For data centre infrastructure, such as server hardware, multiply the estimated usage emissions by the data centre's [Power Usage Effectiveness (PUE)](/glossary#power-usage-effectiveness-pue) to assess the overall climate impact beyond a sole focus on the hardware equipment itself. According to recent data, the global average PUE stood at 1.58 in 2023[^pue], indicating that for every unit of energy consumed by the IT equipment, an additional 0.58 units of energy were consumed by the data centre facility's overhead systems.

The per device estimates can be scaled up to give a total estimate of the usage emissions across an organisation's estate **per hardware model and location**. Combined, the formula becomes:

$$ U_T = N \times U $$

Where
- U<sub>T</sub> is the total usage emissions (kg CO2e).
- N is the number of devices of a particular hardware model operating in a particular location.
- U is the usage emissions for a single device (kg CO2e), estimated as above.

While this approach relies on key assumptions and does not account for the variability in device usage patterns, it is a useful starting point for identifying emissions improvement opportunities within an organisation's technology footprint. Continued refinement of this baseline estimate through more granular monitoring and profiling of actual usage would be required to enable rollout of more targeted carbon reduction initiatives.

[See worked examples.](#worked-examples)

{% include linkedHeading.html heading="Using Manufacturer Data for Estimating Usage Emissions" level=2 %}

Many manufacturers choose to provide life cycle emissions data such as information relating to the [Product Carbon Footprint (PCF)](/glossary#product-carbon-footprint-pcf) of a product or device. [Read more about life cycle emissions data.](../lifecycle#life-cycle-emissions-data)

Typically, PCF documentation breaks down the total carbon footprint of a product or device into life cycle stages: manufacturing, transportation, use, and end-of-life. Reported use or usage stage emissions estimates often represent lifetime emissions; annual contributions can be estimated based on the assumed device lifespan outlined in the PCF.

Usage carbon varies between different devices, as illustrated by the following example:

![usage-carbon](/assets/images/usage-carbon.png)

*Source: Dell Product Carbon Footprint (PCF) documents for an example model of Laptop[^laptop], Desktop[^desktop], Monitor[^monitor], and Server[^server].*

Servers can be associated with high usage emissions compared to devices like laptops or smartphones. This is largely due to higher power consumption associated with more powerful processors, large amounts of RAM, and multiple hard drives to store and process data, as well as more continuous usage patterns. Typically, server usage carbon emissions contribute the larger portion of their overall carbon footprint. In contrast, for user devices like laptops and desktops, embodied carbon forms a larger component than usage carbon. [Read more about embodied vs usage carbon emissions.](../lifecycle#embodied-vs-usage-carbon)

{% include linkedHeading.html heading="Typical Energy Consumption (TEC)" level=3 %}

When providing PCF data, manufacturers should include the assumptions and inputs used in the methodology. With regards to usage emissions, one such assumption of note is the [Typical Energy Consumption (TEC)](/glossary#typical-energy-consumption-tec) figure. TEC is an estimate of a device's expected annual energy consumption based on standard usage patterns. For devices like desktops, laptops, and smartphones, TEC is based on standard household usage. For servers, the estimation of TEC relies on several assumptions, including server utilisation, operational duration, and PUE of the data centre. 

The TEC figure can be used in place of the estimated annual energy consumption figure approximated through the [high-level approach discussed earlier](#a-high-level-approach-for-estimating-usage-emissions). However, it's important to note that in some cases TEC may underestimate energy consumption compared to actual business usage patterns. This may stand for employee devices, where devices are typically used for longer durations (for example, 8 hours a day), or for servers operating at higher average utilisation levels than those assumed in the TEC calculations. Therefore, using TEC in subsequent estimations of emissions arising from business operations could result in lower emissions estimates than expected. 

To ensure accurate and comparable emissions estimates across all hardware assets, it is recommended to clarify the assumptions made by manufacturers. Using consistent data sources and transparency over methodology is crucial.

{% include linkedHeading.html heading=" Worked Examples" level=2 %}

[Click here to see a worked example of estimating usage emissions for a laptop.](../lifecycle/example/employee#usage-carbon-emissions)

[Click here to see a worked example of estimating usage emissions for a server.](../lifecycle/example/server#usage-carbon-emissions)

## References

[^worldbank]: [World Bank; Measuring the Emissions & Energy Footprint of the ICT Sector](https://documents1.worldbank.org/curated/en/099121223165540890/pdf/P17859702a98880540a4b70d57876048abb.pdf)
[^laptop]: [Dell; XPS 13 9310 PCF Datasheet](https://www.delltechnologies.com/asset/en-gb/products/laptops-and-2-in-1s/technical-support/xps-13-9310.pdf)
[^desktop]: [Dell; OptiPlex 7090 Tower PCF Datasheet](https://www.delltechnologies.com/asset/en-gb/products/desktops-and-all-in-ones/technical-support/optiplex-7090-tower-pcf-datasheet.pdf)
[^monitor]: [Dell; P2422H Monitor PCF Datasheet](https://www.delltechnologies.com/asset/en-gb/products/electronics-and-accessories/technical-support/p2422h-monitor-pcf-datasheet.pdf)
[^server]: [Dell; PowerEdge R640 PCF Datasheet](https://i.dell.com/sites/csdocuments/CorpComm_Docs/en/carbon-footprint-poweredge-r640.pdf)
[^pue]:[Uptime Institute; Global PUEs — are they going anywhere?](https://journal.uptimeinstitute.com/global-pues-are-they-going-anywhere/)