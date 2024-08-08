---
layout: sideNavigation
title: Software as a Service (SaaS)
permalink: /information/saas
published: false
---

# Software as a Service (SaaS) 

SaaS is application software that is provided as a remote service by a vendor, usually including a web interface but can also include mobile and/or other UIs or be an API-only service. 
The differentiating factor compared to Cloud IaaS is that there is no physical or virtual infrastructure to be managed so dev-ops concerns such as OS updates, server provisioning and scaling are all managed by the service provider. Further, unlike PaaS there is no app development/deployment/testing to be managed.  

There are tens of thousands of examples of SaaS products but a few well known ones include:

| **Area**                          | **Examples**                      |
| -                                 | -                                 |
| Authentication providers          | Auth0, Okta                       |
| CRM Providers                     | Salesforce, Microsoft Dynamics    |
| Data Warehousing solutions        | Snowflake, Databricks             |
| Productivity                      | Office 365, Google Docs           |
| Development support               | Github, Gitlab, JIRA Cloud        |
| Accounting                        | QuickBooks, Sage                  |
| Payments                          | Stripe, Adyen                     |


This page focuses specifically on SaaS but be aware that some providers such as Salesforce also span the Platform as a Service (PaaS) space where they provide a platform to run apps as well as providing SaaS apps running on that platform such as the core Salesforce CRM app. Similarly, cloud platforms such as AWS, Azure and GCP mainly provide cloud Infrastructure as a Service in the form of VMs and networks and storage but also provide many SaaS products that run on that infrastructure. 

{% include linkedHeading.html heading="SaaS Categories" level=2 %}
On the main <a href="https://www.techcarbonstandard.org/">TCS graphic</a> SaaS appears under Category C as operational emissions from an organisation delivering a service, albeit indirect ones where a third party has been employed to deliver part of the service. In additional to this there may be Category D and Category O emissions associated with SaaS. 

**Category O** Where a SaaS product has a front-end component that is used by members or employees of an organisation, then the use of the front-end on a laptop or mobile device will incur operational emissions - typically Scope 2 from the organisation's energy use but can also be Scope 3 where the user is working remotely. 

**Category D** Where a SaaS product has a front end component that is used by the end-users, e.g. public consumers, then the use of the front-end on a laptop or a mobile device will incur downstream emissions.  

{% include linkedHeading.html heading="Why does SaaS matter" level=2 %}

The use of SaaS has been growing rapidly over the last decade[^1] and is expected to continue to do so. <a href="https://www.statista.com/statistics/505243/worldwide-software-as-a-service-revenue/">Statista</a> has it as growing from 30Bn to 200Bn in just under ten years globally and this means it makes up an important part of technology emissions.

<a href="https://www.cloudzero.com/blog/saas-statistics/">Cloud Zero</a> references a State of SaaS report that has companies with < 500 employees using over 200 SaaS products whereas <a href="https://devsquad.com/blog/saas-statistics">Dev Squad</a> reports slightly different 130 products per company (no size specified so likely an average across all). They also state that "70% of software used by todays companies are SaaS". 

Whatever the precise number it is clear that companies use a lot of SaaS products and in fact they often make up a significant majority of all the tech products. This means that if one only looks at on-prem and cloud resources then it's likely a significant amount or even majority of tech emissions will be missed. 

{% include linkedHeading.html heading="The potential of SaaS for sustainability" level=2 %}

SaaS products have a couple of potential sustainability advantages over in-house created and operated software: multi-tenancy and no development + support duplication. This assumes all else being equal such as the SaaS vendor's data centre being of a similar carbon intensity or less than any data centres or cloud services that the purchasing organisation is using. 

### Multi-tenancy
SaaS products are typically multi-tenant where many users share the same servers and database. This means that infrasture will typically be heavily utilised and won't have periods of doing no work like a dedicated physical server or even dedicated cloud VM might. 

How much of an advantage this is depends on how an organisation runs software. Where an organisation uses dedicated hardware for an application then there is likely a notable gain here. On the other hand where an application cluster like Kubernetes is used then the advantage is less because this also permits high utilisation. Even so, the use of SaaS generally ensures all components including the DB are shared, which isn't always the case for in-house cloud apps. 

There are exceptions where this dosn't apply; somtimes for regulatory reasons an organisation may have their own instance of the SaaS stack or parts of it and so resources may be under utilised even for a SaaS product. 

### No development duplication

By using a SaaS product rather than creating and/or running it's own software, an organistion is avoiding duplicated effort that would include the writing of code, support of that code and build/deployment. In short this means less people (and so typically less offices), less supporting software, less laptops and other hardware like build machines.

Put another way, the development, deployment and maintenance of software comes with an environmental cost as well as the running of software and so if many organisations make use of a single SaaS product then this is only incurred once rather than per organisation. 


{% include linkedHeading.html heading="Measuring SaaS" level=2 %}
The nature of SaaS makes measuring problematic for working out the emissions related to a single organisation's activities; the very point of SaaS is that the implementation is hidden and not something that the user needs to know about. Further, as already mentioned, it is usually multi-tenant which means many organistions are sharing the same hardware. This wouldn't be a problem if the SaaS provider dealt with this and gave each organisation the emissions attributable to them, but unfortunately at the moment SaaS providers don't generally provide this attribution. A sample of ten well known SaaS providers including some of the examples mentioned above were looked at and although many had sustainability policies and reported on their own total emissions they don't break this down and provide each consumer with the individual consumer's proportion of the org's emissions. 

