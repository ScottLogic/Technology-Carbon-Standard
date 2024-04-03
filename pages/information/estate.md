---
layout: explore
title: Estimating Estate Emissions
permalink: /information/estate
published: true
---

# Estate Mapping

This page discusses how to apply the Tech Carbon Standard (TCS) to an organisation. Whilst the main [TCS diagram](https://www.techcarbonstandard.org/) specifies the different categories of technology emissions that should be recorded it doesn't explain how to go from an organisational view to numbers in each of the categories. This following sections address this and do so from 2 perspectives:
 1. Quantifying your tech carbon emissions at the org level - typically for reporting
 2. Understanding how to improve them

The second requires an understanding not just of the absolute number across the org but also of where emissions fall from a team and service perspective so that emissions improvements can be driven by the teams who can affect them.

{% include linkedHeading.html heading="Organisational level view" level=2 %}

In order to measure emissions and to drive improvement various technology divisions of the organisation must be involved and consulted. Every organisation is different, but many organisations will have amongst their many business services some IT ones such as the following:
<img style="max-width: 750px" class="none" alt="" src="/assets/images/estate/business_services.png" />

Firstly, note that the grey delivery services box is out of scope because development, delivery management etc is about people and the emissions from people is explicitly out of scope of the TCS which focuses on IT software and hardware. The table below provides more detail on each of the business services:  

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

The categories column is about who owns the infra or the relationship with the infra provider rather than any team that may impact the category. 
Put another way, if you wanted to report your cloud emissions numbers you wouldn't need to talk to every application team just the team owning the cloud account (Platform in this diagram). On the other hand if you wanted to understand and improve the efficiency of the less efficient apps running on the cloud then you would need to talk to the app teams. 


{% include linkedHeading.html heading="Relating the business functions to emissions sources" level=3 %}

In order to sucessfully map out the sources of emissions in an organisation the following groupings are recommended:
 * On-prem hardware
 * Cloud infrastructure
 * SaaS
 * The devices used by employees or internal users in the organiation
 * Customer emissions when using the organisation's software 

These groupings are slightly different to the Tech Carbon Standard categorisation because:
 1. It's necessary to know what on-prem hardware is present before breaking it down the on-prem into embodied and operational.
 2. SaaS is often managed separately and the relationship with SaaS providers may be owned by a business team rather than a central teams (unless many teams use the same product).
 3. Employee/internal user devices are handled as their own topic because their analysis is different. Laptops will be mobile and may often be consuming electricity out of the workplace. Monitors may also be in home offices and for all devices their operational emissions will vary with working patterns unlike always on server and networking equipment. 

The following diagram shows the relationship between the business services and the emissions sources fo the examples above:

<img style="max-width: 750px" class="none" alt="" src="/assets/images/estate/org-devices-relationship.png" />

In other words, this shows who needs to be consulted in order to capture each emissions grouping. 
It assumes that internal SaaS software like JIRA or Github is owned by the employee enabling business services division and similar for SaaS business applications. 

The following sections will cover each of these groupings in more detail including the various types of emissions that fall within them and which TCS categories they fall under. Before this though there is one more topic to cover which is location.

{% include linkedHeading.html heading="Locations of emissions sources" level=3 %}
 
<img style="max-width: 550px" class="none" alt="" src="/assets/images/estate/smaller_map.png" />

Whether it is data centres, cloud regions, offices or end users, resources must be grouped by location in order to calculate the operational and downstream emissions. This should be at least at country level but more fine grained data may be needed if a particular location uses non-grid energy, for example if an office or facility has high emissions diesel generation or on-site solar or wind.  

{% include linkedHeading.html heading="On-prem" level=2 %}


Starting with on-prem hardware, many organisations will have some or all of the following:

<img style="max-width: 650px" class="none" alt="" src="/assets/images/estate/On-prem-extended.png" />

A the top the diagram shows there may be multiple sites and each has a geographical location so the different sites could be in multiple countries which will impact the operational emissions. A given site could be a dedicated data centre or a more general location that includes technology components. This may include a dedicated server room but could also be odd pieces of hardware in the office. It would be expected that the dedicated site provided the bulk of emissions then the server rooms and then finally the miscallaneous equipment so it may be better to start on the left in mapping out an organisation. Note that on-site monitors and desktops are handled under organisation user devices later but could be included here - there's valid reasons for both approaches

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

<img style="max-width: 650px" class="none" alt="" src="/assets/images/estate/business_services_breakdown.png" />

In order to go beyond reporting and improve emissions it is necessary not just to to map out the hardware infrastructure owners but also the owners of the software running on the hardware because improvements can come from better software implementations as well as procuring more efficient hardware. In the business IT services diagram earlier, the business applications block can be broken down into various services offered by the business that are in turn implemented by particular applications (not shown) that are ultimately owned by particular technology teams who have the responsibility for developing and/or maintaining those applications (or for SaaS own the relationship).

With this in mind a more detailed mapping of the on-prem estate can be considered:

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

In this section the technology used by people is discussed and this may include the following more common devices:

<img style="max-width: 750px" class="none" alt="" src="/assets/images/estate/employee_devices.png" />

Ownership, usage and location patterns will often differ compared to the servers and networking devices in the on-prem section:

* Usage will generally be based around office hours
* User devices are assigned to individuals (or occasionally a team, e.g. a test device or TV) which makes attribution to teams much easier than for servers that may belong to a platform team but run multiple business apps from other teams
* Although some devices will be in a fixed office/facility location, e.g. a desktop, others including laptops are mobile. Also monitors may be in a fixed home working location. 
* For home devices staff or internal users (perhaps in an open source project) could be using their own monitors/equipment rather than ones purchased for them by the organisation. 

Note: occasionally it may be arguable as to whether a device belongs here or in on-prem and it doesn't matter so long as they are included. For example TVs maybe specific to a user, e.g, for testing a smart TV application but could also be providing a dashboard in the office in which case they are likely a permanent always on fixture like servers.  



<s>and these differ from the previously discussed servers, networking and cloud in terms of location, usage patterns and also because they are not usually running a specific application belonging to a specific business team (e.g. online payments) as with servers.</s>

 <s> From a pure reporting point of view most of these emissions may be accounted for in electricity usage numbers. </s> 

{% include linkedHeading.html heading="Operational emissions - special case" level=4 %}
As per the on-prem section, there is a special case for reporting operational emissions where all the organistion wants to do is report Scope 1 or 2 emissions at org or office/facility level and doesn't want to break out technology. In this case all the office/on-prem devices (including times when laptops are in the office and plugged in) will be included in the office electricity. In the remaining discussion it is assumed that the reporting should include a tech breakdown and that embodied (i.e. GHGP Scope 3) is needed as well as operational emissions.

{% include linkedHeading.html heading="Device inventory" level=3 %}
All equipment purchased by the organisation should be available via an asset management system, as mentioned in the on-prem section. Where this isn't present approximations will be needed based on employee numbers. For user devices the data should include the location which may be not just a specific office or org facility but whether it is for remote working or both in the case of a laptop. This matters because electricity carbon intensity may be different. 

For user purchased devices (e.g. personal laptop or monitor) numbers are still needed. For laptops this can be approximated by assuming all users without an org laptop or desktop have a personal one. For monitors, a survey may be done of a subset of staff then extrapolated to get the typical number of monitors and their size. General population data could be used but may underestimate for staff like developers. 
Similarly for personal laptops or desktops a survey will help understand the typical specs in order to provide some average numbers that can scaled across the population.

{% include linkedHeading.html heading="Reporting" level=3 %}

Given that not all devices are organisation purchased this affects how emissions should be reported and is captured in the following table. This shows that embodied carbon is only for organisation devices with the assumption being that user personal laptops would be purchased anyway and can't be attributed. 


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

Ideally embodied carbon will fall directly out of the inventory data and should be combined with device lifetime information. e.g. if a company laptop is refreshed every 5 years then the embodied carbon for al devices should be divided by 5. Where embodied carbon is not included in the inventory or can't quickly be derived through cross referencing data sheets, then approximations can be made using emissions data for similar hardware. e.g. if you have 200 desktops and the manufacturer doesn't provide a value then take a desktop of similar spec and age that does and use the value from that. Such approximations should be explicitly captured. 

For operational emissions the ownership of the device doesn't matter like for embodied carbon, but whether the user is using the device for non-personal reasons does. For example, for a laptop working hours emissions should be captured but not weekend browsing. For all the devices that are mobile or home based the electricity carbon intensity should come from the regional level whereas for fixed office/facility items more accuracy may be possible, e.g. if an office is known to be 50% solar on average. 

Energy usage can come from the information in the inventory and as with the embodied carbon this may be directly in the inventory or need looking up in data sheets. Ideally laptops and desktops would actually capture energy usage but this is unlikely to the the case for most organisations today.

Care should be taken to avoid double counting any equipment. For example for monitors assumptions will be required based on how often users will be in the office vs at home and emissions only attributed to one of the 2 at a given point in time. 

The table below captures some of the things to consider for various device types:

<style>
    tr.deviceTable > th {
        font-weight:bold;
        padding-right:3pt;
    }
</style>
<table>
<tr class="deviceTable">
    <th>Hardware</th>
    <th>Considerations</th>
</tr>
<tr>
    <td>Desktops</td>
    <td>Device power, working hours, average CPU utilisation</td>
</tr>

<tr>
    <td>Laptops</td>
    <td>Device power, working hours, average CPU utilisation, percentage of time outside the office</td>
</tr>
<tr>
    <td >Monitors</td>    
    <td>Device power, working hours</td>
</tr>
<tr>
    <td>User phones</td>    
    <td>Typical battery capacity and charge frequency, e.g. 0.7 of full charge once per day</td>
</tr>
<tr>
    <td>Test phones</td>    
    <td>Typical battery capacities and usage frequency, e.g. 20% of devices in use each week</td>
</tr>
<tr>
    <td>Test TVs</td>    
    <td>Device power consumption and usage, e.g. 2 hours a day</td>
</tr>
</table>
Device power may be specific or for 1 or 2 exemplar devices where not available which will always be the case for user owned devices. 
 

{% include linkedHeading.html heading="Improving" level=3 %}
For servers and cloud the analysis for improvement was more complex than reporting but the opposite is true for devices. In the case of servers there was not just the question of hardware embodied emissions and harware energy consumption but also the way the servers were utilised and the efficiency of the software running on them. That software could in turn be mapped to teams who managed or developed it. 

Clear this isn't the case for monitors but also for laptops the software running on them isn't the main concern as the bulk of the carbon will be from their manufacture not the use (TODO insert link).
User owned devices (like personal laptops) can be ignored and the focus can be on changing the default choices of device purchased by the org. e.g. if there are 1 or 2 procurement teams then all that matters is the choices of devices bought, their longevity and disposal. 

{% include linkedHeading.html heading="End user devices" level=2 %}
As a reminder, this is primarily about the emissions caused by consumers using the organisation's services. Popular games and social media apps in particular may cause users to spend additional hours every week on their phone/tablet/device, using electricity as they do. 

There's broadly 3 types of end user/consumer device:
 * Standard devices like phones, tablet, TVs and laptops
 * IoT devices which may be provided by the organisation selling the software
 * Servers for service to service communication

The following sections go through each of these. A judgement should be taken as to whether the downstream emissions are worth calculating in any depth. For example, if customer numbers are in the hundreds or less or if API calls are in the thousands per day it is quite likely these emissions will just be noise vs other tech emissions. On the other hand, a video streaming or gaming app with hundreds of thousands of users using the app for hours at shouldn't be ignored. Start with rough approximations based on the information in <a href="/categories/downstream">Downstream</a> and what follows before deciding whether to go any further. 


{% include linkedHeading.html heading="Consumer devices" level=3 %}

<img style="max-width: 650px" class="none" alt="" src="/assets/images/estate/devices_process.png" />

As described in <a href="/information/lifecycle/user">Hardware Emissions</a> it should be possible to obtain estimates of average energy usage per unit time for an app or site on various device types. e.g. via Firefox profiling for a website/app on 2 or 3 common laptops. This will then need scaling across the user base. 

The precise details of all the phones, tablets etc running your software or accessing your servers will not be visible but many organisations will have analytics data such as the following: 

<style>
    tr.infoTypeTable > th {
        font-weight:bold;
        padding-right:3pt;
    }
</style>
<table>
<tr class="infoTypeTable">
    <th>Info type</th>
    <th>Why it is useful</th>
</tr>
<tr>
    <td>Number of users</td>
    <td>Scaling factor for emisions</td>
</tr>
<tr>
    <td>Device breakdown</td>
    <td>Different device types will have different energy usage for a given app or site. May have a different mix of wifi vs mobile network too</td>
</tr>
<tr>
    <td>Average interaction per user per day</td>
    <td>Energy consumed will depend on time spent on an app or site</td>
</tr>
<tr>
    <td>User locations</td>
    <td>Affects the carbon intensity. Also if combined with server locations it would allow higher network energy to be assigned to more distant users</td>
</tr>
</table>

Where this isn't all available a rough approximations can still be made, e.g. if you don't know the device breakdown there may be public info about content consumption via device for similar websites or apps.

With this information the average energy on device of a particular type (like tablet) in a given time period (e.g. per minute) can be multiplied by the data about number of devices and average usage per day/week/year. Location data can then be used to get carbon intensity for the users in order to provide the final emissions.

For networking energy you may look at app the metrics for APIs called to understand total traffic across endpoints or you can use device analytics to capture total data sent from the app. With the former you'll need to aggregate metrics from lots of serverside locations - some of which for SaaS endpoints may not be in your control. The alternative option of using device analytics will allow you to get all network traffic in one go although you may still want to break this down, e.g, if one heavily hit endpoint is running the other side of the world and so more energy intensive vs others in the same country. 


{% include linkedHeading.html heading="IoT" level=3 %}
An example of this would be a smart camera or a sensor. This is very similar to consumer devices for energy usage except that:

 * the devices being used are known - unlike the hundreds of laptop models
 * usage patterns will be different but known, e.g. on all the time but in low power mode with a regular awake and check cycle or powerup-on-activity

For these reasons it should be easier to get an accurate energy per device for IoT devices. 

Where the org being measured and reported on has sold the IoT device to the consumer then the emissions from this must also be reported and is again just a case of scaling per device emissions by number of devices. Note that calculating the emissions of manufacture is out of the scope of this standard. 



{% include linkedHeading.html heading="Server to server" level=3 %}

Rather than a consumer or user in another business using an organisation's service via a website or app there is also the possibility of customer's server directly making API calls. In this case the only energy usage is the downstream network energy from the external business's network through to the measured org's networks.

In this case the only information available will be the number of API calls and possibly location data, either from knowledge of the customer or based on IP lookups. 


{% include linkedHeading.html heading="Improvement" level=3 %}
Starting with device energy (as opposed to network) where improvement is needed then the same data is useful as per the reporting - energy on device types for typical usage scaled out by the number of users and devices. Location doesn't matter here as it can't be controlled for customers.

Normally a site or app will be owned by a particular team so this is much easier to map than for servers running the software of many teams. The exception is a micro-frontend architecture or an app with many plugins where certain pages or page sections are very power hungry compared to others. This should be possible to identify via energy profiling so that the total energy can be attributed to the separate pages and teams for driving improvement. 

For networking, API endpoints should be mapped to business services and the development teams or SaaS products responsible. e.g. an app calls 15 different services but 80% of traffic is to one of them then 80% of emissions can be attributed to that team. Attribution may be done by number of requests and/or data transferred; there's not a definitive right way as data transferred would capture large unnessary payloads but miss cases of excessive TLS connections being setup.  

<img style="max-width: 550px" class="none" alt="" src="/assets/images/estate/api_to_business.png" />

{% include linkedHeading.html heading="Mapping large organisations" level=2 %} 

For a small to medium size organistion of, for example, 100 employees, then the organisation will typically be in a single line of business and have a relatively straightforward hierarchical structure. There may still be challenges in mapping the technical estate and deriving emissions but the problem is understood. 

<img style="max-width: 550px" class="none" alt="" src="/assets/images/estate/large_org.png" />

In larger and/or more complex organisations it is not so simple. Often an organisation does multiple things and may have various separate subsidiaries that are not aligned or only partially aligned from a tech perspective. This may stem from an acquisition whereby there has yet to be full tech re-platforming. It may be that some HR systems and single-sign on is provided across the complete organisation but otherwise a subsidiary is run independently.

The level at which the mapping exercise is carried out relates more to business architecture and business needs than technology. For example, if 2 subsidiaries are run very independently then it may make sense to have the mapping exercise be done independently with separate upstream operational cloud, on prem etc figures given to each with the option to then roll up. 

<img style="max-width: 550px" class="none" alt="" src="/assets/images/estate/large_org_share.png" />

Where this can be more complex is when there is some sharing. In this case we may either pull out the shared functions or have one unit treat the other as a SaaS product. e.g. imagine a flight booking company also has a hotel business that is largely separate but shares the HR system and we are trying to assess the emissions of the hotel business and look for improvements. We may choose to ignore this and say it'll be dealt with when considering the flight part of the business. Or if we want to report for scope 3 as fully as possible then we may just treat it as a SaaS product that we approximate early on and later attribute a percentage of emissions to.

It should also be born in mind that as with financial cost, where there are duplicated functions across different parts of a complex org, then this will result in duplicated emissions and from an analysis point of view this is useful to know unless there is a deliberate design to keep the business areas separate, for example, for future sales. 

This implies therefore that whilst it is fine to perform the mapping exercise at sub-org levels, once all are done they should be compared in terms of the business services supported by IT and where they are aligned and not. 

