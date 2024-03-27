---
layout: explore
title: Estimating Estate Emissions
permalink: /information/estate
published: true
---

# Estate Mapping

This section discusses how to apply the standard to an organisation. Whilst the standard specifies the different categories of emissions that may be presentattributed to tech it doesn't say how to go from an organisational view to numbers in each of the categories. This section addresses this and does so from 2 perspectives:
 1. Quantifying your carbon emissions for reporting.
 2. Improving your carbon emissions. 

The second requires an understanding not just of the absolute number across the org but also of where emissions fall from a team and service perspective. 

{% include linkedHeading.html heading="Organisational level view" level=2 %}

In order to measure emissions and to drive improvement various divisions of the organisation must be involved and consulted. Every organisation is different, but many organisations will have amongst their many business services some IT Services divided up like the following:
<img style="max-width: 750px" class="none" alt="" src="/assets/images/estate/business_services.png" />

The grey box is out of scope as this is about people and not emissions from tech - therefore it doesn't feature in the standard. The table below provides more detail:  

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

The categories column is about who owns the infra or the relationship with the infra provider but other teams may impact the category. e.g. an inefficient business application running within on-prem infra will increase emissions. 
Put another way, if you wanted to understand your cloud emissions you wouldn't need to talk to every application team just the team owning the cloud account (Platform in this diagram) but if you wanted to improve the efficiency of apps then you would. 

Often, as shown above, Infrasturcture and Platform teams provided servers, clusters, databases that are used by all or parts of the business. For the purpose of improving emissions, emissions owned by these teams or org divisions may be attributed to divisions in the Business and Employee Enabling areas according to. 

Put another way, if you wanted to understand your cloud emissions you wouldn't need to talk to every application team just the team owning the cloud account (Platform in this diagram) but if you wanted to improve the efficiency of apps then you would. 


{% include linkedHeading.html heading="Relating to emissions sources" level=3 %}

Moving to consider the sources of emissions, from a mapping perspective the following grouping is recomemnded:
 * On-prem hardware
 * Cloud infrastructure
 * SaaS
 * The devices used by employees or internal users in the organiation
 * Emissions at customer sites caused by using your software 

This is slightly different to the Tech Carbon Standard categorisation because:
 1. It's necessary to know what on-prem hardware is present before breaking it down the on-prem into embodied and operational.
 2. SaaS is often managed separately and the relationship with SaaS providers may be owned by a business team rather than a central teams (unless many teams use the same product).
 3. Employee/internal user devices are handled as their own topic because their analysis is different. Laptops will be mobile and may often be consuming electricity out of the workplace. Monitors may also be in home offices and for all devices their operational emissions will vary with working patterns unlike always on server and networking equipment. 

The following diagram shows how, for the example org above the ownership between teams and the sources of emissions could look:

<img style="max-width: 750px" class="none" alt="" src="/assets/images/estate/org-devices-relationship.png" />

It assumes that internal SaaS software like JIRA or Github is owned by the internal employee enabling business services division and similar for SaaS business applications. 

With an understanding of possible sources of emissions and who owns them it is possible to drop down into each area, e.g. On-prem and capture the emissions there across the relavent TCS categories. 


{% include linkedHeading.html heading="Locations of emissions sources" level=3 %}
 
<img style="max-width: 550px" class="none" alt="" src="/assets/images/estate/locations.png" />

Whether it is data centres, cloud regions, offices or end users, resources must be grouped by location in order to calculate the operational and downstream emissions. This should be at least at the country level but more fine grained data may be needed if a particular location uses non-grid energy which could be high emissions diesel generation or on site solar or wind.  

{% include linkedHeading.html heading="On-prem" level=2 %}


Starting with on-prem hardware, many orgs will have some of the following:

<img style="max-width: 650px" class="none" alt="" src="/assets/images/estate/On-prem-extended.png" />

