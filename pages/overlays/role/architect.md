---
layout: category
title: Architect overlay
permalink: /overlays/role/architect
---

# Architect

As an architect you can exert significant influence on a company's tech carbon emissions. You might be a technical/solutions/enterprise/other architect and although the scope of responsibility can vary across roles there's many activities common to all where you can make a difference to carbon emissions inlcuding:

 1. Setting the tech strategy and principles
 2. Promoting best practice
 3. Leading technical selection, e.g. of a cloud vendor or a SaaS product
 4. Designing architecture (from enterprise to technical) 
 5. Setting NFRs

The first couple are high level activities that could include the cloud vs on-prem strategy or setting principles around data retension and the remaining 3 are actually all about NFRs to some degree. Tech selection will be done against a set of functional and non-functional requirements and architecture design choices will be done against a set of NFRs, e.g. to promote availability or low cost. 

We'll start by looking at what an architect can do around strategy and principles for carbon reduction and then move onto the NFRs that derive from this. 

{% include linkedHeading.html heading="Setting strategy and best practice" level=2 %}

The diagram below gives takes the standard and overlays on the categories some examples of how you might influence them. These are just suggestions to trigger some ideas - figure out your own principles as appropriate to your organisation. 
![embodied-carbon](/assets/images/overlays/arch_strat_overlay.png)

We'll now provide a bit more detail on each of these suggestions:

{% include linkedHeading.html heading="Upstream" level=3 %}

{% include linkedHeading.html heading="Software" level=4 %}

<ul>
<li><b>Set strategy around COTS/OSS vs in-house
</b> </li>
<li><b>Set principle to prefer green vendors
</b></li>
</ul>
All software creation comes with a cost and the first thing you might decide to do is to trade off open source and COTS software against in-house. Some of the in-house software carbon costs are out of the scope in this standard because they are non-technology items like buildings and transport for employees. Still they count in the overall picture of your org and if 1 company creates software that's less emissions than if 20 companies all create the same software.  

You may also wish to prefer vendors who report on their emissions and follow sustainability best practices in order to push software and machine learning model creators to be more sustainable. e.g. training models with renewable electricity. 
{% include linkedHeading.html heading="Hardware Manufacture, Transport and Installation" level=2 %}

Any hardware you buy in or acquire from data centre servers to employee laptops required energy produced emissions in manufacture and transport. Not all architects will get involved in hardware selection - servers and network equipment may fall under data centre architects for example. Where you do though you can apply pressure to ensure there is a low carbon strategy for:
<ul>
<li><b>Renewal cycles: </b> i.e. how often we should replace hardware. Less hardware bought per year is less emissions</li>
<li><b>Recycling:</b> Check the criteria under which your current disposal partners were selected and if recycling and low energy usage were not considerations make sure they are next time the contrcats come around. </li>
<li><b>Procurement:</b> Do the procurement teams understand the embodied emissions with each item they acquire? If not kick-off an initiative to look at this and determine some evaluation criteria including the weighting to apply to embodied carbon</li>
</ul>

{% include linkedHeading.html heading="Operational emissions" level=3 %}

As an architect you can devise or influence strategy like:
<ul>
<li><b>Cloud vs on-prem strategy:</b> In choosing your mix of cloud vs on-prem you can include sustainability as a major factor in the decision making</li>
<li><b>Observability strategy:</b> Observability of anything requires a joined up apprach between dev-ops, development and operations but particularly for emissions. Architects should lead on joining these functions to provide energy observability.</li>

<li><b>Vendor selection strategy:</b> Vendor selection should line up with company principles and strategy. This should include sustainability and you should know what you want from vendors and how to compare and weight. </li>

<li><b>Data retention and dormancy policy:</b> Worldwide 65 zettabytes were created and stored/consumed in 2020<sub>1</sub>. By having a strategy to ensure you only store and transfer data when really necessary you can reduce emissions associated with data transfer and storage whether on-prem, cloud or a SaaS provider whilst also conforming with GDPR more easily</li>
<li><b>Software selection (excluding SaaS)</b></li>
</ul>

Whether you are running in the cloud or on-prem architects can also set principles and promote architectural patterns to minimise day to day energy usage. 

<ul>
<li><b>Use low overhead protocols like gRPC:</b> Less energy used in data transfer</li>

<li><b>Share resources as much as possible:</b> Could be about maximising physical server utilisation via containerisation or sharing database clusters - can still be isolated between tenants but avoid separate hardware and/or VMs for every service.</li>

