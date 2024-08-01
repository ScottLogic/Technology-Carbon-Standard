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

**This results in an estimate of 40.33kgCO<sub>2</sub>e/year.**

**How could we improve upon this?**

For our very simple network set up, we could increase our confidence in this methodology from medium to high by using an energy monitor on the plug to the router to gain an accurate measurement. But for a use case like this we expect the embodied carbon in the monitor would far outweigh the value gain from such a measurement - probably best to borrow one!

For a more complex network setup, where there could be viable mitigation actions, that approach may be justifiable. Depending on the network size you could monitor representative devices and extrapolate their energy usage from there. For example, if you had 5 switches, 3 wireless access points, a firewall and a router, you could capture data on one of each device type and assume the values of remaining switches and access points share a similar profile to the one you measured. If you had reason to believe there would be differences then more measurement would be required.

This approach would only scale so far though and is high effort. Further research needs to be done in this area to create a more robust model that could be used based on devices, their power profiles, and traffic patterns. We predict that features such as power saving and the pattern of traffic is far more important than traffic quantity. We hypothesise that, given a network device with power saving features, frequent, small amounts of data are more power intensive than short bursts of large data.

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

### Estimated emissions

<!-- **Estimate used: Detailed = 32 kgCO<sub>2</sub>e/year - 5% of overall digital estate** -->

<span style="color: blue">The estimations can't really be compared quite so broadly... I've gone into detail comparing the two estimates in detail at the end of this section as its not comparing apples to apples. The next paragraph attempts to explain the process we went through and what we did... - David</span>

