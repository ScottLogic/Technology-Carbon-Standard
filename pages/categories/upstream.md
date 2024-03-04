---
layout: category
title: Upstream Emissions
permalink: categories/upstream
---

# Upstream Emissions

Upstream emissions (Category U) refer to the emissions that occur in the production and distribution stages of technology products and software purchased by an organisation. There are two major components of the [product life cycle](product-life-cycle) carbon footprint: [embodied carbon](/glossary#embodied-carbon) and [operational carbon](/glossary#operational-carbon) associated with product use. Upstream emissions, particularly those from the production phase, make the largest contribution to embodied carbon. Embodied carbon also includes emissions from end-of-life but these are considered in the [downstream emissions](downstream) part of the Standard. 

The World Economic Forum (WEF) reported that 77% of [greenhouse gas (GHG)](/glossary#greenhouse-gases-ghg) emissions from the electronics industry are attributed to the supply chain, including raw materials mining, manufacture, assembly and transportation of the finished product. Supply-chain decarbonisation presents a huge opportunity to reduce climate impacts. Notably, 35% of supply-chain emissions could be abated through renewable power, and efficiency improvements could further reduce emissions by ~20%[^WEF]. Focusing only on [operational](operational) and [downstream](downstream) emissions fails to capture the full carbon footprint. While difficult to quantify, considering these emissions is critical for comprehensive carbon accounting and driving responsible procurement and development of lower-impact technologies.

To quantify upstream emissions, the technology purchase categories are mapped with life cycle emissions data for each product class published by reputable manufacturers and software vendors. This lifecycle data encompasses resource extraction, materials processing, manufacturing, transportation and product delivery phases before the operation stage.

Upstream emissions are related to GHG Protocol Scope 3.


{% include linkedHeading.html heading="Software" level=2 %}

Emissions associated with developing and delivering off-the-shelf and open-source software installed on the organisation's systems. Includes emissions related to:

- Energy consumed and hardware used during programming, testing and releasing new software versions
- Packaging and digital distribution of software over the internet
- Product support services for troubleshooting and guiding customers


{% include linkedHeading.html heading="Hardware Manufacture, Transport and Installation" level=2 %}

The carbon emitted during the manufacture, transportation, and installation of hardware devices before they are used. This spans employee devices, networking equipment, and on-premise data centres. Hardware can be associated with large upstream emissions due to resource-intensive electronics production and complex global supply chains. Minimising these upstream emissions is critical for mitigating climate change.

Upstream emissions can vary significantly between devices.

{% include linkedHeading.html heading="Employee Hardware" level=3 %}
This concerns laptops, desktops, mobiles, printers and peripherals used by employees.

{% include linkedHeading.html heading="Using emissions data provided by manufacturers" level=4 %}

As discussed above, manufacturers often provide estimates for upstream carbon emissions in the form of PCF data. For example, here are some points from the [PCF for a Dell XPS 13 9310 Laptop](https://www.delltechnologies.com/asset/en-us/products/laptops-and-2-in-1s/technical-support/xps-13-9310.pdf).

![dell-pcf](/assets/images/dell-pcf.PNG)

Dell estimates the total carbon footprint of this laptop to be ~322 kg CO2e. The pie chart shows that the manufacturing and transportation phases account for 85.8% of the product's carbon footprint. Therefore, the upstream carbon emissions can be estimated to be ~276 kg CO2e. 

![dell-pcf-assumptions](/assets/images/dell-pcf-assumptions.PNG)

The document outlines the key assumptions used in the calculation of PCF for this laptop. With the 4-year lifetime assumed by the manufacturer, upstream emissions can be [amortised](/glossary#amortisation) over the expected lifespan and allocated as ~69 kg CO2e per year. 

Interestingly, the PCF above has assumed an annual typical energy consumption (TEC) value of 21.43 kWh. As discussed in the [operational emissions](operational#using-emissions-data-provided-by-manufacturers) section, TEC is a means of estimating expected annual energy consumption of a product under standard usage, i.e. for a typical household. For employee devices, the stated TEC value may be an underestimate as hardware is likely to run for longer periods (8 hours a day). Considering business usage, a typical annual energy consumption may be estimated to be 26.4 kWh (see [operational emissions](operational#using-emissions-data-provided-by-manufacturers) for how this figure is derived). This would shift the percentage of emissions due to the use phase to ~17% as opposed to 13.9%, and upstream emissions down to ~83% from 85.5%. While this does not change the upstream emissions figure provided by the manufacturer (~276 kg CO2e), it is useful to understand the constitution of a product's carbon footprint and its significance with regards to each life cycle phase.

{% include linkedHeading.html heading="A high level approach to estimation" level=4 %}

In the absence of PCF data, broader industry ratios could be applied to an existing estimate of operational emissions to approximate embodied (primarily upstream) emissions. 

Consider the high level approach set out in the [operational emissions section](operational#a-high-level-approach-to-estimation) which estimated annual operational emissions for the Dell laptop model above to be ~8.66 kg CO2 per year per device based on typical business usage in Europe. As discussed earlier, typically 20% of a laptop's life cycle emissions can be attributable to usage and 80% to embodied carbon. Using this ratio, it can be approximated that the embodied carbon of a laptop is 4 times larger than the operational carbon, i.e. ~35 kg CO2e per year.  

$$ Embodied\ Carbon = Operational\ Carbon * \frac{Embodied\ Emissions\ Proportion}{Usage\ Emissions\ Proportion} $$

Clearly, there is a discrepancy between this high level estimation (~35 kg CO2e per year) and the estimation derived from the PCF (~69 kg CO2e per year) due to differences in the adopted assumptions. This highlights the importance of a consistent approach when approximating upstream emissions. 

{% include linkedHeading.html heading="Networking Hardware" level=3 %}
Network routers, switches, Wi-Fi access points installed.


{% include linkedHeading.html heading="Data centre and Server Hardware" level=3 %}
Servers, storage systems and data centre infrastructure installed on-premise.


Consider the [PCF for a HPE ProLiant DL380 Gen10 server](https://www.hpe.com/psnow/doc/a50004545enw). 

![server-pcf-proportions](/assets/images/server-pcf-proportions.PNG)

The overview above highlights the substantial impact various factors have on the product carbon footprint (PCF). 
The stark difference between the base and performance server configurations underscores the role of hardware specifications in determining the PCF. The performance server, with its more powerful CPUs, increased memory capacity, and higher energy consumption (as evidenced by the Typical Energy Consumption (TEC) values), results in a significantly higher carbon footprint across all usage locations – Europe, USA, and Japan.

However, the PCF calculations go beyond the server's hardware specifications. The transportation emissions are calculated based on the product packaging weight, shipping mode, distance traveled, and the latest emissions intensity data from the GHG Emission Factors Hub. This approach accounts for the varying emissions associated with different transportation modes and routes. Figures also can differ largely between usage regions due to regional variations in the carbon intensity of electricity generation, captured in the methodology by using latest emissions intensity data from ember-climate.org. Given usage is the largest proportion of the total life cycle emissions, this regional variability in carbon intensity is bound to make a large difference to total product carbon footprints. The regional differences in the PCF values highlight the importance of considering local energy mixes and transportation networks when evaluating the environmental impact of server infrastructure. For instance, the higher PCF values for Japan compared to Europe and the USA may be attributed to differences in the carbon intensity of electricity generation and transportation emissions intensities in those regions.

Per the pie charts, the upstream emissions (manufacturing + transportation) range from 15.2% (for a Performance server operating in Japan) to up 42.7% (for a base server operating in europe) of total life cycle emissions.  


![server-pcf-amounts](/assets/images/server-pcf-amounts.PNG)

HPE also reports the mean value of the carbon footprint estimates with a standard deviation. Due to high customization of
HPE servers, the GHG emissions can vary by configuration, country, and utilization.

Consider a Mainstream server operating in Europe. The total product carbon footprint is ~4381 kg CO2e give or take standard deviation. The percentage allocated to upstream emissions (manufacturing + transportation) is 37.6%, so ~1,647 kg CO2e. 

PCF also outlines the input assumption used in calculation of the PCF.

![server-pcf-inputs](/assets/images/server-pcf-inputs.PNG)

A product lifetime of 4 years has been assumed. upstream emissions can be amortised over the expected lifespan and allocated as ~412 kg CO2e per year.

The PCF above has assumed an annual typical energy consumption (TEC) value of 1605 kWh. TEC is a means of estimating expected annual energy consumption of a product under standard usage. For servers this is 365 days 24 hours a day? The manufacturer states that yearly energy is modeled using the HPE Power Advisor tool and assumes the server is operated at an average of 30% utilization 24 hours a day and 365 days a year. Power usage effectiveness (PUE) is sourced from Uptime Institute
Global Data Center Survey Results 2022. 

Independently, it is possible to look at benchamrking tools which evaluates the power and performance characteristics of servers, providing average power draw figures under varying levels of load. Such power figures can be used in high level approximations for annual energy consumption and subsequently annual operational emissions. 

Here is an example of a [SPECpower benchmark summary](https://www.spec.org/power_ssj2008/results/res2018q3/power_ssj2008-20180828-00850.html) for a HPE ProLiant DL380 Gen10 server: DIFFERENT CHARACTERISTICS

at 30% load (not necessarily 30% utilization), avg power is 173W, so 0.173 * 365 * 24 = 1,515 kWh per year,  relationship between load and utilization not entirley linear - see Teads, THIS KWH is pretty comparable to mainstream server

at max load, avg power 461W, so 0.461 * 365 * 24 = 4,038 kWh

considering usa carbon intensity of g co2e/kwh, for USA 410

0.410 * 1515 = 621.15 kg co2e compared to   3931/4 = 982?

use stage emissions:

(Use GHG emissions) = (Grid emissions Intensity) x (server power) x (power duration) x (PUE)???

• Grid emissions intensity (grams of CO2
e per kWh) is collected from a credible source such as your electric provider,
epa.gov/egrid, eea.europa.eu, or an aggregation service such as ember-climate.org just to name a few.
• Server power (kW) can be read directly from the server using the HPE iLO and Redfish API or modeled using the
HPE Power Advisor tool by adjusting the utilization to match the average workload.
• Power duration (hours) is the multiplication of the product lifetime (years), 365 days, 24 hours. The days and hours
can be customized to match the specific usage.
• PUE is optional for this calculation based on the LCA scope. PUE is calculated by dividing the total facility energy by
the IT equipment energy.

## References

[^truncation-errors]: Berners-Lee, Mike. How Bad Are Bananas? : the Carbon Footprint of Everything. Book, 2020
[^WEF]: [Net-Zero Challenge: The supply chain opportunity, World Economic Forum, Jan. Online, 2021](https://www.weforum.org/reports/net-zero-challengethe-supply-chain-opportunity/)