<li><b>Batch workloads must be dynamically schedulable in time and region</b> This should be done following a wider strategy around moving workloads but by making it easy to move a workload in time or location we can optimise for both cost and the electricity carbon intensity</li>
<li><b>Programming langauge:</b> Architects won't necessarily pick these but they should get senior engineers considering energy efficiency along with the multitude of other considerations in picking a language</li>
</ul>

Architects will also work with dev-ops or developers or date centre engineers to push down principles into their tech strategies so that lower level strategies also take account of carbon



{% include linkedHeading.html heading="Direct (Category O)" level=4 %}
In the embodied section we talked about hardware selection maximising lifetime and having low manufacture emissions. Hardware procurement strategy should also include operational concerns like:
<ul>
<li><b>Energy consumption in use:</b> Finding devices that use the minum energy per unit of work</li>
<li><b>Observability: </b> So that energy can be measured in real time across all devices.</li>
</ul>
As part of the strategy decide on the weighting to give each criteria including the earlier ones around embodied carbon.

Now some more specific examples of will given for particular areas in the standard:

<b>Servers:</b> As well as the more general suggestions above for on-prem servers and the applications running on them senior architects can influence the hardware utilisation strategy e.g.
<ul>
<li><b>Containerisation strategy:</b> Plan to get a common platform, e.g. Kubernetes, and how and what existing workloads to migrate to that</li>
</ul> 

<b>Networks: </b>
Specific items for networking could include:
<ul>
<li><b>Correct sizing for high utilisation</b> Architects can help translate business growth requirements into expected data transfer needs (now and future) and ensure the correct size of networking hardware is selected so it is well utilised (albeit allowing for traffic growth). Typically networking hardware doesn't scale down in power in the way standard servers do and so under utilised hardware will have a heavier cost.</li>

<li><b>Virtualisation/containerisation strategy</b> Where there's virtual networking functions running purely as software the same utilisation concerns apply as with any application - maximise software, albeit traded off against maximum latency and contention needs. Therefore the networking strategy may be joined up with the server and application one </li>
</ul> 

You may also promote certain principles and technical designs to help reduce network traffic: 

<ul>
    <li><b>Protocol efficiency:</b> Using aforementioned protocols like gRPC and using persistent connections</li> 
    <li><b>Small focused payloads:</b> Avoid designs that send high volume 1MB messages to hundreds of consumers who aren't interested in most of the data. </li>
    <li><b>Video distribution optimisation:</b> Using technology like multi-cast for video can reduce network capacity needs in the data centre (and ISP).</li>
    <li><b>File transfer routes:</b> Architect large file transfers to take the most direct route without intermediary copies</li>
</ul>

A preference for larger more monolithic applications may also reduce network traffic - but there can be other costs.  

<b>User devices:</b> Where architects are involved in workforce IT like employee devices there's a few of areas they can influence:
<ul>
<li><b>Operational power</b>As with servers and other infra prefer devices with low operational power, e.g. an ARM chip device if an option</li>
<li><b>Device configuration:</b> Set requirements and ensure there is testing around device config such that laptops run in low power modes when with low activity and go to sleep quickly</li>
<li><b>Inventory and monitoring strategy:</b> Ensure there is the correct tooling for managing device inventories and ideally add power monitoring so you know all the devices you have and the energy they consume</li>
</ul>

You could argue for selecting employee/internal user software that is energy efficient too but benefits may be low where users have their laptops on all day anyway in higher power modes.   
  

{% include linkedHeading.html heading="Indirect (Category C)" level=4 %}

All the indirect solutions involve a vendor and so it is important that architects include carbon non functional requirements in vendor selection. This might include:
<ul>
<li><b>How "green" their electricity is:</b> You may take a view on <a href="/glossary#power-purchase-agreements-ppa">location vs market</a> based accounting here</li>
<li><b>Monitoring and reporting</b> - do they make it easy for you to find the energy attributed to your services</li>
</ul>

Note: for managed services and cloud any embodied carbon will be <a href="/glossary#amortisation">amortized</a> and included in operational because you have no or limited control over them - you don't buy the hardware,  it's just part of the carbon cost of you providing your service. 


<b>Cloud:</b> In addition to some of the more generic points above 2 things you might want to focus on for cloud specifically are:

<ul>
<li><b>Cloud architectures:</b> The cloud offers slightly different architecture options compared to on-prem including serverless and more dynamic scaling and multi-tenant DB options. Architects can set the direction here to ensure energy efficiency is considered, e.g. preferring a lambda/cloud function for an infrequently used service</li>
<li><b>Observablility strategy:</b> This is important everywhere but for cloud the architect must find different models to assess cloud energy usage in the absence of hardware monitoring and may recruit data science teams to support this</li>
</ul>

