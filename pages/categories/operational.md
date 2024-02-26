---
layout: category
title: Operational Emissions
permalink: categories/operational
---

# Operational Emissions
Operational emissions encompass the greenhouse gases emitted from an organisation's own technology infrastructure and operations. These are categorised into three groups - On-Prem, Cloud, and Generator emissions (O, C and G) - based on the level of ownership and control an organisation has over the assets.

Emissions are further classified into direct and indirect sources:


{% include linkedHeading.html heading="Direct Emissions" level=2 %}

Direct emissions are a result of the organisation's direct consumption of grid-supplied electricity (Category O) or combustion of fossil fuels like diesel or natural gas for owned power generators (Category G). The organisation can directly measure and account for emissions from owned assets.

Category O (On-premise) emissions can be related to GHG Protocol Scope 2, while Category G (Generators) are GHG Protocol Scope 1.


{% include linkedHeading.html heading="Servers and Storage" level=3 %}
The energy consumed by on-premise servers and data centres

Your On-Premise hardware will have differing power demands and usage patterns, which factor into how much energy they consume

You may have many virtualised servers, so you need to have a clear understanding of the physical hosts to avoid double counting.
As you start to break down the energy used by different departments or projects, you may need to apportion the total energy usage of a piece of hardware to multiple virtual machines.

{% include linkedHeading.html heading="Networking Devices" level=3 %}
The energy consumed by networking devices such as:
- routers
- switches
- Wi-Fi access points

{% include linkedHeading.html heading="Employee Devices" level=3 %}
The energy consumed by computers (desktops, laptops), monitors, printers and other devices used by employees. 

Your On-Premise hardware will have differing power demands and usage patterns, which factor into how much energy they consume

Some sources for device counts could be simple estimations based on staff headcount, data from procurement and suppliers, scaling up based on numbers from a single site or a Configuration Management Database (CMDB).

same as downstream section?? 
This considers the emissions generated from the electricity consumption of employee devices such as desktops, laptops, tablets, and mobile phones that are utilised in the organisation. It is important to account for the differences in energy efficiency across various devices accessing these products and services. Typically, a smartphone uses less energy than a laptop, and a laptop uses less energy than a desktop. Understanding the energy use of devices can then be used to estimate carbon emissions by considering the source of the energy used to power or charge that device. Finally, end-user devices should have their embodied carbon estimated. This should take into account the product's life span to consider the entire Product Life Cycle.

A point to touch on with Desktop devices is the variability in energy consumption they may have.
* Are machines turned off at the end of every working day?
* What is the specification of the machine, does it contain a GPU or other specialist hardware that may consume more energy?
* What kind of workloads do these devices perform on a daily basis?

As a first step, you should begin with a count of each different hardware type. Depending on the data available to you, this may still be somewhat of an estimate or extrapolation based on known figures. Each type of hardware can be assigned an average power draw, based on industry standards, which can be used to calculate a yearly energy usage figure using the following process:

$\text{Device Count} \times \text{Average Power Draw (kW)} \times \text{Daily Uptime (hours)} \times \text{Annual Uptime (days)} = \text{Annual Energy Consumption (kWh/Yr)}$

If you are looking for very rough estimates of power draw, we have started with the following:

| Hardware Type | Power (kW) |
| ------------- | ---------- |
| Laptop        | 0.05       |
| Desktop       | 0.1        |
| Monitor       | 0.03       |
| Server        | 0.4        |

The uptime will vary depending on the class of hardware - Servers and Networking Devices are likely to be active 24 hours a day, 365 days a year, whereas Employee Devices may vary depending on your working year. A typical example might be 8 hours a day, 230 days a year.

Once you have a figure for Annual Energy Consumption, you can apply an average carbon intensity to transform this from kWh to kg CO2e. You may operate in a single country and be able to use the average for that region or you can work with a worldwide average, which in the past has been 0.442 kg CO2e/kWh.

So as a worked example, if our initial estimate for device count was 500 laptops, then we would calculate:

$500 \times 0.05 \times 8 \times 230 \times 0.442 = \text{20,332 kgCO2e/yr}$

