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

## Why does SaaS matter
The use of SaaS has been growing rapidly over the last decade<sub>1</sub> and is expected to continue to do so. <a href="https://www.statista.com/statistics/505243/worldwide-software-as-a-service-revenue/">Statista</a> has it as growing from 30Bn to 200Bn in just under ten years globally and this means it makes up an important part of technology emissions.

<a href="https://www.cloudzero.com/blog/saas-statistics/">Cloud Zero</a> references a State of SaaS report that has companies with &lt;500 employees using over 200 SaaS products whereas <a href="https://devsquad.com/blog/saas-statistics">Dev Squad</a> reports 130 across all companies. They also state that ""70% of software used by today's companies are SaaS"
". 

Whatever the precise numbers it is clear that companies use a lot of SaaS products and in fact they often make up a significant majority of all the tech products. This means that if one only looks at on-prem and cloud resources then it's likely a significant amount or even majority of tech emissions will be missed. 

## The advantages of SaaS for sustainability
All else being equal SaaS products have the advantages of multi-tenancy and no-duplication over in-house software.

#### Multi-tenancy
SaaS products are typically multi-tenant where many users share the same servers and database. This means that infrasture will typically be heavily utilised and won't have periods of doing no work like a dedicated physical server or even dedicated cloud VM might. 

This is less of an advantage as more workloads are moved to cloud container clusters, typically Kubernetes which also permits high utilisation but nonetheless it minimises the chances of any wasted resources. 

There are exceptions where for regulatory reasons an organisation may have their own instance of the SaaS stack or parts of it. In such cases the advantage no longer applies. 

#### No duplication

By using a SaaS product rather than creating and/or running your own duplicated effort is removed including the writing of code, support of that code and build/deployment. In short this means less people (and so typically less offices),less supporting software, less laptops and other hardware like build machines.

Put another way, the development, deployment and maintenance of software comes with an environmental cost as well as the running of software and so if many orgs make use of a single SaaS product then this is only incurred once rather than per org. 

## Measuring SaaS

### Sustainable Web method

### One Byte method

Alternatives
TODO


1. https://www.fortunebusinessinsights.com/software-as-a-service-saas-market-102222



## TODOs
Update headings to use the macro or whatever it is used elsewhere