<b>SaaS:</b> The main levers here for the architect are in vendor selection as already described. You can also think about how you use an SaaS product as per any other:
<ul><li><b>Architect to minimise SaaS calls and data storage:</b> Particularly for consumer facing services you can save costs as well as carbon by avoiding excessive API calls and caching properly. Use of shim layers and your own CDN may air flexibility and vendor independence as well as your control over emissions if you are partnering with a green CDN</li>
</ul>

<b>Managed services:</b>
This straddles the cloud and on-prem world, e.g. where you have managed storage or VMs managed hardware/VMs to install. Standard items like containerisation strategy and data retension apply here but additionally:
<ul>
<li><b>IaaS vendor strategy:</b> You may wish to have a strategy around seletion based on factors like the location, electricity carbon intensity, PUE and how carbon efficient the hardware (including the embodied carbon)you're being provided with is</li>
</ul>

{% include linkedHeading.html heading="Downstream" level=3 %}

## Setting Non-functional-requriements (NFRs)

In this section we'll look at some of the NFRs (also known as Quality Attributes) that could be set by architects in order to promote energy efficiency and low carbon emissions. They derive from the strategy and principles above. What follows are just suggestions and examples; this is a new area and so there's no established NFRs like, for example 1/2/3/4 9s availability. Bear in mind that measuring carbon NFRs can be hard so think about your maturity in measurement and monitoring before setting NFRs - there's no point setting something where you'll never know if you met the requirement.  

The diagram below overlays example NFRs onto the Tech Carbon Standard to show NFRs that can drive carbon reduction in each category such as embodied server hardware. Some NFRs may actually benefit more than one category; for example energy efficent software may allow you to squeeze more software onto less hardware reducing embodied carbon as well as operational. 

![embodied-carbon](/assets/images/overlays/arch_strat_nfrs.png)

{% include linkedHeading.html heading="Upstream" level=3 %}

{% include linkedHeading.html heading="Software" level=4 %}

<ul>
<li><b>Prefer vendors with a sustainability strategy:</b>In vendor selection prefer vendors with a clear carbon sustainability strategy including carbon reduction and clear reporting. This creates market pressure for vendors to be reporting and reducing emissions. </li>

<li><b>Prefer a higher user base:</b> Adding NFR around user base size means you'll be getting something well tested and more likely to be supported but can also influence carbon emissions. If you pay an organisation to create bespoke software for you or train a bespoke model for you the incurred emissions will only benefit your user base. On the other hand adopting open source software used by 100 companies and their users means there's a small attribution to you and there's less duplicated work. The same applies for internal build vs buy although in this case there's <em>Category O</em> emissions and other non tech ones like buildings in <a href="/glossary#greenhouse-gas-ghg-protocols">GHGP Scope 3.</a> 
</li>
</ul>

{% include linkedHeading.html heading="Hardware Manufacture, Transport and Installation" level=2 %}

NFRs for hardware embodied carbon should fall out of the strategy and based on the suggestions above would include items like:

<ul>
<li><b>Hardware lifetime (inc. support) &gt;= 5 years: </b> Clear requirement for procurement on how long servers must work and be supportable for</li> 

<li><b>Laptop/Switch/Server should have &lt;x embodied kgCO2 per y.</b> You can relate embodied carbon to a scale factor y like throughput or number of ports of network equipment. </li>
</ul>

A software implementation NFR may also drive reduce embodied carbon:

<ul>
<li><b>New service should add no embodied emissions:</b> requiring a new service to use no additional embodied carbon means it must run on existing hardware. </li>
</ul>


{% include linkedHeading.html heading="Operational emissions" level=3 %}
For operational emissions you can directly target energy or emissions with your NFRs or proxy measures that will still promote reduced emissions. An obvious example of the latter is 
<ul>
</li><b>VM/machine utilisation should be > 50%</b></li> 
</ul>

When targetting carbon or energy NFRs could include:
<ul>
<li><b>Energy per service or even  should be &lt;x gCO2:</b> Can go more or less granualar as needed and dependent on measurement sophistication, e.g. per API REST endpoint call</li></ul>
Such an NFR pushes development teams to optimise their apps. It says carbon OR energy because you may wish to target both. Energy is comparable from day to day whereas carbon will depend on the electricity mix and you might want to choose regions to boost this alongside efficient code to minimise electricity. 