Carbon Emission figures can often be hard to put into context on their own, so it can be helpful to add an equivalent figure, which in this case might be 52,122 miles driven by an average gasoline-powered car.[^equiv]

[^equiv]: [Greenhouse Gas Equivalencies Calculator](https://www.epa.gov/energy/greenhouse-gas-equivalencies-calculator)

As you try to get more accurate measurements, you will need to break down your types of equipment further and collate the hardware models that you own. Starting with the models that you have the most of, make use of the manufacturer's specifications to find the average power draw for those specific models. For servers specifically, another good source of data is the [SPEC Power Benchmark](https://www.spec.org/power_ssj2008/). This provides results based on real hardware use under varying levels of load, which can also help to match your own utilisation to the differing power demands. 

As you get more information you may start to see more splits in hardware type, where there are significant differences in the power demand. This may be especially true in the realm of Networking Devices, where rack mounted Switches and Routers have a much higher draw than more end-user like devices and Wireless Access Points.

Power draw figures extracted from manufacturer data or benchmarking tools can be used in the heuristic calculations discussed earlier to refine estimation of overall energy consumption.

Manufacturers can also provide figures for hardware Typical Energy Consumption (TEC), expressed in units of kWh/year. This is a metric used to quantify the average energy consumption of a device or product under typical operating conditions. Often, it can be unclear what these operating conditions are. In the previous heuristic example, we assumed laptops run for 8 hours per day to reflect typical business usage. However, laptop manufacturers may base power draw specifications on consumer household usage, which is often far less than in an office setting. Therefore, using TEC in subsequent estimations of emissions could result in lower emissions esimates than may be expected of business usage. This is illustrated in the following example. Therefore, it is important to cross-reference or use consistent data sources and assumptions when taking a proxy approach to estimating energy consumption of hardware assets to ensure comparability. 

Additionally, you can start to estimate operational carbon emissions taking into account the location where the hardware is running by using a location specific [Carbon Intensity](/Technology%20Carbon%20Standard/Glossary/README.md#carbon-intensity). This gives a better idea of where your biggest impacts are located and illustrates how the electricity supply may have a significant effect.

To continue the heuristic example, we could refine the 500 laptop figure to split it into two main models of laptop, operated in 3 key locations. Using information from datasheets we can get two Typical Energy Consumption (TEC) figures for the models.

You can then use a provider like [Electricity Maps](https://www.electricitymaps.com/), [BEIS](https://www.gov.uk/government/organisations/department-for-business-energy-and-industrial-strategy) or [IEA](https://www.iea.org/) to source carbon intensity figures for each location. As an example we will use France at 0.053 kg CO2e/kWh, Germany at 0.403 kg CO2e/kWh and Poland at 0.776 kg CO2e/kWh.

Given the following breakdown:

| TEC (kWh/yr) | Location | Device Count | CI (kg CO2e/kWh) | OE (kg CO2e/yr) |
|---------- |----------|--------------|------------------|---------------------|
| 21.43 | France | 100 | 0.053 | 113.579 |
| 21.43 | Germany | 150 | 0.403 | 1,295.4435 |
| 21.43 | Poland | 70 | 0.776 | 1164.0776 |
| 38.1 | France | 50 | 0.053 | 100.965 |
| 38.1 | Germany | 70 | 0.403 | 1,074.801 |
| 38.1 | Poland | 60 | 0.776 | 1,773.936 |

This gives a total of ~5,500 kg CO2e per year - a huge decrease from the initial heuristic estimate. Here we can point to lower energy consumption and carbon intensity in some areas. This is not to say that proxy measurements will always lead to a decrease in the estimate, it may also uncover assumptions that have led to an underestimate.

While electricity providers may supply some emissions data, this often doesn't provide the level of detail needed to optimize and attribute emissions across hardware, software, and teams. Home office energy use also may not be accounted for. More granular tracking is needed to optimize and attribute emissions. Power monitoring hardware provides accuracy but is costly to scale. CPU utilization proxies model energy use cost-effectively and allocate emissions across hardware and software. Live grid emissions factors from sites like ElectricityMap enable accurate CO2e monitoring. Combining bottom-up power and utilization data with real-time emissions factors allows reasonably precise emissions attribution.

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