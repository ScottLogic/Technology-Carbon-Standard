---
layout: explore
title: Estimating Estate Emissions
permalink: /information/estate
published: true
---

# Estate Mapping

This section discusses how to apply the standard to an organisation. Whilst the standard specifies the different categories of emissions that may be presentattributed to tech it doesn't say how to go from an organisational view to numbers in each of the categories. This section addresses this and does so from 2 perspectives:
 1. Quantifying your tech carbon emissions at the org level - typically for reporting
 2. Understanding how to improve them

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

There's multiple sites and each one may be in a different geographical location which could be in multiple countries which will impact the operational emissions. For each site there may a dedicated data centre or a more general location that includes technology components. This may include a dedicated server room but could also be odd pieces of hardware in the office. It would be expected that the dedicated site provided the bulk of emissions then the server rooms and then finally the miscallaneous equipment so it may be better to start on the left in mapping out an organisation. Note that on-site monitors and desktops are handled under organisation user devices later but could be included here - there's valid reasons for both approaches

To get a complete picture of emissions all sites, their locations and all hardware within those sites must be identified as well as a PUE for each one. More detail is provided in the following sections.

{% include linkedHeading.html heading="Device databases" level=3 %}

In order to understand all the servers, networking devices etc the ideal data sources are configuration management databases (CMDBs) from robust IT asset management processes or platforms such as [ServiceNow](https://www.servicenow.com/uk/). 

In cases where data is incomplete, extrapolation from partial datasets can provide reasonable estimates. These sources may include partially completed asset management records, historic procurement data on devices purchased, employee headcounts per office location, or generic device-to-employee ratios based on job roles.

The accuracy of the underlying data will directly impact the precision of emissions estimates across the entire technology inventory. However, even approximate extrapolated totals can help identify significant emission hotspots. Conducting an inventory-wide emissions assessment enables organisations to pinpoint areas for emission reductions, track performance over time, and work towards minimising the carbon footprint across their entire digital ecosystem.

{% include linkedHeading.html heading="Embodied emissions" level=3 %}

Embodied emissions should be based on the asset database or approximations described above. Ideally the database includes manufacturer data about each asset's embodied carbon. Where this is not present approximations may be used based on typical values. See <a href="/information/lifecycle/example/server">Server example</a>
The cooling and lighting boxes are in a different shade of green as these are out of the scope of the TCS for embodied emissions - you should still calculate them for full <a href="/glossary#greenhouse-gas-ghg-protocols">GHGP Scope 3</a>, it's just that this standard doesn't discuss them as they are not tech specific.

{% include linkedHeading.html heading="Operational emissions - reporting" level=3 %}

If an organisation needs to report the total company emissions including any technology ones then the task can be reduced to identifying all sites and then getting the electricity usage for them and the carbon intensity at that site. Where an office is leased and the organisation isn't directly billed then the overall building electricity bill should be divided up and attributed to each org by a measure such as employee count or square footage - though the latter is better suited to heating costs. 

When reporting is wanted on technology specifically, e.g.if a CTO is asked to provide the emissions of all the teams and hardware that they are responsible for then the task is trickier.  

__Data centres__: Assuming no other organisation has equipment in this it should be the simplest case because as above the operational emissions can come directly from the building electricity usage which should be much more accurate than trying to approximate power for many different device classes. 

__Server rooms__: in an office or facility may or may not be measurable in isolation.  In the other cases it must be derived from the equipment database or approximated somehow, e.g. if rough numbers for lighting and non-IT electricity draw are known.  Unlike for the embodied calculation the operational one must take account of the location and the electricity mix at that location including any on-site generators or renewables. 

For a data centre or server room the cooling, lighting etc are shown in a different shade in the above diagram as they are not tech products and for this reason they are not discussed in this standard. Nonetheless, in calculating your total operational emissions they should be included and it is standard when discussing data centre energy and emissions to include a PUE multiplier relating the compute/networking electricity from the supporting electricity for cooling and other devices. In fact it may be tricky to isolate these periphery devices for a data centre where they'll form part of the power draw. 

__Office__: This is the most complicated scenario because there may be user laptops, monitors, lighting, heating etc as well as any server and networking hardware for running software. An aggregate measurement of operational emissions like the data centre electricity is not practical here if you want to specifically provide numbers for a particular device class. In this case the device database or approximations should also be employed and again real numbers for power usage and utilisation are preferred on a device by device basis but approximations can be made based on measuring one or two typical devices and applying to all.  

{% include linkedHeading.html heading="Operational and embodied emissions - improvement" level=3 %}

<img style="max-width: 650px" class="none" alt="" src="/assets/images/estate/on-prem-responsibilities.png" />

The diagram above presents the more complex mapping where improvement is required rather than just carbon reporting at org or tech function level. In this case there are layers for any virtualisation and then clustering that sit on top of the physical servers and then ultimately the applications belonging to different business application teams. 

In this case the mapping must also take account of the layers that the Platform teams have added, e.g. a Kubernetes cluster and then the apps. Operational and embodied emissions should be assigned to particular apps either directly or directly via metrics such as utilisation and memory usage - exactly what to use it out of the scope of the TCS and for individual orgs to decide because it is heavily dependent on implementation. The key point for the estate mapping perspective is to relate the emissions to teams at different levels so that they can make improvements. e.g. the Platform team providing higher utilisation via containerisation or application owners with more efficient server code. 

{% include linkedHeading.html heading="Cloud" level=2 %}
Mapping out the cloud emissions should generally be a lot simpler than for on-prem hardware. A typical organisation will have a structure like the following:

<img style="max-width: 750px" class="none" alt="" src="/assets/images/estate/cloud_structure.png" />

Where terminology for the same concept various across the 3 largest providers this is included on the left. As shown there's usually an org level object and then a set of sub-objects that will often line up with organisational structure and the leaves of the tree are resources such as object storage buckets or VMs. Cloud reporting tools from the main cloud service providers (CSPs) or the Cloud Carbon Footprint (CCF) (see <a href="/information/cloud">Cloud</a>) will be able to provide a number at the root for the whole organisation. 

Where an organisation actually has multiple hierarchies, i.e. 1 real organisation to 2+ cloud ones these must all be identified and reported separately.  

{% include linkedHeading.html heading="Improvement" level=3 %}
As with data centres, improvement requires mapping of usage to business divisions and the development teams that own the services. The CSP tools and CCF will be able to report at the various levels of hierarchy down to Account. Complexities can arise in a couple of ways:
 1. Where teams in the business don't align with cloud accounts or sub-orgs. One way this can happen is if many teams share an account and then tag with the owner. Some CSPs will include tag level data but some won't and nor will CCF and this will limit the ability to assign emissions to teams. 
 2. Some services may be provided by a platform team and shared across many applications, e.g. a database

In both cases proxies like spend, system utilisation can be used instead or number of requests to a service by each team. AWS tags, for example will be available on the cost explorer function even if not on carbon reporting. 

{% include linkedHeading.html heading="Employee devices" level=2 %}

In this section the technology used by people is discussed as opposed to the servers and networking devices described in the on-prem section. These don't relate to software applications unlike the cloud and on-prem categories and so the ammping for understanding is simpler. From a pure reporting point of view most of these emissions may be accounted for in electricity usage numbers. 

This may include the following more common devices:

<img style="max-width: 750px" class="none" alt="" src="/assets/images/estate/employee_devices.png" />

Some devices will be fixed location like a desktop whilst others like laptops are mobile and for those that are fixed they may be in an office/facility or a home working location. For home devices staff or internal users (perhaps in an open source project) could be using their own monitors/equipment or ones purchased for them by the organisation. Occasionally it may be arguable as to whether a device belongs here or in on-prem and it doesn't matter so long as they are included. For example TVs maybe specific to a user, e.g, for testing a smart TV application but could also be providing a dashboard in the office in which case they are likely a permanent always on fixture like servers.  

The following table shows what should be reported with embodied carbon only being relevant for the organisation owned devices. The assumption being that user personal laptops would be purchased anyway and can't be attributed. 
<style>
    tr.ownerTable > th {
        font-weight:bold;
        padding-right:3pt;
    }
</style>
<table>
<tr class="ownerTable">
    <th></th>
    <th>Embodied</th>
    <th>Operational</th>
</tr>
<tr>
    <td>Organisation</td>
    <td>Yes</td>
    <td>Yes</td>
</tr>
<tr>
    <td>User</td>
    <td>Yes</td>
    <td>Yes</td>
</tr>
</table>

{% include linkedHeading.html heading="Operational emissions - special case" level=4 %}
As per the on-prem section, there is a special case for reporting operational emissions where all the organistion wants to do is report Scope 1 or 2 emissions and doesn't want to break out tech. In this case all the office/on-prem devices (including times when laptops are in the office and plugged in) will be included in the office electricity. In the remaining discussion it is assumed that the reporting should include a tech breakdown and that embodied is needed as well as operational emissions.

{% include linkedHeading.html heading="Device inventory" level=3 %}
All equipment purchased by the organisation this should be available via an asset management system, as mentioned in the on-prem section. Where this isn't present approximations will be needed based on employee numbers. In this case the data should include te location which may be not just a specific office or org facility but whether it is for remote working or both in the case of a laptop. This will support more accurate numbers for electricity carbon intensity where the office may have a certain level of renewables or genreation on site whereas home working should assume local grid carbon intensity. 

For user purchased devices an inventory is still needed. For laptops this can be approximated by assuming all users without an org laptop or desktop have a personal one. For monitors, a survey may be done of a subset of staff then extrapolated to get the typical number of monitors and their size. General population data could be used but may underestimate for staff like developers. 
Similarly for personal laptops or desktops a survey will help understand the typical specs in order to provide some average numbers that can scaled across the population.

{% include linkedHeading.html heading="Reporting" level=3 %}
Embodied carbon should be captured for organisation purchased devices as per the inventory but not user purchased as shown in the table above with the source of this information being the device data captured according to the previous section

TODO - tidy up the below, been moving things around

For operational emissions (Category O for user devices) the ownership of the device doesn't matter, just if the internal user is using the device for non-personal reasons. e.g. for a laptop working hours emissions should be captured but not weekend browsing. For all the devices that are at home or mobile electricity carbon intensity should just use the regional level whereas for fixed office items more accuracy may be possible, e.g. if an office is 50% solar. 

Energy usage can come from the information in the inventory - which may be actual devices or approximate. Ideally laptops and desktops would actually capture energy usage but this is unlikely to the the case for most organisations today.

For use of office monitors vs home ones assumptions will be required based on how often users will be in the office but good accuracy on this may not make a significant difference unless there is detailed knowledge of personal monitors which is unlikely. The key point would be to avoid double counting of the same person using both simultaneously. i.e. don't assume a working week for both per person.

<s>
There's 3 categories of devices for thinking about operational emissions:
 1. Those in the office permanently
 2. Those at home permanently
 3. Those that move around like phones and laptops

 For items in 1, then where reporting is needed for the whole organisation and not just for tech assets the office electricity and its carbon intensity can be used as discussed in the on-prem section. 
If a breakdown is needed at the level of technology devices ignoring things like lighting and heating then other methodologies are needed, e.g. capturing the energy consumption of a typical device in each calss and then extrapolating to all the others in the database, or taking datasheet energy if that's not possible.

For items at home permanently then the same methodology should work but device accuracy won't be 
</s>


TODO - simplify or remove table as some of this is captured above and unnecessary here. e.g. number of assets and if embodied carbon is needed. Might just 

The table below summarises the main scenarios and what should be captured and how:

<style>
    tr.deviceTable > th {
        font-weight:bold;
        padding-right:3pt;
    }
</style>
<table>
<tr class="deviceTable">
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
    <td>Asset management system or approximation, e.g. based on number of employees in roles that typically have phone</td>
    <td>Yes</td>
    <td>Yes. Approximation of charge frequency</td>
</tr>
<tr>
    <td>TVs</td>
    <td>Organisation</td>
    <td>Asset management system or approximation</td>
    <td>Yes</td>
    <td>Yes. Approximation of charge requency</td>
</tr>
</table>

 

{% include linkedHeading.html heading="Improving" level=3 %}
Improvement

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