---
layout: sideNavigation
title: Operational Emissions
permalink: /impact-categories/operational
redirect_from:
    - /categories/operational  
---

# Operational Emissions
Operational emissions encompass the greenhouse gases emitted from an organisation's own technology infrastructure and operations. These are categorised into three groups - On-Prem, Cloud, and Generator emissions (O, C, and G) - based on the level of ownership and control an organisation has over the assets.

Understanding operational emissions allows organisations to quantify, monitor, and benchmark the climate impacts of their technology infrastructure and business operations. It enables setting emission reduction targets and strategies and facilitates compliance with current and emerging climate disclosure legislations. 

Emissions are further classified into direct and indirect sources:

{% include linkedHeading.html heading="Direct Emissions" level=2 %}

Direct emissions are a result of the organisation's direct consumption of grid-supplied electricity (Category O) or combustion of fossil fuels like diesel or natural gas for owned power generators (Category G). The organisation can directly measure and account for emissions from owned assets.

{% include linkedHeading.html heading="On-premise" level=3 %}

Emissions associated with the actual operation and use of devices owned by an organisation ([usage carbon](/resources/glossary#usage-carbon)).

[Read more about usage carbon emissions.](/technology-categories/lifecycle/usage)

Category O (On-premise) emissions can be related to GHG Protocol Scope 2.

{% include linkedHeading.html heading="Servers and Storage" level=4 %}

The energy consumed by on-premise servers and data centres.

[Click here to see a worked example of estimating usage emissions for a server.](/technology-categories/lifecycle/example/server#usage-carbon-emissions)

{% include linkedHeading.html heading="Networking Devices" level=4 %}

In [the information on networks](/technology-categories/networks), networks are split into four categories - the operational network, the wired backbone internet, the wireless internet and your consumer's network. Of these, the first three need to be considered in Operational Emissions.

Within the operational network, consider the running cost of the connected devices. These include, but are not limited to:
- routers
- switches
- bridges
- Wi-Fi access points
- firewalls
- modems
- hubs
- repeaters

Research[^1] has shown that not all networking equipment will use power in line with the data it is transmitted over it. These devices will have a baseline load (i.e. the energy they consume for simply being switched on, regardless of the processing they do), a maximum load and a typical load. Most wired networking equipment, such as routers and switches, will consume at least 60% of their maximum power as a baseline going up to 90% of their maximum power under a heavy load[^2]. For accurate numbers, power monitors on the power socket are an excellent way of gathering data. As the power usage of networking equipment has very little variance while it is running, attributing the power consumption to specific applications or processes is less important.

Data consumed from a supplier's API, that is external to your organisation, is accounted for in the indirect category. Public wired and wireless internet usage does not need to be measured in the Direct Emission category. Data sent from the service to end users is accounted for in [the downstream emissions](/impact-categories/downstream) category. 

{% include linkedHeading.html heading="Onsite Employee Devices" level=4 %}

The energy consumed by computers (desktops, laptops), monitors, printers, and other devices used by employees in offices. This is energy directly used by the business, and all of the emissions related to this energy are their responsibility.

[Click here to see a worked example of estimating usage emissions for a laptop.](/technology-categories/lifecycle/example/employee#usage-carbon-emissions)

{% include linkedHeading.html heading="Generators" level=3 %}

Any fossil fuel-powered generators, solar PV, wind turbines, or other systems installed on-site to supply electricity to technology equipment.

Category G (Generators) can be related to GHG Protocol Scope 1.

{% include linkedHeading.html heading="Indirect Emissions" level=2 %}
Indirect emissions result from the organisation's purchase of cloud computing services, software, or managed IT services from third-party technology providers.

As the organisation does not own or control the IT assets delivering these services, their associated emissions cannot be directly quantified. But use of these services can contribute substantially to the organisation's overall technology emissions footprint. Emissions estimates for third-party services can be obtained from providers to account for these indirect, supply chain impacts.

Category C (Cloud) emissions can be related to GHG Protocol Scope 3.

{% include linkedHeading.html heading="Cloud Services" level=3 %}

The emissions associated with cloud platform services like compute, storage, and networking. Services are backed by computing hardware with associated upstream and operational emissions. The proportion of such emissions attributable to an organisation will vary based on service, server instance types, and region. 

[Read more about cloud services.](/technology-categories/cloud)

{% include linkedHeading.html heading="SaaS" level=3 %}

The emissions associated with Software-as-a-Service (SaaS) applications. These are fully-managed services which are hosted by a third-parties and may be located on-premises or in the cloud. There are a lot of factors which determine the emissions due to these services and typically organisations do not have a lot of visibility.

[Read more about Software-as-a-Service.](/technology-categories/saas)

{% include linkedHeading.html heading="Managed Services" level=3 %}
Managed Security Operations, IT support and data backup services.

{% include linkedHeading.html heading="Offsite Employee Devices" level=3 %}

The emissions incurred by computers (desktops, laptops), monitors, printers, and other devices used by employees, when used out-of-office. Since these are required by the business, they are accounted for, but as with other indirect groupings, the business does not control them directly. Accordingly, they come under [GHG Protocol Scope 3](/resources/glossary#greenhouse-gas-ghg-protocols), and so are a separate category.

Offsite employee devices are typically accounted for with an [attribution factor](/resources/glossary#attribution-factor), representing the proportion of time that their use is dedicated to business purposes.

## References

[^1]: [Beyond network standby: A policy framework and action plan for low energy networks](https://nachhaltigwirtschaften.at/resources/iea_pdf/reports/iea_4e_network_standby_final_report.pdf) 
[^2]: [Equipment power consumption in optical multilayer networks – source data](https://www.researchgate.net/publication/272819245_Equipment_power_consumption_in_optical_multilayer_networks_-_source_data)