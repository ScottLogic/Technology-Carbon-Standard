---
layout: projects
title: Green Web Foundation
permalink: /projects/green-web-foundation/operational
project: gwf
---

{: #top}

<div class="pb-4">
{% include categoryLabel.html label="CatO" %}
{% include categoryLabel.html label="CatG" %}
{% include categoryLabel.html label="CatC" %}
</div>

# Estimating the Operational Emissions (Categories O, G, and C)

Read the TCS overview of <a class="text-inherit hover:text-inherit hover:opacity-80" href="/categories/operational">operational emissions</a> for a primer on this category.

When attemping to estimate Green Web Foundation's digital upstream emissions, we describe the approach used and why for each sub-category.

- [Employee Devices](#employee-devices)
- [Networking and Infrastructure](#networking-and-infrastructure)
- [Servers and Storage](#servers-and-storage)
- [Generators](#generators)
- [Cloud Services](#cloud-services)
- [SaaS Services](#saas-services)
- [Managed Services](#managed-services)

---

## Employee Devices
{% include categoryItem.html item="CatOEmployeeDevices" %}

### Estimated emissions

<span style="color: red">Estimate confidence: High</span>

### Agreed scope

<span style="color: coral">*DR: Copy and paste of the hardware - do you want to repeat this, or re-word somehow?*</span>

We limited the scope to the digital devices that require a power source used by staff on a day to day basis. Specifically this covers:

- Laptops/desktops
- Monitors
- Printers
- Company purchased mobile phones

We agreed that other hardware such as keyboards, mice, landline phones and microphones are out of scope at this point. 

Much of this equipment is personally owned by GWF employees, with a Bring Your Own Device (BYOD) policy enabling use at work. This meant that BYOD devices needed to be in scope as well as those purchased by GWF. 

We started with an outline list regarding the quantity and location of each type of device.

- 6 laptops (3× Germany, 1× UK, 1× Netherlands, 1× Taiwan)
- 8 monitors (3× Germany, 3× UK, 1x Netherlands, 1× Taiwan)</span>
- 1 small desktop printer (Germany)

### High level estimate methodology
#### Laptops
We used an averge operational power use of 17.1W for laptops, based on data collected from manufacturer PCF data sheets, and [research](/information/lifecycle/example/employee#usage-carbon-emissions). We assume 1760hrs operational hours per year (based on 8hrs per day x 220 days per year). Therefore we can calculate an average [TEC](/glossary#typical-energy-consumption-tec) for laptops as:

$$ 0.0171kWh \times 1760hrs = 30.1kWh/year $$

To calculate the estimated emissions of each laptop we multiply the TEC/year with the regional grid carbon intensity:

**Germany (3 laptops, 0.364kgCO<sub>2</sub>e/kWh)**

$$ 3 \times (30.1kWh/year \times 0.364kgCO_2e/kWh) = 32.87kgCO_2e/year $$

**UK (1 laptop, 0.268kgCO<sub>2</sub>e/kWh)**

$$ 30.1kWh/year \times 0.268kgCO_2e/kWh = 8.07kgCO_2e/year $$

**Netherlands (1 laptop, 0.386kgCO<sub>2</sub>e/kWh)**

$$ 30.1kWh/year \times 0.386kgCO_2e/kWh = 11.62kgCO_2e/year $$

**Taiwan (1 laptop, 0.566kgCO<sub>2</sub>e/kWh)**

$$ 30.1kWh/year \times 0.566kgCO_2e/kWh = 17.04kgCO_2e/year $$

**Total carbon emissions of employee laptops: 69.6kgCO<sub>2</sub>e/year**

#### Monitors
For monitors we used an average TEC of 45kWh/year obtained from Dell and HP PCF data sheets. As per the laptop calculations above we multiply this by the regional grid carbon intensity.


**How could we improve upon this?**
<span style="color: coral">*TBD*</span>

The operational hours of the laptops and montitors did not take into account the actual number of working hours per year. It assumed full time operational hours in the beer mat estimates.<span style="color: coral">*Hannah, do you want to update the above calculations with the 70% BYOD to GWF we used for upstream hardware calcs? Or leave it as is? I think I was only considering the 70% attribution purely from an embodied carbon perspective - and not reflecting the time employees actually work for GWF. How do you want to do this?*</span>

### Detailed estimate methodology
<span style="color: coral">*DR: Detailed Estimates - here, or link to another page?*</span>

[To the top](#top)

---

## Networking and Infrastructure
{% include categoryItem.html item="CatONetworkDevices" %}

For the operational carbon of networking and infrastructure, we took the maximum power load rating of 18W found on the power supply for the UK office router and assumed an average use of 60% (based on some research papers [^1], [^2]) of its total power equating to 10.8W (0.0108kWh). 

For the second router, in Germany, we used the average power consumption of 10W listed in the data sheet for the router (0.01kWh).

We also assume the routers are operating 24 hours a day, all year round.

This value is then multiplied by the carbon intensity of the region to calculate the carbon emissions:

**Germany (0.364kgCO<sub>2</sub>e/kWh)**

$$ 0.01kWh \times 24hrs \times 365days \times 0.364kgCO_2e/kWh = 31.89kgCO_2e/year $$

**UK (0.268kgCO<sub>2</sub>e/kWh)**

$$ 0.0108kWh \times 24hrs \times 365days \times 0.268kgCO_2e/kWh = 25.36kgCO_2e/year $$

The UK office being a co-shared office space with two other organisations sharing the router, the attribution to GWF is only 1/3rd of this value:

$$ 25.36kgCO_2e/year \times 0.333 = 8.44kgCO_2e/year $$

**Total carbon emissions for networking and infrastructure: 40.33kgCO<sub>2</sub>e/year**

[To the top](#top)

---

## Servers and Storage
{% include categoryItem.html item="CatOServers" %}

GWF do not use any of their own servers or storage equipment on premise. We can simply report the carbon emissions of this category as zero.

**Total carbon emissions for Servers and Storage: 0kgCO<sub>2</sub>e/year**

[To the top](#top)

---

## Generators
{% include categoryItem.html item="CatGGenerators" %}

GWF do not operate any generators on premise, so again this can be reported as zero.

**Total carbon emissions for Generators: 0kgCO<sub>2</sub>e/year**

[To the top](#top)

---

## Cloud Services
{% include categoryItem.html item="CatCCloud" %}

### Hetzner Cloud Services
When considering cloud services, we need to think about VMs, storage and server back-end services for GWF. All of this is hosted in Hetzner and Scaleway. Unfortunately, we don’t have any good data for doing basic estimation of the carbon emissions of these services. In the absence of easy to find data, we decided to do an approximation by using AWS as a proxy.

For the VMs, we mapped the server instances that GWF were using to equivalent appliances in AWS. Where there was no direct match, we mapped to the next service up that would still meet the services needs. During this mapping exercise we observed that Hetzner offers far more granular server specifications than AWS. AWS seems designed to push you up the appliance sizes faster. If you want more memory, you have to also take more virtual CPUs, regardless of if they are needed or not.

For the embodied carbon we pulled together data from the Scott Logic estimator tool, which itself gathers data from the [Cloud Carbon Footprint tool](https://www.cloudcarbonfootprint.org/). For the two different Hetzner instance sizes we mapped to AWS we obtained values of 0.018364507kgCO<sub>2</sub>e/USD and 0.015829902kgCO<sub>2</sub>e/USD.

We converted GWF's Hetzner monthly bill from Euros to US Dollars to then be able to multiply the embodied kgCO<sub>2</sub>e/USD for each instance type:

$$ $59.36/month \times 0.018364507kgCO_2e/USD \times 12months = 13.08kgCO_2e/year $$

$$ $32.40/month \times 0.015829902kgCO_2e/USD \times 12months = 6.15kgCO_2e/year $$

For the operational computing power, a similar process was used. We multiplied the CCF method's kWh per USD (0.270373921kWh/USD and 0.233471074kWh/USD) by the monthly cost in USD (converted from Euros) to obtain a monthly compute kWh usage, multiplied by 12 months to get a yearly total compute kWh:

$$ $59.36/month \times 0.270373921kWh/USD \times 12months = 192.59kWh/year $$

$$ $32.40/month \times 0.233471074kWh/USD \times 12months = 90.77kWh/year $$

For the data storage in Hetzner we assume the use of SSD storage and use a value of 0.0012kWh/TBh from [Cloud Carbon Footprint Storage Methodology](https://www.cloudcarbonfootprint.org/docs/methodology/#storage).
With a total volume of 0.89TB of data storage we can calculate a yearly kWh:

$$ 0.89TB \times 0.0012kWh/TBh \times 24hrs \times 365days = 9.36kWh/year $$

So a total kWh per year using Hetzner cloud services: 292.72kWh/year.

We can then multiply this by the regional carbon intensity to calculate the carbon emissions. In this case Hetzner powers their servers from 100% renewable energy. In the case of the German data center, it is powered by hydro-electricity. To account for this we use a carbon intensity of 0.041kgCO<sub>2</sub>e/kWh. 

The operational carbon emissions of using Hetzner cloud:

$$ 292.72kWh/year \times 0.041kgCO_2e/kWh = 12kgCO_2e/year $$

<span style="color: coral">WHAT IF: we can easily update the carbon intensity to any other region or global intenstiy to work out the "what if it's not green" scenario here.</span>

We add to this the embodied carbon of the cloud servers for a total carbon emissions for Hetzner services:

$$ 13.08kgCO_2e/year + 6.15kgCO_2e/year + 12kgCO_2e/year = 31.23kgCO_2e/year $$

### Scaleway Cloud Services

Scaleway is just for block storage, so we used the same methodology as for the storage in Hetzner. One difference was that Hetzner allocates a fixed amount of storage while Scaleway charges per gigabyte hour. Typically GWF uses 463.58TBhours of data per month, assuming again the use of SSD storage and using the CCF methodology

$$ 463.58TBh \times 0.0012kWh/TBh \times 12months = 6.68kWh/year $$

[Scaleway also uses sustainable energy sources](https://www.scaleway.com/en/environmental-leadership/) (100% wind or hydro). So, we'll use the hyro-power carbon intensity of 0.041kgCO<sub>2</sub>e/kWh:

$$ 6.68kWh/year \times 0.041kgCO_2e/kWh = 0.27kgCO_2e/year $$

<span style="color: coral">WHAT IF: we can easily update the carbon intensity to any other region or global intenstiy to work out the "what if it's not green" scenario here.</span>

**Total carbon emissions for Hetzner and Scaleway Cloud services: 31.5kgCO<sub>2</sub>e/year**

[To the top](#top)

---

## SaaS Services
{% include categoryItem.html item="CatCSaas" %}

Unknown

Estimate confidence: *n/a - not attempted*

[To the top](#top)

---

## Managed Services
{% include categoryItem.html item="CatCManaged" %}

GWF use Cloudflare for content delivery network (CDN). We agreed to put this CDN service into the managed services category, but it could just as easily belong to the Cloud Services category instead.

Cloudflare operate a (market-based) net-zero carbon service via Renewable Energy and Offset Purchases. So whilst we can report that GWF's CDN services for carbon emissions as zero, we did consider how to calculate the emissions for a CDN. Our brief research and thoughts given the little time we had to focus on this brought up two peices of information.

1. [Cloudflare's Emissions Inventory for 2022](https://cf-assets.www.cloudflare.com/slt3lc6tev37/65gCD3up047PMsHB9aXEYN/d3d719c0f9f493f82e4fec9dab250e6d/Cloudflare_2022_Emissions_Inventory.pdf) - indicates that Cloudflare's total emissions was 21,000MTCO<sub>2</sub>e for 2022
1. [Cloudflare Stats for 2023](https://backlinko.com/cloudflare-users) - shows that Cloudflare (as of August 2023) has 7.59million active websites.

We can simply divide the carbon emissions by the number of active websites to get an average carbon emission per website per year:

$$ (21,0000MTCO_2e/year \times 1000) ÷ 7,590,000 = 2.77kgCO2e/year/website $$

2.77kgCO<sub>2</sub>e/year per website could be used an average or proxy metric to estimate emissions of CDNs.

In GWF's scenario however, we zero the carbon emissions based on the market-based net-zero value of Cloudflare.

**Total carbon emissions for Managed Services: 0kgCO<sub>2</sub>e/year**

[To the top](#top)

---

[Next - Estimating the Downstream Emissions](downstream)

---

[^1]:[Idzikowski, Filip & Heddeghem, Ward & Idzikowski, F & Vereecken, W & Colle, Didier & Pickavet, Mario & Demeester, Piet. (2012). Equipment power consumption in optical multilayer networks – source data. ](https://www.researchgate.net/publication/272819245_Equipment_power_consumption_in_optical_multilayer_networks_-_source_data)

[^2]:[Aslan, J., Mayers, K., Koomey, J.G. and France, C. (2018), Electricity Intensity of Internet Data Transmission: Untangling the Estimates. Journal of Industrial Ecology, 22: 785-798.](https://doi.org/10.1111/jiec.12630)