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
The energy consumed by on-premise servers and data centers

{% include linkedHeading.html heading="Networking Devices" level=3 %}
The energy consumed by networking devices such as:
- routers
- switches
- wi-fi access points

{% include linkedHeading.html heading="Employee Devices" level=3 %}
The energy consumed by computers (desktops, laptops), monitors, printers and other devices used by employees. 

{% include linkedHeading.html heading="Generators" level=3 %}
Any fossil fuel-powered generators, solar PV, wind turbines or other systems installed on-site to supply electricity to technology equipment.



{% include linkedHeading.html heading="Indirect Emissions" level=2 %}
Indirect emissions result from the organisation's purchase of cloud computing services, software or managed IT services from third-party technology providers.

As the organisation does not own or control the IT assets delivering these services, their associated emissions cannot be directly quantified. But use of these services contributes substantially to the organisation's overall technology emissions footprint. These are relatable to GHG Protocol Scope 3.

Emissions estimates for third-party services can be obtained from providers to account for these indirect, supply chain impacts.

{% include linkedHeading.html heading="Cloud Services" level=3 %}
This considers the emissions of Cloud platform services like compute, storage, networking etc. These services are all backed by computing hardware, which will have its own Upstream and Operational emissions. Different server instance types of varying performance are available, which impacts the proportion of Upstream emissions attributable, as well as the amount of energy consumed. Generally speaking, it is in the cloud provider's interests to use the most energy efficient hardware possible to reduce their own operating costs. This extends to the typical Power Usage Effectiveness (PUE) of a cloud based data center, which can be lower than typical on-premise data centers.

| Provider           | PUE                |
| ------------------ | ------------------ |
| Alibaba Cloud      | 1.3                |
| AWS                | 1.135              |
| Azure              | 1.185              |
| GCP                | 1.1                |
| Oracle Cloud       | 1.15               |
| Worldwide Average  | 1.58               |

Sources: [^ccf-pue] [^oracle-pue]

[^ccf-pue]: [Cloud Carbon Footprint Methodology](https://www.cloudcarbonfootprint.org/docs/methodology#appendix-i-energy-coefficients)
[^oracle-pue]: [Oracle Climate Action](https://www.oracle.com/uk/government/climate-action/#rc30p2)

These figures should be considered carefully when sourced from the Cloud Providers themselves, as it may apply to specific data centers only rather than being an average. In future it is hoped that these figures can be further reduced by recapturing the waste heat from data centers, with [Deep Green](https://deepgreen.energy/) being an example of a smaller Cloud provider whose micro data centers extract heat to provide hot water for a range of purposes.

The region that the services are run from can also have a significant impact on carbon emissions, depending on the mix of renewable energy sources that power the underlying data centers. Some cloud providers may report that they use 'zero carbon' energy but it's important to distinguish between direct renewable power to the data center and that which has been offset via Power Purchase Agreements or Renewable Energy Certificates. The flexibility of the cloud does at least make it easier to switch location than it would be to move an on-premise estate.

So called 'Serverless' options provide ways of allocating resources that only exist when work is happening, minimizing the impact of idle hardware. Unfortunately the term has become slightly overloaded, with some services still requiring a minimum sized instance to run at all times, so careful reading of documentation may be necessary to determine if services can truly scale to zero.

Cloud services rely on virtualisation of the hardware to utilise it most effectively, allowing for a higher average utilization than most on-premise data centers. This can be in the range of ~50% utilization compared to ~20% in a traditional data centre.[^cloud-utilization] Cloud providers offer 'Spot' Instances as a way of making use of hardware that would otherwise be underutilized.

[^cloud-utilization]: [United States Data Center Energy Usage Report](https://eta-publications.lbl.gov/sites/default/files/lbnl-1005775_v2.pdf)

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