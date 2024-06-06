---
layout: category
title: Estimating Estate Emissions
permalink: /information/estate
published: true
---

# Estate Mapping

This page discusses how to apply the Tech Carbon Standard (TCS) to an organisation. It builds on the main [TCS diagram](https://www.techcarbonstandard.org/) by explaining how to go from an organisational view to emissions numbers in each of the categories and does so from 2 perspectives:
 1. Quantifying an org's tech carbon emissions
 2. Understanding how to reduce them

The second requires an understanding not just of the absolute number across the org but also of where emissions fall from a team and service perspective so that emissions improvements can be driven by the teams who can affect them.

{% include linkedHeading.html heading="Organisational level view" level=2 %}

In order to measure emissions and to drive improvement various it is necessary to understand all the different information technology teams who manage hardware and software in the organisation - without them you can't do the mapping or assign work to reduce emissions. Every organisation is different, but many organisations will have amongst their many business services some IT ones such as the following:
<img style="max-width: 750px; background-color: white; padding: 8px; border-radius:20px" class="none" alt="" src="/assets/images/estate/business_services.png" />

Firstly, note that the grey delivery services box is out of scope because development, delivery management etc is about people (assume tooling like Github falls with the Employee Enabling box) and the emissions from people is explicitly out of scope of the TCS which focuses on IT software and hardware. The table below provides more detail on each of the business services:  

<table>
<tr>
    <th>Business service</th>
    <th>Description</th>
    <th>Categories</th>
</tr>
<tr>
    <td>Infrastructure</td>
    <td>Provides physcal compute/storage/networking hardware and data centres. May also provide basic virtualisation</td>
    <td>Cat U, O, G</td>
</tr>
<tr>
    <td>Platform</td>
    <td>Manage software layers on top of hardware such as container and DB clusters and integration middleware. The platform team also manage the shared cloud organisations.</td>
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
 1. It's necessary to know what on-prem hardware is present before breaking it down into embodied and operational.
 2. SaaS is often managed separately and the relationship with SaaS providers may be owned by a business team rather than a central team (unless many teams use the same product).
 3. Employee/internal user devices are handled as their own topic because their analysis is different. Laptops will be mobile and be consuming electricity off-premises, monitors may be in home offices and for all devices their operational emissions will vary with working patterns unlike always-on server and networking equipment. 

The following diagram shows the high level relationship between the business services and the emissions sources for the examples above:

<img style="max-width: 750px; background-color: white; padding: 8px; border-radius:10px" class="none" alt="" src="/assets/images/estate/org-devices-relationship.png" />

In other words, this shows who needs to be consulted in order to capture each emissions grouping. 
It assumes that internal SaaS software like JIRA or Github is owned by the employee enabling business services division and similar for SaaS business applications. Each organisation will differ but by doing a mapping such as this at the start of the process it makes it easier to ensure all the teams and the software/hardware they manage is understod. 
A similar but sometimes more complex mappings will be required for reducing/improving emissions: for example teams under Platform and Business Applications will affect the emissions of On-prem Hardware according to how efficiently they utilise it. 

The following sections will cover each of these groupings in more detail including the various types of emissions that fall within them and which TCS categories they fall under. Before this there is one more topic to cover which is location.

{% include linkedHeading.html heading="Locations of emissions sources" level=3 %}
 
<img style="max-width: 550px" class="none" alt="" src="/assets/images/estate/smaller_map.png" />

Whether it is data centres, cloud regions, offices or end users, resources must be grouped by location in order to calculate the operational and downstream emissions. This should be at least at country level but more fine grained data may be needed if a particular location uses non-grid energy, for example if an office or facility has high emissions diesel generation or on-site solar or wind.  

{% include linkedHeading.html heading="On-prem" level=2 %}


Starting with on-prem hardware, many organisations will have some or all of the following:

<img style="max-width: 700px; background-color: white; padding: 8px; border-radius:10px" class="none" alt="" src="/assets/images/estate/On-prem-extended.png" />

The top of the diagram shows there can be multiple sites and each has a geographical location impacting the operational emissions due to varying carbon intensity. Next, it shows that a given site could be a dedicated data centre or a more general location that includes technology components. For example there may be a dedicated server room and/or odd pieces of hardware in the office.  Note that on-site monitors and desktops are covered under organisation user devices later but could have been included here - there's valid reasons for both approaches.

To get a complete picture of emissions then all sites, their locations and all hardware within those sites must be identified as well as a <a href="/glossary#power-usage-effectiveness-pue">PUE</a> for each one to capture efficiency. More detail on how to do this is provided in the following sub-sections. Where there's a need to prioritise the analysis, then focus on the largest sources of emissions which will normally be data centres, as indicated by the arrow in the diagram. 

{% include linkedHeading.html heading="Device inventory records" level=3 %}

In order to understand all the servers, networking hardware and related devices the ideal data source is a configuration management database (CMDB) where robust IT asset management processes ensure that it is up to date with accurate and complete information. Various solutions exist including from ServiceNow, IBM, Microsoft and others. 

In cases where data is incomplete, extrapolation from partial datasets can provide reasonable estimates. These sources may include partially completed asset management records, historic procurement data on devices purchased, employee headcounts per office location, or generic device-to-employee ratios based on job roles.

The accuracy of the underlying data will directly impact the precision of emissions estimates across the entire technology inventory. However, even approximate extrapolated totals can help identify significant emission hotspots. Conducting an inventory-wide emissions assessment enables organisations to pinpoint areas for emission reductions, track performance over time, and work towards minimising the carbon footprint across their entire digital ecosystem.

{% include linkedHeading.html heading="Embodied emissions" level=3 %}

Embodied emissions should be based on the asset database described above and ideally the CMDB records will include manufacturer data about each asset's embodied carbon or at least enough information that it can be looked up via data sheets. Where this is not present approximations may be used based on typical values - see <a href="/information/lifecycle/example/server">Server example</a> for some suggestions around how to do this. 

In the earlier diagram the cooling/lighting/other boxes were distinguished in a different shade of green because they are not technology hardware but general purpose equipment that support it. For embodied emissions they are out of the scope of the TCS and therefore not discussed but you should still calculate them for full <a href="/glossary#greenhouse-gas-ghg-protocols">GHGP Scope 3</a> emissions. 

{% include linkedHeading.html heading="Operational emissions - reporting" level=3 %}

Firstly consider the simplest case of an organisation that wants to report the total office/facility Scope 2 emissions including any technology specific ones without breaking these out.  In this case the task can be reduced to identifying all sites, getting the electricity usage for them and applying the carbon intensity at that site. When a facility is leased and the organisation isn't directly billed then it's less accurate as the overall building electricity bill must be divided up and attributed to each org by a measure such as employee count or square footage - though the latter is better suited to heating costs. 

The discussion below covers the more challenging scenario when reporting is requried on information technology specifically, e.g.if a CTO is asked to provide the emissions of all the teams and hardware that they are responsible for. 

Unlike for the embodied calculation the operational one must take account of the location and the electricity mix at that location including any on-site generators or renewables. 

__Data centres and server rooms__: Assuming only one organisation has equipment in a given data centre then in this case the operational emissions can actually come directly from the building electricity usage. Otherwise this is the same as for a server room and the device inventory data must be used to get approximate numbers based on device power use.  i.e. take all the devices in the inventory and their power usage at typical utilisation to work out the approximate aggregate energy per month, year or other time period. 

In the section above describing embodied carbon the building, heating, lighting etc for a data centre was out of scope because this standard is designed to help understand and optimise hardware and software. Nonetheless, in calculating total operational emissions for a data centre or anything at scale then it is conventional to include this for 2 reasons:
 * It may be tricky to isolate these periphery devices for a data centre where they'll form part of the electricity power draw
 * PUE is typically published and included when comparing the efficiency of cloud vs on-prem  because it can make a significant difference to energy consumption
     *  e.g. 1.6 for older DCs vs 1.2 for cloud. (But bear in mind there can be negatives like more water usage).
     * but information on building and facility embodied carbon is rarely available and so a PUE like comparison can't be made


__Office__: This is the most complicated scenario because there may be user laptops, monitors, lighting, heating etc as well as any server and networking hardware for running software. It's not possible to just look at the electricity usage and so approximations deriving from the device database should be used. 

 To get the power consumption of individual devices  before scaling this out across the estate then the simplest options are to:

  * carry one-off measurements on representative hardware at representative load can be carried out to get representative numbers
  * use data sheet information, combining with utilisation if devices are not at max power all the time

See <a href="/information/lifecycle/usage">Usage Emissions</a> for a detailed discussion of calculating the energy usage of individual devices.

{% include linkedHeading.html heading="Ideal solution" level=4 %}
The optimal solution to the problem of understanding operational emissions would be that all devices do real time power monitoring and push this information to a central location, e.g. via HTTP. This would provide near real time monitoring of the whole estate so all devices and their daily energy is known. Unfortunately this is not practical today although modern devices are getting better at power monitoring. 

Even if this were possible it should wouldn't address the next section on reducing emissions unless the software loads running on the specific hardware were also understood. 

{% include linkedHeading.html heading="Reducing operational and embodied emissions" level=3 %}

<img style="max-width: 650px; background-color: white; padding: 8px; border-radius:10px" class="none" alt="" src="/assets/images/estate/business_services_breakdown.png" />

In order to go beyond reporting and improve emissions it is necessary not just to to map out the hardware infrastructure owners but also the owners of the software running on the hardware because improvements can come from better software implementations as well as procuring more efficient hardware. In the Business IT Services diagram earlier, the Business Applications block can be broken down into various services offered by the business that are in turn implemented by particular applications (not shown) that are ultimately owned by particular technology teams who have the responsibility for developing and/or maintaining those applications (or for SaaS own the relationship).

The diagram below presents a more complex mapping that will help understanding of how to reduce emissions rather than just reporting at org or tech function level.

<img style="max-width: 650px; background-color: white; padding: 8px; border-radius:10px" class="none" alt="" src="/assets/images/estate/on-prem-responsibilities.png" />

 In this case there's layers for virtualisation on top of the physical servers and/or clustering and then the applications belonging to the different business application teams. 

 Operational and embodied emissions should be assigned to particular apps either directly or indirectly via metrics such as utilisation and memory usage - exactly what to use is out of the scope of the TCS and for individual orgs to decide because it is heavily dependent on implementation. The key point for the estate mapping perspective is to relate the emissions to teams so that they can make improvements. e.g. the Platform team providing higher utilisation via containerisation or application owners running more efficient app code. 

{% include linkedHeading.html heading="Cloud" level=2 %}
Mapping out the cloud emissions should generally be a lot simpler than for on-prem hardware. A typical organisation will have a cloud structure like the following:

<img style="max-width: 750px; background-color: white; padding: 8px; border-radius:10px" class="none" alt="" src="/assets/images/estate/cloud_structure.png" />

Where terminology for the same concept varies across the 3 largest providers the alternative names are included on the left. As shown there's usually an org level object and then a set of sub-objects that will often line up with organisational structure and the leaves of the tree are resources such as object storage buckets or VMs. Cloud reporting tools from the main cloud service providers (CSPs) or the Cloud Carbon Footprint (CCF) (see <a href="/information/cloud">Cloud</a>) will be able to provide a number at the root for the whole organisation. 

Where an organisation actually has multiple hierarchies, i.e. 1 real organisation to 2+ cloud ones these must all be identified and reported separately.  

{% include linkedHeading.html heading="Reducing cloud emissions" level=3 %}
As with data centres, reducing emissions requires mapping of usage to business divisions and the development teams that own the services. The CSP tools and CCF will be able to report at the various levels of hierarchy down to Account. Complexities can arise in a couple of ways:
 1. Where teams in the business don't align with cloud accounts or sub-orgs. One way this can happen is if many teams share an account and then tag resources with the owner. Some CSPs will include tag level data but some won't and nor will CCF and this will limit the ability to assign emissions to teams. 
 2. Some services may be provided by a platform team and shared across many applications, e.g. a database

In both cases proxies like spend, system utilisation or number of requests can be used instead divide up the emissions between teams. AWS tags, for example, will be available on the cost explorer function even if not on carbon reporting. 

{% include linkedHeading.html heading="SaaS" level=2 %}
An organisation may use a variety of SaaS products from development and productivity tools such as Github and cloud JIRA through to business tools like Salesforce, payment services such as Stripe or Adyen and many more.

Some organisations will have a central procurement team who manage a list of all the suppliers but it may be more distributed and so the first task in understanding SaaS emissions is to go to all the business services owners (e.g. Platform, Employee Enabling, various Business Applications divisions) and find out all the SaaS products being used. 

It is likely that each SaaS vendor will differ in the carbon reporting they provide; some will give Scope 2 only, some Scope 2+3 and some will provide no information and therefore each must be handled separately, in a bespoke way. Where these numbers are hard to obtain or to approximate then it makes sense to prioritise getting numbers for those products likely to create the most emissions, e.g. any handling a lot of end user requests or doing very complex workflows or storing a lot of data as these will have the highest carbon impact. 

{% include linkedHeading.html heading="Reducing SaaS Emissions" level=3 %}
There's a limited amount that can be done with a SaaS product but there are still some options:
 * store less data with them
 * use APIs more efficiently
 * pick a different provider

All require an understanding of the teams using the SaaS product which may be one team or multiple. Where there's multiple and carbon reports from the SaaS provider are at account not team level then attribution may be done on a metric like number of requests to break down the numbers to each service and team using the SaaS product. 

In mapping out all SaaS products it's important to know the possibility to change and record this - if there is a contract renewal or tender process in 6 months time there is a lot more potential for change than where the contract is locked in for the next 5 years. Capacity and effort to change may also be recorded. 

{% include linkedHeading.html heading="Internal user devices" level=2 %}

This section covers the technology used by the people internal to the organisation (not customers) where those people would typically be staff but could also be contributors to an open source project. 
Their technology may include the following more common devices:

<img style="max-width: 750px; background-color: white; padding: 8px; border-radius:10px" class="none" alt="" src="/assets/images/estate/employee_devices.png" />

Ownership, usage and location patterns will often differ compared to the on-prem servers and networking devices in the following ways:

* Usage will generally be based around office hours
* User devices are assigned to individuals (or occasionally a team, e.g. a test device or TV) which makes attribution to teams much easier than for servers because the owner of the server and who runs software on the server are usually different. 
* Although some devices like a desktop will be in a fixed office/facility location, others like laptops are mobile. Monitors may be in a fixed home working location as well the office. 
* For home devices internal users could be using their own monitors/equipment rather than ones purchased for them by the organisation. 

Note: occasionally it may be arguable as to whether a device belongs in this grouping or in on-prem and it doesn't matter so long as they are included - the category doesn't change. For example TVs may be specific to a user when provided to an employee for testing a smart TV application but could also be providing a dashboard in the office in which case they are likely a permanent always on fixture like servers.  


{% include linkedHeading.html heading="Operational emissions - special case" level=4 %}
As per the <a href="#on-prem">on-prem section</a>, there is a special case for reporting <em>operational</em> emissions if all the organistion wants to do is report Scope 1 or 2 emissions at org or office/facility level: in this case the office/facility electricity usage data will cover all technology but the number will obviously also include more than just tech, e.g. kettles, lighting, electric heaters. In the remaining discussion it is assumed that the reporting should include a tech breakdown and that embodied emissions (i.e. GHGP Scope 3) is needed as well as operational emissions.

{% include linkedHeading.html heading="Device inventory" level=3 %}
All equipment purchased by the organisation should be available via a CMDB or some similar asset management system, as mentioned in the on-prem section. Where this isn't present approximations will be needed based on employee numbers. For user devices the data should include the location for which a device was purchased but whether it is for remote working or both in the case of a laptop. This matters because electricity carbon intensity may be different. 

For user purchased devices (also known as bring your own device or BYOD) estimation will be needed. Laptop numbers can be approximated by assuming all users without an org laptop or desktop have a personal one. For monitors, a survey may be done of a subset of staff then extrapolated to get the typical number of monitors and their size and the same for for personal laptops to understand the most common specs in order to provide some average numbers that can scaled across the user population. Bear in mind that some user types, e.g. graphic designers, developers may have higher spec equipment. 

{% include linkedHeading.html heading="Reporting" level=3 %}

Given that not all devices are organisation purchased this affects how emissions should be reported and is captured in the following table. Embodied carbon is only captured for organisation purchased devices with the assumption being that personal laptops would be purchased anyway and can't be attributed. 


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
    <td>No</td>
    <td>Yes</td>
</tr>
</table>

__Embodied Carbon__:
Embodied carbon will come directly from inventory data or via a data sheet lookup and then be combined with device lifetime information. For example, if a company laptop is refreshed every 5 years then the embodied carbon for all devices should be divided by 5 for an annual amount. Where embodied carbon can't be quickly be derived through cross referencing data sheets, then approximations can be made using emissions data for similar hardware. e.g. if an org 200 desktop PCs of one type and the manufacturer doesn't provide a value then take a desktop PC of similar spec and age that does and use the value from that. Such approximations should be explicitly captured. 

__Operational Emissions__:
Ownership of the device doesn't matter, but whether the user is using the device for non-personal reasons does; for example, working hours emissions should be captured for a laptop but not weekend browsing. For all the devices that are mobile or home based the electricity carbon intensity should come from the country/regional value whereas for fixed office/facility items more accuracy may be possible, e.g. if an office is known to be 50% solar on average. 

Care should be taken to avoid double counting any equipment. For example, when reporting computer monitor emissions, assumptions will be required based on how often users will be in the office vs at home and emissions only attributed to one of the two at a given point in time. 

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
    <td>Device max power and average CPU utilisation (or average measured power), working hours</td>
</tr>

<tr>
    <td>Laptops</td>
    <td>Device max power and average CPU utilisation (or average measured power), working hours, percentage of time outside the office</td>
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
Device power may be specific or if this isn't available for all devices then estimated based on for 1 or 2 exemplar devices - this will always be the case for user owned devices. 
 

{% include linkedHeading.html heading="Reducing emissions" level=3 %}
For servers and cloud the analysis for reducing emissions was more complex than reporting but the opposite is true for devices. Monitors don't have any software running on them to attribute to anyone and although technically laptops do, the wide variety of applications and the fact that the <a href="/information/lifecycle#embodied-vs-usage-carbon">bulk of the carbon will be from their manufacture not the use</a> means there is little value in any analysis. User owned devices (like personal laptops) can also be ignored. 

Therefore, for reducing emissions the focus will be on procurement policy and on changing the default choices of device purchased by the org. If there are 1 or 2 procurement teams then all that matters is how those teams choose devices and manage their longevity and disposal. 

{% include linkedHeading.html heading="End user devices" level=2 %}
As a reminder, this is primarily about the emissions caused by public consumers or other organisations using the measured organisation's services. Popular games and social media apps in particular may cause users to spend additional hours every week on their phone/tablet/device, using electricity as they do. 

There's broadly 3 types of end user device:
 * Standard devices like phones, tablet, TVs and laptops
 * IoT devices which may be provided by the organisation selling the software
 * Servers for service to service communication

The following sections go through each of these. A judgement should be taken as to whether the downstream emissions are worth calculating in any depth. For example, if customer numbers are in the hundreds or less it is likely these emissions will just be noise vs other tech emissions. On the other hand, a video streaming or gaming app with hundreds of thousands of users using the app each day for hours a time shouldn't be ignored. Start with rough approximations based on the information in <a href="/categories/downstream">Downstream</a> and the following sub-sections before deciding whether to go any further. 


{% include linkedHeading.html heading="Consumer devices" level=3 %}
The picture below illustrates the process of working out your total emissions from consumer devices: 
<img style="max-width: 650px; background-color: white; padding: 8px; border-radius:10px" class="none" alt="" src="/assets/images/estate/devices_process.png" />

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

Where this isn't all available a rough approximations can still be made, e.g. if you don't know the device breakdown there may be publicly available info for similar websites or apps.

With this information the average energy of a particular device type (e.g. tablet) in a given time period (e.g. per minute) can be multiplied by the data about number of devices and average usage per day/week/year. Location data can then be used to get carbon intensity for the users in order to provide the final emissions.

For networking energy, metrics for server-side API calls would be one way to understand total traffic across endpoints but it does mean there's a need to aggregate metrics from lots of server-side locations - some of which could be SaaS endpoints and lack metrics. Alternatively device analytics can capture total data sent from the app which will allow all network traffic to be provided in one go whilst still allowing for a breakdown to show what endpoints are generating the most traffic. 

A more basic option would be to analyse the typical network activity per minute of app interaction and just add this on to the device energy usage as an extra factor before scaling by time and the user count. 

{% include linkedHeading.html heading="IoT" level=3 %}
An example of this would be a smart camera or a sensor. The key differences to the consumer devices discussed above are:

 * the devices being used are known - unlike the hundreds of potential laptop models
 * usage patterns will be different but known, e.g. on all the time or in low power mode with a regular awake and check cycle

For these reasons it should be easier to get an accurate energy per device for IoT devices. 

Where the org being measured and reported on has sold the IoT device to the consumer then the emissions from this must also be reported and is again just a case of scaling per device emissions by number of devices. Note that calculating the emissions of manufacture is out of the scope of this standard. 



{% include linkedHeading.html heading="Server to server" level=3 %}

Rather than a consumer or user in another business using an organisation's service via a website or app there is also the possibility of customer's server directly making API calls. In this case the only energy usage is the downstream network energy from the external business's network through to the measured org's networks.

In this case the only information available will be the number of API calls and possibly location data, either from knowledge of the customer or based on IP lookups. 


{% include linkedHeading.html heading="Reducing emissions" level=3 %}
To reduce device energy (as opposed to network) the same data is useful as per the reporting; that is the energy on typical device types for typical usage scaled out by the number of users and devices. Location doesn't matter for the purpose of reducing emissions as it can't be controlled for customers.

Normally a site or app will be owned by a particular team so this is much easier to map than for servers running the software of many teams. The exception is a micro-frontend architecture or an app with many plugins where certain pages or page sections are very power hungry compared to others. The power hungry pages should identifiable via energy profiling so that the total energy can be attributed to the separate pages and teams for driving improvement. 

For networking, as shown in the diagram below API endpoints should be mapped to business services and the development teams or SaaS products responsible. e.g. an app calls 15 different services but 80% of traffic is to one of them then 80% of emissions can be attributed to that team. Attribution may be done by number of requests and/or data transferred; there's not a definitive right way as data transferred would capture large unnessary payloads but miss cases of excessive TLS connections being setup by a very "chatty" API. The cause of the excess network calls may be with the service team or with the app/website team but by identifying both sides of this a conversation can be had to reduce these emissions and there can be additional benefits like battery life. As mentioned earlier, this level of analysis is only worth doing if the user base is significant. 

<img style="max-width: 550px" class="none" alt="" src="/assets/images/estate/api_to_business.png" />

{% include linkedHeading.html heading="Mapping large organisations" level=2 %} 

For a small to medium size organisation (e.g. 250 employees), then the org will typically be in a single line of business and have a relatively straightforward hierarchical structure. There may still be challenges in mapping the technical estate and deriving emissions but the problem is understood. 

<img style="max-width: 550px" class="none" alt="" src="/assets/images/estate/large_org.png" />

In larger and/or more complex organisations it is not so simple. Often, as in the diagram above an organisation does multiple things and may have various separate subsidiaries that are not aligned or only partially aligned from a tech perspective. This may stem from an acquisition whereby there has yet to be full re-platforming or just that the 2 brands do very different things. Government or university departments are another example where IT teams will exist at different layers and be quite independent. There may be a mixed picture as shown below where some HR systems and single-sign on are provided across the complete group organisation but otherwise a subsidiary is run independently.

<img style="max-width: 550px" class="none" alt="" src="/assets/images/estate/large_org_share.png" />

The level at which the mapping exercise is carried out relates more to business architecture and business needs than technology. For example, if 2 subsidiaries are run very independently then it may make sense to have the mapping exercise be done independently with separate upstream operational cloud, on prem etc figures calculated for each which then may be rolled up at the group level.  

Where this can be more complex is when there is some sharing as in the previous diagram. In this case the options are to either pull out the shared functions or have one unit treat the other as a SaaS product. e.g. imagine a flight booking company also has a hotel business that is largely separate but shares the HR system where the ask is to assess the emissions of the hotel business and look for improvements. The HR system could be ignored since it'll be dealt with when considering the flight part of the business. Or, to report for scope 3 as fully as possible, then it could be treated it as a SaaS product for which a proportion of emissions are attributed to the hotel business. 

It should also be born in mind that as with financial cost, where there are duplicated functions across different parts of a complex org, then this will result in duplicated emissions and from an analysis point of view this is useful to know unless there is a deliberate design to keep the business areas separate, for example, for a future sale. 
This implies therefore that, whilst it is fine to perform the mapping exercise at sub-group levels, once all are completed they should be compared in terms of the business services supported by IT and where they are aligned and not. 

