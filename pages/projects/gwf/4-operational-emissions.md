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

The approach used and why for each sub-category in operational emissions:

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

**Estimate used: Detailed = 162.41 kgCO<sub>2</sub>e/year - 27% of overall digital estate**

| **Estimate type** | **2023 estimate** | **Confidence in methodology** |
| --- | --- | --- |
| High level | 146.7 kgCO<sub>2</sub>e/year | Medium |
| Detailed | 162.41 kgCO<sub>2</sub>e/year | High |


### Agreed scope

The scope here is the same as the [employee hardware category in upstream emissions](/projects/green-web-foundation/upstream#employee-hardware).

### High level estimate methodology

Our starting list of equipment is the same as the [employee hardware category in upstream emissions](/projects/green-web-foundation/upstream#employee-hardware).

**Laptops**

We weren't seeking high degrees of accuracy at this point, just something good enough to support an initial, high level estimate. For this we needed an average operational power value for a laptop. 

We used an **averge operational power use of 0.0171 kWh for laptops**, based on data collected from manufacturer PCF data sheets, and [previous TCS research](/information/lifecycle/example/employee#usage-carbon-emissions). We assume 1760hrs operational hours per year, based on 8hrs per day x 220 days per year. 

Therefore we can calculate an average [TEC](/glossary#typical-energy-consumption-tec) for laptops as:

$$ 0.0171\ kWh \times 1760\ hrs = 30.1\ kWh/year $$

To calculate the estimated emissions of each laptop we multiply the TEC/year with the regional grid [carbon intensity](/glossary#carbon-intensity). Finally we apply the the same BYOD attribution of 70% to GWF as we did for upstream emissions.

Germany - 3 laptops (2 BYOD, 1 GWF owned), regional grid carbon intensity 0.364kgCO<sub>2</sub>e/kWh:

$$ 2 \times (30.1\ kWh/year \times 0.364\ kgCO_2e/kWh \times 70\%) + 1 \times (30.1\ kWh/year \times 0.364\ kgCO_2e/kWh \times 100\%) = 26.3\ kgCO_2e/year $$

<p style="text-align:center; font-style: italic;">Parentheses added for clarity.</p>

UK - 1 laptop (BYOD), regional grid carbon intensity 0.268kgCO<sub>2</sub>e/kWh:

$$ 30.1\ kWh/year \times 0.268\ kgCO_2e/kWh \times 70\% = 5.65\ kgCO_2e/year $$

Netherlands - 1 laptop (BYOD), regional grid carbon intensity 0.386kgCO<sub>2</sub>e/kWh:

$$ 30.1\ kWh/year \times 0.386\ kgCO_2e/kWh \times 70\% = 8.13\ kgCO_2e/year $$

Taiwan - 1 laptop (BYOD), regional grid carbon intensity 0.566kgCO<sub>2</sub>e/kWh:

$$ 30.1\ kWh/year \times 0.566\ kgCO_2e/kWh \times 70\% = 11.93\ kgCO_2e/year $$

**Total carbon emissions of employee laptops: 52.01kgCO<sub>2</sub>e/year**

**Monitors**

For monitors we used an **average [TEC](/glossary#typical-energy-consumption-tec) of 45kWh/year** obtained from Dell and HP PCF data sheets. As per the laptop calculations above we multiply this by the regional grid carbon intensity and apply the 70% BYOD where applicable.

Germany - 3 monitors (2 BYOD, 1 GWF owned), 0.364kgCO<sub>2</sub>e/kWh:

$$ 2 \times (45\ kWh/year \times 0.364\ kgCO_2e/kWh \times 70\%) + 1 \times (45\ kWh/year \times 0.364\ kgCO_2e/kWh) = 39.31\ kgCO_2e/year $$

<p style="text-align:center; font-style: italic;">Parentheses added for clarity.</p>

UK - 3 monitors (BYOD), 0.268kgCO<sub>2</sub>e/kWh:

$$ 3 \times (45\ kWh/year \times 0.268\ kgCO_2e/kWh \times 70\%) = 25.33\ kgCO_2e/year $$

<p style="text-align:center; font-style: italic;">Parentheses added for clarity.</p>

Netherlands - 1 monitor (BYOD), 0.386kgCO<sub>2</sub>e/kWh:

$$ 45\ kWh/year \times 0.386\ kgCO_2e/kWh \times 70\% = 12.16\ kgCO_2e/year $$

Taiwan - 1 monitor (BYOD), 0.566kgCO<sub>2</sub>e/kWh:

$$ 45\ kWh/year \times 0.566\ kgCO_2e/kWh \times 70\% = 17.83\ kgCO_2e/year $$

**Total carbon emissions of employee monitors: 94.63kgCO<sub>2</sub>e/year**

**Printers**

For the **operational carbon emissions we use an average TEC of 0.17kWh**. This is based on datasheets of similar sized and specification printers from Canon (PIXMA G5570, for example). HP and the datasheet for the actual printer owned by GWF do not specify a TEC, so we use the Canon printer as a proxy. We simply apply Germany’s carbon intensity of 0.364kgCO2e/kWh to estimate the printer’s operational emissions:

$$ 0.17\ kWh \times 0.364\ kgCO_2e/kWh = 0.06kgCO_2e/year $$

**Resulting high-level estimate**

| **Device type** | **Annual estimate** | **%** |
| --- | --- | --- |
| Laptops | 52.01 kgCO_2e | 35% |
| Monitors | 94.63 kgCO_2e | 65% |
| Printers | 0.06 kgCO_2e | <1% |
| **TOTAL** | **146.7 kgCO_2e** | **100%** |


**How could we improve upon this?**

As a small team, we felt it to be quite feasible for us to collect information on specific device makes/models to improve these estimates. We went ahead and did this to produce a details estimate.

### Detailed estimate methodology

For a more accurate carbon emissions estimate, we gathered specific details of the hardware such as manufacturer and model of the equipment. Our detailed list of equipment is the same as the [employee hardware category in upstream emissions](/projects/green-web-foundation/upstream#employee-hardware).

For each device we looked for a corresponding manufacturer data sheet. However, in some cases even when we did find a data sheet it wasn't always 100% clear if the specific model's specification differed from the data sheet. So we used the closest product specification and year of manufacture we could find. 

[Apple](https://www.apple.com/environment/) and [Dell](https://www.dell.com/en-uk/dt/corporate/social-impact/advancing-sustainability/climate-action/product-carbon-footprints.htm#scroll=off&tab0=2) were particularly easy to find datasheets for. Lenovo and Samsung proved to be more difficult.

For each product, using the data sheets we found the carbon emissions of the use percentage. 

**Laptops**

~~For laptops, the carbon emissions of the use percentage is typically about 20% of the total product carbon emissions. This came as a surprise, as we expected the usage percentage to be much higher than the embodied emissions.~~

<span style="color: red">~~I wonder if we might elaborate a bit more on the things that aren't clear about the manufacturer provided estimates. But also things that are clear might be helpful to demonstrate. For example do these sheets make it clear what assumptions they make for how much the laptop is used on a daily basis - a working weeek of 5 days, or a week of 7 days. I'm also guessing it assumes relatively light usage like browsing and playing videos, rather than complex calculations for gaming, software dev etc. It will help when we come to spelling out how we factor in BYOD and use at home on weekends for GWF owned devices which I think we might need to address - even if we decide to ultimately ignore these details in our calculations to keep things simpler.~~</span> 

Apple don't provide ([TEC](/glossary#typical-energy-consumption-tec) values for it's products, just a percentage of the total carbon emissions for usage. The datasheets indicate that the usage is calculated based on historical customer use, modelling of battery drain for various activities and taking into account regional differences of energy grid mix. To gather a detailed estimate of operation carbon emission we have to assume the global carbon intensity value, and the expected lifespan of the product to calculate the TEC. We use a global intensity of 0.49kgCO<sub>2</sub>e/kWh -  see [our assumptions page](/projects/green-web-foundation/assumptions#regional-carbon-intensity) for more info. By gathering the usage percentage of the product's total carbon emission, dividing that by the expected life in years we can calculate the usage carbon emissions per year (kgCO<sub>2</sub>e)/year. We can divide this by the global intensity to calculate a TEC (in kWh/year) for each product. Then, we can factor in where each laptop is actually used in practice by multiplying the TEC by the relevant regional grid intensity figure to get an annual operational emissions estimate. Lastly, we take into account the working days attributable to GWF.

<span style="color: red">A bit like the detailed estimates, don't we need to factor in BYOD in here? For a laptop that is BYOD we need to assume it is also used on the weekend so the working week might actually be 7 days, not 5.</span>

<span style="color: coral">We are already accounting for the BYOD here as the operation emissions are taking into account the days spent working for GWF. Personal use of a BYOD wouldn't be considered and recorded for GWF. However, whilst the TEC is per year, we need to assume the number of GWF working days as a percentage of 7 days, not 5. I'll update the numbers.</span>

| Device Manufacturer and Model | PCF Data Sheet (or approx. equivalent) | Carbon Emissions from Use kgCO<sub>2</sub>e | Calculated TEC kWh/year | Regional Carbon Intensity kgCO<sub>2</sub>e/kWh | Operational Emissions kgCO<sub>2</sub>e/year | Days per Week for GWF | Attributional Operating Emissions to GWF kgCO<sub>2</sub>e/year |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Apple 2021 MacBook Pro 16" M1 Pro | [Apple 16inch MacBook Pro](https://www.apple.com/environment/pdf/products/notebooks/16-inch_MacBook_Pro_PER_Oct2021.pdf) | 23.56 | 48.08 | UK, 0.268 | 12.9 | 4 | 7.37 |
| Apple 2020 MacBook Pro 13" M1 | [Apple 13inch MacBook Pro](https://www.apple.com/environment/pdf/products/notebooks/13-inch_MacBookPro_PER_Nov2020.pdf) | 8.79 | 17.93 | Germany, 0.364 | 6.53 | 5 | 4.66 |
| Apple 2020 MacBook Air 13" M1 | [Apple 13inch MacBook Air](https://www.apple.com/environment/pdf/products/notebooks/13-inch_MacBookAir_PER_Nov2020.pdf) | 6.04 | 12.32 | Germany, 0.364 | 4.48 | 5 | 3.20 |
| Apple 2022 MacBook Air 13.6" M2 | [Apple MacBook Air M2](https://www.apple.com/environment/pdf/products/notebooks/M2_MacBook_Air_PER_June2022.pdf) | 8.09 | 16.5 | Germany, 0.364 | 6.01 | 4 | 3.43 |
| Lenovo Ideapad S145 | [Lenovo IdeaPad S145](https://static.lenovo.com/ww/docs/regulatory/PCF_ideapad_S145-15.pdf) | 23.21 | 47.36 | Netherlands, 0.386 | 18.29 | 2.5 | 6.53 | 
| Apple 2023 MacBook Air 13.6" M2 | [Apple MacBook Air M2](https://www.apple.com/environment/pdf/products/notebooks/M2_MacBook_Air_PER_June2022.pdf) | 9.41 | 19.9 | Taiwan, 0.566 | 10.86 | 4 | 6.20 |
| **Laptop Total** | | 79.1 | 162.09 | | 59.07 | | **31.4** |

**Monitors**

Manufacturers typically provide the TEC for monitors. Using that for each monitor, we then apply the regional carbon intensity and working days for GWF much like we did for laptops.

<span style="color: red">Don't think we need to factor in BYOD here as we can make a sweeping assumption that monitors are not typically used at home on weekends. It might be good to add this into the notes as specific point.</span>

| Device Manufacturer and Model | PCF Data Sheet (or approx. equivalent) | TEC kWh/year | Regional Carbon Intensity kgCO<sub>2</sub>e/kWh | Operational Emissions kgCO<sub>2</sub>e/year | Days per Week for GWF | Attributional Operating Emissions to GWF (kgCO<sub>2</sub>e/year) |
| --- | --- | --- | --- | --- | --- | --- |
| Dell 27" Monitor (P2717H) | [Dell P2725H*](https://www.dell.com/en-uk/dt/corporate/social-impact/advancing-sustainability/climate-action/product-carbon-footprints.htm#scroll=off&tab0=2&pdf-overlay=//www.delltechnologies.com/asset/en-uk/products/electronics-and-accessories/technical-support/p2725h-monitor-pcf-report.pdf) | 47 | UK, 0.268 | 12.61 | 2 | 3.60 |
| Philips 22" FHD Monitor (223V5LSB2) | [Dell SE2222H*](https://www.dell.com/en-uk/dt/corporate/social-impact/advancing-sustainability/climate-action/product-carbon-footprints.htm#scroll=off&tab0=2&pdf-overlay=//www.delltechnologies.com/asset/en-uk/products/electronics-and-accessories/technical-support/dell-se2222h-monitor-pcf-datasheet.pdf) | 50.4 | UK, 0.268 | 13.52 | 0.25 | 0.48 |
| Dell UltraSharp 27" Monitor (U2715H) | [Dell U2724D*](https://www.dell.com/en-uk/dt/corporate/social-impact/advancing-sustainability/climate-action/product-carbon-footprints.htm#tab0=2&pdf-overlay=//www.delltechnologies.com/asset/en-uk/products/electronics-and-accessories/technical-support/dell-u2724d-monitor-pcf-datasheet.pdf) | 71.2 | UK, 0.268 | 19.1 | 2 | 5.46 |
| Dell UltraSharp 27" Monitor (U2722DE) | [Dell U2722DE](https://www.dell.com/en-uk/dt/corporate/social-impact/advancing-sustainability/climate-action/product-carbon-footprints.htm#scroll=off&tab0=2&pdf-overlay=//www.delltechnologies.com/asset/en-uk/products/electronics-and-accessories/technical-support/u2722de-monitor-pcf-datasheet.pdf) | 66.74 | Germany, 0.364 | 24.29 | 4 | 13.88 |
| Dell UltraSharp 27" Monitor (U2722DE) | [Dell U2722DE](https://www.dell.com/en-uk/dt/corporate/social-impact/advancing-sustainability/climate-action/product-carbon-footprints.htm#scroll=off&tab0=2&pdf-overlay=//www.delltechnologies.com/asset/en-uk/products/electronics-and-accessories/technical-support/u2722de-monitor-pcf-datasheet.pdf) | 66.74 | Germany, 0.364 | 24.29 | 5 | 17.35 |
| HP 24" Monitor (24f)  | [HP M24f FHD*](https://h20195.www2.hp.com/v2/getpdf.aspx/c08754174.pdf) | 39.15 | Germany, 0.364 | 14.25 | 4 | 8.14 |
| Samsung Oddysee | [Samsung Ultra WQHD*](https://image-us.samsung.com/SamsungUS/epeat/ProductCarbonFootprint(PCF)ResultsforMobileProductsandDisplaysReport.pdf) | 30 | Netherlands, 0.386 | 11.59 | 0.25 | 0.41 |
| Samsung 32" 4k Curve Monitor | [Dell S3221QS*](https://www.dell.com/en-uk/dt/corporate/social-impact/advancing-sustainability/climate-action/product-carbon-footprints.htm#scroll=off&tab0=2&pdf-overlay=//www.delltechnologies.com/asset/en-uk/products/electronics-and-accessories/technical-support/dell-s3221qs-monitor-pcf-datasheet.pdf) | 109 | Taiwan, 0.566 | 61.65 | 4 | 35.23 |
| **Monitor Total** | | 480.23 | | 181.3 | | **84.56** |

\* Approximately equivalent product that could be found with a PCF data sheet.

**Printers**

Because we didnt find any further details about the small office printer, we decided to stick with the high-level estimated value of 0.06kgCO<sub>2</sub>e/year

**Resulting detailed estimate**

| **Device type** | **Annual estimate** | **%** |
| --- | --- | --- |
| Laptops | 31.4 kgCO_2e | 27% |
| Monitors | 84.56 kgCO_2e | 73% |
| Printers | 0.06 kgCO_2e | 0% |
| **TOTAL** | **116.02 kgCO_2e** | **100%** |

**Employee Device Total 116.02 kgCO<sub>2</sub>e/year**

**How could we improve upon this?**

Our high level estimate used an average TEC of 30.1kWh/year metric for laptops, and the detailed, calculated average TEC estimation came in at 26.9kWh/year. Taking into account regional carbon intensity, the carbon emissions high-level estimate for laptops is 52 kgCO<sub>2</sub>e/year and the detailed estimate of 31.4 kgCO<sub>2</sub>e/year. Our estimated laptop TEC was higher than the actual laptop TEC and also taking into account the actual working days per week we could be more confident with the estimation. Further comparison of high-level and detailed estimates in other projects would be helpful to strengthen the confidence of using the high-level average figures.

For the monitors we assumed an average TEC of 45kWh/year, but the actual average was much higher at 60kWh/year due to GWF more larger screens than the average business office (22-24"). This consequently meant the high-level estimate of 128.16 kgCO<sub>2</sub>e/year was much lower than the actual 181.3kgCO<sub>2</sub>e/year (assuming full time use). Once we accounted for actual working use and not full time hours, this conveniently re-aligned closer to the original estimate at 118.38 kgCO<sub>2</sub>e/year.

<span style="color: red">Any other ideas on how to improve upon this?</span>

[To the top](#top)

---

## Networking and Infrastructure
{% include categoryItem.html item="CatONetworkDevices" %}

### Estimated emissions

**Estimate used: High level = 40.33kgCO<sub>2</sub>e/year**

Estimate confidence: medium

### Agreed scope

The scope here is the same as the [Networking and Infrastructure Hardware category](projects/green-web-foundation/upstream#networking-and-infrastructure-hardware) in upstream emissions.

### High level estimate methodology

For this estimate, you first need to work out an average power consumption figure.

For the router in the Berlin office, we found its data sheet which uses 10W (0.01kWh)) as the average power consumption.

For the router in the UK office, we couldn't find a data sheet. Instead we saw the plug for the router had a maximum power load rating of 18W written on it. We assumed an average use of 60%. This is based on data found in the two research papers listed below. This resulted in a similar figure of **total power of 10.8W (0.0108kWh)**.

Paper 1 - [Equipment power consumption in optical multilayer networks – source data. ](https://www.researchgate.net/publication/272819245_Equipment_power_consumption_in_optical_multilayer_networks_-_source_data) - Idzikowski, Filip & Heddeghem, Ward & Idzikowski, F & Vereecken, W & Colle, Didier & Pickavet, Mario & Demeester, Piet. (2012).

Paper 2 - [Electricity Intensity of Internet Data Transmission: Untangling the Estimates. Journal of Industrial Ecology, 22: 785-798.](https://doi.org/10.1111/jiec.12630) - Aslan, J., Mayers, K., Koomey, J.G. and France, C. (2018).

We also assumed the routers are operating 24 hours a day, all year round. Lastly we factored in the [regional grid carbon intensity](/projects/green-web-foundation/assumptions#regional-carbon-intensity) of each router's location to estimate the emissions.

**Germany (0.364kgCO<sub>2</sub>e/kWh)**

$$ 0.01\ kWh \times 24\ hrs \times 365\ days \times 0.364\ kgCO_2e/kWh = 31.89\ kgCO_2e/year $$

**UK (0.268kgCO<sub>2</sub>e/kWh)**

$$ 0.0108\ kWh \times 24\ hrs \times 365\ days \times 0.268\ kgCO_2e/kWh = 25.36\ kgCO_2e/year $$

The UK office being a co-shared office space with two other organisations sharing the router, the attribution to GWF is only one third of this value:

$$ 25.36\ kgCO_2e/year ÷ 3 = 8.44\ kgCO_2e/year $$

This results in an estimate of 40.33kgCO<sub>2</sub>e/year.

**How could we improve upon this?**

<span style="color: red">How might we increase this methodology confidence from medium to high?</span>


[To the top](#top)

---

## Servers and Storage
{% include categoryItem.html item="CatOServers" %}

### Estimated emissions

**Estimate used: High level = 0 kgCO<sub>2</sub>e/year**

Estimate confidence: n/a

### Agreed scope

GWF does not own any of it's own servers or storage hardware. This means there are no carbon emissions to report in this category and we're highly confident about this.

[To the top](#top)

---

## Generators
{% include categoryItem.html item="CatGGenerators" %}

### Estimated emissions

**Estimate used: High level = 0 kgCO<sub>2</sub>e/year**

Estimate confidence: n/a

### Agreed scope

GWF do not operate any generators on premise. This means there are no carbon emissions to report in this category and we're highly confident about this.

[To the top](#top)

---

## Cloud Services
{% include categoryItem.html item="CatCCloud" %}

### Hetzner Cloud Services
When considering cloud services, we need to think about VMs, storage and server back-end services for GWF. All of this is hosted in Hetzner and Scaleway. Unfortunately, we don’t have any good data for doing basic estimation of the carbon emissions of these services. In the absence of easy to find data, we decided to do an approximation by using AWS as a proxy.

For the VMs, we mapped the server instances that GWF were using to equivalent appliances in AWS. Where there was no direct match, we mapped to the next service up that would still meet the services needs. During this mapping exercise we observed that Hetzner offers far more granular server specifications than AWS. AWS seems designed to push you up the appliance sizes faster. If you want more memory, you have to also take more virtual CPUs, regardless of if they are needed or not.

For the embodied carbon we pulled together data from the Scott Logic estimator tool, which itself gathers data from the [Cloud Carbon Footprint tool](https://www.cloudcarbonfootprint.org/). For the two different Hetzner instance sizes we mapped to AWS we obtained values of 0.018364507kgCO<sub>2</sub>e/USD and 0.015829902kgCO<sub>2</sub>e/USD.

We converted GWF's Hetzner monthly bill from Euros to US Dollars to then be able to multiply the embodied kgCO<sub>2</sub>e/USD for each instance type:

$$ $59.36/month \times 0.018364507\ kgCO_2e/USD \times 12\ months = 13.08\ kgCO_2e/year $$

$$ $32.40/month \times 0.015829902\ kgCO_2e/USD \times 12\ months = 6.15\ kgCO_2e/year $$

For the operational computing power, a similar process was used. We multiplied the CCF method's kWh per USD (0.270373921kWh/USD and 0.233471074kWh/USD) by the monthly cost in USD (converted from Euros) to obtain a monthly compute kWh usage, multiplied by 12 months to get a yearly total compute kWh:

$$ $59.36/month \times 0.270373921\ kWh/USD \times 12\ months = 192.59\ kWh/year $$

$$ $32.40/month \times 0.233471074\ kWh/USD \times 12\ months = 90.77\ kWh/year $$

For the data storage in Hetzner we assume the use of SSD storage and use a value of 0.0012kWh/TBh from [Cloud Carbon Footprint Storage Methodology](https://www.cloudcarbonfootprint.org/docs/methodology/#storage).
With a total volume of 0.89TB of data storage we can calculate a yearly kWh:

$$ 0.89\ TB \times 0.0012\ kWh/TBh \times 24\ hrs \times 365\ days = 9.36\ kWh/year $$

So a total kWh per year using Hetzner cloud services: 292.72kWh/year.

We can then multiply this by the regional carbon intensity to calculate the carbon emissions. In this case Hetzner powers their servers from 100% renewable energy. In the case of the German data center, it is powered by hydro-electricity. To account for this we use a carbon intensity of 0.041kgCO<sub>2</sub>e/kWh. 

The operational carbon emissions of using Hetzner cloud:

$$ 292.72\ kWh/year \times 0.041\ kgCO_2e/kWh = 12\ kgCO_2e/year $$

<span style="color: coral">WHAT IF: we can easily update the carbon intensity to any other region or global intenstiy to work out the "what if it's not green" scenario here.</span>

We add to this the embodied carbon of the cloud servers for a total carbon emissions for Hetzner services:

$$ 13.08\ kgCO_2e/year + 6.15\ kgCO_2e/year + 12\ kgCO_2e/year = 31.23\ kgCO_2e/year $$

#### Improving the CPU Estimates

In an attempt to improve on the above CPU estimates we went back to the Cloud Carbon Footprint methodology to remove billing information from the equation. The problem with billing information when used as a usage indicator is that it is subjective. One company may negotiate a betting pricing structure than another due to their size, for example. A better approach would be to use actual CPU usage data available from the Hetzner API.

The other area for improvement was to use data about the actual CPU being used, not an Amazon equivalent.

To do this we went back to the [blog from Etsy](https://www.etsy.com/codeascraft/cloud-jewels-estimating-kwh-in-the-cloud/) on Cloud Jewels, that the CCF methodology was based on. Looking at the [detailed methodology](https://github.com/etsy/cloud-jewels/blob/master/methodology.md) in their GitHub repository, we arrived at the following method.

We first calculate the coefficient:
- The Hetzner API reported that the appliance that runs the Greencheck API uses an AMD Epyc Processor running at 2.4 GHz. 
- Get the number of threads, maximum and minimum average power draw for the AMD EPYC Processor (2.4 GHz) from [Spec.org](https://www.spec.org/power_ssj2008/results/res2023q1/). Ideally, we would find all uses of the chosen processor and average out the values, but for this example, I’ve just used the first matching row).
- Divide the minimum power draw for the CPU by the number of threads to get the minimum power per thread.
- Do the same for the maximum.
- Calculate the average utilisation for the month from usage data supplied by the Hetzner API.

Next, we apply the following formula from Etsy's Cloud Jewels (see link above) to get the energy coefficient:

$$ Wattage = MinimumWattage + AverageCpuUtilization * (MaximumWattage - MinimumWattage) $$

| Description | Value | Notes |
| --- |
| Min average CPU draw for AMD EPYC 9654 2.40GHz | 63.2W | From [Spec.org](https://www.spec.org/power_ssj2008/results/res2023q1/) |
| Max average CPU draw for AMD EPYC 9654 2.40GHz | 351W | From [Spec.org](From https://www.spec.org/power_ssj2008/results/res2023q1/) |
| Threads | 192 | From [Spec.org](From https://www.spec.org/power_ssj2008/results/res2023q1/) |
| Min energy per thread | 0.3291666667 | Min / Threads |
| Max energy per thread | 1.828125 | Max / Threads |
| Percent utilisation for the month | 56.91044181 | Average CPU utilisation over all five servers over the course of 1 month. |
| Wh per vCPUh [Server] (AMD EPYC 9654 2.40GHz) | *1.182230477* | Wattage = Minimum wattage + Average CPU Utilization * (Maximum wattage - minimum wattage) |

*This gives us a coefficient of 1.182230477.*

- We can then multiply this by the number of hours in the month and again by the number of servers.
- From here, we can convert into kWh and calculate the energy for the year (assuming April was representative of the whole year - more accurate numbers could be produced by using more data than just April).
- Finally we multiply the values by the carbon intensity for a final result.

| Description | Value | Notes |
| --- |
| hours between 17/04/2024 23:36 and 17/05/2024 23:36 | 720 | |
| Wh per CPU per month | 851.2059433 | Coefficient * hours in the month |
| Hetzner PUE | 1.16 | https://www.hetzner.com/unternehmen/nachhaltigkeit |
| Apply PUE | 987.3988942 | 851.2059433 * 1.16 |
| kWh per CPU per month | 0.9873988942 | |
| kWh per year | 11.84878673 | Calculate for the year |
| Number of servers | 4 | Only including 4 servers as app5 was out of the pool during April |
| Monthly energy in kWh for all servers | 3.949595577 | kWh per CPU per month * number of servers |
| Yearly energy in kWh for all servers | 47.39514692 | kWh per CPU per year * number of servers |
| Carbon intensity | 0.041 | Hydro electric carbon intensity |
| Monthly Carbon Emissions (kgCO2) | 0.1619334186 | Monthly energy in kWh for all servers * Carbon intensity. Original estimate: 0.9867767872 |
| Yearly Carbon Emissions (kgCO2) | 1.943201024 | Yearly energy in kWh for all servers * Carbon intensity. Original Estimate: 11.84132145 |

### Scaleway Cloud Services

Scaleway is just for block storage, so we used the same methodology as for the storage in Hetzner. One difference was that Hetzner allocates a fixed amount of storage while Scaleway charges per gigabyte hour. Typically GWF uses 463.58TBhours of data per month, assuming again the use of SSD storage and using the CCF methodology

$$ 463.58\ TBh \times 0.0012\ kWh/TBh \times 12\ months = 6.68\ kWh/year $$

[Scaleway also uses sustainable energy sources](https://www.scaleway.com/en/environmental-leadership/) (100% wind or hydro). So, we'll use the hyro-power carbon intensity of 0.041kgCO<sub>2</sub>e/kWh:

$$ 6.68\ kWh/year \times 0.041\ kgCO_2e/kWh = 0.27\ kgCO_2e/year $$

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

$$ (21,0000\ MTCO_2e/year \times 1000) ÷ 7,590,000 = 2.77\ kgCO2e/year/website $$

2.77kgCO<sub>2</sub>e/year per website could be used an average or proxy metric to estimate emissions of CDNs.

In GWF's scenario however, we zero the carbon emissions based on the market-based net-zero value of Cloudflare.

**Total carbon emissions for Managed Services: 0kgCO<sub>2</sub>e/year**

[To the top](#top)

---

[Next - Estimating the Downstream Emissions](downstream)

---