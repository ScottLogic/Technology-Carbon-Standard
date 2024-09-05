---
layout: sideNavigation
title: Employee Hardware
permalink: /technology-categories/lifecycle/example/employee
redirect_from:
    - /information/lifecycle/example/employee
---

# Employee Hardware Example

To understand and estimate the carbon footprint associated with employee hardware like computers (desktops, laptops), monitors, and printers, organisations must consider both the usage emissions from powering the devices and the embodied emissions from manufacturing, transportation, and end-of-life across the full product life cycle.

[Read more about hardware life cycle emissions.](/technology-categories/lifecycle)

Building on the approaches discussed in the [usage carbon emissions](/technology-categories/lifecycle/usage) and [embodied carbon emissions](/technology-categories/lifecycle/embodied) sections, this page provides an example of estimating emissions from employee devices, using both industry averages and a specific laptop model to illustrate different approaches and considerations.

{% include linkedHeading.html heading="Usage Carbon Emissions" level=2 %}

Usage emissions refer to the [greenhouse gas (GHG)](/resources/glossary#greenhouse-gases-ghgs) emissions associated with operating a device over its lifetime. [Read more about usage emissions.](/technology-categories/lifecycle/usage)

{% include linkedHeading.html heading="Example Using a High-Level Approach for Estimating Usage Emissions" level=3 %}

The power consumption of user devices can vary considerably. Typically, smartphones draw less power than laptops, and laptops draw less power than desktops. The table below provides an overview of the power ranges and average power draw for common devices:

| Device             | Power Range (W)    | Average Power (W)  |
| ------------------ | ------------------ | ------------------ |
| Desktop            | 72 - 100           | 72.3               |
| Laptop             | 15 - 30            | 17.1               |
| Tablet             | 3 - 5.5            | 3                  |
| Smartphone         | 0.77 - 2           | 1                  |
| Monitor            | 17 - 30            | 30                 |
| Television         | 40 - 120           | 74                 |

*Power range and average power of devices, data compiled from Dimpact [^dimpact], Scope3 [^scope3], Fershad Irani [^fershad], and our own device energy use research.*

Consider the [high-level approach for estimating usage emissions](/technology-categories/lifecycle/usage#a-high-level-approach-for-estimating-usage-emissions) discussed in the usage carbon emissions section. Assuming a typical laptop draws 17.1 W and runs for 8 hours a day over a working year (220 days), the annual energy consumption can be estimated as $$ 0.0171\ kW \times 8 \times 220 = 30\ kWh $$. In Europe, with an average [carbon intensity](/resources/glossary#carbon-intensity) of 0.328 kg CO2e per kWh (2022)[^ember], the estimated annual usage emissions would be $$ 30 \times 0.328 = 9.87\ kg\ CO2e $$ per device. If there are 50 employees in Europe, each owning 1 laptop, the total annual usage emissions across the estate for this device in this location would be approximately $$ 9.87 \times 50 = 494\ kg\ CO2e $$.

When specific device models are known, manufacturer specifications and data sheets can be used to derive average power draw and estimate emissions more accurately. The table below shows an example of aggregating emissions across different employee device types and locations using this high-level approach above assuming business usage (8 hours a day for 220 days), with average power draw figures derived from referenced manufacturer specifications. 

| Device | Model | Location | Device Count | Average Power (kW) | Estimated Device Energy Consumption (kWh/yr) |Estimated Total Energy Consumption (kWh/yr) | Carbon Intensity (kg CO2e/kWh) | Estimated Usage Emissions (kg CO2e/yr) |
|-------|-------|-------|-------|----------|----------|----------|-----------|---------------|
| Laptop  | Dell XPS 13 9310 | Europe | 500 | 0.015[^dellxps] | 26.4| 13,200 | 0.328 |4,330|
| Laptop  | Dell XPS 13 9310 | USA    | 300 | 0.015 | 26.4|7,920 | 0.410 |3,247|
| Monitor | HP Z24s | Europe | 1000 | 0.06[^hpz24s] | 105.6 |105,600 | 0.328 |34,637|
| **Total** ||||||**126,720**|| **42,214** |

This approach does not account for the variability in device usage patterns, as many devices will spend time in different usage modes (off, idle, max) in reality. However, it is still a useful starting point for identifying emissions improvement opportunities within an organisation's technology footprint. Continued refinement of this baseline estimate through more granular monitoring and profiling of actual usage would be required to enable rollout of more targeted carbon reduction initiatives.

{% include linkedHeading.html heading="Example Using Manufacturer Data for Estimating Usage Emissions" level=3 %}

Many manufacturers choose to provide [life cycle emissions data](/technology-categories/lifecycle#life-cycle-emissions-data) such as information relating to the [Product Carbon Footprint (PCF)](/resources/glossary#product-carbon-footprint-pcf) of a product. A PCF provides an estimate of the total greenhouse gas emissions associated with a product across its entire life cycle, including the proportional allocation of emissions to each distinct life cycle stage. Consider the [PCF for a Dell XPS 13 9310 Laptop](https://www.delltechnologies.com/asset/en-us/products/laptops-and-2-in-1s/technical-support/xps-13-9310.pdf). 

![dell-pcf](/assets/images/dell-pcf.PNG)

Dell estimates the total carbon footprint of this laptop to be approximately 322 kg CO2e over its lifetime. The breakdown of emissions across the life cycle stages are summarised in the table below:

| Life Cycle Stage | Proportion (%) | Emissions (kg CO2e) |
|-----|-----|-----|
| Manufacturing | 81.4 | 262 |
| Transportation | 4.4 | 14 |
| Use | 13.9 | 45 |
| End-of-life | 0.3 |0.1 |

Manufacturing accounts for the largest share (81.4%), followed by usage (13.9%), with relatively small contributions from transportation (4.4%) and end-of-life (0.3%).

To break down the emissions into embodied (manufacturing, transportation, and end-of-life) and usage components, consider the following table:

| Life Cycle Emissions | Proportion (%) | Emissions (kg CO2e) |
|-----|-----|-----|
| Embodied | 86.1 | 277 |
| Usage | 13.9 | 45 |

The embodied-to-usage ratio of 86.1/13.9 (embodied being approximately six times larger than usage) deviates slightly from the typical 80/20 ratio for laptops mentioned previously in [embodied vs usage carbon](/technology-categories/lifecycle#embodied-vs-usage-carbon).

According to the PCF, usage emissions are estimated to be approximately 45 kg CO2e per device. 

![dell-pcf-assumptions](/assets/images/dell-pcf-assumptions.PNG)

The PCF document outlines the key assumptions used in approximating life cycle emissions of the device. With the 4-year lifetime assumed by the manufacturer, usage emissions can be [amortised](/resources/glossary#amortisation) over the expected lifespan and allocated as approximately 11 kg CO2e per year. 

A [Typical Energy Consumption (TEC)](/resources/glossary#typical-energy-consumption-tec) of 21.43 kWh per year for this laptop model has been assumed. As discussed in the [usage emissions section](/technology-categories/lifecycle/usage#typical-energy-consumption-tec), this figure may be lower than expected of business usage, and more typical of standard household usage. Employing the [high-level approach discussed earlier](#example-using-a-high-level-approach-for-estimating-usage-emissions), assuming business usage (8 hours a day) and a typical power draw of 15W[^dellxps], the estimated annual energy consumption is 26.4 kWh. Assuming the embodied emissions remain the same, this higher usage estimate would shift the percentage of emissions due to the use phase to approximately 17% as opposed to 13.9%, and embodied carbon emissions down to approximately 83% from 86.1%. This example demonstrates how a product's carbon footprint composition and proportions can vary depending on factors like usage patterns.

The PCF assumes Europe as usage location. Continuing with the high-level approach by applying an average [carbon intensity](/resources/glossary#carbon-intensity) factor for Europe (0.328 kg CO2e per kWh in 2022)[^ember] to the annual energy consumption estimate of 26.4 kWh translates to approximately 8.66 kg CO2e of annual usage emissions per device. Applying the same method to the manufacturer's TEC figure (21.43 kWh) would result in an annual usage emissions estimate of approximately 7 kg CO2e per device.

The discrepancies between the emissions estimates derived from the high-level approach and the PCF data highlights the impact of using different assumptions and data sources when estimating usage emissions. It underscores the importance of cross-referencing values and clarifying assumptions made by manufacturers to ensure accurate and consistent emissions reporting.

{% include linkedHeading.html heading="Embodied Carbon Emissions" level=2 %}

Embodied carbon refers to the emissions associated with the manufacture, transportation, installation, maintenance, and end-of-life of a device. [Read more about embodied carbon emissions.](/technology-categories/lifecycle/embodied)

{% include linkedHeading.html heading="Example Using a High-Level Approach for Estimating Embodied Emissions" level=3 %}

For devices such as laptops, embodied carbon typically accounts for around 80% of the total life cycle emissions, while usage emissions make up only 20%. Using this 80/20 ratio, [amortised](/resources/glossary#amortisation) embodied emissions can be approximated as four times the annual usage emissions. For example, the amortised embodied carbon for a laptop with annual usage emissions of 10 kg CO2e per year can be allocated as approximately 40 kg CO2e per year. [Read more about this high-level approach for estimating embodied emissions.](/technology-categories/lifecycle/embodied#a-high-level-approach-for-estimating-embodied-emissions)

However, this 80/20 ratio assumes a certain life span for the device. If the life span changes, the ratio will change as well. For instance, if the life span doubles from the baseline assumption, and assuming the same usage pattern, the ratio would shift to around 67/33 (67% embodied emissions and 33% usage emissions).  

The ratio can also vary considerably depending on other factors such as hardware specifications, manufacturing processes, and usage patterns. For example, see the [Product Carbon Footprint (PCF) breakdown for a Dell XPS 13 9310 Laptop](#example-using-manufacturer-data-for-estimating-usage-emissions) discussed previously. The embodied-to-usage ratio of 86.1/13.9 (embodied being approximately six times larger than usage) deviates slightly from the typical 80/20 ratio, and can vary further based on the assumptions employed such as usage duration and life span as discussed above. 

{% include linkedHeading.html heading="Example Using Manufacturer Data for Estimating Embodied Emissions" level=3 %}

Refer to the [Product Carbon Footprint (PCF) breakdown for a Dell XPS 13 9310 Laptop](#example-using-manufacturer-data-for-estimating-usage-emissions) discussed above. 

Based on this manufacturer data, the embodied carbon per device is approximately 277 kg CO2e. [Amortising](/resources/glossary#amortisation) the embodied emissions over the expected 4-year life span, the annual embodied carbon emissions can be allocated as approximately 69 kg CO2e per year.

As discussed in the [life cycle emissions data](/technology-categories/lifecycle#life-cycle-emissions-data) section, while reputable manufacturers derive PCFs using methodologies driven by international standards, their estimates come with caveats and significant variance. These values should not be treated as definitive due to uncertainties around device supply chains, operational contexts, and potential truncation errors, which can all vary depending on the specific device. 

## References

[^dimpact]: [Dimpact; Methodology Statement](https://dimpact.org/publications)
[^scope3]: [Scope3; Consumer Devices](https://methodology.scope3.com/consumer_devices)
[^fershad]: [Fershad Irani; Thinking about a way to estimate website energy use](https://fershad.com/writing/thinking-about-a-way-to-estimate-website-energy-use/)
[^urban]: Urban, Bryan & Roth, Kurt & Singh, Mahendra & Howes, Duncan. (2019). [Residential Consumer Electronics Energy Consumption in the United States in 2017](https://www.researchgate.net/publication/335911295_Residential_Consumer_Electronics_Energy_Consumption_in_the_United_States_in_2017). 10.2760/667696.
[^hpz24s]: [HP; Z24s Product Specifications](https://support.hp.com/us-en/product/product-specs/hp-z24s-23.8-inch-ips-uhd-display/7155481)
[^dellxps]: [Dell; XPS 13 9310 Product Specifications](https://www.dell.com/support/manuals/en-uk/xps-13-9310-laptop/xps-13-9310-setup-and-specifications/processor?guid=guid-b426df85-6237-4365-b1fc-c3bb6e190257&lang=en-us)
[^ember]:[Ember Climate; Europe Carbon Intensity 2022](https://ember-climate.org/countries-and-regions/regions/europe/)
