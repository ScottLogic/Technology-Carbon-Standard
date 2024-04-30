---
layout: category
title: Platform as a Service (PaaS)
permalink: /information/paas
---

# Platform as a Service (PaaS)
Platform as a Service is a special case of cloud that lets the customer run applications without having to manage infrastructure (VM or Physical). 
The user of the PaaS service is still responsible for the writing of application code and its deployment but they don't have to worry about OS updates, low level networking, securing virtual machines and other infrastructure concerns; <s>all they have to do is conform to the interface for running applications that is provided by the PaaS vendor. The platform often includes various services that an application running on the platform can make use of such as a database or messaging system but this will vary significantly vendor to vendor.</s>
PaaS examples include:

* Heroku
* Big 3 cloud vendors
    * Short running function executors, e.g. AWS Lambda, Google Cloud Run and Azure Functions 
    * Longer running app executors, e.g. Google App Engine and AWS Elastic Beanstalk
    * Databases, e.g. Dynamo DB, Cosmos DB
* Salesforce Platform
* Red Hat Openshift implementations, e.g. Azure's
* CDN edge functions, e.g. Fastly Compute@Edge, Akamai Edge Workers


Providers of a PaaS may also provide IaaS and SaaS services. e.g. AWS has both IaaS and PaaS and Salesforce has PaaS and SaaS.<s> and there can be a slightly grey area between them. 
For example AWS EC2 instances, ELBs, VPCs, NAT Gateways are examples of IaaS whereas AWS Lambda functions are a type of PaaS. Salesforce sells various SaaS products that run on top of their platform but customers can also create their own apps that run on that same platform.   </s>

<s>As with low-level cloud services PaaS can bring CO2 emission benefits vs on-prem through:
 * use of low carbon electricity, e.g. a vendor using solar or wind or hydro
 * high utilisation

but this isn't a reason to jump before hardware reaches end of life due to the embodied carbon in the existing servers. </s>

{% include linkedHeading.html heading="Benefits of and downside of PaaS for emissions" level=2 %}
The advantages of cloud from an emissions perspective are discussed in <a href="/information/cloud#environmental-impact-of-cloud-services">Cloud Emissions</a> including the use of green electricity (if offsetting is counted) and having a low PUE. 

Where PaaS specifically is effective is in maximising utilisation. Even for virtualised hardware it is possible that physical hardware is underutilised, especially if VMs are running and have reseved hardware but are not doing any work. PaaS products are generally multi-tenant with the resources scaled as needed by particular tenant and thus are more likely to fully utilise resources. 

{% include linkedHeading.html heading="PaaS Capabilities and their emissions" level=2 %}
A PaaS will provide all or some of the following functionality:
 * Configurable API layers - i.e. access and entrypoints to the installed functions
 * Function runner - will execute functions in response to API requests
 * Additional supporting services
    * Object storage
    * DBs
    * Queues
    * Hosting/webserver, sometimes including CDN layer for caching


The diagram below shows how a PaaS service fits into the end to end service and what must be measured or estimated. Th
A typical web service includes a browser front end app or pages, a backend API layer and some persistance and it may also have some external services as dependencies. The next sections explain how these are provided by PaaS products.  

<img style="max-width:600px" src="/assets/images/PaaS/PaaSComponents2.png"/>

{% include linkedHeading.html heading="App/function execution" level=3 %}
Various flavours of this are possible but the aim is to be able to do processing server side without having to manage any servers. Solutions tend to be based around either Docker containers or something slightly more prescriptive known as serverless functions whereby only certain languages are permitted and all the application writer has to do is ensure their app, e.g. a set of Javascript files, conforms to some prescribed interface such that the runtime can launch it, report logs and metrics etc. 

{% include linkedHeading.html heading="Serverless functions" level=4 %}
These can be the most efficient way to execute code from a carbon point of view. Docker containers or very lightweight virtual machines (see AWS Firecracker) are spun up when requests come in and after a period of in-activity wind down. They'll scale as needed dependent on the number of requests. The underlying hardware running those machines is by default multi-tenant and shared. This ensures that hardware is maximally utilised within the constraint of needing headroom for busy periods. 

It is especially beneficial for infrequently used applications that would be idling most of the time, waiting for the occasional request. e.g. some internal workflow tool used by a small number of internal users when cases to process come in. Even if a container or a virtual machine is used these will consume memory and some CPU cycles when nothing is happening whereas serverless functions can scale to 0.

There's 2 scenarios where the benefits can be reduced:
 * high traffic sites, e.g. hundreds of requests per second
     * To take an example AWS Lambdas only handle one request at a time per virtual machine which may make them inefficient if there's any external dependencies and the function is waiting on a DB or storage for a significant proportion of request time
 * where dedicated resources are being used to host the lambdas

On the second point the worst case is where something like Azure App Service Environment is being used to provide an isolated single tenant environment for hosting the "serverless". This could be quite wasteful if not being used for a heavily utilised service. In between this and the default scenario are options for provisioned instances that mean virtual machines to handle requests are always running so as to avoid cold starts, e.g where a JVM initialises for the first time. There are ways to mitigate this without reserving instances including AWS SnapStart. 

Therefore from a carbon emissions point of view, all else being equal it is preferable to avoid dedicated hardware and to minimise reserved instances.

{% include linkedHeading.html heading="General app hosting" level=4 %}
Serverless functions generally refer to short lived functions that do a small amount of work then end. There are also services for running more traditional longer lived apps which can be based around docker images or code performing to a standard directory structure and entry point in a set of supported languages and frameworks. Examples include Google App Engine and AWS Elastic Beanstalk.

These use standard VMs just as a user could spin up themselves. The tool just does the orchestration of these resources for the user but it isn't hidden in the same way as the short lived serverless functions. 
This means that measurement can be done just as for resource manaulyl created. 

In other cases, e.g. Salesforce there is a much more restricted platform where, as with cloud functions the runtime is hidden from the user of the service. 


{% include linkedHeading.html heading="Supporting services" level=4 %}
Some use cases are stateless but often there is a need to persist data and most PaaS vendors will provide options for this that may be tightly coupled to the platform or quite separate. As an example, in the Salesforce Platform this is a specific DB provided by the platform including APIs to communicate with it securely from an app running on the platform. On the other hand for GCP or AWS there are various database as a service offerings that can be used from an app on the platform but these are quite decoupled and can also be used from lots of other places. Ultimately an app running on a PaaS platform may make use of any number of SaaS products including authentication providers, databases and message queues and so long as HTTP or a standar protocol is used.



{% include linkedHeading.html heading="Measuring PaaS" level=2 %}
<!-- {% include linkedHeading.html heading="Major cloud service providers" level=3 %} -->

For the big-3 cloud providers PaaS can be measured as described in <a href="/information/cloud">Cloud</a>. In other words their built-in reporting can be used directly just as for lower level infrastructure (which will provide the PaaS implementation anyway). 

<!-- {% include linkedHeading.html heading="Other vendors" level=3 %} -->
For any vendors that don't provide emissions attribution information then estimation will be needed. 

 The latter is by far the more common scenario as most vendors don't provide carbon emissions attributed to each customer. Therefore estimation is typically required and methods for this are described in <a href="/information/cloud">SaaS</a>; In many ways PaaS is similar to SaaS in that the implementation is a black box although it may be slightly less opaque - for example in Salesforce Platform the database model is under the control of the user. 
 

 {% include linkedHeading.html heading="Other serverless" level=3 %}
 TODO - can discuss things like Dynamo and Cosmos and other database services that can be used with functions without any infra to manage. 