---
layout: category
title: Platform as a Service (PaaS)
permalink: /information/paas
---

# Platform as a Service (PaaS)
Platform as a service is touched on in the Cloud section and refers to a service that provides a way to host front end sites and provide a backend API (often including data storage) without having to manage infrastructure and machines (VM or Physical). Examples include:

* Heroku
* AWS Lambda and Azure Functions (elements of IaaS in these)
* Azure Functions
* Google App Engine
* Salesforce Platform

{% include linkedHeading.html heading="Cloud based platforms" level=2 %}
Cloud service providers typically provide both span both Infra as a service (IaaS) and higher level PaaS services. For example EC2 instances and Networking appliances are examples of IaaS whereas serverless functions are closer to PaaS because there's no machines to log into, no OS updates to make etc. 

Where a cloud service provider is providing a PaaS type service then measurement of emissions should be possible as described in <a href="/information/cloud">Cloud</a>

{% include linkedHeading.html heading="Other platforms" level=2 %}
For non-cloud vendors then there are two options:
 * Obtain emissions from the vendor if they will provide them
 * Do some form of estimation 

 The latter is by far the more common scenario as most vendors don't provide carbon emissions attributed to each customer. Therefore estimation is typically required and methods for this are described in <a href="/information/cloud">SaaS</a>; In many ways PaaS is similar to SaaS in that the implementation is a black box although it may be slightly less opaque - for example in Salesforce Platform the database model is under the control of the user. 
 