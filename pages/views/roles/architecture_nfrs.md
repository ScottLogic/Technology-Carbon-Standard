---
layout: default
title: Architecture View
permalink: views/roles/architecture_nfrs
published: true
---

# Architecture View - Setting NFRs

{% include carbonStandard.html variant=site.data.overlays.architecture_nfrs hideOutOfScope=true %}

<s>As an architect you can exert significant influence on a company's tech carbon emissions. You might be a technical/solutions/enterprise/other architect and although the scope of responsibility can vary across roles, there are many activities common to all where you can make a difference to carbon emissions including:

- Setting the tech strategy
- Promoting best practice and setting tech principles
- Leading technical selection, e.g. of a cloud vendor or a SaaS product
- Designing architecture (from enterprise to technical)
- Setting NFRs

The first couple are high level activities that could include:

- setting the cloud vs on-prem strategy
- promoting technical principles around resilience, serverless vs container or data retention

The remaining 3 are actually all about NFRs to some degree. Tech selection will be done against a set of functional and non-functional requirements and architecture design choices will be done against a set of NFRs, e.g. to promote availability or low cost. We'll start by looking at what an architect can do around strategy and principles for carbon reduction and then move onto the NFRs that derive from this.

</s>

TODO - reference architecture strategy page


In this section we'll look at some of the NFRs (also known as Quality Attributes) that could be set by architects in order to promote energy efficiency and low carbon emissions. They derive from the strategy and principles above. What follows are just suggestions and examples; this is a new area and so there's no established NFRs like, for example 1/2/3/4 9s availability. Bear in mind that measuring carbon NFRs can be hard so think about your maturity in measurement and monitoring before setting NFRs - there's no point setting something where you'll never know if you met the requirement.  

The diagram below overlays example NFRs onto the Tech Carbon Standard to show NFRs that can drive carbon reduction in each category such as embodied server hardware. Some NFRs may actually benefit more than one category; for example energy efficent software may allow you to squeeze more software onto less hardware reducing embodied carbon as well as operational. 





{% include linkedHeading.html heading="More detail" level=2 %}

The emission categories below takes the standard and overlays on the categories some examples of how you might influence them. These are just suggestions to trigger some ideas - figure out your own principles as appropriate to your organisation.


## Upstream Emissions

{% include categoryLabel.html label="CatU" %}

The architect is at the center of vendor selection and so can promote green requirements in selection.

### Software

{% include categoryItem.html item="CatUSoftware" id="Software" noLink=true %}

<ul>
<li><b>Prefer vendors with a sustainability strategy:</b> In vendor selection prefer vendors with a clear carbon sustainability strategy including carbon reduction and clear reporting. This creates market pressure for vendors to be reporting and reducing emissions. </li>

<li><b>Prefer a higher user base:</b> Adding NFR around user base size means you'll be getting something well tested and more likely to be supported but can also influence carbon emissions. If you pay an organisation to create bespoke software for you or train a bespoke model for you the incurred emissions will only benefit your user base. On the other hand adopting open source software used by 100 companies and their users means there's a small attribution to you and there's less duplicated work. The same applies for internal build vs buy although in this case there's <em>Category O</em> emissions and other non tech ones like buildings in <a href="/glossary#greenhouse-gas-ghg-protocols">GHGP Scope 3.</a> 
</li>
</ul>


### Hardware Manufacture, Transport and Installation
{% include categoryItem.html item="CatUEmployeeHardware" id="EmployeeHardware" noLink=true %}
{% include categoryItem.html item="CatUNetworkHardware" id="NetworkHardware" noLink=true %}
{% include categoryItem.html item="CatUServerHardware" id="ServerHardware" noLink=true %}

NFRs for hardware embodied carbon should fall out of the strategy and based on the suggestions above would include items like:

<ul>
    <li><b>Hardware lifetime (inc. support) &gt;= 5 years: </b> Clear requirement for procurement on how long servers must work and for how long they should be supportable</li> 

    <li><b>Laptop/Switch/Server should have &lt;x embodied kgCO2 per y.</b> You can relate embodied carbon to a scale factor y like throughput or number of ports of network equipment. </li>
</ul>

A software implementation NFR may also drive reduce embodied carbon:

<ul>
    <li><b>New service should add no embodied emissions:</b> requiring a new service to use no additional embodied carbon means it must run on existing hardware making use of spare capacity. </li>
</ul>

## Operational Emissions

For operational emissions you can directly target energy or emissions with your NFRs or proxy measures that will still promote reduced emissions. An obvious example of the latter is 
<ul>
    <li><b>VM/machine utilisation should be > 50%</b></li> 
</ul>

When targetting carbon or energy NFRs could include:
<ul>
<li><b>Energy per service or even  should be &lt;x gCO2:</b> Can go more or less granualar as needed and dependent on measurement sophistication, e.g. per API REST endpoint call</li></ul>
Such an NFR pushes development teams to optimise their apps. It says carbon OR energy because you may wish to target both. Energy is comparable from day to day whereas carbon will depend on the electricity mix and you might want to choose regions to boost this alongside efficient code to minimise electricity. 

