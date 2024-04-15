---
layout: category
title: Software as a Service (SaaS)
permalink: /information/saas
---

# Software as a Service (SaaS) 

SaaS is application software that is provided as a service by a vendor. Typically there is a web interface and an API but it could also be just an API or include mobile or other apps rather than just a web interface. 
The differentiating factor is that there's no infrastructure be it cloud or physical to be managed so dev-ops concerns such as deployments, OS updates, server provisioning and scaling are all managed by the service provider. 

There's numerous examples of SaaS products but a few include:

<table>
<tr>
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

<a href="https://www.cloudzero.com/blog/saas-statistics/">Cloud Zero</a> references a State of SaaS report that has companies with &lt;500 employees using over 200 SaaS products whereas <a href="https://devsquad.com/blog/saas-statistics">Dev Squad</a> reports 130 across all companies. They also state that ""70% of software used by today's companies are SaaS"
". 

Whatever the precise numbers it is clear that companies use a lot of SaaS products and in fact they often make up a significant majority of all the tech products. This means that if one only looks at on-prem and cloud resources then it's likely a significant amount or even majority of tech emissions will be missed. 

{% include linkedHeading.html heading="The potential of SaaS for sustainability" level=2 %}

SaaS products have a couple of potential sustainability advantages over in-house created and operated software: multi-tenancy and no development duplication. This assumes all else being equal such as the SaaS data centre being of a similar carbon intensity or less than any data centres or cloud services that the org is using. 

#### Multi-tenancy
SaaS products are typically multi-tenant where many users share the same servers and database. This means that infrasture will typically be heavily utilised and won't have periods of doing no work like a dedicated physical server or even dedicated cloud VM might. 

How much of an advantage this is depends on how an org runs software. Where an organisation uses dedicated hardware for an application then there is likely a notable gain here. On the other hand where an application cluster like Kubernetes is used then the advantage is less because this also permits high utilisation. Even so it ensures all components including the DB are shared. 

There are exceptions where for regulatory reasons an organisation may have their own instance of the SaaS stack or parts of it and so resources may be under utilised even for a SaaS product. 

#### No development duplication

By using a SaaS product rather than creating and/or running it's own an organistion is removing duplicated effort that would include the writing of code, support of that code and build/deployment. In short this means less people (and so typically less offices),less supporting software, less laptops and other hardware like build machines.

Put another way, the development, deployment and maintenance of software comes with an environmental cost as well as the running of software and so if many orgs make use of a single SaaS product then this is only incurred once rather than per org. 

{% include linkedHeading.html heading="Measuring SaaS" level=2 %}
The nature of SaaS makes me problematic for working out the emissions related to a single org's activities; the very point of SaaS is that the implementation is hidden and not something that the user needs to know about. Further, as already mentioned, it is usually multi-tenant which means many organistions are sharing the same hardware. Therefore unless the SaaS provider gives each organisation the emissions attributable to them, then it's difficult to get accurate numbers. 

Right now SaaS providers don't generally provide carbon attribution. A sample of ten well known SaaS providers was looked at including some of the ones in the examples above and although many had sustainability policies and reported on their own emissions they don't break this down and provide all consumers with their proportion of the org's emissions. 

The reason for this is that it is challenging to do whether a SaaS vendor runs in the cloud or on-prem. If 200 consumers of a SaaS service are all hitting the same application services and databases but for both physical hardware and cloud energy measurement can only be done at the machine level then dividing it up across consumers is not easy. Proxies may be used such as number of API requests per consumer but not all requests are equal in energy usage. Therefore it is unlikely that SaaS vendors will start reporting this until the tooling improves such that they can accurately (within the levels of carbon report) provide per consumer carbon reports. 

Given this the only way to obtain carbon emissions for the SaaS software an organisation is using is by approximation. There is no official, government or GHG Protocol recommended way to do this but a few options are presented below. In any reporting the most important thing is transparency about the method.  

{% include linkedHeading.html heading="The information available" level=3 %}
If a SaaS product is effectively a black box then this raises the question of what information is available tha could help in a CO2 emissions estimation. The 2 things that should always be known are:
 * data transferred - both for reads and writes
 * the request time

Additionally some knowledge of location or technical architecture or specific technologies such as a database may be found via vendor literature. The following table lists these: 
<table>
<tr>
    <th>Fact</th>
    <th>How it's known</th>
</tr>
<tr>
    <td>Data transferred</td>
    <td>Browser stats or metrics on backend to backend call</td>
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

Be aware that request time is not necessarily processing time and will depend on the location of the end user. 

{% include linkedHeading.html heading="Sustainable Web Design method" level=3 %}

This is a method promoted by Sustainable Web Design Community Group and published on <a href="https://sustainablewebdesign.org/calculating-digital-emissions/">sustainablewebdesign.org</a>. The method is specifically about websites but parts of it can be adapted for other uses. 

In short it is a top down estimate that takes an existing public domain estimated figure for all website and internet emissions of 1988TWh and then divides by another existing estimate for total end user traffic of 2444EB to get an energy of 0.81kWh/GB. For returning visitors to a site where data is already cached then 2% of the 0.81kWh is assumed.
This is then attributed to 52% end user device (i.e. laptop accessing the site), 14% network energy, 15% data centre energy and 19% production energy. Therefore one approach is to take the production, data centre and network energy which is 48% or 0.39kWh/GB and multiple by the amount of data traffic to/from the SaaS service (dependent on whether it's a read/GET or write/POST/PUT). 

Once kWh are derived they can be multiplied by the carbon intensity to get the emissions. Ideally this is local to the service hosting but if this is unknown a global figure can be used. 

This method is clearly very approximate because it only concentrates on the amount of data transferred. This may bias it when considering, for example the read or writing of a JPEG file that goes straight to/from disk vs a much smaller JSON payload that involves quite a lot of work on the backend with multiple systems. 

{% include linkedHeading.html heading="One Byte method" level=3 %}
This method is provided by The Shift Project <a href="https://theshiftproject.org/en"> which is a European think tank centres in Paris that is working towards a post carbon economy. 

It is similar to the SWD methodology in that it is based around data transfer, but the methodology to come to that number, here specified as an energy per byte is different. In <a href="https://theshiftproject.org/wp-content/uploads/2019/03/Lean-ICT-Report_The-Shift-Project_2019.pdf">their Lean ICT paper</a> they refer to 3 contribitions to this per byte number:

* The electricity consumption associated with using the terminal on which the action is performed;
 * The electricity consumption generated by the activity of the data centers involved in transferring the data;
 * The electricity consumption generated by the activity of the other network infrastructures during the 
transfer of the data

TODO..... 

{% include linkedHeading.html heading="Alternatives" level=3 %}
TODO


1. https://www.fortunebusinessinsights.com/software-as-a-service-saas-market-102222



## TODOs
Update headings to use the macro or whatever it is used elsewhere