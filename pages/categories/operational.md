---
layout: category
title: Operational Emissions
permalink: categories/operational
---

# Operational Emissions
Operational emissions encompass the greenhouse gases emitted from an organisation's own technology infrastructure and operations. These are categorised into three groups - On-Prem, Cloud, and Generator emissions (O, C and G) - based on the level of ownership and control an organisation has over the assets.

Understanding operational emissions allows organisations to quantify, monitor, and benchmark the climate impacts of their technology infrastructure and business operations. It enables setting emission reduction targets and strategies and facilitates compliance with current and emerging climate disclosure legislations. 

Emissions are further classified into direct and indirect sources:


{% include linkedHeading.html heading="Direct Emissions" level=2 %}

Direct emissions are a result of the organisation's direct consumption of grid-supplied electricity (Category O) or combustion of fossil fuels like diesel or natural gas for owned power generators (Category G). The organisation can directly measure and account for emissions from owned assets.

Category O (On-premise) emissions can be related to GHG Protocol Scope 2, while Category G (Generators) are GHG Protocol Scope 1.

{% include linkedHeading.html heading="Servers and Storage" level=3 %}
This concerns the energy consumed by on-premise servers and data centres. Servers and data centres can be major contributors to an organisation's carbon footprint due to their high energy usage. Energy consumption will differ between server hardware due to varying power demands. Factors that influence emissions include the number of servers, their efficiency and utilisation, and the carbon intensity of the operating location. 