### Direct
{% include categoryLabel.html label="CatO" %}

At the level of the data centre NFRs could include the following. 
<ul>
    <li><b>Data centre <a href="/glossary#power-usage-effectiveness-pue">PUE</a> should be &lt; 1.3:</b> When building out a new data centre you can set a maximum Power Usage Effectiveness.</li>
    <li><b><a href="/glossary#carbon-intensity">Carbon intensity</a> should be &lt;x kgCO2/kWh:</b> Setting an NFR around the carbon intensity of the electricty influences choices on location or installation of wind turbines or solar. </li>
</ul>

{% include categoryItem.html item="CatOEmployeeDevices" id="EmployeeDevices" noLink=true %}
  
In the strategy section there were suggestions around selecting laptops with low energy usage and ensuring they switch to low power, sleep etc. A target average daily kWh energy usage could be set with these policies designed to meet it e.g.
<ul>
    <li><b>Average energy consumption per 24 hours &lt;x gCO2</b></li>
</ul>


{% include categoryItem.html item="CatONetworkDevices" id="NetworkDevices" noLink=true %}

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


{% include categoryItem.html item="CatOServers" id="Servers" noLink=true %}

You can set utilisation targets for each server as per above but also go more granular. e.g. 
<ul>
    <li><b>Hardware utilisation should be > 50%</b></li>
    <li><b>Servers must be energy observable via the network: </b>Really a function requirement but allows monitoring of progress in energy efficiency</li>
</ul>

{% include categoryLabel.html label="CatG" %}
  
{% include categoryItem.html item="CatGGenerators" noLink=true %}

### Indirect

{% include categoryLabel.html label="CatC" %}

When vendors are used then you can set NFRs around their electricity e.g. 
<ul>
    <li>30% electricity from renewable sources.</li>
</ul>
You may also set NFRs for carbon per unit of compute or request as well see below. Exactly what you can do will be very much dependent on the amount of information provided. This may itself be a criteria, who gives the most transparent information about their emissions. 

{% include categoryItem.html item="CatCCloud" id="Cloud" noLink=true %}

Be careful when comparising vendors using their tools/info as reporting norms may vary. NFRs could include:
<ul>
    <li><b>Prefer compute with &lt;g CO2 per core: </b> Pushes CPUs with lower power, e.g. ARM or CPUs powered by more renewable energy, e.g. in a different region. Be careful to weight according to CPU power though - clock requencies and processing capacity will vary</li> 
    <li><b>Create  no emissions when no requests are being handled:</b> Pushes the use of scale down or lambdas whilst not forcing an implementation</li>
</ul>
Note: When targetting regions or times of day via NFRs be aware of the risks - if everyone does it then it'll result in dispatchable power like gas being used. 

{% include categoryItem.html item="CatCSaas" id="Saas" noLink=true %}

It's hard to set NFRs for SaaS because many orgs don't report emissions or when they do comparison is hard, e.g. if user bases are very different. Ideally you'd derive (or the vendor would provide) something like:
<ul>
    <li><b>CO2 per user should be &lt;x gCO2</b></li>
</ul>
but in reality the most you may be able to do is compare their strategies or where their data centres/cloud regions are. e.g. 
<ul>
    <li><b>Service hosted in region with carbon intensity &lt;x gCO2/kWh </b></li>
</ul>

The exception is where you're given dedicated resources in which case reporting may be possible. e.g. if they deploy some AWS instances for you and you can measure per request.


{% include categoryItem.html item="CatCManaged" id="Managed" noLink=true %}

Consider NFRs like
<ul>
    <li><b>PUE< 1.3:</b>For when selecting a managed service</li>
    <li><b>Utilisation &lt;= 50%:</b> Like cloud, at the level of VMs</li>
</ul>


{% include categoryLabel.html label="CatD" %}
NFRs for devices are one of the easier things to set and test because although you can obtain real representative hardware to do measurements. Possible NFRs are:
<ul>
    <li><b>Single page view uses &lt;x kWh: </b>Promote pages that don't uneccessarily use energy</li>
    <li><b>No energy usage when user not on page: </b>Ensure no energy used when user not on a webpage. Note modern browsers will help enforce this anyway</li>
</ul>

{% include categoryItem.html item="CatDEndUserDevices" id="EndUserDevices" noLink=true %}
NFRs for devices are one of the easier things to set and test because although you can obtain real representative hardware to do measurements. Possible NFRs are:
<ul>
<li><b>Single page view uses &lt;x kWh: </b>Promote pages that don't uneccessarily use energy</li>
<li><b>No energy usage when user not on page: </b>Ensure no energy used when user not on a webpage. Note modern browsers will help enforce this anyway</li>
</ul>


{% include categoryItem.html item="CatDNetworkDataTransfer" id="NetworkTransfer" noLink=true %}
You can't control the network but can affect the amount of data transferred over it. e.g. you could have
<ul>
    <li><b>2nd API call uses 80% of 1st when data hasn’t changed:</b>Promotes caching</li>
</ul>