We started with a high-level spend-based, broad estimate of GWF's cloud services, from which this led to a focused detailed carbon estimate specifically for GWF's Greencheck API servers. For this reason, we cannot compare the total high-level estimate to a total detailed estimate (because we didn't complete a detailed estimate for all the servers). However, we did circle back to calculate a high-level estimate for the Greencheck API for a comparable result.

| **Estimate Type** | **High-Level Estimate** | **Detailed Estimate** | **Confidence in Methodology (high-level/ detailed)** |
| --- | --- | --- | --- |
| All Cloud Services| 26.74 kgCO<sub>2</sub>e/year | NA | Low/ NA |
| Greencheck API Services | 11.26 kgCO<sub>2</sub>e/year | 9.65*  kgCO<sub>2</sub>e/year | Low/ Medium |

<small>* The embodied carbon emissions uses the high-level estimation model.</small>

### Agreed scope
GWF use two cloud suppliers to host their [Green Web Dataset and accompanying tools](https://www.thegreenwebfoundation.org/tools/green-web-dataset/), these are [Hetzner](https://www.hetzner.com/) and [Scaleway](https://www.scaleway.com/en/). 

The scope of this section was therefore estimating GWF's usage of these two suppliers, particularly the VMs, storage and server back-end services.

### High-Level Estimate Methodology

We used a spend-based method to estimate the high-level carbon emissions. Unfortunately, we could not find specific methods for Hetzner or Scaleway. Instead, we used AWS as a proxy so that we could use the open-source spend-based model from [Cloud Carbon Footprint (CCF)](https://www.cloudcarbonfootprint.org/). We felt this was good enough to produce a [high-level estimate](assumptions#high-level-estimates) in order to quantify the scale of emissions.

#### **Hetzner VMs**

For the VMs, we mapped the GWF server instances to equivalent appliances in [AWS](https://aws.amazon.com/). Where there was no direct match, we mapped to the next service up that would still meet the services needs. We ended up with just two instance sizes.

*As an aside, during this mapping exercise we observed that Hetzner offers far more granular server specifications than AWS. AWS seems designed to push you up the appliance sizes faster. If you want more memory, you have to also take more virtual CPUs, regardless of if they are needed or not.*

For the [embodied carbon](/glossary#embodied-carbon) estimate, we pulled spend-based data from [CCF](https://www.cloudcarbonfootprint.org/). For the two identified instance sizes we obtained values of 0.018364507 kgCO<sub>2</sub>e/USD and 0.015829902 kgCO<sub>2</sub>e/USD. For ease in the calculations below we round these embodied carbon estimates to 0.018kg CO<sub>2</sub>e/USD and 0.016 kgCO<sub>2</sub>e/USD.

We got the monthly billing data provided by Hetzner and converted it from Euros to US Dollars at the exchange rate of April 2024. Month to month, this spend does not vary much, so for a high-level estimate we assume this same spend every month for the year. 

We multiplied monthly spend by the embodied kgCO<sub>2</sub>e/USD for each instance type, and multiply that by 12 to get an annual figure:

$$ \$ 59.36/month \times 0.018\ kgCO_2e/USD \times 12\ months = 12.84\ kgCO_2e/year $$

$$ \$ 34.34/month \times 0.016\ kgCO_2e/USD \times 12\ months = 6.60\ kgCO_2e/year $$

The combined embodied emissions value is therefore:

$$ 12.84\ kgCO_2e/year + 6.60\ kgCO_2e/year = 19.44\ kgCO_2e/year $$

For [usage emissions](/glossary#usage-carbon), we sourced a kWh per USD value from [CCF](https://www.cloudcarbonfootprint.org/). We arrived at 0.270373921 kWh/USD and 0.233471074 kWh/USD. For ease in the calculations below we round these usage carbon estimates to 0.270 kWh/USD and 0.233 kWh/USD.

We multiplied the kWh/USD by the monthly cost in USD to obtain a compute kWh/month, then we multiplied that by 12 months to get a total compute kWh/year:

$$ \$ 59.36/month \times 0.27\ kWh/USD \times 12\ months = 192.33\ kWh/year $$

$$ \$ 34.34/month \times 0.233\ kWh/USD \times 12\ months = 96.01\ kWh/year $$

To convert that to a carbon emissions estimate, we needed a carbon intensity value for the electricity used to power the VMs. In this case, the Hetzner data center used by GWF uses [100% renewable energy](https://www.hetzner.com/unternehmen/nachhaltigkeit/), specifically a 50/50 mix of hydro and wind power. To account for this we use the median carbon intensities of hydro and wind power; 0.024 kgCO<sub>2</sub>e/kWh and 0.0115 kgCO<sub>2</sub>e/kWh (average of onshore wind of 0.011 kgCO2e/kWH and offshore wind of 0.012 kgCO<sub>2</sub>e/kWh) as per the [Intergovernmental Panel on Climate Change (IPCC) report](https://archive.ipcc.ch/pdf/assessment-report/ar5/wg3/ipcc_wg3_ar5_annex-iii.pdf). We can calculate the average carbon intensity as:

$$ (0.024\ kgCO_2e/kWh + 0.015\ kgCO_2e/kWh) ÷ 2 =  0.0195\ kgCO_2e/kWh $$

Then we calculate the carbon emissions of the Hetzner VMs:

<span style="color: coral">WHAT IF: we can easily update the carbon intensity to any other region or global intenstiy to work out the "what if it's not green" scenario here.</span>

$$ 192.33\ kWh/year \times 0.0195 kgCO_2e/kWh = 3.75\ kgCO_2e/year $$

$$ 96.01\ kWh/year \times 0.0195 kgCO_2e/kWh = 1.87\ kgCO_2e/year $$

Then, we add the embodied and operational carbon emissions together for each VM instance:

$$ 12.84\ kgCO_2e/year + 3.75\ kgCO_2e/year = 16.59\ kgCO_2e/year $$

$$ 6.60\ kgCO_2e/year + 1.87\ kgCO_2e/year = 8.47\ kgCO_2e/year $$

**This results in an estimate of 25.06 kgCO<sub>2</sub>e/year for the Hetzner VMs.**

#### **Hetzner Data Storage**

For the data storage in Hetzner we assume the use of SSD storage and use a value of 0.0012 kWh/TBh from [CCF's Storage Methodology](https://www.cloudcarbonfootprint.org/docs/methodology/#storage). With a total volume of 0.89TB of data storage we can calculate a yearly kWh:

$$ 0.89\ TB \times 0.0012\ kWh/TBh \times 24\ hrs \times 365\ days = 9.36\ kWh/year $$

We then multiply this by the carbon intensity value. As before we're using 0.0195 kgCO<sub>2</sub>e/kWh. 

$$ 9.36\ kWh/year \times 0.0195 kgCO_2e/kWh = 0.18\ kgCO_2e/year $$

**Our estimate for the Hetzner data storage is 0.18 kgCO_2e/year.**

#### **Scaleway Data Storage**

GWF use Scaleway for block storage. So, we used the same methodology as for the Hetzner data storage. One key difference was that Hetzner allocates a fixed amount of storage while Scaleway charges per gigabyte hour. 

Typically GWF uses 463.579 TBhours of data per month. We again assumed SSD storage and use a value of 0.0012 kWh/TBh from [CCF's Storage Methodology](https://www.cloudcarbonfootprint.org/docs/methodology/#storage).

$$ 463.579\ TBh \times 0.0012\ kWh/TBh \times 12\ months = 6.68\ kWh/year $$

[Scaleway also uses sustainable energy sources](https://www.scaleway.com/en/environmental-leadership/), 100% wind or hydro. So, we'll use the same carbon instensity as above with a 50/50 mix of hydro and wind power; 0.0195 kgCO<sub>2</sub>e/kWh:

$$ 6.68\ kWh/year \times 0.0195\ kgCO_2e/kWh = 0.13\ kgCO_2e/year $$

**Our estimate for the Scaleway data storage is 0.13 kgCO_2e/year.**

#### **Resulting High-Level Estimate**

| **Service type** | **Annual estimate** | **%** |
| --- | --- | --- |
| Hetzner VMs | 25.06 kgCO_2e | 99% |
| Hetzner data storage | 0.18 kgCO_2e | < 1% |
| Scaleway data storage | 0.13 kgCO_2e | < 1% |
| **TOTAL** | **25.37 kgCO_2e** | **100%** |

<span style="color: red">We should probably add some insights here that's its low, and point to the what if part as noted already by David.</span>
<span style="color: coral">WHAT IF: we can easily update the carbon intensity to any other region or global intenstiy to work out the "what if it's not green" scenario here.</span>

**How could we improve upon this?**

For this particular project, given that the VMs are 99% of the emissions it makes sense to focus on trying to improve this part. Specifically, swapping billing information for actual CPU usage data. The problem with billing information when used as a usage indicator is that it is subjective. For example, one company may negotiate a betting pricing structure than another due to their size. A better approach is using specific CPU data. For example, there is usage data available from the Hetzner API and that could be combined with data about the actual CPU being used, not an AWS equivalent/proxy.

### Detailed Estimate Methodology

#### **Hetzner VMs**

To improve upon our high-level methodology we took a look at [blog from Etsy on Cloud Jewels](https://www.etsy.com/codeascraft/cloud-jewels-estimating-kwh-in-the-cloud/), which the CCF methodology is based on. Reviewing the [detailed methodology](https://github.com/etsy/cloud-jewels/blob/master/methodology.md) in their GitHub repository, we arrived at a more detailed method of estimating the operational carbon of cloud VMs.

The following detailed methodology was focused specifically on four of GWF's servers that provide the greencheck API, as they are known to be the most popular service and using the most resources. We used values obtained from the Hetzner reports for April 2024 as a representative average month to keep things simple, but more accurate numbers could be produced by using data obtained for the whole year.

**1. Calculate the Coefficient**

The coefficient gives us the number of Watts a single virtual CPU uses based on the type of physical CPU in the server and the workload of the CPU over time. To calculate this:

1. Find out the specific processor being used. The Hetzner API reported that the appliance running the Greencheck API uses an AMD Epyc Processor running at 2.4 GHz. 
1. Get the number of threads, maximum and minimum average power draw for processor. We used [Spec.org](https://www.spec.org/power_ssj2008/results/res2023q1/) to find specific data for our processor. Ideally, we would find all uses of the chosen processor and average out the values. For speed we used the first matching row.
1. Work out the minimum power per thread. Divide the minimum power draw for the CPU by the number of threads.
1. Do the same for the maximum.
1. Calculate the average utilisation for the month. The usage data supplied by the Hetzner API came in handy here.

Next, we apply the following formula from the Cloud Jewels methodology to get the energy coefficient:

$$ Watts/vCPU = Minimum\ Wattage + Average\ CPU\ Utilization \times (Maximum\ Wattage - Minimum\ Wattage) $$

Here are the specific values we used:

| **Description** | **Value** | **Notes** |
| --- | --- | --- |
| Min average CPU draw for AMD EPYC 9654 2.40GHz | 63.2W | From [Spec.org](https://www.spec.org/power_ssj2008/results/res2023q1/) |
| Max average CPU draw for AMD EPYC 9654 2.40GHz | 351W | From [Spec.org](From https://www.spec.org/power_ssj2008/results/res2023q1/) |
| Threads | 192 | From [Spec.org](From https://www.spec.org/power_ssj2008/results/res2023q1/) |
| Min energy per thread | 0.329167 | Minimum average power / Threads |
| Max energy per thread | 1.828125 | Maximum average power / Threads |
| Percent utilisation for the month | 56.91 | Average CPU utilisation of the four servers over 1 month. |

$$ 0.329167 + 56.91\% \times (1.828125 - 0.329167) = 1.182224\ W/vCPU $$

**2. Work out the monthly electricity consumption of the servers**
1. Multiply the coefficient by the number of hours in a year (8760) to gather Wh/CPU per year.
1. Multiply that by the [PUE](/glossary#power-usage-effectiveness-pue) ([1.16](https://www.hetzner.com/unternehmen/nachhaltigkeit)). 
1. Multiply that by the number of servers (4) for total energy consumption per year.

$$ 1.182224 \times 8760 \times \ 1.16 \times 4 = 48.05 kWh/year $$

**3. Factor in carbon intensity for electricity**

Finally we multiply the values by the carbon intensity of hydro and wind power mix, 0.0195 kgCO<sub>2</sub>e/kWh.

$$ 48.05\ kWh/year \times 0.0195\ kgCO_2e/kWh = 0.94\ kgCO2_e/year $$

**The resulting detailed operational carbon emissions estimate for the four Hetzner VMs is 0.94 kgCO<sub>2</sub>e/year.**

To combine the embodied carbon of these servers, we need to rely on the high-level methodology (without knowing the specific details of the server's embodied carbon). In this case we are specifically taking into account the four servers we have looked at in the detailed calculations above, and not the total embodied carbon of all of GWF's servers we concluded in the high-level-estimate.

We use the spend based value of 0.018 kgCO<sub>2</sub>e/USD and the cost of $40.33 USD.

$$ \$ 40.33/month \times 0.018\ kgCO_2e/USD \times 12\ months = 8.71\ kgCO_2e/year $$

Combining this high-level embodied carbon estimate, with the detailed operational estimate for the VMs total carbon emissions per year:

$$ 8.71\ kgCO_2e/year + 0.94\ kgCO_2e/year = 9.65 kgCO_2e/year $$

**Detailed total carbon emissions of the four Hetzner VMs used for Greencheck API = 9.65 kgCO_2e/year**

However, to compare this detailed operational estimate to the high-level estimate we would need to gather the processor and utilisation data for all of the other servers (which we didn't have time to do). Alternatively, we can re-calculate the high-level operational estimate specifically for these four servers using the spend based method, where the spend is $40.33 USD/month and the kWh/month value of 0.27 kWh/USD:

$$ $40.33/month \times 0.27\ kWh/USD \times 12\ months = 130.67\ kWh/year $$

Then apply the carbon intensity of hydro and wind power mix; 0.0195 kgCO<sub>2</sub>e/kWh:

$$ 130.67\ kWh/year \times 0.0195\ kgCO_2e/kWh = 2.55\ kgCO_2e/year $$

The detailed emissions estimate can now be directly compared to the high-level estimate: 

| **4x Greencheck API Servers** | **High-Level Estimate kgCO<sub>2</sub>e/year** | **Detailed Estimate kgCO<sub>2</sub>e/year** |
| --- | --- | --- |
| Operational Carbon Emissions | 2.55 | 0.94 |
| Embodied Carbon Emissions | 8.71 | (8.71)* |
| **Total Carbon Emissions** | **11.26** | **9.65** |

<small>* We use the high-level estimated embodied carbon, without the specific server's embodied carbon data.</small> 

The high-level operational emissions are ~2.7x higher than the detailed operational estimate. High-level estimations, especially a spend-based model, are typically higher than detailed estimations (as they tend to over-estimate), and in this case it is signifantly higher. As noted in the high-level methodology, we used CCF's modelling to map the Hetzner servers to AWS servers, meeting all of the minimum service needs, this led to over-sizing the server instances. So, compounding the over-estimated spend-based model, with over-sized server instances, it is a likely reason for such an extreme over-estimation.

Notably, however the embodied carbon makes up 77% - 90% (high-level - detailed) of the total carbon. Which means that for the total carbon emissions, the high-level estimate is only ~1.2x higher than the detailed estimate. This is however, based on the same high-level (likely over-estimated) embodied carbon estimate lacking any specific server embodied carbon data.

**How could we improve upon this?**

With more time and resources, the detailed estimate could be much improved. Firstly, as we only commited to detailing the four servers used for the Greencheck API, this modelling could be extended to all of the servers. This would require gathering more data regarding the processors used, the processor's min/max power, number of threads and the avgerage CPU utilisation for each server. Also, we only used the month of April as a sample of average CPU utilisation. This modelling could be applied to every month of the year, for a monthly comparison, or simply calculate the average utilisation for the entire year.

We didn't gather any detail of the server's embodied carbon. This would likely need to be obtained from Hetzner if they would be willing to share more details of the hardware. As a high proportion of the total carbon emissions, this could have a significant impact on the total emissions.

[To the top](#top)

---

## SaaS Services
{% include categoryItem.html item="CatCSaas" %}

### Estimated emissions

**No data**

Estimate confidence: *n/a - not attempted*

### Agreed scope

We started by identifying the SaaS products most prominently by the GWF team. We used GWF's internal finance tracker to generate a starting list. We realised early on that trying to measure everything was inpractical so looked for the top 10. The first version of this list we settled on is:
- GitHub
- NPM
- Google workspaces, specifically GDrive and Calendars
- Trello
- Zulip
- Miro
- Brevo
- Sentry
- 1password
- 34SP, specifically WordPress hosting

### High level estimate methodology

The idea for this was to see what data exists to help us make some high level estimates against our own use of these services. After drawing on our own knowledge of these products and supported by an internet search for useful information, we concluded that data to support these kinds of estimates is not yet readily available. Due to time constraints, we decided to prioritise our efforts elsewhere.

**How could we improve upon this?**

In an ideal world we would reach out to the relevant SaaS support teams to raise this issue with them. In the absence of data, one of the most useful steps a team can take is to tell a supplier they are looking for it. 

We also could have looked for any kind of industry benchmarks and extracted some broad assumptions from those. Whilst those would have provided low confidence estimates, that would have been better than nothing.

If we had the capacity to explore this further, we would likely consider a spend-based method for high-level estimates. 

[To the top](#top)

---

## Managed Services
{% include categoryItem.html item="CatCManaged" %}

### Estimated emissions

**Estimate used: High level = 0 kgCO<sub>2</sub>e/year - 0% of overall digital estate**

Estimate confidence: Medium

### Agreed scope

Cloudflare is a [Content Delivery Network](https://en.wikipedia.org/wiki/Content_delivery_network) (CDN) that GWF use to provide better performance for their websites and manage DNS settings. We put Cloudflare into this Managed Services category, but it could just as easily belong to the Cloud Services category instead. We ultimately took the decision as this category would have been empty otherwise, and we liked being able to separate Cloudflare clearly.

### High level estimate methodology

Cloudflare report they operate a (market-based) net-zero carbon service via [Renewable Energy and Offset Purchases](https://app.greenweb.org/directory/#779). This meant we can report the carbon emissions for this as zero in our own digital estimates.

**How could we improve upon this?**

We briefly explored what a high level estimate methodology for Cloudflare would look like if they didn't have their decarbonisation strategy. We found two key pieces of information:

1. Cloudflare's total emissions was 21,000MTCO<sub>2</sub>e for 2022 - [Cloudflare's Emissions Inventory for 2022](https://cf-assets.www.cloudflare.com/slt3lc6tev37/65gCD3up047PMsHB9aXEYN/d3d719c0f9f493f82e4fec9dab250e6d/Cloudflare_2022_Emissions_Inventory.pdf)
1. Cloudflare (as of August 2023) has 7.59million active websites - [Cloudflare Stats for 2023](https://backlinko.com/cloudflare-users)

A rudimentary method is to simply divide the carbon emissions by the number of active websites to get an average carbon emission per website per year.

$$ (21,0000\ MTCO_2e/year \times 1000) ÷ 7,590,000 = 2.77\ kgCO2e/year/website $$

In the absense of any data whatsoever, 2.77 kgCO<sub>2</sub>e/year per website could be used an average or proxy metric to perform a [high level estimate](assumptions#high-level-estimates) of CDNs.

[To the top](#top)

---

[Next - Estimating the Downstream Emissions](downstream)

---