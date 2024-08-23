---
layout: sideNavigation
title: Architecture View
permalink: /roles/architecture/strategy
published: false
redirect_from:
    - /views/roles/architecture_strategy
---

# Architecture View - setting strategy

{% include carbonStandard.html variant=site.data.overlays.architecture hideOutOfScope=true %}

This view shows how architecture strategy and technology principles can influence the various categories in the TCS. See [Architecture View - NFRs](/roles/architecture_nfrs) for a mapping of the NFRs that can derive from the strategy.

## Upstream Emissions

{% include categoryLabel.html label="CatU" %}

The architect is at the center of vendor selection and so can promote green requirements in selection.

### Software

{% include categoryItem.html item="CatUSoftware" id="Software" noLink=true %}

- Set strategy around COTS/OSS vs in-house
- Set principle to prefer green vendors
 
All software creation comes with a cost and the first thing you might decide to do is to trade off open source and COTS software against in-house. Some of the in-house software carbon costs are out of the scope in this standard because they are non-technology items like buildings and transport for employees. Still, they count in the overall picture of your organisation and if one company creates software thats less emissions than if 20 companies all create the same software. You may also wish to prefer vendors who report on their emissions and follow sustainability best practices in order to push software and machine learning model creators to be more sustainable. e.g. training models with renewable electricity.

### Hardware Manufacture, Transport and Installation
{% include categoryItem.html item="CatUEmployeeHardware" id="EmployeeHardware" noLink=true %}
{% include categoryItem.html item="CatUNetworkHardware" id="NetworkHardware" noLink=true %}
{% include categoryItem.html item="CatUServerHardware" id="ServerHardware" noLink=true %}

Any hardware you buy in or acquire; from data centre servers to employee laptops, required energy produced emissions in manufacture and transport. Not all architects will get involved in hardware selection - servers and network equipment may fall under data centre architects for example. Those that do though you can apply pressure to ensure there is a low carbon strategy for:

- Renewal cycles: i.e. how often we should replace hardware. Less hardware bought per year is less emissions.
- Recycling: Check the criteria under which your current disposal partners were selected and if recycling and low energy usage were not considerations make sure they are next time the contracts come around.
- Procurement: Do the procurement teams understand the emissions with each item they supply? If not kick-off an initiative to look at this and ensure equipment is bought with a known embodied carbon and ideally a target to keep it under. Consider refreshed hardware; reused, refurbished or remanufactured.

## Operational Emissions

Whether you are running in the cloud or on-prem, architects can promote architectural patterns and ways of using resources to minimise day to day energy usage. This might include requiring the use of efficient APIs such as gRPC, sharing resources as much as possible, carbon aware computing and having data dormancy strategies so that data is not held and stored longer than needed. These may also have benefits on resilience, cost and compliance and the architect should take a holistic view.

Architects will work with dev-ops, developers or data centre engineers on technology strategies and should ensure carbon emissions are part of those strategies.

Observability is a key part of technical strategy that requires a joined up approach between dev-ops, development and operations, and architects should promote energy observability as part of this.

### Direct
{% include categoryLabel.html label="CatO" %}

In the embodied section we talked about hardware selection, maximising lifetime and having low manufacture emissions. Procurement strategy should also include observability and emissions in use. Accurate energy observability (and thus carbon monitoring) is not possible without hardware support and so this must be a consideration when selecting hardware for the data centre.

{% include categoryItem.html item="CatOOnsiteEmployeeDevices" id="EmployeeDevices" noLink=true %}
  
Where architects are involved in workforce IT, such as employee devices, there's a few areas they can influence:

- Servers and other infrastructure; prefer devices with low operational power, e.g. an ARM chip device if an option.
- Put requirements on device power management; ensure there is proper testing of device configuration such that laptops run in low power modes with low activity and go to sleep quickly.
- Devise a strategy for device power monitoring which would make carbon reporting much easier and allow improvements in devices or their configuration to be observed over time.

{% include categoryItem.html item="CatONetworkDevices" id="NetworkDevices" noLink=true %}

As with servers, architects can add usage emissions to the procurement evaluation criteria. Architects can help translate business growth requirements into expected data transfer needs and ensure the correct size of networking hardware is selected that is well utilised. Typically networking hardware does not scale down in power in the way standard servers do and so under utilised hardware will have a heavier cost.

Where there is virtual networking functions running purely as software the same utilisation concerns apply as with any application - maximise software, albeit traded off against maximum latency and contention needs, i.e. promote the virtualisation (in software sense of the word) of the software networking appliances.

Having application principles to minimise data transfer can reduce the amount of network traffic and even if this makes only a small reduction to the energy usage of switches and routers it may slow the need to add more hardware during growth. e.g. gRPC, persistent TCP connections.

Patterns like multi-cast for video can be pursued to reduce network capacity needs in the data centre (and ISP). Similarly, large file transfers can be architected to take the most direct route without intermediary systems reducing network emissions and costs. A preference for larger more monolithic applications may also reduce network traffic - but can have other disadvantages.

{% include categoryItem.html item="CatOServers" id="Servers" noLink=true %}

As well as the general application design patterns, senior architects can drive virtualisation strategy for on-prem. For example, they could create a plan for containerisation of workloads (e.g. to Kubernetes) and a migration plan in order to maximise the utilisation of on-prem hardware.

{% include categoryLabel.html label="CatG" %}
  
{% include categoryItem.html item="CatGGenerators" noLink=true %}

### Indirect

{% include categoryLabel.html label="CatC" %}

All the indirect solutions involve a vendor and so it is important that architects, where involved in vendor selection include carbon non-functional requirements. This should include both how the vendor reports emissions but also the level of their emissions and how "green" their electricity is.

{% include categoryItem.html item="CatCCloud" id="Cloud" noLink=true %}

The architect can set principles and present patterns for sustainable application development as per on-prem. In addition they may require the use of cloud specific patterns where applicable such as the use of serverless for infrequently used applications.

The principle of observability remains the same and should be a key technical principle pushed down from architects. For cloud, the architect must find different models to assess cloud energy usage in the absence of hardware monitoring and may recruit data science teams to support this.

{% include categoryItem.html item="CatCSaas" id="Saas" noLink=true %}

The main levers here for the architect are in the aforementioned vendor selection.

Technical principles should also apply for the use of a vendor service as much as for an internal service, e.g. around not calling APIs unnecessarily or caching.

{% include categoryItem.html item="CatCManaged" id="Managed" noLink=true %}

As well as vendor selection and good software design patterns there may be options to improve utilisation as with on-prem, e.g. devising a containerisation strategy to better utilise vendor provided virtualisation. Where the service is data related, principles around data retention can reduce emissions.

{% include categoryLabel.html label="CatD" %}

{% include categoryItem.html item="CatDEndUserDevices" id="EndUserDevices" noLink=true %}

{% include categoryItem.html item="CatDNetworkDataTransfer" id="NetworkTransfer" noLink=true %}
