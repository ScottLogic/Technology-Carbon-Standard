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
This considers the emissions of Cloud platform services like compute, storage, networking etc. These services are all backed by computing hardware, which will have its own Upstream and Operational emissions. Different server instance types of varying performance are available, which impacts the proportion of Upstream emissions attributable to you, as well as the amount of energy consumed. The region that the services are run from can also have a significant impact on carbon emissions, depending on the mix of renewable energy sources that power the underlying data centers.

Cloud providers may provide data on the emissions that are attributable to your service use, but what is included may vary and there can be a significant time delay to these figures. Due to this, third-party alternatives have arisen, which provide closer to real time emissions estimates, based on the usage data available from each provider.

For more information, see the following:

- [Tools for measuring Cloud Carbon Emissions](https://blog.scottlogic.com/2023/10/19/tools-for-measuring-cloud-carbon-emissions.html) - A more detailed look at the available tools for measuring the carbon emissions of Cloud services.
- [Cloud Carbon Footprint](https://www.cloudcarbonfootprint.org/) - A third party carbon footprint tool, which can report on all of the major Cloud Providers, using a consistent methodology.
- [Deep Green](https://deepgreen.energy/) - A smaller Cloud provider who are specifically focussed on sustainability, with their micro data centers recapturing waste heat to repurpose for social good.



{% include linkedHeading.html heading="SaaS" level=3 %}
Software-as-a-Service (SaaS) applications.

{% include linkedHeading.html heading="Managed Services" level=3 %}
Managed Security Operations, IT support and data backup services.