{% include linkedHeading.html heading="Direct (Category O)" level=4 %}
At the level of the data centre NFRs could include the following. 
<ul>
<li><b>Data centre <a href="/glossary#power-usage-effectiveness-pue">PUE</a> should be &lt; 1.3:</b> When building out a new data centre you can set a maximum Power Usage Effectiveness.</li>
<li><b><a href="/glossary#carbon-intensity">Carbon intensity</a> should be &lt;x kgCO2/kWh:</b> Setting an NFR around the carbon intensity of the electricty influences choices on location or installation of wind turbines or solar. </li>
</ul>

<b>Servers:</b> You can set utilisation targets for each server as per above but also go more granular. e.g. 
<ul>
<li><b>Hardware utilisation should be > 50%</b></li>
<li><b>Servers must be energy observable via the network: </b>Really a function requirement but allows monitoring of progress in energy efficiency</li>
</ul>


<b>Networks:</b> 
Again utilisation or power/carbon usage tarrgets can be set:
<ul>
<li><b>Network switch utilisation should be &gt;40%</b></li>
<li><b>Power per port should be &lt; 2W:</b> Power per Gbps throughput or per port could be targetted just as an embodied carbon can be also. 
</li></ul>

Some application targetted NFRs may also reduce network traffic and so reduce the need to have more network hardware - benfits operational and embodied. e.g.
<ul>
<li><b>Data compression of 50% vs raw text in API payloads</b>: promote zipping and/or efficient protocols like gRPC</li>
<li><b>normalise async messages, no one:many entity to message mappings</b>avoids one entity change causing a storm of messages</li>
</ul>
 

<b>User devices:</b>
In the strategy section there were suggestions around selecting laptops with low energy usage and ensuring they switch to low power, sleep etc. A target average daily kWh energy usage could be set with these policies designed to meet it e.g.
<ul>
<li><b>Average energy consumption per 24 hours &lt;x gCO2</b>: promote zipping and/or efficient protocols like gRPC</li>
</ul>

{% include linkedHeading.html heading="Indirect (Category C)" level=4 %}

When vendors are used then you can set NFRs around their electricity e.g. 
<ul>
<li>30% electricity from renewable sources.</li>
</ul>
You may also set NFRs for carbon per unit of compute or request as well see below. Exactly what you can do will be very much dependent on the amount of information provided. This may itself be a criteria, who gives the most transparent information about their emissions. 

<b>Cloud:</b> Be careful when comparising vendors using their tools/info as reporting norms may vary. NFRs could include:
<ul>
<li><b>Prefer compute with &lt;g CO2 per core: </b> Pushes CPUs with lower power, e.g. ARM or CPUs powered by more renewable energy, e.g. in a different region. Be careful to weight according to CPU power though - clock requencies and processing capacity will vary</li> 
<li><b>Create  no emissions when no requests are being handled:</b> Pushes the use of scale down or lambdas whilst not forcing an implementation</li>
</ul>
Note: When targetting regions or times of day via NFRs be aware of the risks - if everyone does it then it'll result in dispatchable power like gas being used. 

<b>SaaS:</b> It's hard to set NFRs for SaaS because many orgs don't report emissions or when they do comparison is hard, e.g. if user bases are very different. Ideally you'd derive (or the vendor would provide) something like:
<ul>
<li><b>CO2 per user should be &lt;x gCO2</b></li>
</ul>
but in reality the most you may be able to do is compare their strategies or where their data centres/cloud regions are. e.g. 
<ul>
<li><b>Service hosted in region with carbon intensity &lt;x gCO2/kWh </b></li>
</ul>

The exception is where you're given dedicated resources in which case reporting may be possible. e.g. if they deploy some AWS instances for you and you can measure per request.

<b>Managed services:</b> Consider NFRs like
<ul>
<li><b>PUE< 1.3:</b>For when selecting a managed service</li>
<li><b>Utilisation &lt;= 50%:</b> Like cloud, at the level of VMs</li>
</ul>
{% include linkedHeading.html heading="Downstream" level=3 %}

End user devices like customer laptops are out of our control but there are NFRs that can be set around the apps running on them and for battery powered devices low carbon usage has the added benefit of aiding battery life. 

<b>Device:</b> NFRs for devices are one of the easier things to set and test because although you can obtain real representative hardware to do measurements. Possible NFRs are:
<ul>
<li><b>Single page view uses &lt;x kWh: </b>Promote pages that don't uneccessarily use energy</li>
<li><b>No energy usage when user not on page: </b>Ensure no energy used when user not on a webpage. Note modern browsers will help enforce this anyway</li>
</ul>

<b>Network:</b> You can't control the network but can affect the amount of data transferred over it. e.g. you could have
<ul>
<li><b>2nd API call uses 80% of 1st when data hasn’t changed:</b>Promotes caching</li>
</ul>


References
 1. https://www.statista.com/statistics/871513/worldwide-data-created/