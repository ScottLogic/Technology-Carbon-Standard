---
layout: category
title: Software as a Service (SaaS)
permalink: /information/saas
---

# Software as a Service (SaaS) 

SaaS is application software that is provided as a service by a vendor so there's nothing for the software user to run or maintain. Typically there is a web interface and an API but it could also be just an API or include mobile and other UIs. 
The differentiating factor with Cloud IaaS is that there's no physical or virtual infrastructure to be managed so dev-ops concerns such as OS updates, server provisioning and scaling are all managed by the service provider. Further, unlike PaaS there is no app development or deployment and testing to be managed.  

There's tens of thousands of examples of SaaS products but a few well known ones include:

<style>
tr.saasExampleTable > th {
        font-weight:bold;
        padding-right:3pt;
}    
</style>
<table>
<tr class="saasExampleTable">
<th>Area</th>
<th>Examples</th>
</tr>
<tr>
<td>Authentication providers</td>
<td>Auth0, Okta</td>
</tr>
<tr>
<td>CRM Providers</td>
<td>Salesforce, Microsoft Dynamics</td>
</tr>
<tr>
<td>Data Warehousing solutions</td>
<td>Snowflake, Databricks</td>
</tr>
<tr>
<td>Productivity</td>
<td>Office 365, Google Docs</td>
</tr>
<tr>
<td>Development support</td>
<td>Github, Gitlab, JIRA Cloud</td>
</tr>
<tr>
<td>Accounting</td>
<td>QuickBooks, Sage</td>
</tr>
<tr>
<td>Payments</td>
<td>Stripe, Adyen</td>
</tr>
</table>

This page focuses specifically on SaaS but be aware that some providers such as Salesforce also span the Platform as a Service (PaaS) space where they provide a standard way to run apps as well as providing apps on that platform like the core CRM project. AWS, Azure and GCP on the other hand mainly provide cloud Infrastructure as a Service in the form of VMs and networks and storage but also provide many SaaS products that run on that infra. 

{% include linkedHeading.html heading="Why does SaaS matter" level=2 %}

The use of SaaS has been growing rapidly over the last decade<sub>1</sub> and is expected to continue to do so. <a href="https://www.statista.com/statistics/505243/worldwide-software-as-a-service-revenue/">Statista</a> has it as growing from 30Bn to 200Bn in just under ten years globally and this means it makes up an important part of technology emissions.

<a href="https://www.cloudzero.com/blog/saas-statistics/">Cloud Zero</a> references a State of SaaS report that has companies with &lt;500 employees using over 200 SaaS products whereas <a href="https://devsquad.com/blog/saas-statistics">Dev Squad</a> reports slightly different 130 products per company (no size specified so likely an average across all). They also state that "70% of software used by today's companies are SaaS". 

Whatever the precise numbers it is clear that companies use a lot of SaaS products and in fact they often make up a significant majority of all the tech products. This means that if one only looks at on-prem and cloud resources then it's likely a significant amount or even majority of tech emissions will be missed. 

{% include linkedHeading.html heading="The potential of SaaS for sustainability" level=2 %}

SaaS products have a couple of potential sustainability advantages over in-house created and operated software: multi-tenancy and no development+support duplication. This assumes all else being equal such as the SaaS vendor's data centre being of a similar carbon intensity or less than any data centres or cloud services that the purchasing org is using. 

### Multi-tenancy
SaaS products are typically multi-tenant where many users share the same servers and database. This means that infrasture will typically be heavily utilised and won't have periods of doing no work like a dedicated physical server or even dedicated cloud VM might. 

How much of an advantage this is depends on how an org runs software. Where an organisation uses dedicated hardware for an application then there is likely a notable gain here. On the other hand where an application cluster like Kubernetes is used then the advantage is less because this also permits high utilisation. Even so, use of SaaS generally ensures all components including the DB are shared which isn't always the case for in-house cloud apps. 

There are exceptions where this dosn't apply; somtimes for regulatory reasons an organisation may have their own instance of the SaaS stack or parts of it and so resources may be under utilised even for a SaaS product. 

