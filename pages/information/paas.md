---
layout: category
title: Platform as a Service (PaaS)
permalink: /information/paas
---

# Platform as a Service (PaaS)
Platform as a service is touched on in the Cloud section and refers to a service a way to run apps without having to manage infrastructure and machines (VM or Physical). This can include both backend apps (including storage in some cases) and hosting for front end web pages/apps. Examples include:

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
 
{% include linkedHeading.html heading="Serverless" level=2 %}
Discuss AWS lambda, Azure Functions and also CDN lambda at edge that all allow the deployent and running of apps with minimal infrastructure to manage. No standard DB but can be combined with database services as described below. Can result in some infra to manage in terms of cloud networking to connect the 2. 

 {% include linkedHeading.html heading="Functions as a service" level=3 %}

 {% include linkedHeading.html heading="Other serverless" level=3 %}
 TODO - can discuss things like Dynamo and Cosmos and other database services that can be used with functions without any infra to manage. 