Manufacturer data or benchmarking tools can provide information on the typical power draw of different server hardware. One such tool is the [SPECpower benchmark](https://www.spec.org/power_ssj2008/) which evaluates the power and performance characteristics of servers, providing average power draw figures under varying levels of load. Such power figures can be used in high level approximations for annual energy consumption and subsequently annual operational emissions. 

Here is an example of a [SPECpower benchmark summary](https://www.spec.org/power_ssj2008/results/res2019q2/power_ssj2008-20190311-00882.html) for a HPE ProLiant DL580 Gen10 server:

![specpower-benchmark-summary](/assets/images/specpower-benchmark-summary.PNG)

{% include linkedHeading.html heading="Networking Devices" level=3 %}
The energy consumed by networking devices such as:
- routers
- switches
- Wi-Fi access points

{% include linkedHeading.html heading="Employee Devices" level=3 %}
This considers the energy consumed by computers (desktops, laptops), monitors, printers and other devices used by employees. Energy consumption will differ between devices due to varying power demands and employee usage patterns. Typically, a smartphone uses less energy than a laptop and a laptop uses less energy than a desktop, as illustrated in the table below. The energy consumption of devices can be used to estimate the operational carbon emissions by considering the source of energy used to power or charge that device. To capture the full carbon footprint of a device, the embodied carbon also needs to be considered. This is discussed in the [upstream](upstream) and [downstream](downstream) emissions categories.

Power range and average power of devices, data compiled from Dimpact [^dimpact], Scope3 [^scope3] and Fershad Irani [^fershad] and our own device energy use research:

| Device             | Power Range (W)    | Average Power (W)  |
| ------------------ | ------------------ | ------------------ |
| Desktop            | 72 - 100           | 72.3               |
| Laptop             | 15 - 30            | 17.1               |
| Tablet             | 3 - 5.5            | 3                  | ? 20W ?
| Smartphone         | 0.77 - 2           | 1                  |
| Monitor            | 17 - 30            | 30                 |
| Television         | 40 - 120           | 74                 |

{% include linkedHeading.html heading="A high level approach to estimation" level=4 %}

At a high level, the annual energy consumption (kWh per year) of a device can be estimated using the following formula:

$$ Annual\ Energy\ Consumption\ (kWh/yr) = Average\ Power\ Draw\ (kW) \times Daily\ Uptime\ (hours) \times Annual\ Uptime\ (days) $$

For example, consider a Dell XPS 13 9310 laptop. This is the same model as used in the example in [upstream emissions](upstream). Manufacturers provide specifications for hardware models which often include a typical wattage figure. For this Dell model, the [specifications](https://www.dell.com/support/manuals/en-uk/xps-13-9310-laptop/xps-13-9310-setup-and-specifications/processor?guid=guid-b426df85-6237-4365-b1fc-c3bb6e190257&lang=en-us) suggest a processor wattage of 15W. Taking this wattage and considering a typical uptime of 8 hours a day over 220 days (a typical working year), annual energy consumption can be estimated to be

$$ 0.015\ kW \times 8\ hours \times 220\ days = 26.4\ kWh/yr $$

per device.

Once an estimation of energy consumption has been obtained, the following formula can be used to estimate operational emissions:

$$ Annual\ Operational\ Emissions\ (kg\ CO2e/yr) = Annual\ Energy\ Consumption\ (kWh/yr) \times \\ Carbon\ Intensity\ (kg\ CO2e/kWh) $$

Consider running the device above in Europe, using the 2022 average [carbon intensity](/glossary#carbon-intensity) of 328 g CO2e per kWh. Applying the above formula, annual operational emissions can be estimated to be

$$ 26.4\ kWh/yr \times 0.328\ kg\ CO2e/kWh = 8.66\ kg\ CO2e/yr $$

per device.

The per device estimates can be scaled up to give a total estimate of the operational emissions across an organisation's estate associated with running a particular hardware model in a certain location.

Combined, the formula for estimating operational emissions across the estate becomes

$$ Total\ Annual\ Operational\ Emissions\ (kg\ CO2e/yr) = Device\ Count\ \times Average\ Power\ Draw\ (kW) \\ \times Daily\ Uptime\ (hours) \times Annual\ Uptime\ (days)  \times Carbon\ Intensity\ (kg\ CO2e/kWh) $$

Imagine an organisation has 500 of the Dell XPS 13 9310 laptops operating in Europe. The total associated annual operational emissions could be estimated to be 

$$ 500 \times 8.66\ kg\ CO2e/yr = 4,330\ kg\ CO2e/yr $$

The table below shows an example of aggregating emissions across different employee device types and locations using the high level approach above assuming business usage.

| Device | Model | Location | Device Count | Average Power (kW) | Estimated Device Energy Consumption (kWh/yr) |Estimated Total Energy Consumption (kWh/yr) | Carbon Intensity (kg CO2e/kWh) | Estimated Operational Emissions (kg CO2e/yr) |
|-------|-------|-------|-------|------------|------------|------------|------------|------------|
| Laptop  | Dell XPS 13 9310 | Europe | 500 | 0.015 | 26.4| 13,200 | 0.328 |4,330|
| Laptop  | Dell XPS 13 9310 | USA    | 300 | 0.015 | 26.4|7,920 | 0.410 |3,247|
| Monitor | HP Z24s | Europe | 1000 | 0.06 | 105.6 |105,600 | 0.328 |34,637|
| **Total** ||||||**126,720**|| **42,214** |

Where specific device models or usage locations are unknown, average figures for the device category as a whole can be used instead. This sacrifices precision for practicality but maintains a view to direct technology optimisation efforts.

While the above approach relies on key assumptions and does not account for the variability in device usage patterns, it is a useful starting point for identifying emissions improvement opportunities within an organisation's technology footprint. Continued refinement of this baseline estimate through more granular monitoring and profiling of actual usage would be required to enable rollout of more targeted carbon reduction initiatives. 

{% include linkedHeading.html heading="Understanding the technology estate" level=4 %}

To estimate the total emissions associated with running an organisation's technology estate, it is important to first understand how many of each device an organisation has in their estate. 

Ideal data sources are configuration management databases (CMDBs) from robust IT asset management processes. Where such data is incomplete, extrapolation from partial datasets can provide estimates. Sources include partially completed asset management records, historic procurement data on devices purchased, employee numbers per office or generic device ratios per employee type. 

The accuracy of this underlying data will impact on the precision of emissions estimates across the estate. However, even roughly extrapolated totals help to highlight emission problem areas and allow year-on-year benchmarking to track improvement. 

{% include linkedHeading.html heading="Using emissions data provided by manufacturers" level=4 %}

As discussed in [upstream emissions](upstream), manufacturers can provide [Product Carbon Footprint (PCF)](/glossary#product-carbon-footprint-pcf) data breaking down a device's emissions by [product life cycle](/glossary#product-life-cycle) stage, including usage. This data relies on key assumptions made by the manufacturer regarding emissions estimations. 

With regards to operational emissions, one such assumption to note is the [Typical Energy Consumption (TEC)](/glossary#typical-energy-consumption-tec) figure.
This can be used in place of the estimated annual energy consumption figure approximated through the high level approach discussed earlier. However, TEC is based on standard usage which is often less than in an office setting. Using TEC in subsequent estimations of emissions could result in lower emissions estimates than may be expected of business usage.

In the [Dell example](#a-high-level-approach-to-estimation) above, it is assumed that employee laptops run for 8 hours per day to reflect typical business usage, resulting in an estimated annual energy consumption of 26.4 kWh. However, the [Dell Product Carbon Footprint (PCF) documentation](https://www.delltechnologies.com/asset/en-us/products/laptops-and-2-in-1s/technical-support/xps-13-9310.pdf) for this laptop states a lower TEC of 21.43 kWh per year. Using this TEC figure in the approach above results in a per device annual operational emissions estimation of ~7 kg CO2e compared to 8.66 kg CO2e. 

Additionally, the PCF states that 13.9% of the total 4-year lifecycle emissions (~322 kg CO2e) are allocated to the usage stage, equating to ~11.19 kg CO2e per year. This is actually higher than both estimates derived from the approach above and the TEC. Dell cite a lower annual energy consumption (TEC) than may be expected for business usage, this suggests higher usage emissions likely stem from assuming a greater carbon intensity factor for the energy consumed. This discrepancy highlights the impact of using different assumptions when estimating operational emissions.

It is recommended to cross-reference TEC values and clarify assumptions made by manufacturers. Using consistent data sources and transparency over methodology is important for accurate and comparable emissions estimates across all hardware assets.

{% include linkedHeading.html heading="Generators" level=3 %}
Any fossil fuel-powered generators, solar PV, wind turbines or other systems installed on-site to supply electricity to technology equipment.



{% include linkedHeading.html heading="Indirect Emissions" level=2 %}
Indirect emissions result from the organisation's purchase of cloud computing services, software or managed IT services from third-party technology providers.

As the organisation does not own or control the IT assets delivering these services, their associated emissions cannot be directly quantified. But use of these services contributes substantially to the organisation's overall technology emissions footprint. These are relatable to GHG Protocol Scope 3.

Emissions estimates for third-party services can be obtained from providers to account for these indirect, supply chain impacts.

{% include linkedHeading.html heading="Cloud Services" level=3 %}

Cloud computing has become a significant and rapidly growing part of the global computing infrastructure. It enables organisations to access a wide range of computing resources, including processing power, storage, networking, and software services, over the internet. Instead of building and maintaining their own data centres, businesses can leverage cloud services provided by major companies like Amazon (AWS), Microsoft (Azure), and Google (GCP).

In simple terms, the "cloud" refers to vast networks of remote servers and data centres managed by these providers. Rather than hosting applications and storing data on local servers and computers, organisations can rent computing resources from cloud providers as needed, on a pay-as-you-go basis. This offers advantages such as scalability, flexibility, cost-effectiveness, reliability, and robust security measures.

Cloud services are typically categorised into different models, such as Infrastructure as a Service (IaaS) and Platform as a Service (PaaS). IaaS provides access to virtualised computing resources like servers, storage, and networking, allowing organisations to manage these resources as needed. PaaS removes the need to manage the underlying infrastructure like hardware and operating systems, which can streamline development. This can extend to services like managed databases, where the cloud provider takes on the responsibility for administration and maintenance of the product.

{% include linkedHeading.html heading="Environmental impact of Cloud Services" level=4 %}

The environmental impact and carbon emissions associated with cloud computing are becoming increasingly important considerations. The energy consumption and carbon footprint of cloud data centres have grown substantially as the adoption of these services has accelerated. This hardware has its own Upstream and Operational emissions, which are attributable to clients under Scope 3 of the GHG protocol. Despite improvements in energy efficiency, the sheer scale of cloud infrastructure means its collective emissions are significant.

At the same time, cloud computing presents some opportunities for improved sustainability compared to traditional on-premises data centres. Cloud providers can leverage economies of scale to invest in more energy-efficient hardware, cooling systems, and renewable energy sources. The flexibility of the cloud also allows organisations to dynamically provision resources and optimise their usage, potentially reducing idle capacity and associated emissions.

Focussing specifically on energy efficiency, Cloud providers often use custom hardware with a lower power demand. Generally speaking, it is in their interests to use the most energy efficient hardware possible to reduce their own operating costs. This also allows users to switch to lower powered hardware without the initial outlay for new hardware. Improved energy efficiency also extends to the typical [Power Usage Effectiveness (PUE)](/glossary#power-usage-effectiveness-pue) of a cloud based data centre, which can be lower than typical on-premise data centres.

| Provider                      | PUE        |
| ----------------------------- | ---------- |
| Alibaba Cloud                 | 1.3        |
| AWS                           | 1.135      |
| Azure                         | 1.185      |
| GCP                           | 1.1        |
| Oracle Cloud                  | 1.15 \*    |
| Worldwide Data centre Average | 1.58 - 1.8 |

*\* Oracle figure is not an average, sourced from information describing their lowest PUE. Sources: [^ccf-pue] [^oracle-pue]*

[^ccf-pue]: [Cloud Carbon Footprint Methodology](https://www.cloudcarbonfootprint.org/docs/methodology#appendix-i-energy-coefficients)
[^oracle-pue]: [Oracle Climate Action](https://www.oracle.com/uk/government/climate-action/#rc30p2)

While Cloud PUE figures may be lower than many on-premise data centres, these figures should be considered carefully when sourced from the Cloud Providers themselves, for example, they may apply to specific data centres only rather than being an average. In future it is hoped that these figures can be further reduced by recapturing the waste heat from data centres, with [Deep Green](https://deepgreen.energy/) being an example of a smaller Cloud provider whose micro data centres extract heat to provide hot water for a range of purposes, which can give PUE figures as low as 1.001.

The region that the services are run from likely has an even more significant impact on carbon emissions, depending on the mix of renewable energy sources that power the underlying data centres. One advantage of using cloud is that is easier to move infrastructure to a new location with a better energy mix than it would be when hosting those servers on-premise. Regardless of the grid mix of the location, some cloud providers may report that they use 'zero carbon' energy but it's important to distinguish between direct renewable power to the data centre and that which has been offset via [Power Purchase Agreements](/glossary#power-purchase-agreements-ppa) or [Renewable Energy Certificates](/glossary#renewable-energy-certificates-recs).

The types of services used can also have an impact on emissions, with Infrastructure as a Service offerings potentially providing negligible benefits over already virtualised on-premise hardware. These services may allow the most control over cloud resources but they retain the same issues that can be seen when running on-premise, with instances being allocated to cope with peak load going underutilised for the majority of time.

Platform as a Service options may provide more opportunities for the Cloud provider to choose more efficient usage patterns behind the scenes. This extends to so called 'Serverless' options, which provide ways of allocating resources that only exist when work is happening, minimising the impact of idle hardware. Unfortunately the term has become slightly overloaded, with some services still requiring a minimum sized instance to run at all times, so careful reading of documentation may be necessary to determine if services can truly scale to zero.

Cloud services rely on virtualisation to share their server hardware between multiple tenants, allowing for a higher average utilisation than most on-premise data centres. This can be in the range of ~50% utilisation compared to ~20% in a traditional data centre.[^cloud-utilisation] Cloud providers also offer 'Spot Instances' as a way of making use of hardware that would otherwise be underutilised.

It's worth noting that making best use of these features may require investment to refactor existing code. A 'lift and shift' approach may be the quickest way to transition to using Cloud services, but it should ideally be the first step in an ongoing process to re-architect your software to deliver reductions in emissions.

[^cloud-utilisation]: [United States Data Center Energy Usage Report](https://eta-publications.lbl.gov/sites/default/files/lbnl-1005775_v2.pdf)

{% include linkedHeading.html heading="Quantifying the emissions of Cloud Services" level=4 %}

Cloud providers may provide data on the emissions that are attributable to service use, but what is included may vary and there can be a significant time delay to these figures. Here is a breakdown of the top 3 providers own tools.

|Provider|GHG Scopes Covered|Interface|Latency|Granularity|Location vs market based accounting|
|----|----|----|----|----|----|
|[AWS](https://aws.amazon.com/aws-cost-management/aws-customer-carbon-footprint-tool/)|1,2|Dashboard|Monthly<br>(with 3 month delay)|Coarse - EC2 and S3 are listed individually, all other services grouped as one figure.<br>Location breakdown by continent, not per region<br>Rounds down figures to the nearest 0.1 tCO2e|Market-based|
|[Azure](https://appsource.microsoft.com/en-gb/product/power-bi/coi-sustainability.emissions_impact_dashboard)|1,2,3|Power BI|Monthly|Fine grained|Market-based|
|[GCP](https://cloud.google.com/carbon-footprint)|1,2,3|Dashboard|Monthly|Fine grained|Location-based|

Due to the delays and inconsistencies, third-party alternatives like [Cloud Carbon Footprint](https://www.cloudcarbonfootprint.org/) have arisen, which provide estimates based on the usage data available from each provider. While tools like these cannot include Scope 1 emissions data, having much closer to real time data can be useful in attempting to optimise Cloud service usage for carbon emissions. For more detailed analysis, see [Tools for measuring Cloud Carbon Emissions](https://blog.scottlogic.com/2023/10/19/tools-for-measuring-cloud-carbon-emissions.html), which covers the available tools for measuring the carbon emissions of Cloud services.

There are many sources of information on how to use the cloud in a sustainable manner, with each of the main 3 providers having their own best practices pages ([AWS](https://docs.aws.amazon.com/pdfs/wellarchitected/latest/sustainability-pillar/wellarchitected-sustainability-pillar.pdf), [Azure](https://learn.microsoft.com/en-us/azure/well-architected/sustainability/), [GCP](https://cloud.google.com/architecture/reduce-carbon-footprint)). For a more independent view, look to the Green Software Foundation's [Green Software Patterns](https://patterns.greensoftware.foundation/), which have a specific subsection for [Cloud](https://patterns.greensoftware.foundation/catalog/cloud/).

{% include linkedHeading.html heading="SaaS" level=3 %}
Software-as-a-Service (SaaS) applications.

{% include linkedHeading.html heading="Managed Services" level=3 %}
Managed Security Operations, IT support and data backup services.

## References

[^dimpact]: [Dimpact; Methodology Statement](https://dimpact.org/publications)
[^scope3]: [Scope3; Consumer Devices](https://methodology.scope3.com/consumer_devices)
[^fershad]: [Fershad Irani; Thinking about a way to estimate website energy use](https://methodology.scope3.com/consumer_devices)
[^urban]: Urban, Bryan & Roth, Kurt & Singh, Mahendra & Howes, Duncan. (2019). [Residential Consumer Electronics Energy Consumption in the United States in 2017](https://www.researchgate.net/publication/335911295_Residential_Consumer_Electronics_Energy_Consumption_in_the_United_States_in_2017). 10.2760/667696.