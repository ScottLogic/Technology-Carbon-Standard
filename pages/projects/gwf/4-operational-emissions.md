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

**Estimate used: Detailed = 32 kgCO<sub>2</sub>e/year - 5% of overall digital estate**

| **Estimate type** | **2023 estimate** | **Confidence in methodology** |
| --- | --- | --- |
| High level | <span style="color: red">22.2</span> kgCO<sub>2</sub>e/year | <span style="color: red">tbc</span> |
| Detailed | 32 kgCO<sub>2</sub>e/year | <span style="color: red">tbc</span> |

### Agreed scope
GWF use two cloud suppliers to host their [Green Web Dataset and accompanying tools](https://www.thegreenwebfoundation.org/tools/green-web-dataset/), these are [Hetzner](https://www.hetzner.com/) and [Scaleway](https://www.scaleway.com/en/). 

The scope of this section was therefore estimating GWF's usage of these two suppliers, particularly the VMs, storage and server back-end services.

### High level estimate methodology

Unfortunately, we weren't aware of any good data for doing basic estimations of the carbon emissions of these specific service providers based on usage. 

We decided to do an approximation by using AWS as a proxy, and use spend as the main metric. We chose to map to AWS as this meant we could use the open source spend to CO2 data in [Cloud Carbon Footprint (CCF)](https://www.cloudcarbonfootprint.org/). We felt this was good enough to produce a [high-level estimate](assumptions#high-level-estimates) in order to quantify the scale of emissions.

**Hetzner VMs**

For the VMs, we mapped the GWF server instances to equivalent appliances in [AWS](https://aws.amazon.com/). Where there was no direct match, we mapped to the next service up that would still meet the services needs. We ended up with just two instance sizes.

*As an aside, during this mapping exercise we observed that Hetzner offers far more granular server specifications than AWS. AWS seems designed to push you up the appliance sizes faster. If you want more memory, you have to also take more virtual CPUs, regardless of if they are needed or not.*

For the [embodied carbon](/glossary#embodied-carbon) per USD spent, we pulled data from [CCF](https://www.cloudcarbonfootprint.org/). For the two identified instance sizes we obtained values of 0.018364507 kgCO<sub>2</sub>e/USD and 0.015829902 kgCO<sub>2</sub>e/USD. For ease in the calculations below we round these **embodied carbon estimates to 0.018kg CO<sub>2</sub>e/USD and 0.016 kgCO<sub>2</sub>e/USD**.

We got the monthly billing data provided by Hetzner and converted it from Euros to US Dollars at the exchange rate of April 2024. 

We multiplied monthly cost by the embodied kgCO<sub>2</sub>e/USD for each instance type. To keep the calculation simple at this point we multipled that monthly cost by 12 to get an annual figure. In this instance this made sense as the monthly costs did not vary much month on month. The calculations looks like this:

$$ \$ 59.36/month \times 0.018\ kgCO_2e/USD \times 12\ months = 13.08\ kgCO_2e/year $$

$$ \$ 32.40/month \times 0.016\ kgCO_2e/USD \times 12\ months = 6.52\ kgCO_2e/year $$

The combined embodied emissions value is therefore:

$$ 13.08\ kgCO_2e/year + 6.52\ kgCO_2e/year = 19.61 kgCO_2e/year $$

For [usage emissions](/glossary#usage-carbon), we sourced a kWh per USD value from [CCF](https://www.cloudcarbonfootprint.org/). We arrived at 0.270373921 kWh/USD and 0.233471074 kWh/USD. For ease in the calculations below we round these **usage carbon estimates to 0.270 kWh/USD and 0.233 kWh/USD**.

We multiplied the kWh/USD by the monthly cost in USD (converted from Euros) to obtain a monthly compute kWh usage. Then we multiplied by 12 months to get a yearly total compute kWh:

$$ \$ 59.36/month \times 0.270\ kWh/USD \times 12\ months = 192.59\ kWh/year $$

$$ \$ 32.40/month \times 0.233\ kWh/USD \times 12\ months = 90.77\ kWh/year $$

To convert that to a carbon emissions estimates, we needed a carbon intensity value for the electricity used to power the VMs. In this case the German data center used by GWF is 100% renewable energy, specifically hydro-electricity. To account for this we use a carbon intensity of 0.041 kgCO<sub>2</sub>e/kWh. <span style="color: red">It would be helpful to specify where we got the number.</span>

<span style="color: coral">WHAT IF: we can easily update the carbon intensity to any other region or global intenstiy to work out the "what if it's not green" scenario here.</span>

$$ 192.59\ kWh/year \times 0.041 kgCO_2e/year = 7.89\ kgCO_2e/year $$

$$ 90.77\ kWh/year \times 0.041 kgCO_2e/year = 3.95\ kgCO_2e/year $$

Then we add the operational and usage annual estimates together for each VM instance.

$$ 13.08\ kgCO_2e/year + 7.89\ kgCO_2e/year = 20.98\ kgCO_2e/year $$

$$ 6.15\ kgCO_2e/year + 3.95\ kgCO_2e/year = 10.47\ kgCO_2e/year $$

This results in an estimate of 31.45 kgCO_2e/year for the Hetzner VMs.

**Hetzner data storage**

For the data storage in Hetzner we assume the use of SSD storage and use a value of 0.0012 kWh/TBh from [CCF's Storage Methodology](https://www.cloudcarbonfootprint.org/docs/methodology/#storage). With a total volume of 0.89TB of data storage we can calculate a yearly kWh:

$$ 0.89\ TB \times 0.0012\ kWh/TBh \times 24\ hrs \times 365\ days = 9.36\ kWh/year $$

We then multiply this by the carbon intensity value. As before we're using 0.041kgCO<sub>2</sub>e/kWh. 

$$ 9.36\ kWh/year \times 0.041 kgCO_2e/year = 0.38\ kgCO_2e/year $$

Our final estimate for the Hetzner data storage is 0.38 kgCO_2e/year.

**Scaleway data storage**

GWF use Scaleway just for block storage. So we used the same methodology as for the Hetzner data storage. One key difference was that Hetzner allocates a fixed amount of storage while Scaleway charges per gigabyte hour. 

Typically GWF uses 463.58 TBhours of data per month. We again assumed SSD storage and use a value of 0.0012 kWh/TBh from [CCF's Storage Methodology](https://www.cloudcarbonfootprint.org/docs/methodology/#storage).

$$ 463.58\ TBh \times 0.0012\ kWh/TBh \times 12\ months = 6.68\ kWh/year $$

[Scaleway also uses sustainable energy sources](https://www.scaleway.com/en/environmental-leadership/), 100% wind or hydro. So, we'll use the hydro-power carbon intensity of 0.041kgCO<sub>2</sub>e/kWh:

$$ 6.68\ kWh/year \times 0.041\ kgCO_2e/kWh = 0.27\ kgCO_2e/year $$

Our final estimate for the Scaleway data storage is 0.27 kgCO_2e/year.

**Resulting high-level estimate**

| **Service type** | **Annual estimate** | **%** |
| --- | --- | --- |
| Hetzner VMs | 31.45 kgCO_2e | 98% |
| Hetzner data storage | 0.38 kgCO_2e | 1% |
| Scaleway data storage | 0.27 kgCO_2e | 1% |
| **TOTAL** | **32.1 kgCO_2e** | **100%** |

<span style="color: red">We should probably add some insights here that's its low, and point to the what if part as noted already by David.</span>
<span style="color: coral">WHAT IF: we can easily update the carbon intensity to any other region or global intenstiy to work out the "what if it's not green" scenario here.</span>

**How could we improve upon this?**

For this particular project, given that the VMs are 98% of the emissions it makes sense to focus on trying to improve this part. Specifically swapping billing information for actual CPU usage data. The problem with billing information when used as a usage indicator is that it is subjective. For example, one company may negotiate a betting pricing structure than another due to their size. A better approach is using specific CPU data. For example there is usage data available from the Hetzner API and that could be combined with data about the actual CPU being used, not an Amazon equivalent/proxy.

### Detailed estimate methodology

**Hetzner VMs**

<span style="color: red">Need to explain how this fits in with the way we described the VMs before. We said there were two instances we were using, which does this equate to? Also do we assume this is just the usage part, not the embodied part. I'd like to compare the high level and detailed and make it easy to show the difference between the two in a like for like way at the end of this explanation.</span>

To improve upon our high-level methodology we went back to the [blog from Etsy on Cloud Jewels](https://www.etsy.com/codeascraft/cloud-jewels-estimating-kwh-in-the-cloud/), which the CCF methodology is based on. Reviewing the [detailed methodology](https://github.com/etsy/cloud-jewels/blob/master/methodology.md) in their GitHub repository, we arrived at the following method.

<span style="color: red">I think we need a sentence or two to explain what this cofficient is.</span>

1. **Calculate the coefficient**
    1. Find out the specific processor being used. The Hetzner API reported that the appliance running the Greencheck API uses an AMD Epyc Processor running at 2.4 GHz. 
    1. Get the number of threads, maximum and minimum average power draw for processor. We used [Spec.org](https://www.spec.org/power_ssj2008/results/res2023q1/) to find specific data for our processort. Ideally, we would find all uses of the chosen processor and average out the values. For speed we used the first matching row.
    1. Work out the minimum power per thread. Divide the minimum power draw for the CPU by the number of threads.
    1. Do the same for the maximum.
    1. Calculate the average utilisation for the month. The usage data supplied by the Hetzner API came in handy here.

Next, we apply the following formula from the Cloud Jewels methodology to get the energy coefficient:

$$ Wattage = MinimumWattage + AverageCpuUtilization * (MaximumWattage - MinimumWattage) $$

Here are the specific values we used:

| **Description** | **Value** | **Notes** |
| --- | --- | --- |
| Min average CPU draw for AMD EPYC 9654 2.40GHz | 63.2W | From [Spec.org](https://www.spec.org/power_ssj2008/results/res2023q1/) |
| Max average CPU draw for AMD EPYC 9654 2.40GHz | 351W | From [Spec.org](From https://www.spec.org/power_ssj2008/results/res2023q1/) |
| Threads | 192 | From [Spec.org](From https://www.spec.org/power_ssj2008/results/res2023q1/) |
| Min energy per thread | 0.3291666667 | Min / Threads |
| Max energy per thread | 1.828125 | Max / Threads |
| Percent utilisation for the month | 56.91044181 | Average CPU utilisation over all five servers over the course of 1 month. |
| Wh per vCPUh [Server] (AMD EPYC 9654 2.40GHz) | *1.182230477* | Wattage = Minimum wattage + Average CPU Utilization * (Maximum wattage - minimum wattage) |

**This gives us a coefficient of 1.182230477.**

2. **Work out the monthly electricity consumption of the servers**
    1. Multiply the coefficient by the number of hours in a month.
    1. Factor in the [PUE](/glossary#power-usage-effectiveness-pue). 
    1. Factor in the number of servers.

| **Description** | **Value** | **Notes** |
| --- | --- | --- |
| Coefficient | 1.182230477| derived as above |
| Hours  | 720 |  between 17/04/2024 23:36 and 17/05/2024 23:36| 
| Wh per CPU per month | 851.2059433 | Coefficient * hours in the month |
| Hetzner PUE | 1.16 | https://www.hetzner.com/unternehmen/nachhaltigkeit |
| Apply PUE | 987.3988942 | 851.2059433 * 1.16 |
| kWh per CPU per month | 0.9873988942 | Convert from W to kWh, divide by 1000 |
| Number of servers | 4 | Including the 4 servers running at the time |
| Monthly energy in kWh for all servers | 3.949595577 | kWh per CPU per month * number of servers |

3. **Factor in carbon intensity for electricity**
    1. Convert into kWh and calculate the energy for the year. We assumed April (the current month) was representative of the whole year to keep things simple, but more accurate numbers could be produced by using specific data for the whole year.
    1. Finally we multiply the values by the carbon intensity.

| **Description** | **Value** | **Notes** |
| --- | --- | --- |
| Monthly energy in kWh for all servers | 3.949595577 | kWh per CPU per month * number of servers |
| Carbon intensity | 0.041 | Hydro electric carbon intensity |
| Monthly Carbon Emissions (kgCO2) | 0.1619334186 | Monthly energy in kWh for all servers * Carbon intensity |
| Yearly Carbon Emissions (kgCO2) | 1.943201024 | Monthly carbon emissions * 12  |

The resulting estimate for usage part of the Hetzner VMs is 1.94 kgCO_2e/year.

<span style="color: red">Need to round this off by showing which part of the high-level methodology we're swapping out for the revised numbers here. Assuming it was the operational part of both VMs together... It was 10.47 kgCO2e/year but now its 1.94 I think?</span>

Combining this usage estimation, with the high-level estimate for VM embodied emissions, we get:

$$ 19.61\ kgCO_2e/year + 1.94\ kgCO_2e/year = 21.55 kgCO_2e/year $$

<span style="color: red">What our insights from this? Are we surprised by the difference between the two estimates?</span>


**Resulting detailed estimate**

| **Service type** | **Annual estimate** | **%** |
| --- | --- | --- |
| Hetzner VMs | 21.55 kgCO_2e | 97% |
| Hetzner data storage - as high-level | 0.38 kgCO_2e | 2% |
| Scaleway data storage - as high-level | 0.27 kgCO_2e | 1% |
| **TOTAL** | **22.21 kgCO_2e** | **100%** |

**How could we improve upon this?**

<span style="color: red">How would we take this methodology forward if we had the time and resources?</span>

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

[To the top](#top)

---

## Managed Services
{% include categoryItem.html item="CatCManaged" %}

### Estimated emissions

**Estimate used: High level = 0 kgCO<sub>2</sub>e/year - 0% of overall digital estate**

Estimate confidence: Medium

### Agreed scope

Cloudflare is a [Content Delivery Network](https://en.wikipedia.org/wiki/Content_delivery_network) (CDN) that GWF use to provide better performance for their websites and manage DNS settings. We put Cloudflare into this Managed Services category, but it could just as easily belong to the Cloud Services category instead. We ultimately took the decision as this category would have been empty otherwise, and we liked being about to separate Cloudflare clearly.

### High level estimate methodology

Cloudflare report they operate a (market-based) net-zero carbon service via [Renewable Energy and Offset Purchases](https://app.greenweb.org/directory/#779). This meant we can report the carbon emissions for this as zero in our own digital estimates.

**How could we improve upon this?**

We briefly explored what a high level estimate methodology for Cloudflare would look like if they didn't have their decarbonisation strategy. We found two key pieces of information:

1. Cloudflare's total emissions was 21,000MTCO<sub>2</sub>e for 2022 - [Cloudflare's Emissions Inventory for 2022](https://cf-assets.www.cloudflare.com/slt3lc6tev37/65gCD3up047PMsHB9aXEYN/d3d719c0f9f493f82e4fec9dab250e6d/Cloudflare_2022_Emissions_Inventory.pdf)
1. Cloudflare (as of August 2023) has 7.59million active websites - [Cloudflare Stats for 2023](https://backlinko.com/cloudflare-users]

A rudimentary method is to simply divide the carbon emissions by the number of active websites to get an average carbon emission per website per year.

$$ (21,0000\ MTCO_2e/year \times 1000) ÷ 7,590,000 = 2.77\ kgCO2e/year/website $$

In the absense of any data whatsoever, 2.77kgCO<sub>2</sub>e/year per website could be used an average or proxy metric to perform a [high level estimate](assumptions#high-level-estimates) of CDNs.

[To the top](#top)

---

[Next - Estimating the Downstream Emissions](downstream)

---