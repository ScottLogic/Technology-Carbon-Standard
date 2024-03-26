---
layout: explore
title: Estimating Estate Emissions
permalink: /information/estate
published: true
---

# Estate Mapping

This section discusses how to apply the standard to an organisation. Whilst the standard specifies the different categories of emissions that may be present it doesn't say how to go from an organisational view to numbers in each of the categories. This section addresses this and does so from 2 perspectives:
 1. Quantifying your carbon emissions for reporting.
 2. Improving your carbon emissions. 

The second requires an understanding not just of the absolute number across the org but also of where emissions fall from a team and service perspective. 


{% include linkedHeading.html heading="Perspectives" level=2 %}

{% include linkedHeading.html heading="Teams and the business" level=3 %}
In order to measure emissions and to drive improvement various divisions of the organisation must be involved and consulted. Many organisations will have divisions like the following for their IT services:
<img style="max-width: 750px" class="none" alt="" src="/assets/images/estate/business_services.png" />

The grey box is out of scope as this is about people and not emissions from tech - therefore it doesn't feature in the standard. More details are provided on each area including which categories they are likely to own. Note that other areas may have an impact on areas they don't own; e.g. A customer website business application team can influence the emissions via the efficiency of their software but (downstream aside) the emissions are produced by the hardware or cloud account owned by infra or platform teams respectively.

<table>
<tr>
    <th>Business service</th>
    <th>Description</th>
    <th>Categories</th>
</tr>
<tr>
    <td>Infrastructure</td>
    <td>Provides physcal compute/storage/networking hardware and data centres</td>
    <td>Cat U, O, G</td>
</tr>
<tr>
    <td>Platform</td>
    <td>manage software layers on top such as container and DB clusters and integration middleware. The platform team also manage the shared cloud organisations.</td>
    <td>Cat C</td>
</tr>
<tr>
    <td>Business Applications</td>
    <td>All business applications including CMS, payments, HR and finance, customer websites.</td>
    <td>Cat C (if directly own SaaS relationships), Cat D</td>
</tr>
<tr>
    <td>Employee Enabling</td>
    <td>Hardware including staff/internal-user laptops and phones. Also software like email, MS Word or equivalent and general productivity software, e.g. JIRA</td>
    <td>Cat U (laptops), Cat C (if directly own SaaS relationships)</td>
</tr>
<tr>
    <td>Delivery</td>
    <td>This is about the delivery of new software, configuring software and supporting software by people.</td>
    <td>N/A</td>
</tr>

</table>

{% include linkedHeading.html heading="Device groupings" level=3 %}
For another perspective consider the groupings of devices and virtual devices: 

<img style="max-width: 750px" class="none" alt="" src="/assets/images/estate/org_view.png" />

That is, think about: 
 * on-prem hardware
 * cloud software
 * the devices used by employees or internal users in the organiation
 * emissions at customer sites caused by using your software 

This is slightly different to the standard categorisation because it can be useful to start with the questoin of what on-prem hardware is present and then once this is known break it down the on-prem into embodied and operational.

Employee devices are handled as their own topic because their analysis is different. Laptops will be transient and may often be consuming electricity out of the workplace. Monitors will be rooted in the office but their operational emissions will vary with working patterns unlike always on server and networking equipment. 

{% include linkedHeading.html heading="Locations" level=2 %}

For all device groupings, in order to calculate emissions the location must be considered. 
<img style="max-width: 550px" class="none" alt="" src="/assets/images/estate/locations.png" />

Whether it is data centres, cloud regions, offices or end users, when mapping out the estate resources must be grouped by location. This should be at least at the country level but more fine grained may be needed if a given location uses non-grid energy which could be high emissions diesel generation or on site solar or wind.  

{% include linkedHeading.html heading="On-prem" level=2 %}


Starting with on-prem hardware, at the birds-eye-view level many orgs will have something like this:

<img style="max-width: 650px" class="none" alt="" src="/assets/images/estate/On-prem-top-level.png" />

where on the left there are the dedicated sites and on the right it is just odd pieces of hardware in the office. It would be expected that the dedicated site provided the bulk of emissions then the server rooms and then finally the miscallaneous equipment.

For the data centres, the operational emissions can come directly from the building electricity usage which may be much more accurate than trying to approximate for many different device classes. Similarly a measurement may also be done into a server room in an office location with measurement equipment. We'd expect a data centre or server room to roughly break up into:

<img style="max-width: 650px" class="none" alt="" src="/assets/images/estate/DataCentre.png" />

