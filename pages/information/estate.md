---
layout: explore
title: Estimating Estate Emissions
permalink: /information/estate
published: true
---

# Estimating Estate Emissions

The carbon standard shows how you can think about your emissions by breaking them down in a way compatible with the GHG Protocol reporting scopes. At any level from dev team to the whole org it tells you that your tech emissions can be separated into groupings like server embodied emissions, on-prem networking emissions etc.

It doesn't say how you think about these across an organisation and how it might be useful to break them down. To see why this is important remember that there's two aims to low carbon software practices: 
 1. Measuring your carbon emissions
 2. Improving your carbon emissions. 

Some (but not all) measurements can be done at an organisational level, e.g. if there's one cloud organisation that is reported on as a whole or if you just measure electricity going into a data centre used by everyone. This isn't true of improvement which is a distributed activity over the various teams making up an org and requires a breakdown of emissions. 

This section looks at that bigger picture of how to apply the standard to an org's estate and how to breakdown emissions where appropriate. 

# Business view

TODO

![embodied-carbon](/assets/images/estate/business_view.png)

TODO

# Old part
To estimate the total emissions from an organisation's technology estate, it is crucial to understand the scale and composition of the various Impact Categories. 

{% include linkedHeading.html heading="Hardware" level=3 %}

For hardware devices, this entails determining the quantity of each device type within the organisation's inventory. 

Ideal data sources are configuration management databases (CMDBs) from robust IT asset management processes or platforms such as [ServiceNow](https://www.servicenow.com/uk/). In cases where data is incomplete, extrapolation from partial datasets can provide reasonable estimates. These sources may include partially completed asset management records, historic procurement data on devices purchased, employee headcounts per office location, or generic device-to-employee ratios based on job roles.

The accuracy of the underlying data will directly impact the precision of emissions estimates across the entire technology inventory. However, even approximate extrapolated totals can help identify significant emission hotspots. Conducting an inventory-wide emissions assessment enables organisations to pinpoint areas for emission reductions, track performance over time, and work towards minimising the carbon footprint across their entire digital ecosystem.

{% include linkedHeading.html heading="Software" level=3 %}

{% include linkedHeading.html heading="Cloud" level=3 %}