There's multiple sites and each one may be in a different geographical location which could be in multiple countries which will impact the operational emissions. For each site there may a dedicated data centre or a more general location that includes technology components. This may include a dedicated server room but could also be odd pieces of hardware in the office. It would be expected that the dedicated site provided the bulk of emissions then the server rooms and then finally the miscallaneous equipment so it may be better to start on the left in mapping out an organisation. Note that on-site monitors and desktops could be included here but in this mapping will be managed under employee devices for reasons discussed earlier. Both approaches are valid.

To get a complete picture of emissions all sites, their locations and all hardware within those sites must be identified as well as a PUE for each one. More detail is provided in the following sections.

{% include linkedHeading.html heading="Device databases" level=3 %}

In order to understand all the servers, networking devices etc the ideal data sources are configuration management databases (CMDBs) from robust IT asset management processes or platforms such as [ServiceNow](https://www.servicenow.com/uk/). 

In cases where data is incomplete, extrapolation from partial datasets can provide reasonable estimates. These sources may include partially completed asset management records, historic procurement data on devices purchased, employee headcounts per office location, or generic device-to-employee ratios based on job roles.

The accuracy of the underlying data will directly impact the precision of emissions estimates across the entire technology inventory. However, even approximate extrapolated totals can help identify significant emission hotspots. Conducting an inventory-wide emissions assessment enables organisations to pinpoint areas for emission reductions, track performance over time, and work towards minimising the carbon footprint across their entire digital ecosystem.

{% include linkedHeading.html heading="Embodied emissions" level=3 %}

Embodied emissions should be based on the asset database or approximations described above. Ideally the database includes manufacturer data about each asset's embodied carbon. Where this is not present approximations may be used based on typical values. See <a href="/information/lifecycle/example/server">Server example</a>
The cooling and lighting boxes are in a different shade of green as these are out of the scope of the TCS for embodied emissions - you should still calculate them for full <a href="/glossary#greenhouse-gas-ghg-protocols">GHGP Scope 3</a>, it's just that this standard doesn't discuss them as they are not tech specific.

{% include linkedHeading.html heading="Operational emissions" level=3 %}

For each data centre, the operational emissions can come directly from the building electricity usage which may be much more accurate than trying to approximate for many different device classes. Server rooms may or may not be measurable in isolation.  In the other cases it must be derived from the equipment database or approximated somehow, e.g. if rough numbers for lighting and non-IT electricity draw are known.  Unlike for the embodied calculation the operational one must take account of the location and the electricity mix at that location including any on-site generators or renewables. 

For a data centre or server room the cooling, lighting etc are shown in a different shade in the above diagram as they are not tech products and for this reason they are not discussed in this standard. Nonetheless, in calculating your total operational emissions they should be included and it is standard when discussing data centre energy and emissions to include a PUE multiplier relating the compute/networking electricity from the supporting electricity for cooling and other devices. In fact it may be tricky to isolate these periphery devices for a data centre where they'll form part of the power draw. 

For the office the situation is more complicated because there may be user laptops, monitors, lighting, heating etc as well as any hardware for running software. An aggregate measurement of operational emissions like the data centre electricity is not practical here because there's too many factors to disentangle. In this case the device database or approximations should also be employed and again real numbers for power usage and utilisation are preferred on a device by device basis but approximations can be made based on typical devices and average utilisation where unavailable. 

{% include linkedHeading.html heading="Reporting vs improvement" level=3 %}

<img style="max-width: 650px" class="none" alt="" src="/assets/images/estate/on-prem-responsibilities.png" />

The diagram above presents the more complex mapping where improvement is required rather than just reporting. In this case there are layers for any virtualisation and then clustering that sit on top of the physical servers and then ultimately the applications belonging to different business application teams. 

In this case the mapping must also take account of the layers that the Platform teams have added, e.g. a Kubernetes cluster and then the apps. Operational and embodied emissions should be assigned to particular apps either directly or directly via metrics such as utilisation and memory usage - exactly what to use it out of the scope of the TCS and for individual orgs to decide because it is heavily dependent on implementation. The key point for the estate mapping perspective is to relate the emissions to teams at different levels so that they can make improvements. e.g. the Platform team providing higher utilisation via containerisation or application owners with more efficient server code. 

{% include linkedHeading.html heading="Cloud" level=2 %}
Mapping out the cloud emissions should generally be a lot simpler than for on-prem hardware. A typical organisation will have a structure like the following:

<img style="max-width: 750px" class="none" alt="" src="/assets/images/estate/cloud_structure.png" />

Where terminology for the same concept various across the 3 largest providers this is included on the left. As shown there's usually an org level object and then a set of sub-objects that will often line up with organisational structure and the leaves of the tree are resources such as object storage buckets or VMs. Cloud reporting tools from the main cloud service providers (CSPs) or the Cloud Carbon Footprint (CCF) (see <a href="/information/cloud">Cloud</a>) will be able to provide a number at the root for the whole organisation. 

Where an organisation actually has multiple hierarchies, i.e. 1 real organisation to 2+ cloud ones these must all be identified and reported separately.  

{% include linkedHeading.html heading="Reporting vs improvement" level=3 %}
As with data centres, improvment requires mapping of usage to business divisions and the development teams that own the services. The CSP tools and CCF will be able to report at the various levels of hierarchy down to Account. Complexities can arise in a couple of ways:
 1. Where teams in the business don't align with cloud accounts or sub-orgs. One way this can happen is if many teams share an account and then tag with the owner. Some CSPs will include tag level data but some won't and nor will CCF and this will limit the ability to assign emissions to teams. Proxies like system utilisation can be used instead. 
 2. Some services may be provided by a platform team and shared across many applications, e.g. a database

{% include linkedHeading.html heading="Employee devices" level=2 %}

This may include the following devices:

<img style="max-width: 750px" class="none" alt="" src="/assets/images/estate/employee_devices.png" />

Some devices will be fixed location like a desktop whilst others like laptops are mobile. Also whilst TVs will typically be in the office (e.g. for a dashboard) most could be at home or the office even if fixed location. For example staff or internal users (perhaps in an open source project) could be using their own monitors at home or a home monitor purchased for them by the organisation.

All equipment purchased by the organisation this should be available via an asset management system, as mentioned in the on-prem section. Where this isn't present approximations will be needed based on employee numbers. For all these assets embodied carbon should be captured as part of Category U. Where an internal user is using their own laptop, tablet etc then embodied carbon should not be captured as the assumption is they'd have this device anyway. 

For operational emissions (Category O for user devices) the ownership of the device doesn't matter, just if the internal user is using the device for non-personal reasons. e.g. for a laptop working hours emissions should be captured but not weekend browsing. For all the devices that are at home or mobile electricity carbon intensity should just use the regional level whereas for fixed office items more accuracy may be possible, e.g. if an office is 50% solar. 

The table below summarises the main scenarios and what should be captured and how:

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
    <td>Yes. From data sheets or taking average size and typical example if not</td>
    <td>Yes. Approximation based on data sheet power and assumptions on working hours</td>
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

For use of office monitors vs home ones assumptions will be required based on how often users will be in the office but good accuracy on this may not make a significant difference unless there is detailed knowledge of personal monitors which is unlikely. The key point would be to avoid double counting of the same person using both simultaneously. i.e. don't assume a working week for both per person. 

{% include linkedHeading.html heading="End user devices" level=2 %}
TODO - only partially done so far

There's broadly 3 types of end user/consumer device:
 * Consumer devices like phones, tablet, TVs and laptops
 * IoT devices which may be provided by the organisation selling the software
 * Servers for service to service communication

{% include linkedHeading.html heading="Consumer devices" level=3 %}
Metrics should be available as to the number of unique devices - can be approximated based on number of users.
Similarly the balance of device types should be known but where not a rough approximation should be made based on general population data about how many people consume content in different mediums

{% include linkedHeading.html heading="IoT" level=3 %}
TODO

{% include linkedHeading.html heading="Server to server" level=3 %}
TODO

{% include linkedHeading.html heading="TODOs" level=3 %}

TODO - something about larger umbrella organisations