where the cooling, lighting etc are shown as grey because they are supporting infrastructure. Nonetheless, when they exist purely to support the running of the application server and networking hardware their impact should be included, normally via a PUE multiplier if not already accounted for in electricity readings. 

<img style="max-width: 650px" class="none" alt="" src="/assets/images/estate/Office.png" />

For the office the situation is more complicated because there may be user laptops, monitors, lighting, heating etc as well as any hardware for running software. An aggregate measurement of operational emissions like the data centre electricity is not practical here because there's too many factors to disentangle. 

{% include linkedHeading.html heading="Hardware databases" level=3 %}

For embodied carbon and for operational when you don't have any energy measurements the ideal data sources are configuration management databases (CMDBs) from robust IT asset management processes or platforms such as [ServiceNow](https://www.servicenow.com/uk/). In cases where data is incomplete, extrapolation from partial datasets can provide reasonable estimates. These sources may include partially completed asset management records, historic procurement data on devices purchased, employee headcounts per office location, or generic device-to-employee ratios based on job roles.

The accuracy of the underlying data will directly impact the precision of emissions estimates across the entire technology inventory. However, even approximate extrapolated totals can help identify significant emission hotspots. Conducting an inventory-wide emissions assessment enables organisations to pinpoint areas for emission reductions, track performance over time, and work towards minimising the carbon footprint across their entire digital ecosystem.

{% include linkedHeading.html heading="Reporting vs improvement" level=3 %}

<img style="max-width: 650px" class="none" alt="" src="/assets/images/estate/on-prem-responsibilities.png" />

{% include linkedHeading.html heading="Cloud" level=2 %}
Mapping out the cloud emissions should generally be a lot simpler than for on-prem hardware. A typical organisation will have a structure like the following:

<img style="max-width: 750px" class="none" alt="" src="/assets/images/estate/cloud_structure.png" />

Where terminology for the same concept various across the 3 largest providers this is included on the left. 

{% include linkedHeading.html heading="Employee devices" level=2 %}
This will typically be laptops and monitors mainly but could also include phones, tablets and TVs. 

Monitors will typically be in the office but staff or internal users (e.g. in an open source project) may be using their own monitors at home or a home monitor purchased for them by the organisation.

For everything owned by the company this should be available via an asset management system, as mentioned in the on-prem section. 


<table>
<tr>
    <th>Hardware</th>
    <th>Ownership</th>
    <th>Number of assets</th>
    <th>Embodied?</th>
    <th>Operational?</th>
</tr>
<tr>
    <td>Desktops</td>
    <td>Organisation</td>
    <td>Asset management system</td>
    <td>Yes. From data sheets</td>
    <td>Yes. Approximation based on data sheet power and assumptions on working hours and utilisation</td>
</tr>
<tr>
    <td rowspan="2">Laptops</td>
    <td>Organisation</td>
    <td>Asset management system</td>
    <td>Yes - as per desktop</td>
    <td>Yes - as per desktop</td>
</tr>
<tr>
    <td>Personal</td>
    <td>Calculated based on user numbers</td>
    <td>No</td>
    <td>Yes, Approximation based on typical laptop power and assumptions on working hours and utilisation</td>
</tr>
<tr>
    <td rowspan="2">Monitors</td>
    <td>Organisation</td>
    <td>Asset management system</td>
    <td>Yes. Approximation based on data sheet power and assumptions on working hours</td>
    <td>Yes</td>
</tr>
<tr>
    <td>Personal</td>
    <td>Surveys or approximations based on user numbers</td>
    <td>No</td>
    <td>Yes. Approximation of typical size, power etc</td>
</tr>
<tr>
    <td>Phones</td>
    <td>Organisation</td>
    <td>Asset management system</td>
    <td>Yes</td>
    <td>Yes. Approximation of charge requency</td>
</tr>
</table>



{% include linkedHeading.html heading="End user devices" level=2 %}
There's broadly 3 types of end user/consumer device:
 * Consumer devices like phones, tablet, TVs and laptops
 * IoT devices which may be provided by the organisation selling the software
 * Servers for service to service communication

{% include linkedHeading.html heading="Consumer devices" level=2 %}
Metrics should be available as to the number of unique devices - can be approximated based on number of users.
Similarly the balance of device types should be known but where not a rough approximation should be made based on general population data about how many people consume content in different mediums

{% include linkedHeading.html heading="TODOs" level=3 %}

TODO - something about larger umbrella organisations