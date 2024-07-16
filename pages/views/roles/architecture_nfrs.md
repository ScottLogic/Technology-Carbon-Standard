---
layout: default
title: Architecture View
permalink: views/roles/architecture_nfrs
published: false
---

# Architecture View - Setting NFRs

{% include carbonStandard.html variant=site.data.overlays.architecture_nfrs hideOutOfScope=true %}

This view presents some ideas for settings NFRs (also known as Quality Attributes) in order to promote energy efficiency and low carbon emissions. They derive from the strategy and principles described in [Architecture View - Strategy](/views/roles/architecture). What follows are just suggestions and examples; this is a new area and so there's no established NFRs like, for example 1/2/3/4 9s availability. Bear in mind that measuring carbon NFRs can be hard so think about your maturity in measurement and monitoring before setting NFRs - there's no point setting something where you'll never know if you met the requirement.  

The diagram maps NFRs onto specific TCS categories such as embodied server hardware but be aware that some NFRs may actually benefit more than one category; for example energy efficent software may allow you to squeeze more software onto less hardware reducing embodied carbon as well as operational. 


## Upstream Emissions

{% include categoryLabel.html label="CatU" %}

The architect is at the center of vendor selection and so can promote green requirements in selection.

### Software

{% include categoryItem.html item="CatUSoftware" id="Software" noLink=true %}

- **Prefer vendors with a sustainability strategy:** In vendor selection prefer vendors with a clear carbon sustainability strategy including carbon reduction and clear reporting. This creates market pressure for vendors to be reporting and reducing emissions.