The reason for this is that it is challenging to do whether a SaaS vendor runs in the cloud or on-prem. Hundreds or thousands of consumers of a SaaS service may all be hitting the same application services and databases but physical hardware and cloud energy measurement can only be done at the machine level meaning it's very difficult for vendors to attribute. Proxy measures could be used such as number of API requests per consumer but there are issues here such as not all requests being equal in energy usage. Therefore it is unlikely that SaaS vendors will start providing per consumer carbon reports until the tooling improves. 

Given these challanges, for now it falls on the consumer of a SaaS service to to obtain carbon emissions to approximate the emissions associated with its use of the serice. There is no official government or GHG Protocol recommended way to do this but a few options are presented shortly. These are just suggestions and its important that whatever approach is taken there's transparency about the method.  

Before going into some of the possibilites it's useful to think about what information is available for use of SaaS. 

{% include linkedHeading.html heading="The data available" level=3 %}
If a SaaS product is effectively a black box then this raises the question of what data, if any is available tha could help in a CO2e emissions estimation.  

The following table lists the main data points that may be available: 

| **Fact** | **How it's known** |
| - | - |
| Data transferred | Browser stats or metrics on backend to backend call |
| Front-end emissions | Measurement |
| Number of requests and request times | Browser stats or metrics on backend to backend call |
| Location | Service location often published as has regulatory implications. Also can be reverse looked up via IP (but could be misleading if intermediary like a CDN is inbetween the client and servers) |
| Database | May be published in tech documents |
| High level architecture | May be published in tech documents |

The first 3 are the most likely to be known as they are fully in the control of the organisation using the SaaS product. 
Be aware that request time is not necessarily processing time and will depend on the location of the end user - this is discussed more later. 

The final two items around tech implementation can help decide on any scaling factors and/or can be used to see how closely the SaaS service resembles some other known systems for which data can be obtained. In other words they can make an estimate slightly less naive and more rooted in reality. 

{% include linkedHeading.html heading="Measurement/estimation methods" level=3 %}
Given the data above there are a few methods available for measuring and estimating SaaS emissions. These are summarised below including some links to resources where available. In some cases there is no industry standard mechanism and expert help may be beneficial where the organisation isn't experienced in these measurements and approximations. 


**Sustainable Web Design method**

This is an approximation method promoted by Sustainable Web Design (SWD) Community Group and published on <a href="https://sustainablewebdesign.org/calculating-digital-emissions/">sustainablewebdesign.org</a>. The method is specifically about websites but parts of it can be adapted for other uses. It covers all aspects of a service from the front-end through to embodied carbon on the server and although it provides one number as an output this can be split if only part of the estimate is of interest. The input to this method is the number of GBs transferred. 

**Shift Project 1 Byte method**

This is provided by <a href="https://theshiftproject.org/en">The Shift Project</a>  which is a European think tank centred in Paris that is working towards a post carbon economy. 

It is similar to the SWD methodology in that it is based around data transfer, but the methodology to come to an emissions per byte of data transferred is different. See <a href="https://theshiftproject.org/wp-content/uploads/2019/03/Lean-ICT-Report_The-Shift-Project_2019.pdf"> for more info.


**Server only emissions - request time based methods**

The SWD and 1-byte methods are primarily based around quantity of data transferred but this isn't always a fair representation of the processing time on the server. For example it may be that a number of data sources (e.g. multiple DB tables or separate services) need to be queried in order to fetch a lot of data that is then aggregated down to just a few values resulting in a small returned payload.

An alternative way to capture the server emissions component, at least for synchronous requests would be to do an approximation around request time which will often be captured in metrics.

<img style="max-width:600px" src="/assets/images/SaaS/RequestStructure.png"/>

There is no common methodology in the literature for this, but by assuming request structures like the above (ideally aided with some high level knowledge of the SaaS architecture) it may be possible to derive some very approximate numbers for the SaaS emissions.

**Front-end only emissions**

Many SaaS products include web and mobile interfaces that may be targetted at admin users and general users of the service and this part of the SaaS emissions. Although this is accounted for in the SWD and 1-Byte methods it can also be measured more accurately separately in standard ways such as:

* browser energy measurements, e.g. via Firefox Profiler functions
* device measurements via a power meter

These measurements aren't practical to do on all user devices all the time and so representative use cases should be found in order to carry out the measurements. 

**Workflows and asynchronous work**

Sometimes the work involved in fulfilling a request will be quite different to both the the data transferred and the request time. e.g. consider a case where some form of workflow is kicked off via a short call with just a few fields (e.g. a user ID and workflow ID) and then returns almost immediately to say request accepted but then proceeds to do a lot of work. Consider use cases such as a video copy from one place (i.e. not directly returning to the user on the API) to another or the dropping of user records asynchronously in an SFTP location.

Another example would be the use of a machine learning tool or analytics service such as Snowflake where an API call results in a very expensive query across all the data. In such cases different bespoke methodologies may be needed - this is obviously not easy to estimate and so a judgement call should be made as to whether the analysis is worth it, i.e. is the particular operation expensive enough and used often enough to significantly move the needle on the total emissions. Workflows with lots of waits, e.g. on human intervention are the most complex thing to analyse because of their stop start nature. Other causes such running an expensive query may be estimated via time to complete, rather than the API response time if this is visible and can be captured, e.g. via time for an email or some other notification to arrive saying the work is done. 

{% include linkedHeading.html heading="References" level=3 %}
[^1]: [https://www.fortunebusinessinsights.com/software-as-a-service-saas-market-102222](https://www.fortunebusinessinsights.com/software-as-a-service-saas-market-102222)