### No development duplication

By using a SaaS product rather than creating and/or running it's own software an organistion is avoiding duplicated effort that would include the writing of code, support of that code and build/deployment. In short this means less people (and so typically less offices), less supporting software, less laptops and other hardware like build machines.

Put another way, the development, deployment and maintenance of software comes with an environmental cost as well as the running of software and so if many orgs make use of a single SaaS product then this is only incurred once rather than per org. 

{% include linkedHeading.html heading="Measuring SaaS" level=2 %}
The nature of SaaS makes me problematic for working out the emissions related to a single org's activities; the very point of SaaS is that the implementation is hidden and not something that the user needs to know about. Further, as already mentioned, it is usually multi-tenant which means many organistions are sharing the same hardware. This wouldn't be a problem if the SaaS provider dealt with this and gave each organisation the emissions attributable to them, but unfortunately at the moment SaaS providers don't generally provide this attribution. A sample of ten well known SaaS providers including some of the examples mentioned above was looked at  and although many had sustainability policies and reported on their own total emissions they don't break this down and provide each consumer with the individual consumer's proportion of the org's emissions. 

The reason for this is that it is challenging to do whether a SaaS vendor runs in the cloud or on-prem. Hundreds or thousands of consumers of a SaaS service may all be hitting the same application services and databases but physical hardware and cloud energy measurement can only be done at the machine level meaning it's very difficult for vendors to attribute. Proxy measures could be used such as number of API requests per consumer but thre's issues here such as not all requests being equal in energy usage. Therefore it is unlikely that SaaS vendors will start providing per consumer carbon reports until the tooling improves. 

Given these challanges, for now it falls on the consumer of a SaaS service to to obtain carbon emissions to approximate the emissions associated with its use of the serice. There is no official government or GHG Protocol recommended way to do this but a few options are presented shortly. These are just suggestions and its important that whatever approach is taken there's transparency about the method.  

Before going into some of the possibilites it's useful to think about what information is available for use of SaaS. 

{% include linkedHeading.html heading="The data available" level=3 %}
If a SaaS product is effectively a black box then this raises the question of what data, if any is available tha could help in a CO2 emissions estimation.  

The following table lists the main data points that may be available: 

<style>
tr.factsTable > th {
        font-weight:bold;
        padding-right:3pt;
}    
</style>
<table>
<tr class="factsTable">
    <th>Fact</th>
    <th>How it's known</th>
</tr>
<tr>
    <td>Data transferred</td>
    <td>Browser stats or metrics on backend to backend call</td>
</tr>
<tr>
    <td>Front end emissions</td>
    <td>Measurement</td>
</tr>
<tr>
    <td>Num of requests and request times</td>
    <td>Browser stats or metrics on backend to backend call</td>
</tr>
<tr>
    <td>Location</td>
    <td>Service location often published as has regulatory implications. Also can be reverse looked up via IP (but could be misleading if intermediary like a CDN is inbetween the client and servers)</td>
</tr>
<tr>
    <td>Database</td>
    <td>May be published in tech documents</td>
</tr>
<tr>
    <td>High level architecture</td>
    <td>May be published in tech documents</td>
</tr>
</table>

The first 3 are the most likely to be known as they are fully in the control of the organisation using the SaaS product. 
Be aware that request time is not necessarily processing time and will depend on the location of the end user - this is discussed more later. 

{% include linkedHeading.html heading="Front end" level=3 %}
Many SaaS products include web and mobile interfaces that may be targetted at admin users and general users of the service. This part of the SaaS emissions can be measured in standard ways such as:

 * browser energy measurements, e.g. via Firefox profiler functions
 * device measurements via a power meter

These measurements aren't practical to do on all user devices all the time and so representative use cases should be found in order to carry out the measurements. 

The emissions associated with running SaaS sites/apps on on-prem laptops and desktops would fall under TCS Category O. 

{% include linkedHeading.html heading="Sustainable Web Design method" level=3 %}

