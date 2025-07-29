---
layout: sideNavigation
title: Green Web Foundation
permalink: /case-studies/green-web-foundation/upstream
---

{: #top}

<div class="pb-4">
{% include categoryLabel.html label="CatU" %}
</div>

# Estimating upstream emissions (Category U)
Read the TCS overview of <a class="text-inherit hover:text-inherit hover:opacity-80" href="/categories/upstream">upstream emissions</a> for a primer on this category.

The approach used and why for each sub-category in upstream emissions:

- [Software](#software)
- [Employee Hardware](#employee-hardware)
- [Networking and Infrastructure Hardware](#networking-and-infrastructure-hardware)
- [Servers and Storage Hardware](#servers-and-storage-hardware)


## Software

{% include categoryItem.html item="CatUSoftware" %}

### Estimated emissions

**No data**

Estimate confidence: *n/a - not attempted*

### Agreed scope

We started by identifying the software used most prominently by the GWF team, eg the digital supply chain. We used GWF's internal finance tracker to generate a starting list. We realised early on that trying to measure everything was inpractical so looked for the top 5. We agreed that software installed on employee laptops, as well as software installed on GWF controlled servers was in scope. 

The first version of this list we settled on is:
- Django (server installations)
- Wordpress (server installations)
- Zoom
- Chrome
- Firefox 

### High level estimate methodology

The idea for this was to see what data exists to help us understand the embodied carbon in each piece of software. The key thing is that we know a whole bunch of energy would have been consumed making the software versions we see and use today. We were wondering if we can reflect this in some way in our own digital carbon estimates. 

After drawing on our own knowledge of these software communities and supported by an internet search for useful information, we concluded that data to support these kinds of estimates is not yet readily available. Due to time constraints, we decided to prioritise our efforts elsewhere.

**How could we improve upon this?**

In an ideal world we would reach out to the relevant software support teams to raise this issue with them. In the absence of data, one of the most useful steps a team can take is to tell a software supplier they are looking for it. 

We also could have looked for any kind of industry benchmarks and extracted some broad assumptions from those. Whilst those would have provided low confidence estimates, that would have been better than nothing.

[To the top](#top)

---

## Employee Hardware

{% include categoryItem.html item="CatUEmployeeHardware" %}

### Estimated emissions

**Estimate used: Detailed = 186 kgCO<sub>2</sub>e/year - 38% of overall digital estate**

| **Estimate type** | **2023 estimate** | **Confidence in methodology** |
| --- | --- | --- |
| High level | 656 kgCO<sub>2</sub>e/year | Medium |
| Detailed | 186 kgCO<sub>2</sub>e/year | High |


### Agreed scope

We limited the scope to the digital devices that require a power source used by staff on a day to day basis. Specifically this covers:

- Laptops/desktops
- Monitors
- Printers
- Company purchased mobile phones

We agreed that other hardware such as keyboards, mice, landline phones and microphones are out of scope at this point. 

GWF has a Bring Your Own Device (BYOD) policy enabling personal device use at work. This meant that BYOD devices needed to be in scope as well as those purchased by GWF. 

### High level estimate methodology

We started with an outline list regarding the quantity and location of each type of device. At this point we did not have specifics such as make, model, year of purchase or whether the device was brand new or remanufactured etc.

Our outline list:

- 6 laptops (3× Germany, 1× UK, 1× Netherlands, 1× Taiwan)
- 8 monitors (3× Germany, 3× UK, 1x Netherlands, 1× Taiwan)
- 1 small desktop printer (Germany)

**BYOD policy**

Firstly we needed to decide a way to attribute the BYOD emissions to GWF. How much of the emissions are attributable to GWF and how much to the individual?

> Bring Your Own Devcies (BYOD) policies was not something we had yet considered how to account for in the TCS. After further discussions with the Scott Logic Sustainability team and GWF, we came to an agreement as to how we would attribute these devices to the organisation.

We couldn't find a standard or convention for accounting for the carbon emissions of BYODs. Therefore, we agreed the best approach was for GWF to decide this for themselves, based on a broad sense of usage and fairness. GWF agreed on attributing 70% of the embodied carbon of BYODs to GWF's carbon footprint. Any equipment purchased by GWF would be 100% attributable to GWF.

**Laptops**

We weren't seeking high degrees of accuracy at this point, just something good enough to support an initial, high level estimate. For this we needed an average embodied carbon value for a laptop. 

The average embodied carbon figure used was **230 kgCO<sub>2</sub>e**. 

We arrived at this by reviewing multiple PDF datasheets for laptops from [Dell](https://www.dell.com/en-uk/dt/corporate/social-impact/advancing-sustainability/climate-action/product-carbon-footprints.htm), [Hewlett-Packard (HP)](https://h20195.www2.hp.com/v2/library.aspx) and [Apple](https://www.apple.com/environment/). We cross-referenced the specified values against multiple research sources to check the number was in the right ballpark.

The datasheets mentioned, known as Product Carbon Footprint [(PCF)](/resources/glossary#product-carbon-footprint-pcf) datasheets, typically provide a breakdown of carbon emissions during that product's full life cycle, including it's usage. But we only want the embodied carbon value for this part of the TCS, just upstream emissions. Usage is accounted for in operational emissions. 

We removed the usage carbon emissions value (around 20%) from the total carbon footprint leaving us a value for manufacture, transport and end of life. This becomes our embodied carbon value of **230 kgCO<sub>2</sub>e**.

To keep things simple for this high-level estimate we assumed the following:
- All employees used non-manufacturer specific laptops at this point - we weren't ready to get a detailed equipment list at this point.
- All laptops were purchased new - we ignored the fact that some machines were actually refurbished, older or second-hand.
- A laptop's expected life is 5 years at GWF (industry standard is often cited as 4 years). 
- [Amortisation](/resources/glossary#amortisation) of embodied emissions was appropriate for a [high level estimate](/case-studies/green-web-foundation/assumptions#high-level-estimates) - more on this below.

For the six laptops identified, only 1 laptop is owned by GWF and the other 5 are BYODs. We attribute 100% of the embodied carbon to 1 laptop, and 70% to the other 5.

$$ (230\ kgCO_2e \times 100\%) + 5 \times (230\ kgCO_2e \times 70\%) = 1035\ kgCO_2e $$

<p style="text-align:center; font-style: italic;">Parentheses added for clarity.</p>

The above assumes all the embodied carbon is accountable to this year eg purchased this year. This is unlikely to be the case, as laptops are assumed to be replaced every 5 years. Therefore, we use the amortisation technique and divide this figure by 5 to give an average figure per year.

$$ 1035\ kgCO_2e ÷ 5 = 207\ kgCO_2e/year  $$


**Monitors**

The approach for getting an average embodied carbon value for monitors was very similar to that of laptops. We derived data from PCFs by [Dell](https://www.dell.com/en-uk/dt/corporate/social-impact/advancing-sustainability/climate-action/product-carbon-footprints.htm) and [Hewlett-Packard (HP)](https://h20195.www2.hp.com/v2/library.aspx) 24-inch monitors.

The average embodied carbon figure we used was **355 kgCO<sub>2</sub>e**.

We applied the same assumptions we made for laptop to the monitors. Of the 8 monitors used, 1 is wholly owned by GWF, the remaining 7 are BYODs. 

$$ 1 \times (355\ kgCO_2e \times 1) + 7 \times (355\ kgCO_2e \times 0.7) = 2094\ kgCO_2e $$

<p style="text-align:center; font-style: italic;">Parentheses added for clarity.</p>

The above assumes all the embodied carbon is accountable to this year eg purchased this year. This is unlikely to be the case, and we assume monitors are replaced every 5 years. Therefore, we use the amortisation technique and divide this figure by 5 to give an average figure per year.

$$ 2094\ kgCO_2e ÷ 5 = 419\ kgCO_2e/year  $$


**Printers**

We identified a single printer located in the Germany office. This is a home/ small office all-in-one inkjet printer, copier, and scanner. Unfortunately, however, we could find little (substantiated) data or recent research on printers in the time available. We did find two sources:

1: [Life cycle assessment of an inkjet printer. Polish Journal of Environmental Studies. vol 21. 95–105.](https://www.researchgate.net/publication/276385268_Life_cycle_assessment_of_an_inkjet_printer) - Grzesik, Katarzyna & Terefeńko, Tomasz. (2012)

2: [CDP 2015 Climate Change 2015 Information Request](https://www.kleenstrike.co.uk/carbon/carbon2015.pdf) - KLEEN STRIKE (UK) ltd

Since it's only a single small printer with light use, it didn’t seem necessary to spend much time researching further to produce a high level estimate. However, the basic research included gathering data from manufacturers of several home and small office inkjet and laser printers, such as Canon and HP, and a few articles suggesting the carbon footprints of printers. 

Printer manufacturers do not appear to offer carbon estimates for these devices. Instead they only offer energy use (standby and whilst printing) and [Typical Energy Consumption](/resources/glossary#typical-energy-consumption-tec).

Assumptions were made based on other IT hardware, such as laptops, monitors, servers and networking equipment, to estimate the embodied carbon of such printers.

The average embodied carbon figure we decided to use was **150 kgCO<sub>2</sub>e**.

As a GWF-owned device this is 100% attributable, and was amortised over 5 years (assumed expected life).

$$ 150\ kgCO_2e ÷ 5 = 30\ kgCO_2e/year $$

> Some assumptions and guesses needed to be made regarding the embodied carbon of printers as the manufacturers do not publish this data. This certainly reduces the confidence we can have in this carbon emissions estimate, but we *felt* like we made a reasonable assumption.

**Resulting high-level estimate**

| **Device type** | **Annual estimate** | **%** |
| --- | --- | --- |
| Laptops | 207 kgCO<sub>2</sub>e | 32% |
| Monitors | 419 kgCO<sub>2</sub>e | 64% |
| Printers | 30 kgCO<sub>2</sub>e | 5% |
| **TOTAL** | **656 kgCO<sub>2</sub>e** | **100%** |


**How could we improve upon this?**

After looking at these high level estimates in comparison to the other categories, we decided to go further and produce details estimates based on specifics. This would allow us to take the actual purchase year into account, and account between for older, re-used and refurbished equipment which is a conscious purchasing decision by Green Web Foundation staff. 


### Detailed estimate methodology

**Accounting for refreshed products**

We needed to understand how to account for refreshed devices eg reused, refurbished or remanufactured. When new equipment is purchased the entire embodied carbon is accounted for by that organisation in the year of purchase. But we recognised from the outset that refreshed devices would need a different accounting strategy.

We reached out to talk with [Circularity First](https://circularity-first.com/), who have extensive research and experience in refreshed and remanufactured products. 

They shared with us that purchasing a remanufactured product can save ~60% of the carbon emissions compared to buying the product new. A remanufactured device is deconstructed, fully checked and rebuilt using new or re-used replacement parts back to the original manufacturer's specification and often comes with an original manufacturer's warranty.

The process is less intensive for reburbished devices. Devices are simply cleaned, diagnosed and tested for defects and only damaged components are replaced where neccessary for functional operation. This process makes it harder to estimate the embodied carbon. It can vary between 85-95% saving of carbon emissions. These emissions would include transport to and from the place of refurbishment, packaging and the testing and diagnosis process, plus (if) any replacement parts. 

We agreed to use a conservative estimate of 85% carbon emissions saving. Therefore we apply 15% of the original device's embodied carbon to GWF for refurbished devices in the year of purchase. 

For reuse - simply purchased second-hand with no testing or replacement parts - there is no further embodied carbon to account for.


**Laptops and Monitors**

For a more accurate carbon emissions estimate, we gathered specific details of the hardware such as manufacturer and model of the equipment. Where possible we found product carbon footprint [(PCF)](/resources/glossary#product-carbon-footprint-pcf) data sheets. Some manufacturers provide excellent resources for finding this data on their products. Some manufacturers are very poor. Where this was the case, we would find an approximately equivalent product to use instead, indicated in the tables below.

On the basis that most GWF equipment is BYOD, it was useful to gather more detail about how many days per week each device is used for GWF vs personal use. This helped us to work out what embodied carbon is attributed to GWF.

The embodied carbon is calculated with the following formula:
$$ Attributed\_Carbon = Embodied\_Carbon \times Condition\_Factor \times BYOD\_Attribution\_Factor $$

Where: 
- *Embodied_Carbon* is gathered from the product data sheets, usually as a percentage of the total product lifecycle.
- *Condition_Factor* is a multiplier based on the condition or refresh type, where; New: 100%, Remanufactured: 40%, Refurbished: 15% and Reused/Second-hand: 0% of the device's original embodied carbon.
- *BYOD_Attribution_Factor* is an optional multiplier allowing us to factor in other use outside of GWF activities. Example, a BYOD used only 4 days per week for GWF purposes, and used 3 days a week for other things, has an attribution factor of 57% (4 days ÷ 7 days). A non-BYOD device has a factor of 100% - all embodied carbon should be attributed. We've decided an appropriate factor based on what we know about how each device is used in practice.

Below, the table compiles all of this data. We show the embodied carbon attributable to GWF if *all this equipment was purchased in the same year*, which in reality it wasn't. We go into that a bit more below.

| Laptop Manufacturer and Model | PCF Data Sheet (or approx. equivalent) | Product Carbon Footprint kgCO<sub>2</sub>e | Embodied Carbon kgCO<sub>2</sub>e | Condition Factor |  BYOD? | Attribution Factor | GWF Attributable kgCO<sub>2</sub>e |
| --- | --- | --- | --- | --- | --- | --- | --- |
|**Apple 2021 MacBook Pro 16" M1 Pro**** | [Apple 16inch MacBook Pro](https://www.apple.com/environment/pdf/products/notebooks/16-inch_MacBook_Pro_PER_Oct2021.pdf) | 349 | 255 | Refurbished (15%) | Yes | 57% | **22** |
| **Apple 2020 MacBook Pro 13" M1**** | [Apple 13inch MacBook Pro](https://www.apple.com/environment/pdf/products/notebooks/13-inch_MacBookPro_PER_Nov2020.pdf) | 185 | 150 | Refurbished (15%) | No | 100% | **22** |
| Apple 2020 MacBook Air 13" M1 | [Apple 13inch MacBook Air](https://www.apple.com/environment/pdf/products/notebooks/13-inch_MacBookAir_PER_Nov2020.pdf)| 161 | 137  | Reused (0%) | Yes | 71% | 0.00 |
| **Apple 2022 MacBook Air 13.6" M2**** | [Apple MacBook Air M2](https://www.apple.com/environment/pdf/products/notebooks/M2_MacBook_Air_PER_June2022.pdf)| 147 | 115  | New (100%) | Yes | 57% | **66** |
| Lenovo Ideapad S145 | [Lenovo IdeaPad S145](https://static.lenovo.com/ww/docs/regulatory/PCF_ideapad_S145-15.pdf)| 357 | 264  | New (100%) | Yes | 36% | 94 |
| **Apple 2023 MacBook Air 13.6" M2**** | [Apple MacBook Air M2](https://www.apple.com/environment/pdf/products/notebooks/M2_MacBook_Air_PER_June2022.pdf)| 171 | 133  | New (100%) | Yes | 57% | **76** |
| **Laptop Total** | | | | | | | **280** |


| Monitor Manufacturer and Model | PCF Data Sheet (or approx. equivalent) | Product Carbon Footprint kgCO<sub>2</sub>e | Embodied Carbon kgCO<sub>2</sub>e | Condition Factor |  BYOD? | Attribution Factor | GWF Attributable kgCO<sub>2</sub>e |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Dell 27" Monitor (P2717H) | [Dell P2725H*](https://www.dell.com/en-uk/dt/corporate/social-impact/advancing-sustainability/climate-action/product-carbon-footprints.htm#scroll=off&tab0=2&pdf-overlay=//www.delltechnologies.com/asset/en-uk/products/electronics-and-accessories/technical-support/p2725h-monitor-pcf-report.pdf)| 194 | 116  | Refurbished (15%) | Yes | 90% | 16 |
| Dell UltraSharp 27" Monitor (U2715H) | [Dell U2724D*](https://www.dell.com/en-uk/dt/corporate/social-impact/advancing-sustainability/climate-action/product-carbon-footprints.htm#tab0=2&pdf-overlay=//www.delltechnologies.com/asset/en-uk/products/electronics-and-accessories/technical-support/dell-u2724d-monitor-pcf-datasheet.pdf)| 605 | 430  | Refurbished (15%) | Yes | 90% | 58 |
| Philips 22" FHD Monitor (223V5LSB2) | [Dell SE2222H*](https://www.dell.com/en-uk/dt/corporate/social-impact/advancing-sustainability/climate-action/product-carbon-footprints.htm#scroll=off&tab0=2&pdf-overlay=//www.delltechnologies.com/asset/en-uk/products/electronics-and-accessories/technical-support/dell-se2222h-monitor-pcf-datasheet.pdf)| 492 | 339  | New (100%) | Yes | 90% | 306 |
| Dell UltraSharp 27" Monitor (U2722DE) | [Dell U2722DE](https://www.dell.com/en-uk/dt/corporate/social-impact/advancing-sustainability/climate-action/product-carbon-footprints.htm#scroll=off&tab0=2&pdf-overlay=//www.delltechnologies.com/asset/en-uk/products/electronics-and-accessories/technical-support/u2722de-monitor-pcf-datasheet.pdf)| 643 | 431  | New (100%) | No | 100% | 246 |
| Dell UltraSharp 27" Monitor (U2722DE) | [Dell U2722DE](https://www.dell.com/en-uk/dt/corporate/social-impact/advancing-sustainability/climate-action/product-carbon-footprints.htm#scroll=off&tab0=2&pdf-overlay=//www.delltechnologies.com/asset/en-uk/products/electronics-and-accessories/technical-support/u2722de-monitor-pcf-datasheet.pdf)| 643 | 431  | New (100%) | No | 100% | 308 |
| HP 24" Monitor (24f)  | [HP M24f FHD*](https://h20195.www2.hp.com/v2/getpdf.aspx/c08754174.pdf)| 215 | 110  | New (100%) | Yes | 90% | 99 |
| Samsung Oddysee | [Samsung Ultra WQHD*](https://image-us.samsung.com/SamsungUS/epeat/ProductCarbonFootprint(PCF)ResultsforMobileProductsandDisplaysReport.pdf)| 592 | 373  | New (100%) | Yes | 4% | 13 |
| Samsung 32" 4k Curve Monitor | [Dell S3221QS*](https://www.dell.com/en-uk/dt/corporate/social-impact/advancing-sustainability/climate-action/product-carbon-footprints.htm#scroll=off&tab0=2&pdf-overlay=//www.delltechnologies.com/asset/en-uk/products/electronics-and-accessories/technical-support/dell-s3221qs-monitor-pcf-datasheet.pdf)| 763 | 435  | New (100%) | Yes | 57% | 249 |
| **Monitor Total** | | | | | | | **1294** |
| **Employee Hardware Total** | | | | | | | **1568** |

\* Approximately equivalent product that could be found with a PCF data sheet.

\** Acquired in the carbon accouting year (Jan 2023 - December 2023).

**Resulting detailed estimate**

**For accounting purposes only the equipment acquired for the carbon accounting period is reported.** In this case we were looking at the 2023 calendar year. The result is that only 4 laptops, as indicated in bold in the table, were relevant totalling **186 kgCO<sub>2</sub>e**. No monitors or printers were purchased this year.

| **Device type** | **2023 estimate** | **%** |
| --- | --- | --- |
| Laptops | 186 kgCO_2e | 100% |
| Monitors | 0 kgCO_2e | 0% |
| Printers | 0 kgCO_2e | 0% |
| **TOTAL** | **186 kgCO_2e** | **100%** |
 

**How could we improve upon this?**

We realised the *BYOD_Attributional_factor* is a flexible and optional factor. 

GWF made the decision to attribute a portion of the embodied carbon from BYOD laptops and monitors to itself, as we felt that GWF should take some responsibility for it. There is some complication around taking into account how much a BYOD is used in the office vs at home, and modelling that well. We realised there is a big difference between laptops which are portable, and monitors which are not. Therefore dividing everything by seven days a week didn't always make sense. Laptops might be taken home to use on the weekend. But a BYOD monitor, stationed in a home office isn't likely to be used on the weekend. We decided a sensible factor on a case by case basis, and could work that up into a more robust methodology later down the line. 

Given how large a slice of the overall emissions this section represents, this feels worthy of more work/research. Is this approach more helpful than the arbitrary 70% used in the high-level estimate? Or, should an organisation simply take full responsibility for the BYODs, as without them employees wouldn't be able to do their job at all - an even simpler view. Another way to look at it, is that an organisation could simply write-off BYOD embodied carbon entirely, simply because they didn't acquire the equipment themselves at all. Not a commendable, or responsible approach, but arguably "fair" in accounting terms. 

So, is this a perfect way of calculating the embodied carbon, taking into account condition, BYOD, number of working days? We've made a reasonably detailed attempt with fair assumptions (conditions), tried to account for actual use of BYODs and non-BYODs, and tried to *fairly attribute something* to GWF.

Lastly, we noted there was a big difference between our high-level and detailed estimates for employee hardware: 656 kg vs 186 kg. Collecting the specific data was worth the time and effort for a small organisation like GWF. However, we wonder whether there would be such a large gap between methodologies for larger organisations with more equipment each year. Again, we'd like to see more research here, and to compare our results to those of other organisations using similar methodologies.

[To the top](#top)

---

## Networking and Infrastructure Hardware

{% include categoryItem.html item="CatUNetworkHardware" %}

### Estimated emissions

**Estimate used: High level = 0 kgCO<sub>2</sub>e/year - 0% of overall digital estate**

Estimate confidence: Medium

### Agreed scope

We started by identifying what locations GWF employees regularly use. 

There is dedicated office space in Berlin, and another co-working space in the UK. We decided not to include the home routers that staff use when working from home. Our reasoning being they would have these devices regardless of their work with GWF. 

We found out what networking equipment was in each location in scope (just office spaces), and used that as our starting point. This meant we were looking to calculate the embodied emissions of two relatively modest routers which had a max output of 18W and a normal load of around 10W.

### High level estimate methodology

To calculate the embodied carbon of networking equipment, we found a [research paper from 2021](https://www.sciencedirect.com/science/article/pii/S0921344921005607). This gives a value of **171.7kgCO<sub>2</sub>e**, which we felt was robust enough for producing an initial estimate. The use of this research report to base our numbers on is why we've rated the confidence of this estimate as medium. However, we were surprised by this value as it was higher than expected. We used this figure for both routers.

The router in the Berlin office attributes it's full embodied carbon, 100%, to GWF as this is dedicated to GWF use. For the co-working space in the UK, we attributed 33.3% of embodied carbon from the office router to GWF, as two other people work from that space not connected to GWF. 

$$ (171.7\ kgCO_2e \times 0.333) + 171.7\ kgCO_2e = 229\ kgCO_2e $$

Amortising this by 5 years, the average expected life of such hardware, we would get:

$$ 229\ kgCO_2e ÷ 5 = 45.8\ kgCO_2e/year $$

As we knew these devices were not acquired in the 2023 carbon accounting period, we reduced their emissions to zero. This was done on the assumption their full embodied emissions would be accounted for in the year of purchase. If the absence of detailed knowledge about what devices were purchased when, the 45.8 figure could be used instead over a 5 year period.


**How could we improve upon this?**

If we were looking at more networking hardware in a larger organisation, we could have found more research sources or attempted our own calculations based on weight and materials.

## Servers and Storage Hardware

{% include categoryItem.html item="CatUServerHardware" %}

### Estimated emissions

**Estimate used: High level = 0 kgCO<sub>2</sub>e/year - 0% of overall digital estate**

Estimate confidence: n/a

### Agreed scope

GWF does not own any of it's own servers or storage hardware. This means there are no carbon emissions to report in this category and we're highly confident about this.

[To the top](#top)


---

[Next - Estimating the Operational Emissions](/case-studies/green-web-foundation/operational)

---