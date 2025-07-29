---
layout: sideNavigation
title: Data Centre and Server Hardware
permalink: /technology-categories/lifecycle/example/server
redirect_from:
    - /information/lifecycle/example/server
---

# Data Centre and Server Hardware Example

To understand and estimate the carbon footprint associated with data centre hardware like servers, organisations must consider both the usage emissions from powering the infrastructure and the embodied emissions from manufacturing, transportation, and end-of-life across the full product life cycle.

[Read more about hardware life cycle emissions.](/technology-categories/lifecycle)

Building on the approaches discussed in the [usage carbon emissions](/technology-categories/lifecycle/usage) and [embodied carbon emissions](/technology-categories/lifecycle/embodied) sections, this page provides an example of estimating emissions from servers, using a specific server model to illustrate different approaches and considerations.

{% include linkedHeading.html heading="Usage Carbon Emissions" level=2 %}

Usage emissions refer to the [greenhouse gas (GHG)](/resources/glossary#greenhouse-gases-ghgs) emissions associated with operating a device over its lifetime. [Read more about usage emissions.](/technology-categories/lifecycle/usage)

{% include linkedHeading.html heading="Example Using a High-Level Approach for Estimating Usage Emissions" level=3 %}

Server hardware can be highly customisable, resulting in large variances in power demands. Benchmarking tools, such as the [SPEC Power benchmark](/resources#spec-power-benchmark), can provide information on the typical power draw of different server hardware configurations. The SPEC Power benchmark evaluates the power and performance characteristics of servers, providing average power draw figures under varying levels of load. 

Here's an example of a [SPEC Power benchmark summary](https://www.spec.org/power_ssj2008/results/res2018q3/power_ssj2008-20180828-00850.html) for an HPE ProLiant DL380 Gen10 server:

![spec-power-benchmark-summary](/assets/images/spec-power-benchmark-summary.PNG)

Using the [high-level approach for estimating usage emissions](/technology-categories/lifecycle/usage#a-high-level-approach-for-estimating-usage-emissions) discussed in the usage carbon emissions section, consider a server operating at an average load of 50% corresponding to an average power draw of 237 W as per the SPEC Power benchmark. Assuming it runs for 24 hours daily for a year, the annual energy consumption would be approximately $$ 0.237\ kW \times 24 \times 365 = 2,076\ kWh $$. If this server is operating in Europe, with an average [carbon intensity](/resources/glossary#carbon-intensity) factor of 0.328 kg CO2e per kWh (2022)[^ember], the estimated annual usage emissions would be $$ 2,076 \times 0.328 = 681\ kg\ CO2e $$ per device. For 10 such servers, the total annual usage emissions would be approximately $$ 681 \times 10 = 6,810\ kg\ CO2e $$. If these servers operate in a data centre with a [Power Usage Effectiveness (PUE)](/resources/glossary#power-usage-effectiveness-pue) of 1.6 (using a global average[^pue]), the annual usage emissions attributed to the data centre infrastructure would be approximately $$ 6,810 \times 1.6 = 10,895\ kg\ CO2e $$ (or approximately 1,090 kg CO2e per device).

This approach does not account for the variability in usage patterns but can still be a useful starting point for identifying emissions improvement opportunities within an organisation's technology footprint. Continued refinement of this baseline estimate through more granular monitoring and profiling of actual usage would be required to enable rollout of more targeted carbon reduction initiatives.

{% include linkedHeading.html heading="Example Using Manufacturer Data for Estimating Usage Emissions" level=3 %}

Many manufacturers choose to provide [life cycle emissions data](/technology-categories/lifecycle#life-cycle-emissions-data) such as information relating to the [Product Carbon Footprint (PCF)](/resources/glossary#product-carbon-footprint-pcf) of a product. A PCF provides an estimate of the total greenhouse gas emissions associated with a product across its entire life cycle, including the proportional allocation of emissions to each distinct life cycle stage. Consider the [PCF for a HPE ProLiant DL380 Gen10 server](https://www.hpe.com/psnow/doc/a50004545enw) (the same model as [discussed above](#example-using-a-high-level-approach-for-estimating-usage-emissions)). 

![server-pcf-proportions](/assets/images/server-pcf-proportions.PNG)

The total carbon footprint varies significantly, ranging from approximately 2,410 kg CO2e for a base server operating in Europe to approximately 13,402 kg CO2e for a performance server operating in Japan. Unlike many user devices such as laptops, server hardware can be highly customisable. The performance server, featuring more powerful CPUs, increased memory capacity, and higher energy consumption, results in a significantly higher carbon footprint across all usage locations – Europe, USA, and Japan. 

In contrast to user devices such as laptops or smartphones, usage accounts for the largest share of a server's total life cycle emissions. For this server, usage emissions range from 56.7% for a base server operating in Europe to 84.6% for a performance server operating in Japan. 

The variation in usage emissions can be attributed to several factors:
1. Utilisation rates: The PCF assumes a 30% utilisation rate, which may differ from actual usage patterns.
2. Carbon intensity of electricity: The carbon intensity of the electricity grid at the operating location significantly impacts the emissions. Typically, carbon intensity is lower in Europe compared to Asia, contributing to the smaller proportion of usage emissions for servers operating in Europe versus Japan.
3. Power Usage Effectiveness (PUE): The PCF incorporates PUE data from industry sources to account for the energy consumption of supporting infrastructure (cooling, power distribution, etc.) in data centres.

The pie charts are also summarised in the table below. 

![server-pcf-amounts](/assets/images/server-pcf-amounts.PNG)

Consider a mainstream server operating in the United States. The total product carbon footprint is approximately 5,657 kg CO2e over its lifetime. To break down the emissions into embodied (manufacturing, transportation, and end-of-life) and usage components, consider the following table:

| Life Cycle Emissions | Proportion (%) | Emissions (kg CO2e) |
|-----|-----|-----|
| Embodied | 30.5 | 1,726 |
| Usage | 69.5 | 3,931 |

The embodied-to-usage ratio of 30.5/69.5 (usage being just over twice embodied) deviates slightly from the typical 20/80 ratio for servers mentioned previously in [embodied vs usage carbon](/technology-categories/lifecycle#embodied-vs-usage-carbon). 

According to the PCF, usage emissions are estimated to be approximately 3,931 kg CO2e per device. 

![server-pcf-inputs](/assets/images/server-pcf-inputs.PNG)

The PCF document outlines the key assumptions used in approximating life cycle emissions of the device. With the 4-year lifetime assumed by the manufacturer, usage emissions can be [amortised](/resources/glossary#amortisation) over the expected lifespan and allocated as approximately 983 kg CO2e per year. 

A [Typical Energy Consumption (TEC)](/resources/glossary#typical-energy-consumption-tec) of 1,605 kWh per year for this mainstream server model has been assumed, based on modelling using the HPE Power Advisor tool and assuming 30% utilisation, 24/7 operation, and PUE values from industry sources. As discussed in the [usage emissions section](/technology-categories/lifecycle/usage#typical-energy-consumption-tec), this figure may be lower than expected if the server operates at higher average utilisation levels than those assumed in the TEC calculations, and may vary based on PUE of the data centre hosting the server infrastructure. 

Consider the server operates at a higher utilisation (50%) than has been assumed by the manufacturer (30%). Assuming a linear relationship between load and utilisation (note that this does not always hold true), the [SPEC Power benchmark summary](https://www.spec.org/power_ssj2008/results/res2018q3/power_ssj2008-20180828-00850.html) for a similar mainstream HPE ProLiant DL380 Gen10 server suggests an average power draw of 237W at 50% load. This is the same example as considered in the [high-level approach discussed earlier](#example-using-a-high-level-approach-for-estimating-usage-emissions), where annual energy consumption was estimated to be approximately 2,076 kWh based on 24/7 operation and 50% load. This is higher than the quoted TEC, which is to be expected due to higher utilisation. The same example earlier considered a server operating in Europe in a data centre with a PUE of 1.6[^pue], resulting in estimated annual usage emissions of approximately 1,090 kg CO2e per device. 

The variability between the emissions estimate derived from the high-level approach (1,090 kg CO2e per year) and the manufacturer's PCF data (983 kg CO2e per year) highlights the impact of using different assumptions and data sources when estimating usage emissions. This variation emphasises the need to clearly understand the assumptions made by manufacturers in order to ensure emissions reporting is accurate and consistent.

{% include linkedHeading.html heading="Embodied Carbon Emissions" level=2 %}

Embodied carbon refers to the emissions associated with the manufacture, transportation, installation, maintenance, and end-of-life of a device. [Read more about embodied carbon emissions.](/technology-categories/lifecycle/embodied)

{% include linkedHeading.html heading="Example Using a High-Level Approach for Estimating Embodied Emissions" level=3 %}

For servers, embodied carbon typically accounts for around 20% of the total life cycle emissions, while usage emissions make up 80%. Using this 20/80 ratio, [amortised](/resources/glossary#amortisation) embodied emissions can be approximated as a quarter of annual usage emissions. For example, the amortised embodied carbon for a server with annual usage emissions of 1,000 kg CO2e per year can be allocated as approximately 250 kg CO2e per year. [Read more about this high-level approach for estimating embodied emissions.](/technology-categories/lifecycle/embodied#a-high-level-approach-for-estimating-embodied-emissions)

However, this 20/80 ratio assumes a certain life span for the server. If the life span changes, the ratio will change as well. For instance, if the life span doubles from the baseline assumption, and assuming the same usage pattern, the ratio would shift to around 33/67 (33% embodied emissions and 67% usage emissions).

The ratio can also vary considerably depending on other factors such as hardware specifications, manufacturing processes, and usage patterns. For example, see the [Product Carbon Footprint (PCF) breakdown for a HPE ProLiant DL380 Gen10 server](#example-using-manufacturer-data-for-estimating-usage-emissions) discussed previously. The embodied-to-usage ratio of 30.5/69.5 (usage being just over two times larger than embodied) deviates slightly from the typical 20/80 ratio, and can vary further based on the assumptions employed such as utilisation and life span as discussed above.

{% include linkedHeading.html heading="Example Using Manufacturer Data for Estimating Embodied Emissions" level=3 %}

Refer to the [Product Carbon Footprint (PCF) breakdown for an HPE ProLiant DL380 Gen10 server](#example-using-manufacturer-data-for-estimating-usage-emissions) discussed above. 

Embodied emissions (primarily from manufacturing, with small contributions from transportation and end-of-life) range from 15.4% for a performance server in Japan to 43.3% for a base server in Europe of total lifecycle emissions. Transportation emissions are estimated based on product packaging weight, shipping mode, distance travelled, and emissions intensity data, accounting for varying emissions associated with different transportation modes and routes based on the usage location.

Consider a mainstream server operating in the United States. The total product carbon footprint is approximately 5,657 kg CO2e with 1,726 kg CO2e (30.5%) attributed to embodied carbon emissions. [Amortising](/resources/glossary#amortisation) these emissions over the expected 4-year life span, the annual embodied carbon emissions can be allocated as approximately 432 kg CO2e per year.

As discussed in the [life cycle emissions data](/technology-categories/lifecycle#life-cycle-emissions-data) section, while reputable manufacturers derive PCFs using methodologies driven by international standards, their estimates come with caveats and significant variance. These values should not be treated as definitive due to uncertainties around device supply chains, operational contexts, and potential truncation errors, which can all vary depending on the specific device. 

## References

[^ember]:[Ember Climate; Europe Carbon Intensity 2022](https://ember-climate.org/countries-and-regions/regions/europe/)
[^pue]:[Uptime Institute; Global PUEs — are they going anywhere?](https://journal.uptimeinstitute.com/global-pues-are-they-going-anywhere/)