This is a method promoted by Sustainable Web Design Community Group and published on <a href="https://sustainablewebdesign.org/calculating-digital-emissions/">sustainablewebdesign.org</a>. The method is specifically about websites but parts of it can be adapted for other uses. It covers all aspects of a service from the front end through to embodied carbon on the server but can be split if only part of the estimate are of interest.  

In short it is a top down estimate that takes an existing public domain estimated figure for all website and internet emissions of 1988TWh and then divides by another existing estimate for total end user traffic of 2444EB to get an energy of 0.81kWh/GB. For returning visitors to a site where data is already cached then 2% of the 0.81kWh is assumed.
This 0.81kWh is then attributed to 52% end user device (i.e. laptop accessing the site), 14% network energy, 15% data centre energy and 19% production energy. 

When estimating a SaaS product with a user interface the values above can be used as they are. For an API only service (or where measuring the front end directly as described earlier) then one approach is to take the production, data centre and network energy which is 48% or 0.39kWh/GB and multiple by the amount of data traffic to/from the SaaS service (dependent on whether it's a read/GET or write/POST/PUT). 

Once kWh are derived they can be multiplied by the carbon intensity to get the emissions. Ideally this is local to the service hosting but if this is unknown a global figure can be used. 

This method is clearly very approximate because it only concentrates on the amount of data transferred. This may bias it when considering, for example the read or writing of a JPEG file that goes straight to/from disk vs a much smaller JSON payload that involves quite a lot of work on the backend with multiple systems. 

{% include linkedHeading.html heading="1 Byte method" level=3 %}
This method is provided by The Shift Project <a href="https://theshiftproject.org/en"> which is a European think tank centres in Paris that is working towards a post carbon economy. 

It is similar to the SWD methodology in that it is based around data transfer, but the methodology to come to an emissions rate per byte of data transferred is different. In <a href="https://theshiftproject.org/wp-content/uploads/2019/03/Lean-ICT-Report_The-Shift-Project_2019.pdf">their Lean ICT paper</a> they refer to 3 contribitions to this per byte number:

* The electricity consumption associated with using the terminal on which the action is performed;
 * The electricity consumption generated by the activity of the data centers involved in transferring the data;
 * The electricity consumption generated by the activity of the other network infrastructures during the 
transfer of the data

For the network component different numbers are specified dependent on how the user connects - fixed cable, Wifi or mobile. The values have come out of work done by the Lean ICT working group looking at data points such as "quantity of data transferred at the macroscopic scale by data centers with the electricity consumption associated with the utilization of these data center". See <a href="https://theshiftproject.org/wp-content/uploads/2018/10/Lean-ICT-Materials-1byte-Model-2018.xlsx">this link for the the numbers in the 1-byte model</a> which can also be found via the  <a href="https://theshiftproject.org/wp-content/uploads/2019/10/Lean-ICT-Materials-Liens-%C3%A0-t%C3%A9l%C3%A9charger-r%C3%A9par%C3%A9-le-29-10-2019.pdf">Lean ICT Materials page</a>

<style>
tr.oneByte > th {
        font-weight:bold;
        padding-right:3pt;
}    
</style>
<table >
<tr class="oneByte">
    <th>Category</th>
    <th>Energy source</th>
    <th>Value</th>
</tr>
<tr>
    <td rowspan="2">Device</td>
    <td>Phone</td>
    <td>0.00011 kWh/min</td>
</tr>
<tr>
    <td>Laptop</td>
    <td>0.00032 kWh/min</td>
</tr>
<tr>
    <td rowspan="3">Network</td>
    <td>Fixed Wired</td>
    <td>4.29*10<sup>-7</sup> Wh/byte</td>
</tr>
<tr>
    <td>Fixed Wifi</td>
    <td>1.52*10<sup>-7</sup> Wh/byte</td>
</tr>
<tr>
    <td>Mobile</td>
    <td>4.29*10<sup>-7</sup> Wh/byte</td>
</tr>
<tr>
    <td>Data centre</td>
    <td>N/A</td>
    <td>7.2*10<sup>-11</sup> </td>
</tr>
</table>

For SaaS the figure derived will depend on the balance of user types: server to server, human user and for the latter the balance of network types. 

For example if the SaaS product is just being used for its APIs then only the data centre and network aspects apply and the network would be fixed wired. On the other hand if a SaaS product was being used from laptops or desktops and includes a web interface then the network would be fixed Wifi normally and the device data should be included with the laptop figure (unless measuring separately). 

{% include linkedHeading.html heading="Alternatives - synchronous requests" level=3 %}
The two methods above are based around data transferred (and also time spent on the device for the 1-byte model) which is fine for the network components but isn't always a fair representation of the processing time on the server. It may be that a number of data sources (e.g. multiple DB tables or separate services) need to be queried in order to fetch a lot of data that is then aggregated down to just a few values. In such a case the returned data is very small but a lot of processing is needed. 

An alternative, at least for synchronous requests would be to do an approximation around request time and provided a server or browser captures metrics then the time to each endpoint is known.

The diagram below shows the makeup of a typical request:

<img style="max-width:600px" src="/assets/images/SaaS/RequestStructure.png"/>

The numbers here are just given as an example and there aren't published values to use as per the 1-byte model but nonetheless, rough approximations should allow a value in the right order of magnitude. 

In the breakdown above it can be seen that there's some initial time to establish a connection - this is typically a one off though if doing lots of requests in quick succession and also some latency based on the distance from caller to callee, e.g. a browser in the UK to Frankfurt might 15ms round trip or 140ms to LA. This can be approximated where the server location is known  but everything happening on the server is shown in dark because this is a black box to the user of the service or API. 

To get to an energy consumption then 
<a href="https://docs.google.com/spreadsheets/d/1DqYgQnEDLQVQm5acMAhLgHLD8xXCG9BIrk-_Nv6jF3k/edit#gid=224728652">Teads AWS Estimation numbers</a> suggest that a typical vCPU plus memory is in the region of 10-15W when at 50-75% utilisation which can then be applied to the server part of the request time of 85ms above. 

When writing to resilient cloud storage or databases there will often be multiple nodes involved to a quorum of nodes so in terms of instance it may look more like <img style="max-width:600px" src="/assets/images/SaaS/Components.png"/>.

In such a case the overall calculation would be:
<img style="max-width:600px" src="/assets/images/SaaS/Calculation.png"/>

where overheads is a catchall for the non CPU/memory power including networking, PUE factors and aspects like the CI/CD. e.g. this could be a 2x multiplier. 

e.g.
* Request time of 100ms
* Assume 15W CPU + memory
* Servers 50% utilised so make it 30W per customer
* Write request with 50% of time in database nodes, 3x replication
* 2x multiplier for the unknowns

This gives a request energy of

$$ 
0.1s * (30W * 0.5[app fraction] + 90W * 0.5[DB fraction]) * 2 [overheads] = 12J $$ 
 or $$3*10^{-6}kWh$$

As a comparison point the SWD method gives a 10kB request as using

 $$0.81kWh/GB * 0.15[data centre fraction] * 0.00001 = 1.2*10^{-6}kWh $$

This could be combined with the network figure from the 1byte model and an embodied carbon multiplier such as 0.2 of the usage emissions. 

This example above assumes a fairly simple model whereby there's just one app talking to 1 DB and nothing is happening in parallel. More complex requests may do multiple things in parallel and so a scaling factor may be used e.g. 1,5, 10 for ratings of low, medium and high complexity. 

These are not rigorously derived numbers, the idea is just to show the sort of model that might be used. It's all very approximate but should give an order of magnitude approximation for the emissions. 

{% include linkedHeading.html heading="Workflows and asynchronous work" level=2 %}
The above analysis was assuming a synchronous request where all work is done within the request time. Sometimes other actions will also follow in the background or the main request is very short and then there's a workflow generated. 

TODO: finish this section

1. https://www.fortunebusinessinsights.com/software-as-a-service-saas-market-102222



## TODOs
Update headings to use the macro or whatever it is used elsewhere