- **Prefer a higher user base:** Adding NFR around user base size means you'll be getting something well tested and more likely to be supported but can also influence carbon emissions. If you pay an organisation to create bespoke software for you or train a bespoke model for you the incurred emissions will only benefit your user base. On the other hand adopting open source software used by 100 companies and their users means there's a small attribution to you and there's less duplicated work. The same applies for internal build vs buy although in this case there's *Category O* emissions and other non tech ones like buildings in [GHGP Scope 3](/glossary#greenhouse-gas-ghg-protocols).


### Hardware Manufacture, Transport and Installation
{% include categoryItem.html item="CatUEmployeeHardware" id="EmployeeHardware" noLink=true %}
{% include categoryItem.html item="CatUNetworkHardware" id="NetworkHardware" noLink=true %}
{% include categoryItem.html item="CatUServerHardware" id="ServerHardware" noLink=true %}

NFRs for hardware embodied carbon should fall out of the strategy and based on the suggestions above would include items like:
- **Hardware lifetime (inc. support) >= 5 years:** Clear requirement for procurement on how long servers must work and for how long they should be supportable.
- **Laptop/Switch/Server should have < X embodied kgCO2e per Y.** You can relate embodied carbon to a scale factor y like throughput or number of ports on network equipment.


A software implementation NFR may also reduce embodied carbon:
- **New service should add no embodied emissions:** requiring a new service to use no additional embodied carbon means it must run on existing hardware making use of spare capacity.

## Operational Emissions

For operational emissions you can directly target energy or emissions with your NFRs or proxy measures that will still promote reduced emissions. An obvious example of the latter is 
- **VM/machine utilisation should be > 50%** 

When targetting carbon or energy, NFRs could include:

- **Energy or carbon per service should be < X gCO2e:** Can go more or less granualar as needed and dependent on measurement sophistication, e.g. per API REST endpoint call.

Such an NFR pushes development teams to optimise their apps. It says carbon **or** energy because you may wish to target both. Energy is comparable from day to day whereas carbon will depend on the electricity mix. You might want to consider carbon or grid awareness to reduce carbon intensity of energy alongside developing efficient code to minimise electricity. 

### Direct
{% include categoryLabel.html label="CatO" %}

At the level of the data centre, NFRs could include the following:  
- **Data centre [PUE](/glossary#power-usage-effectiveness-pue) should be < 1.3:** When building out a new data centre you can set a maximum Power Usage Effectiveness. That said, be wary of over using PUE without considering factors like water usage.
- **[Carbon intensity](/glossary#carbon-intensity) should be < X kgCO2e/kWh:** Setting an NFR around the carbon intensity of the electricty influences choices on location or installation of wind turbines or solar.


{% include categoryItem.html item="CatOEmployeeDevices" id="EmployeeDevices" noLink=true %}
  
In the strategy section there were suggestions around selecting laptops with low energy usage and ensuring they switch to low power, sleep etc. A target for average daily kWh energy usage could be set to help meet these requirements e.g.
- **Average energy consumption per 24 hours < X gCO2e**


{% include categoryItem.html item="CatONetworkDevices" id="NetworkDevices" noLink=true %}

Again utilisation or power/carbon usage targets can be set:
- **Network switch utilisation should be > 40%**
- **Power per port should be < 2W:** Power per Gbps throughput or per port could be targeted just as an embodied carbon can be also. 


Some application targetted NFRs may also reduce network traffic and so reduce the need to have more network hardware - this benfits operational and embodied carbon. e.g.
- **Data compression of 50% vs raw text in API payloads:** promote zipping and/or efficient protocols like gRPC
- **Normalise async messages, no one-to-many entity to message mappings:** avoids one entity change causing a storm of messages


{% include categoryItem.html item="CatOServers" id="Servers" noLink=true %}

You can set utilisation targets for each server as per above but also go more granular. e.g. 
- **Hardware utilisation should be > 50%**
- **Servers must be energy observable via the network:** Really a function requirement but allows monitoring of progress in energy efficiency


{% include categoryLabel.html label="CatG" %}
  
{% include categoryItem.html item="CatGGenerators" noLink=true %}

### Indirect

{% include categoryLabel.html label="CatC" %}

When vendors are used then you can set NFRs around their electricity e.g. 
- 30% electricity from renewable sources.

You may also set NFRs for carbon per unit of compute or request as well, see below. Exactly what you can do will be very much dependent on the amount of information provided. This may itself be a criteria, who gives the most transparent information about their emissions. 

{% include categoryItem.html item="CatCCloud" id="Cloud" noLink=true %}

Be careful when comparing vendors using their tools/info as reporting norms may vary. NFRs could include:
- **Prefer compute with < gCO2e per core:** Pushes CPUs with lower power, e.g. ARM or CPUs powered by more renewable energy, e.g. in a different region. Be careful to weigh according to CPU power though - clock frequencies and processing capacity will vary.
- **Create no emissions when no requests are being handled:** Pushes the use of scale down or lambdas whilst not forcing an implementation.

Note: When targeting regions or times of day via NFRs be aware of the risks - if everyone does it then it'll result in dispatchable power like gas being used. 

{% include categoryItem.html item="CatCSaas" id="Saas" noLink=true %}

It's hard to set NFRs for SaaS because many orgs don't report emissions or when they do comparison is hard, e.g. if user bases are very different. Ideally you'd derive (or the vendor would provide) something like:
- carbon per user should be < X gCO2e

But in reality the most you may be able to do is compare their strategies or where their data centres/cloud regions are. e.g. 
- Service hosted in region with carbon intensity < X gCO2e/kWh

The exception is where you're given dedicated resources in which case reporting may be possible. e.g. if they deploy some AWS instances for you and you can measure per request.


{% include categoryItem.html item="CatCManaged" id="Managed" noLink=true %}

Consider NFRs like:
- **PUE < 1.3:** For when selecting a managed service.
- **Utilisation <= 50%:** Like cloud, at the level of VMs.


{% include categoryLabel.html label="CatD" %}

End user devices like customer laptops, these are out of our control but there are NFRs that can be set around the apps running on them. For battery powered devices, low energy usage has the added benefit of aiding battery life. 

{% include categoryItem.html item="CatDEndUserDevices" id="EndUserDevices" noLink=true %}
NFRs for devices are one of the easier things to set and test because you can obtain real representative hardware to do measurements. Possible NFRs are:
- **Single page view uses < X kWh:** Promote pages that don't use unneccessary energy.
- **No energy usage when user not on page:** Ensure that no energy is used when the user is not on a webpage. Note: modern browsers will help enforce this anyway.


{% include categoryItem.html item="CatDNetworkDataTransfer" id="NetworkTransfer" noLink=true %}
You can't control the network but can affect the amount of data transferred over it. e.g. you could have
- **2nd API call uses 80% of 1st when data hasn’t changed:** Promotes caching