---
layout: category
title: Operational Emissions
permalink: categories/operational
---

# Operational Emissions
Operational emissions encompass the greenhouse gases emitted from an organisation's own technology infrastructure and operations. These are categorised into three groups - On-Prem, Cloud, and Generator emissions (O, C, and G) - based on the level of ownership and control an organisation has over the assets.

Understanding operational emissions allows organisations to quantify, monitor, and benchmark the climate impacts of their technology infrastructure and business operations. It enables setting emission reduction targets and strategies and facilitates compliance with current and emerging climate disclosure legislations. 

Emissions are further classified into direct and indirect sources:

{% include linkedHeading.html heading="Direct Emissions" level=2 %}

Direct emissions are a result of the organisation's direct consumption of grid-supplied electricity (Category O) or combustion of fossil fuels like diesel or natural gas for owned power generators (Category G). The organisation can directly measure and account for emissions from owned assets.

{% include linkedHeading.html heading="On-premise" level=3 %}

Emissions associated with the actual operation and use of devices owned by an organisation ([usage carbon](/glossary#usage-carbon)).

[Read more about usage carbon emissions.](../information/lifecycle/usage)

Category O (On-premise) emissions can be related to GHG Protocol Scope 2.

{% include linkedHeading.html heading="Servers and Storage" level=4 %}

The energy consumed by on-premise servers and data centres.

[Click here to see a worked example of estimating usage emissions for a server.](../../information/lifecycle/example/server#usage-carbon-emissions)

{% include linkedHeading.html heading="Networking Devices" level=4 %}

In [the information on networks](../information/networks/networks.md), you will see that networks are split into four categories - the operational network, the wired backbone internet, the wireless internet and your consumer's network. Of these, the first three need to be considered in Operational Emissions.

Within your operation network, you need to consider the running cost of the devices that you use. Again these include, but are not limited to:
- routers
- switches
- bridges
- Wi-Fi access points
- firewalls
- modems
- hubs
- repeaters

These devices will have a baseline load (i.e. the energy they consume for simply being switched on, regardless of the processing they do), a maximum load and a typical load. Most wired networking equipment, such as routers and switches, they will consume at least 60% of their maximum power as a baseline going up to 90% of their maximum power under a heavy load. If you want accurate numbers, power monitors on the power socket are an excellent way of gathering data as we do not normally care about attributing the power they use to a single application or source, since their power usage varies so little.

Public wired and wireless internet usage only needs to be measured in the Direct Emission category if you are consuming data from an external API or SAAS product, within your network. For example, if you host a website that shows train times in Birmingham, and you rely on an externally provided API to get up to date train information, then you would measure the amount of data coming from the API to your services. Note, that you do not count the data sent from the web server to the end users here - that is accounted for in [the downstream emissions](./downstream.md). 

This is much harder to measure as we do not have access to data about the equipment used over the public internet and no control over what route it takes, even if we did. Therefore it is appropriate to use a proxy such as number of calls or payload size multiplied by a factor in order to get an estimate.

{% include linkedHeading.html heading="Employee Devices" level=4 %}

The energy consumed by computers (desktops, laptops), monitors, printers, and other devices used by employees.

[Click here to see a worked example of estimating usage emissions for a laptop.](../../information/lifecycle/example/employee#usage-carbon-emissions)

{% include linkedHeading.html heading="Generators" level=3 %}

Any fossil fuel-powered generators, solar PV, wind turbines, or other systems installed on-site to supply electricity to technology equipment.

Category G (Generators) can be related to GHG Protocol Scope 1.

{% include linkedHeading.html heading="Indirect Emissions" level=2 %}
Indirect emissions result from the organisation's purchase of cloud computing services, software, or managed IT services from third-party technology providers.

As the organisation does not own or control the IT assets delivering these services, their associated emissions cannot be directly quantified. But use of these services can contribute substantially to the organisation's overall technology emissions footprint. Emissions estimates for third-party services can be obtained from providers to account for these indirect, supply chain impacts.

Category C (Cloud) emissions can be related to GHG Protocol Scope 3.

{% include linkedHeading.html heading="Cloud Services" level=3 %}

The emissions associated with cloud platform services like compute, storage, and networking. Services are backed by computing hardware with associated upstream and operational emissions. The proportion of such emissions attributable to an organisation will vary based on service, server instance types, and region. 

[Read more about cloud services.](../information/cloud)

{% include linkedHeading.html heading="SaaS" level=3 %}
Software-as-a-Service (SaaS) applications.

{% include linkedHeading.html heading="Managed Services" level=3 %}
Managed Security Operations, IT support and data backup services.