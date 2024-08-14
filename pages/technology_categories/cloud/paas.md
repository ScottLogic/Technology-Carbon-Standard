---
layout: sideNavigation
title: Platform as a Service (PaaS)
permalink: /technology-categories/cloud/paas
redirect_from:
    - /information/cloud/pass
published: false
---

# Platform as a Service (PaaS)
Platform as a Service is a special case of cloud that lets the customer run applications without having to manage infrastructure (VM or Physical). 
The user of the PaaS service is still responsible for the writing of application code and its deployment but they don't have to worry about OS updates, low level networking, securing virtual machines and other infrastructure concerns. 

The diagram below shows just a few of the many PaaS offerings on the market: 
<img style="max-width:600px; background-color: white; padding: 8px; border-radius:10px" src="/assets/images/PaaS/PaaSSolutions.png"/>

Some options are relatively simple and opinionated like Heroku and Salesforce whereas others are more complex but flexible like those from the main cloud providers offering a variety of options including:
* Short-running function executors, e.g. AWS Lambda, Google Cloud Run and Azure Functions 
* Longer running app executors, e.g. Google App Engine and AWS Elastic Beanstalk
    * Also managed Kubernetes, e.g. GKE, AKS
* Databases, e.g. Dynamo DB, Cosmos DB

Cloud vendor PaaS options often straddle the IaaS divide and allow the mixing and matching of high and low-level components. Salesforce on the other hand also offers SaaS products that run on its platform.
There's also a pattern of CDN providers now offering short-lived compute and sometimes storage services alongside traditional caching use cases. 

{% include linkedHeading.html heading="Benefits of PaaS for emissions" level=2 %}
The advantages and disadvantages of cloud from an emissions perspective are discussed in <a href="/information/cloud#environmental-impact-of-cloud-services">Cloud Emissions</a> including the use of green electricity (if offsetting is counted) and having a low PUE. 

Where PaaS can have an advantage over IaaS is in maximising utilisation. Where an organisation has lifted and shifted virtual machines from on-prem those machines may be doing very little work but taking a percentage of a physical machine's resources meaning energy use from CPU and memory usage and also resulting in embodied carbon. e.g. if some large cloud VM instances are required to be continually running in case of high traffic once a day or week. 

On the other hand, PaaS products are generally multi-tenant and so maximise resources with everything being shared. The headroom of each physical machine (i.e. unused utilisation) can be much lower as the scale of the PaaS provider means that when a given tenant needs to scale up, more resources can easily be accommodated. Even where an organisation uses compute resources quite efficiently, e.g. via a custom Kubernetes cluster, it is common for services like databases to be managed externally using VMs and so may be underutilised. 

From a purely sustainability viewpoint there are a few downsides to using PaaS but be aware that:
* For some providers, there may be less control over location and carbon intensity than a full IaaS solution with the option to pick from numerous regions over the world. 
    * This would also reduce the ability to dynamically switch regions over time according to the lowest carbon electricity.
* The above only applies to multi-tenant providers. Where dedicated hardware is employed for security and regulatory reasons then the advantage no longer applies.
* Not all providers report on the emissions of their PaaS offerings.

{% include linkedHeading.html heading="PaaS Capabilities and their emissions" level=2 %}
A PaaS will provide all or some of the following functionality:
* Configurable API layers - i.e. access and entrypoints to the installed functions
* Function runner - will execute functions in response to API requests
* Additional supporting services
    * Object storage
    * DBs
    * Queues
    * Hosting/webserver, sometimes including CDN layer for caching


The diagram below shows how a PaaS service fits into the end-to-end service and what must be measured or estimated. A typical web service includes a browser front-end app or pages, a backend API layer and some persistence and it may also have some external services as dependencies. The next sections explain how these are provided by PaaS products.  

<img style="max-width:600px; background-color: white; padding: 8px; border-radius:10px" src="/assets/images/PaaS/PaaSComponents2.png"/>

{% include linkedHeading.html heading="App/function execution" level=3 %}
Various flavours of this are possible but the aim is to be able to do processing server side without having to manage any servers. Solutions tend to be based around either Docker containers or something slightly more prescriptive known as serverless functions whereby only certain languages are permitted and all the application writer has to do is ensure their app, e.g. a set of Javascript files, conforms to some prescribed interface such that the runtime can launch it, report logs and metrics etc. 

{% include linkedHeading.html heading="Serverless functions" level=4 %}
These can be the most efficient way to execute code from a carbon point of view. Docker containers or very lightweight virtual machines (see AWS Firecracker) are spun up when requests come in and after a period of inactivity wind down. They'll scale as needed depending on the number of requests. The underlying hardware running those machines is by default multi-tenant and shared. This ensures that hardware is maximally utilised within the constraint of needing headroom for busy periods. 

It is especially beneficial for infrequently used applications that would be idling most of the time, waiting for the occasional request. e.g. some internal workflow tools used by a small number of internal users when cases to process come in. Even if a container or a virtual machine is used these will consume memory and some CPU cycles when nothing is happening whereas serverless functions can scale to zero.

There are 2 scenarios where the benefits can be reduced:
* High-traffic sites, e.g. hundreds of requests per second
    * To take an example; AWS Lambdas only handles one request at a time per virtual machine which may make them inefficient if there are any external dependencies and the function is waiting on a DB or storage for a significant proportion of request time.
* Where dedicated resources are being used to host the lambdas.

