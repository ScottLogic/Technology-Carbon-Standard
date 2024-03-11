---
layout: category
title: Usage Carbon Emissions
permalink: /information/lifecycle/usage
---

# Usage Carbon Emissions 

Usage emissions refer to the [greenhouse gas (GHG)](/glossary#greenhouse-gases) emissions associated with the actual operation and use of a device or product over its lifetime. Usage carbon excludes emissions from the manufacturing, transportation, maintenance, consumables/replacements, and end-of-life disposal phases, which instead fall under [embodied carbon](/glossary#embodied-carbon). [Read more about life cycle emissions.](../lifecycle)

Factors influencing usage emissions include the device's energy efficiency, usage patterns, life span, and the [carbon intensity](/glossary#carbon-intensity) of the energy grid powering it.

The ICT sector's electricity consumption was estimated at 1,183 TWh in 2022, accounting for 4.7 percent of the world's total electricity use in 2021[^worldbank]. With the accelerating pace of digitalisation and the increasing reliance on ICT services and infrastructure, the energy demands of the sector are projected to rise further in the coming years. Minimising usage emissions through efficiency improvements and cleaner energy sources is therefore crucial, in conjunction with reducing embodied emissions, to comprehensively reduce the greenhouse gas impact of a product or device across its complete life cycle.

{% include linkedHeading.html heading="A high level approach to estimation" level=3 %}

At a high level, the energy consumption of a device can be estimated using the following formula:

$$ E = P \times t $$

Where
- E is energy consumption (kWh).
- P is average power draw (kW).
- t is time (hours).

The average power draw (P) can be obtained from industry averages, manufacturer data, or actual readings, in increasing order of precision but also complexity. Organisations should balance the need for precision with practical considerations when selecting the source for P, keeping in mind the goal of effectively directing technology optimisation efforts.

Estimated energy consumption can be combined with a [carbon intensity](/glossary#carbon-intensity) factor to estimate usage emissions using the following formula:

$$ U = E \times C_I $$

Where
- U is usage emissions (kg CO2e).
- E is energy consumption (kWh).
- C<sub>I</sub> is carbon intensity (kg CO2e per kWh).

For data centre infrastructure, such as server hardware, multiply the estimated usage emissions by the data centre's [Power Usage Effectiveness (PUE)](/glossary#power-usage-effectiveness-pue) to assess the overall climate impact beyond a sole focus on the hardware equipment itself. According to recent data, the global average PUE stood at 1.58 in 2023[^pue], indicating that for every unit of energy consumed by the IT equipment, an additional 0.58 units of energy were consumed by the data centre facility's overhead systems.

The per device estimates can be scaled up to give a total estimate of the usage emissions across an organisation's estate **per hardware model and location**. Combined, the formula becomes:

$$ U_T = N \times O $$

Where
- U<sub>T</sub> is the total usage emissions across the estate (kg CO2e).
- N is the number of devices of a particular hardware model operating in a particular location.
- U is the usage emissions for a single device (kg CO2e), estimated as above.

For example, a typical laptop may draw 30W. Assuming an employee's laptop runs for 8 hours a day over a working year (approximately 220 days), the annual energy consumption can be estimated as 0.03kW * 8 * 220 = 52.8 kWh per year. If the employee works in Europe, with an average carbon intensity factor of 0.328 kg CO2e per kWh (2022)[^ember], the estimated usage emissions from this device would be 52.8 * 0.328 = 17.3 kg CO2e per year. Scaling this up, if there are 50 employees using this laptop model in Europe, the total usage emissions across the estate for this device in this location would be approximately 17.3 * 50 = 866 kg CO2e.

The table below shows an example of aggregating emissions across different employee device types and locations using the high level approach above assuming business usage.

| Device | Model | Location | Device Count | Average Power (kW) | Estimated Device Energy Consumption (kWh/yr) |Estimated Total Energy Consumption (kWh/yr) | Carbon Intensity (kg CO2e/kWh) | Estimated Usage Emissions (kg CO2e/yr) |
|-------|-------|-------|-------|------------|------------|------------|------------|------------|
| Laptop  | Dell XPS 13 9310 | Europe | 500 | 0.015[^dellxps] | 26.4| 13,200 | 0.328 |4,330|
| Laptop  | Dell XPS 13 9310 | USA    | 300 | 0.015 | 26.4|7,920 | 0.410 |3,247|
| Monitor | HP Z24s | Europe | 1000 | 0.06[^hpz24s] | 105.6 |105,600 | 0.328 |34,637|
| **Total** ||||||**126,720**|| **42,214** |

While the above approach relies on key assumptions and does not account for the variability in device usage patterns, it is a useful starting point for identifying emissions improvement opportunities within an organisation's technology footprint. Continued refinement of this baseline estimate through more granular monitoring and profiling of actual usage would be required to enable rollout of more targeted carbon reduction initiatives.

Where specific device models or usage locations are unknown, average figures for the device category as a whole can be used instead. This sacrifices precision for practicality but maintains a view to direct technology optimisation efforts. The following subsections discuss how to obtain typical power draw figures for different types of hardware. 

{% include linkedHeading.html heading="Power Consumption of End-User and Employee Devices" level=4 %}

This considers the energy consumed by computers (desktops, laptops), monitors, printers, and other devices used by employees or end-users. Energy consumption varies among devices due to different power demands and usage patterns. Typically, smartphones consume less power than laptops, and laptops consume less power than desktops, as shown in the following table:

| Device             | Power Range (W)    | Average Power (W)  |
| ------------------ | ------------------ | ------------------ |
| Desktop            | 72 - 100           | 72.3               |
| Laptop             | 15 - 30            | 17.1               |
| Tablet             | 3 - 5.5            | 3                  |
| Smartphone         | 0.77 - 2           | 1                  |
| Monitor            | 17 - 30            | 30                 |
| Television         | 40 - 120           | 74                 |

*Power range and average power of devices, data compiled from Dimpact [^dimpact], Scope3 [^scope3], Fershad Irani [^fershad], and our own device energy use research.*

In the absence of more granular emissions data (such as [Product Carbon Footprint (PCF)](/glossary#product-carbon-footprint-pcf) data), these power figures can be used to estimate annual energy consumption and usage emissions for high-level approximations.

{% include linkedHeading.html heading="Power Consumption of Servers" level=5 %}

This section focuses on the energy consumed by on-premise servers, which can significantly contribute to an organisation's carbon footprint due to their high energy usage. Server hardware is highly customisable, resulting in large variances in power demands. Benchmarking tools, such as the [SPEC Power Benchmark](../../resources#spec-power-benchmark), can provide information on the typical power draw of different server hardware configurations. The SPEC Power benchmark evaluates the power and performance characteristics of servers, providing average power draw figures under varying levels of load. 

Here's an example of a [SPEC Power Benchmark summary](https://www.spec.org/power_ssj2008/results/res2019q2/power_ssj2008-20190311-00882.html) for an HPE ProLiant DL580 Gen10 server:

![specpower-benchmark-summary](/assets/images/specpower-benchmark-summary.PNG)

In the absence of more granular emissions data (such as [Product Carbon Footprint (PCF)](/glossary#product-carbon-footprint-pcf) data), these power figures can be used to estimate annual energy consumption and usage emissions for high-level approximations.

{% include linkedHeading.html heading="Using emissions data provided by manufacturers" level=3 %}

Many manufacturers choose to provide [life cycle emissions data](../lifecycle#life-cycle-emissions-data) such as information relating to the [Product Carbon Footprint (PCF)](/glossary#product-carbon-footprint-pcf) of a product. A PCF provides an estimate of the total greenhouse gas emissions associated with a product across its entire life cycle, including the proportional allocation of emissions to each distinct life cycle stage. PCF data can be used to derive usage emissions resulting from a device.

Usage carbon emissions can vary widely between different device types, as illustrated below:

![usage-carbon](/assets/images/usage-carbon.png)

*Source: Dell Product Carbon Footprint (PCF) documents for an example model of Laptop[^laptop], Desktop[^desktop], Monitor[^monitor], and Server[^server].*

Servers can be associated with high usage emissions compared to employee or end-user devices like laptops or smartphones. This is largely due to higher power consumption associated with more powerful processors, large amounts of RAM, and multiple hard drives to store and process data, as well as more continuous usage patterns.

{% include linkedHeading.html heading="Typical Energy Consumption (TEC)" level=4 %}

When providing PCF data, manufacturers often include assumptions and inputs used in the methodology. With regards to usage emissions, one such assumption to note is the [Typical Energy Consumption (TEC)](/glossary#typical-energy-consumption-tec) figure. TEC is an estimate of a device's expected annual energy consumption based on standard usage patterns. For devices like desktops, laptops, and smartphones, TEC is based on standard household usage. The TEC figure can be used in place of the estimated annual energy consumption figure approximated through the high-level approach discussed earlier. 

It's important to note that for employee devices, TEC may underestimate energy consumption compared to actual business usage patterns, where devices are typically used for longer durations and more intensive workloads. Therefore, using TEC in subsequent estimations of emissions arising from business operations could result in lower emissions estimates than expected. 

To ensure accurate and comparable emissions estimates across all hardware assets, it is recommended to clarify the assumptions made by manufacturers. Using consistent data sources and transparency over methodology is crucial.

{% include linkedHeading.html heading="Laptop" level=4 %}

Consider the [PCF for a Dell XPS 13 9310 Laptop](https://www.delltechnologies.com/asset/en-us/products/laptops-and-2-in-1s/technical-support/xps-13-9310.pdf). This is the same example model considered in the [embodied emissions](embodied#laptop) section. Refer to this section for further detail on the life cycle emissions breakdown.

Dell estimates the total carbon footprint of this laptop to be approximately 322 kg CO2e over its 4-year life time. Of this, 86.1% (277 kg CO2e) is attributed to embodied emissions (manufacturing, transportation, and end-of-life), while 13.9% (45 kg CO2e) is attributed to usage emissions. Amortising the usage emissions over the expected 4-year life span, the annual usage emissions can be allocated as approximately 11 kg CO2e per year.

However, employing the [high-level approach](usage#a-high-level-approach-to-estimation) discussed earlier yields a different result. Assuming business usage (8 hours a day) and a typical power draw of 15W[^dellxps], the estimated annual energy consumption is 26.4 kWh. Dell's PCF assumes Europe as usage location. Using an average [carbon intensity](/glossary#carbon-intensity) factor for Europe (0.328 kg CO2e per kWh in 2022)[^ember], this translates to approximately 8.66 kg CO2e of annual usage emissions per device.

The Dell PCF documentation states a Typical Energy Consumption (TEC) of 21.43 kWh per year for this laptop model. As discussed, this figure may be lower than expected of business usage, and more typical of standard household usage. Using this TEC figure in the high-level approach as above would result in an annual usage emissions estimate of approximately 7 kg CO2e per device.

The discrepancies between the different estimation approaches and the PCF data highlights the impact of using different assumptions and data sources when estimating usage emissions. It underscores the importance of cross-referencing values and clarifying assumptions made by manufacturers to ensure accurate and consistent emissions reporting.

{% include linkedHeading.html heading="Server" level=4 %}

Consider the [PCF for a HPE ProLiant DL380 Gen10 server](https://www.hpe.com/psnow/doc/a50004545enw). This is the same example model considered in the [embodied emissions](embodied#server) section. Refer to this section for further detail on the life cycle emissions breakdown.

The total carbon footprint varies significantly, ranging from approximately 2,410 kg CO2e for a base server operating in Europe to approximately 13,402 kg CO2e for a performance server operating in Japan.

In contrast to employee and end-user devices such as laptops or smartphones, usage (usage emissions) accounts for the largest share of a server's total life cycle emissions. For this server, usage emissions range from 56.7% for a base server operating in Europe to 84.6% for a performance server operating in Japan. 

The variation in usage emissions can be attributed to several factors:
1. Utilisation rates: The PCF assumes a 30% utilisation rate, which may differ from actual organisational usage patterns.
2. [Carbon intensity](/glossary#carbon-intensity) of electricity: The carbon intensity of the electricity grid at the operating location significantly impacts the emissions. Typically, carbon intensity is lower in Europe compared to Asia, contributing to the smaller proportion of usage emissions for servers operating in Europe versus Japan.
3. Power Usage Effectiveness (PUE): The PCF incorporates PUE data from industry sources to account for the energy consumption of supporting infrastructure (cooling, power distribution, etc.) in data centres.

Consider a mainstream server operating in the United States. The total product carbon footprint is approximately 5,657 kg CO2e. Of this, 69.5% (3,932 kg CO2e) is attributed to usage emissions. Amortising the usage emissions over the expected 4-year life span, the annual usage emissions can be allocated as approximately 983 kg CO2e per year.

The PCF assumes an annual Typical Energy Consumption (TEC) value of 1,605 kWh for this server model, based on modelling using the HPE Power Advisor tool and assuming 30% utilisation, 24/7 operation, and PUE values from industry sources.

Consider the server operates at a higher utilisation than assumed by the manufacturer. Assuming a linear relationship between load and utilisation (which does not always hold true), the [SPEC Power benchmark summary](https://www.spec.org/power_ssj2008/results/res2018q3/power_ssj2008-20180828-00850.html) for a similar mainstream HPE ProLiant DL380 Gen10 server suggests an average power draw of 237W. Using the high-level approach as discussed above, and assuming 24/7 operation, this results in an estimated annual energy consumption of approximately 2,076 kWh. This is higher than the quoted TEC, which is to be expected due to higher utilisation.

Consider this server is actually operating in Europe in a data centre with a PUE of 1.6[^pue]. Using an average [carbon intensity](/glossary#carbon-intensity) factor for Europe (0.328 kg CO2e per kWh in 2022)[^ember], annual usage emissions can be estimated to be approximately 1,089 kg CO2e per year. 

The variability between the estimates highlights the impact of using different assumptions and data sources when estimating usage emissions. This variation emphasises the need to clearly understand the assumptions made by manufacturers in order to ensure emissions reporting is accurate and consistent.

## References

[^dimpact]: [Dimpact; Methodology Statement](https://dimpact.org/publications)
[^scope3]: [Scope3; Consumer Devices](https://methodology.scope3.com/consumer_devices)
[^fershad]: [Fershad Irani; Thinking about a way to estimate website energy use](https://methodology.scope3.com/consumer_devices)
[^urban]: Urban, Bryan & Roth, Kurt & Singh, Mahendra & Howes, Duncan. (2019). [Residential Consumer Electronics Energy Consumption in the United States in 2017](https://www.researchgate.net/publication/335911295_Residential_Consumer_Electronics_Energy_Consumption_in_the_United_States_in_2017). 10.2760/667696.
[^worldbank]: [World Bank; Measuring the Emissions & Energy Footprint of the ICT Sector](https://documents1.worldbank.org/curated/en/099121223165540890/pdf/P17859702a98880540a4b70d57876048abb.pdf)
[^laptop]: [XPS 13 9310 PCF datasheet (delltechnologies.com)](https://www.delltechnologies.com/asset/en-gb/products/laptops-and-2-in-1s/technical-support/xps-13-9310.pdf)
[^desktop]: [OptiPlex 7090 Tower PCF Datasheet (delltechnologies.com)](https://www.delltechnologies.com/asset/en-gb/products/desktops-and-all-in-ones/technical-support/optiplex-7090-tower-pcf-datasheet.pdf)
[^monitor]: [P2422H Monitor PCF datasheet (delltechnologies.com)](https://www.delltechnologies.com/asset/en-gb/products/electronics-and-accessories/technical-support/p2422h-monitor-pcf-datasheet.pdf)
[^server]: [carbon-footprint-poweredge-r640.pdf (dell.com)](https://i.dell.com/sites/csdocuments/CorpComm_Docs/en/carbon-footprint-poweredge-r640.pdf)
[^hpz24s]: [HP Z24s Product Specifications](https://support.hp.com/us-en/product/product-specs/hp-z24s-23.8-inch-ips-uhd-display/7155481)
[^dellxps]: [Dell XPS 13 9310 Specifications](https://www.dell.com/support/manuals/en-uk/xps-13-9310-laptop/xps-13-9310-setup-and-specifications/processor?guid=guid-b426df85-6237-4365-b1fc-c3bb6e190257&lang=en-us)
[^ember]:[Ember Climate - Europe](https://ember-climate.org/countries-and-regions/regions/europe/)
[^pue]:[Uptime Institute; Global PUEs — are they going anywhere?](https://journal.uptimeinstitute.com/global-pues-are-they-going-anywhere/)