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

$$ 0.0171kWh \times 1760hrs = 30kWh/year $$

To calculate the estimated emissions of each laptop we multiply the TEC/year with the regional grid carbon intensity:

**Germany**

3 Laptops and a grid intensity of 363.98gCO<sub>2</sub>e/kWh

$$ 3 \times (30kWh/year \times 363.98gCO_2e/kWh ÷ 1000) = 33kgCO_2e/year $$

<p style="text-align:center; font-style: italic;"><small>Note the ÷ 1000 to convert g to kg</small></p>

**UK**

1 Laptop and a grid intensity of 268.26gCO<sub>2</sub>e/kWh

$$ 30kWh/year \times 268.26gCO_2e/kWh ÷ 1000 = 8kgCO_2e/year $$

**Netherlands**

1 Laptop and a grid intensity of 386.19gCO<sub>2</sub>e/kWh

$$ 30kWh/year \times 386.19gCO_2e/kWh ÷ 1000 = 12kgCO_2e/year $$

**Taiwan**

1 Laptop and a grid intensity of 565.63gCO<sub>2</sub>e/kWh

$$ 30kWh/year \times 565.63/kWh ÷ 1000 = 17kgCO_2e/year $$

Total carbon emissions of employee laptops: **70kgCO<sub>2</sub>e/year**

#### Monitors
For monitors we used an average TEC of 45kWh/year obtained from Dell and HP PCF data sheets. As per the laptop calculations above we multiply this by the regional grid carbon intensity.



**How could we improve upon this?**
<span style="color: coral">*TBD*</span>

The operational hours of the laptops and montitors did not take into account the actual number of working hours per year. It assumed full time operational hours in the beer mat estimates.<span style="color: coral">*Hannah, do you want to update the above calculations with the 70% BYOD to GWF we used for upstream hardware calcs? Or leave it as is? I think I was only considering the 70% attribution purely from an embodied carbon perspective - and not reflecting the time employees actually work for GWF. How do you want to do this?*</span>

### Detailed estimate methodology
<span style="color: coral">*DR: Detailed Estimates - here, or link to another page?*</span>



## Networking and Infrastructure
{% include categoryItem.html item="CatONetworkDevices" %}

## Servers and Storage
{% include categoryItem.html item="CatOServers" %}

## Generators
{% include categoryItem.html item="CatGGenerators" %}

## Cloud Services
{% include categoryItem.html item="CatCCloud" %}

## SaaS Services
{% include categoryItem.html item="CatCSaas" %}

## Managed Services
{% include categoryItem.html item="CatCManaged" %}


---

[Next - Estimating the Downstream Emissions](downstream)

---