On the second point, the worst case is where something like Azure App Service Environment is being used to provide an isolated single-tenant environment for hosting the "serverless". This could be quite wasteful if not used for a heavily utilised service. In between this and the default scenario are options for provisioned instances that mean virtual machines to handle requests are always running to avoid cold starts, e.g. where a JVM initialises for the first time. There are low-carbon ways to mitigate this such as AWS SnapStart which avoids the need to reserve instances.

Therefore from a carbon emissions point of view, all else being equal it is preferable to avoid dedicated hardware and to minimise reserved instances.

{% include linkedHeading.html heading="General app hosting" level=4 %}
Whereas serverless functions generally do a small amount of work then end there are also services for running more traditional longer lived apps which can be based around docker images or code performing to a standard directory structure and entry point in a set of supported languages and frameworks. Examples include Google App Engine and AWS Elastic Beanstalk and at a slightly lower level the various managed Kubernetes solutions on the market and tooling built around them like Open Shift. 

These typically use standard VMs just as a user could spin up themselves, but with the benefit that the providers manage the orchestration and maintenance of these resources. Nonetheless, the infrastructure isn't always hidden in the same way as the short-lived serverless functions and this means that measurement can be done as per any IaaS component. 

In other cases, e.g. Salesforce there is a much more restricted platform where, as with cloud functions, the runtime is hidden from the user of the service. 

{% include linkedHeading.html heading="Supporting services" level=4 %}
Some use cases are stateless, but often there is a need to persist data, and most PaaS vendors will provide options for this that may be tightly coupled to the platform or quite separate. As an example, in the Salesforce platform, this is a specific DB provided by the platform, including APIs to communicate with it securely from an app running on the platform. On the other hand, for GCP or AWS, various database-as-a-service offerings can be used from an app on the platform, but these are quite decoupled and can also be used from lots of other places. Heroku includes a single-managed SQL, Redis, and Kafka service to cover common use cases.

Ultimately, an app running on a PaaS platform may make use of any number of SaaS products, including authentication providers, databases, and message queues, so long as HTTP or a standard protocol is used.

As touched on earlier, there is value in using database and queue solutions from a PaaS provider in that they are typically multi-tenant. As an example, with AWS Aurora Serverless, although the user gets their own DB instances, these can be scaled automatically and dynamically. The whole storage engine is distributed and multi-tenant, as are many other storage types, including S3, Google Big Table, Azure Cosmos DB. This brings two benefits:
* High utilisation of resources while allowing room to scale a given tenant.
* Efficient storing of data - replication factor doesn't need to be high while still protecting from data loss


{% include linkedHeading.html heading="Measuring PaaS" level=2 %}
<!-- {% include linkedHeading.html heading="Major cloud service providers" level=3 %} -->

For AWS, Azure, GCP PaaS services can be measured as described in <a href="/information/cloud">Cloud</a>. In other words, their built-in reporting can be used directly just as for lower level infrastructure. Additionally, tools such as Cloud Carbon Footprint can be utilised in many cases as the PaaS solutions will still provision VMs that can be measured even though the user of the service doesn't have to manage them.

This is not possible for most of the other solutions except where they provision resources in the cloud account of the organisation using the PaaS product. As already discussed, PaaS solutions offer the most benefits from a sustainability perspective when multi-tenant. However, this also makes reporting very challenging as the attribution of carbon emissions is not easy, as many users share one set of servers and virtual servers.

Where the underlying infrastructure is opaque, there are two options:
1. Follow the [same approach as for SaaS](/information/saas#measurement-estimation-methods)
    * i.e. Sustainable Web Design, or Shift 1, or a custom request time-based method where the data or request time in combination with the number of users is used to aid estimation. 
2. Run locally or in some other environment periodically. 

The second option wasn't possible for SaaS because the implementation is totally hidden, but for PaaS, the user is responsible for the application code, so it may be possible to run this in an alternative environment in order to get an approximate value. This could be local, cloud, or in something like <a href="https://www.green-coding.io/projects/green-metrics-tool/">Green Metrics Tool's SaaS offering</a> where a predictable environment is needed for measurements over time. 

{% include linkedHeading.html heading="Measuring databases and other add-on services" level=3 %}
Where the application on the PaaS platform makes use of additional services such as a managed DB or queue, then measurement becomes further complicated.

One option is to use the aforementioned SaaS methods and don't break out the DB as a separate estimate. In other words, just consider the end-to-end request time or data sent. This is likely to be less accurate but is simpler as a first approximation. Where there is a preference to actually measure the end-to-end request handling, including both app server and data services, then there are a few possible scenarios:

| **Scenario** | **Options** |
| ------------ | ----------- |
| Bespoke DB provided by cloud service providers like GCP that provides carbon reporting | Use the vendor carbon reporting or a tool like Cloud Carbon Footprint |
| Bespoke DB with no carbon reporting, e.g., Salesforce Platform's data layer | Could run with a similar DB, e.g., Postgres, for a very approximate measurement as a Docker image alongside the application code that calls it. But it would need changes to the application where there's no API-compatible option, so not always practical |
| Standard DB provided as a managed service | Run a dockerised or a cloud-provided version to run with the app code. |

Note that when running something like a database in Docker to estimate the energy usage of a request, the set is much simpler with a single local DB instance vs a cluster across multiple sites and machines for the PaaS one, and so the real DB may differ significantly. The value is better for observing change over time than getting an accurate number for reporting, but in the absence of other options, it is better than nothing. 

 