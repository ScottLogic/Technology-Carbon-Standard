---
layout: category
title: Upstream Emissions
permalink: categories/upstream
---

# Upstream Emissions

Upstream emissions (Category U) refer to the emissions that occur in the production and distribution stages of technology products and software purchased by an organisation. There are two major components of the [product life cycle](product-life-cycle) carbon footprint: [embodied carbon](/glossary#embodied-carbon) and [operational carbon](/glossary#operational-carbon) associated with product use. Upstream emissions, particularly those from the production phase, make the largest contribution to embodied carbon. The World Economic Forum (WEF) reported that 77% of [greenhouse gas (GHG)](/glossary#greenhouse-gases-ghg) emissions from the electronics industry are attributed to the supply chain, including raw materials mining, manufacture, assembly and transportation of the finished product. Supply-chain decarbonisation presents a huge opportunity to reduce climate impacts. Notably, 35% of supply-chain emissions could be abated through renewable power, and efficiency improvements could further reduce emissions by ~20%[^WEF]. Focusing only on [operational](operational) and [downstream](downstream) emissions fails to capture the full carbon footprint. While difficult to quantify, considering these emissions is critical for comprehensive carbon accounting and driving responsible procurement and development of lower-impact technologies.

To quantify upstream emissions, the technology purchase categories are mapped with life cycle emissions data for each product class published by reputable manufacturers and software vendors. This lifecycle data encompasses resource extraction, materials processing, manufacturing, transportation and product delivery phases before the operation stage.

Multiplying the volume of assets by the respective product emission factors can yield an accurate upstream emissions profile. The product emission factors are available in Environmental Product Declarations (EPDs) and sustainability reports.

Upstream emissions are related to GHG Protocol Scope 3.


{% include linkedHeading.html heading="Software" level=2 %}

Emissions associated with developing and delivering off-the-shelf and open-source software installed on the organisation's systems. Includes emissions related to:

- Energy consumed and hardware used during programming, testing and releasing new software versions
- Packaging and digital distribution of software over the internet
- Product support services for troubleshooting and guiding customers


{% include linkedHeading.html heading="Hardware Manufacture, Transport and Installation" level=2 %}

The carbon emitted during the manufacture, transportation, and installation of hardware devices before they are used. This spans employee devices, networking gear, and on-premise data centres. Hardware can be associated with large upstream emissions due to resource-intensive electronics production and complex global supply chains. Minimising these upstream emissions is critical for mitigating climate change.

Upstream emissions can vary significantly between devices. The [embodied carbon](/glossary#embodied-carbon) cost of a device can sometimes be higher than the [operational carbon](/glossary#operational-carbon) cost. Embodied carbon includes upstream emissions from manufacturing and transportation and a comparatively small amount of downstream emissions due to end-of-life.

![embodied-vs-operational-amounts](/assets/images/embodied-vs-operational-amounts.png)

*Source: Dell Product Carbon Footprint (PCF) documents for an example model of Laptop[^laptop], Desktop[^desktop], Monitor[^monitor] and Server[^server].*

For employee hardware like laptops, embodied carbon typically constitutes 80% of total life cycle emissions with only 20% attributable to usage (operational). Conversely for servers, embodied typically accounts for 20% of total life cycle emissions with 80% attributable to usage. These percentages can vary based on the specific device model. For devices such as desktops, the operational carbon can account for a larger proportion of total emissions when compared to other employee devices such as laptops or smartphones.

![embodied-vs-operational-percentages](/assets/images/embodied-vs-operational-percentages.png)

*Source: Dell Product Carbon Footprint (PCF) documents for an example model of Laptop[^laptop], Desktop[^desktop], Monitor[^monitor] and Server[^server].*

A full life cycle assessment is needed to thoroughly account for emissions from raw material extraction through production, transportation and delivery of devices. If specific data is unavailable, high-level estimates can be based on average emissions per device type, employees’ equipment, shipping mileage. 

[Product Carbon Footprint (PCF)](/glossary#product-carbon-footprint-pcf) data from manufacturers provides an estimate of the greenhouse gas emissions attributable to a product over its full [product life cycle](/glossary#product-life-cycle), from manufacture (upstream) through to end-of-life disposal (downstream). This differs from a [Life Cycle Assessment (LCA)](/glossary#life-cycle-assessment-lca) which considers the broader environmental impacts beyond just greenhouse gas emissions (for example, water consumption). Reputable manufacturers use PCF tools that support complete LCAs, compliant with standards such as [ISO 14040](https://www.iso.org/standard/37456.html), [ISO 14044](https://www.iso.org/standard/38498.html) and [ISO 14067](https://www.iso.org/standard/71206.html). PCF data can often be difficult to find or may only be available on request. While standards aim for consistency, methodologies can vary between manufacturers so published figures require careful scrutiny to determine comparability. Additionally, such emissions figures have large margins of error. Studies have found truncation errors of 40% in estimating embodied carbon and 18% in estimating emissions associated with the usage phase of hardware [^truncation-errors].

- [Apple Environmental Reports](https://www.apple.com/environment/)
- [Dell Product Carbon Footprints](https://www.dell.com/en-uk/dt/corporate/social-impact/advancing-sustainability/climate-action/product-carbon-footprints.htm)
- [HP Product Carbon Footprints](https://h20195.www2.hp.com/v2/library.aspx?doctype=95&footer=95&filter_doctype=no&showregionfacet=yes&filter_country=no&cc=us&lc=en&filter_oid=no&filter_prodtype=rw&prodtype=ij&showproductcompatibility=yes&showregion=yes&showreglangcol=yes&showdescription=yes%23doctype-95&sortorder-popular&teasers-off&isRetired-false&isRHParentNode-false&titleCheck-false#doctype-95&sortorder-popular&teasers-off&isRetired-false&isRHParentNode-false&titleCheck-false)
- [Samsung Life Cycle Assessment](https://www.samsung.com/global/sustainability/focus/products/sustainability-in-our-products/)

The total embodied carbon of an asset can be [amortised](/glossary#amortisation) over its expected lifespan if information is available about its typical refresh cycle or life span (often 3-5 years) to understand the annual carbon emissions attributed to embodied (largely upstream) emissions.

{% include linkedHeading.html heading="Employee Hardware" level=3 %}
This concerns laptops, desktops, mobiles, printers and peripherals used by employees.

{% include linkedHeading.html heading="Using emissions data provided by manufacturers" level=4 %}

As discussed above, manufacturers often provide estimates for upstream carbon emissions in the form of PCF data. For example, here are some points from the [PCF for a Dell XPS 13 9310 Laptop](https://www.delltechnologies.com/asset/en-us/products/laptops-and-2-in-1s/technical-support/xps-13-9310.pdf).

![dell-pcf](/assets/images/dell-pcf.PNG)

Dell estimates the total carbon footprint of this laptop to be ~322 kg CO2e. The pie chart shows that the manufacturing and transportation phases account for 85.8% of the product's carbon footprint. Therefore, the upstream carbon emissions can be estimated to be ~276 kg CO2e. 

![dell-pcf-assumptions](/assets/images/dell-pcf-assumptions.PNG)

The document outlines the key assumptions used in the calculation of PCF for this laptop. With the 4-year lifetime assumed by the manufacturer, upstream emissions can be [amortised](/glossary#amortisation) over the expected lifespan and allocated as ~69 kg CO2e per year. 

Interestingly, the PCF above has assumed an annual typical energy consumption (TEC) value of 21.43 kWh. As discussed in the [operational emissions](operational#using-emissions-data-provided-by-manufacturers) section, TEC is a means of estimating expected annual energy consumption of a product under standard usage, i.e. for a typical household. For employee devices, the stated TEC value may be an underestimate as hardware is likely to run for longer periods (8 hours a day). Considering business usage, a typical annual energy consumption may be estimated to be 26.4 kWh (see [operational emissions](operational#using-emissions-data-provided-by-manufacturers) for how this figure is derived). This would shift the percentage of emissions due to the use phase to ~17% as opposed to 13.9%, and upstream emissions down to ~83% from 85.5%. While this does not change the upstream emissions figure provided by the manufacturer (~276 kg CO2e), it is useful to understand the constitution of a product's carbon footprint and its significance with regards to each life cycle phase.

The PCF indicates primary manufacturing occurs in China and assumes product usage in Europe. This is relevant for upstream emissions impacts because China's electricity grid has a higher [carbon intensity](/glossary#carbon-intensity) (586 g CO2e per kWh in 2022) than the global average (490 g CO2e per kWh in 2022). Locating production in higher emission regions like China typically increases upstream emissions compared to lower carbon regions. Understanding the assembly location helps identify opportunities to reduce upstream emissions by selecting products manufactured in regions with lower carbon intensity grids. 

{% include linkedHeading.html heading="A high level approach to estimation" level=4 %}

In the absence of PCF data, broader industry ratios could be applied to an existing estimate of operational emissions to approximate embodied (primarily upstream) emissions. 

Consider the high level approach set out in the [operational emissions section](operational#a-high-level-approach-to-estimation) which estimated annual operational emissions for the Dell laptop model above to be ~8.66 kg CO2 per year per device based on typical business usage in Europe. As discussed earlier, typically 20% of a laptop's life cycle emissions can be attributable to usage and 80% to embodied carbon. Using this ratio, it can be approximated that the embodied carbon of a laptop is 4 times larger than the operational carbon, i.e. ~35 kg CO2e per year.  

$$ Embodied\ Carbon = Operational\ Carbon * \frac{Embodied\ Emissions\ Proportion}{Usage\ Emissions\ Proportion} $$

Clearly, there is a discrepancy between this high level estimation (~35 kg CO2e per year) and the estimation derived from the PCF (~69 kg CO2e per year) due to differences in the adopted assumptions. This highlights the importance of a consistent approach when approximating upstream emissions. 

{% include linkedHeading.html heading="Understanding the technology estate" level=4 %}

To estimate the total emissions associated with running an organisation's technology estate, it is important to first understand how many of each device an organisation has in their estate. 

Ideal data sources are configuration management databases (CMDBs) from robust IT asset management processes. Where such data is incomplete, extrapolation from partial datasets can provide estimates. Sources include partially completed asset management records, historic procurement data on devices purchased, employee numbers per office or generic device ratios per employee type. 

The accuracy of this underlying data will impact on the precision of emissions estimates across the estate. However, even roughly extrapolated totals help to highlight emission problem areas.

{% include linkedHeading.html heading="Networking Hardware" level=3 %}
Network routers, switches, Wi-Fi access points installed.


{% include linkedHeading.html heading="Data centre and Server Hardware" level=3 %}
Servers, storage systems and data centre infrastructure installed on-premise.

## References

[^laptop]: [XPS 13 9310 PCF datasheet (delltechnologies.com)](https://www.delltechnologies.com/asset/en-gb/products/laptops-and-2-in-1s/technical-support/xps-13-9310.pdf)
[^desktop]: [OptiPlex 7090 Tower PCF Datasheet (delltechnologies.com)](https://www.delltechnologies.com/asset/en-gb/products/desktops-and-all-in-ones/technical-support/optiplex-7090-tower-pcf-datasheet.pdf)
[^monitor]: [P2422H Monitor PCF datasheet (delltechnologies.com)](https://www.delltechnologies.com/asset/en-gb/products/electronics-and-accessories/technical-support/p2422h-monitor-pcf-datasheet.pdf)
[^server]: [carbon-footprint-poweredge-r640.pdf (dell.com)](https://i.dell.com/sites/csdocuments/CorpComm_Docs/en/carbon-footprint-poweredge-r640.pdf)
[^truncation-errors]: Berners-Lee, Mike. How Bad Are Bananas? : the Carbon Footprint of Everything. Book, 2020
[^WEF]: [Net-Zero Challenge: The supply chain opportunity, World Economic Forum, Jan. Online, 2021](https://www.weforum.org/reports/net-zero-challengethe-supply-chain-opportunity/)
