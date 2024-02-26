---
layout: category
title: Upstream Emissions
permalink: categories/upstream
---

# Upstream Emissions

Upstream emissions (Category U) refer to the emissions that occur in the production and distribution stages of technology products and software purchased by an organisation. Such emissions represent a significant portion of the total climate impact attributable to technology. Focusing only on operational and downstream emissions fails to capture the full carbon footprint. While difficult to quantify, considering these emissions is critical for comprehensive carbon accounting and driving responsible procurement and development of lower-impact technologies.

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

Upstream emissions can vary significantly between devices. The embodied carbon cost of a device can sometimes be higher than the operational carbon cost (of the electricity powering the device). Embodied carbon refers to upstream emissions from manufacturing and transportation, but also includes a comparatively small amount due to end-of-life (downstream).

![embodied-vs-operational-amounts](/assets/images/embodied-vs-operational-amounts.png)

For employee hardware like laptops, embodied carbon typically constitutes 80% of total lifecycle emissions with only 20% attributable to usage (operational). Conversely for servers, embodied typically accounts for 20% with 80% attributable to usage. 

![embodied-vs-operational-percentages](/assets/images/embodied-vs-operational-percentages.png)

A full life cycle assessment is needed to thoroughly account for emissions from raw material extraction through production, transportation and delivery of devices. If specific data is unavailable, high-level estimates can be based on average emissions per device type, employees’ equipment, shipping mileage. 

Product Carbon Footprint (PCF) data from manufacturers provides an estimate of the greenhouse gas emissions attributable to a product over its full life cycle, from manufacture (upstream) through to end-of-life disposal (downstream). This differs from a life cycle assessment (LCA) which considers the broader environmental impacts beyond just greenhouse gas emissions (for example, water consumption). Reputable manufacturers use PCF tools compliant with standards such as ISO 14040 that support complete LCAs. PCF data can be difficult to find or may only be available on request. While standards aim for consistency, methodologies can vary between manufacturers so published figures require careful scrutiny to determine comparability. Additionally, such emissions figures have large margins of error. Studies have found truncation errors of 40% in estimating embodied carbon and 18% error for usage phase of hardware [^1].

[^1]: Berners-Lee, Mike. How Bad Are Bananas? : the Carbon Footprint of Everything. 2020

- [Apple Environmental Reports](https://www.apple.com/environment/)
- [Dell Product Carbon Footprints](https://www.dell.com/en-uk/dt/corporate/social-impact/advancing-sustainability/climate-action/product-carbon-footprints.htm)
- [HP Product Carbon Footprints](https://h20195.www2.hp.com/v2/library.aspx?doctype=95&footer=95&filter_doctype=no&showregionfacet=yes&filter_country=no&cc=us&lc=en&filter_oid=no&filter_prodtype=rw&prodtype=ij&showproductcompatibility=yes&showregion=yes&showreglangcol=yes&showdescription=yes%23doctype-95&sortorder-popular&teasers-off&isRetired-false&isRHParentNode-false&titleCheck-false#doctype-95&sortorder-popular&teasers-off&isRetired-false&isRHParentNode-false&titleCheck-false)
- [Samsung Life Cycle Assessment](https://www.samsung.com/global/sustainability/focus/products/sustainability-in-our-products/)

The total embodied carbon of an asset can be amortised over its expected lifespan if information is available about its typical refresh cycle or life span (often 3-5 years) to understand the annual carbon emissions attributed to embodied (largely upstream) emissions.

{% include linkedHeading.html heading="Employee Hardware" level=3 %}
Laptops, desktops, mobiles, printers and peripherals used by employees.

As discussed above, manufacturers often provide estimates for upstream carbon emissions in the form of PCF data. For example, here are some points from the [PCF for a Dell XPS 13 9310 Laptop](https://www.delltechnologies.com/asset/en-us/products/laptops-and-2-in-1s/technical-support/xps-13-9310.pdf).

![dell-pcf](/assets/images/dell-pcf.PNG)

Dell estimates the total carbon footprint of this laptop to be ~322 kgCO2e. The pie chart shows that the manufacturing and transportation phases account for 85.8% of the product's carbon footprint. Therefore, the upstream carbon emissions can be estimated to be ~276 kgCO2e. This can be multiplied by the amount of this device in the organisation's estate to estimate the upstream emissions associated with this hardware model. 

![dell-pcf-assumptions](/assets/images/dell-pcf-assumptions.PNG)

The document outlines the key assumptions used in the calculation of PCF for this laptop. With the 4-year lifetime assumed by the manufacturer, upstream emissions can be amortised over the expected lifespan and allocated as ~69 kgCO2e per year. 

Interestingly, the PCF above has assumed an annual typical energy consumption (TEC) value of 21.43 kWh. As discussed in operational emissions, TEC is a means of estimating expected annual energy consumption of a product under standard usage, i.e. for a typical household. For employee devices, the stated TEC value may be an underestimate as hardware is likely to run for longer periods (8 hours a day). Taking this into consideration, the proportions seen in the pie chart may shift (with a greater proportion of emissions attributable to the use phase). For example, the typical wattage of this Dell model can be assumed to be 15W. Assuming business use, typical annual energy consumption can be estimated to be 0.015 kW * 8 hours * 220 days = 26.4 kWh/yr, compared to the TEC of 21.42kWh/yr. This shifts the percentage of emissions due to the use phase to ~17% as opposed to 13.9%, and upstream emissions down to ~83% from 85.5%. While this does not change the upstream emissions figure provided by the manufacturer (~276 kgCO2e), it is useful to understand the consistution of a product's carbon footprint.

Additionally, the PCF shows the primary assembly location as China and the primary usage location is stated as Europe. The table below highlights how carbon intensity factors differ between regions, highlighting that the product is manufactured in a region with higher-than-average carbon intensity. An organisation may use the products outside of Europe (e.g. the USA), which would increase operational emissions due to higher factors and affect the consitution of a product's carbon footprint similarly to above.

| Region                       | Carbon Intensity 2022 (gCO2/kWh)[^2]  |
| -----------------------------| ------------------------------------- |
| China                        | 530                                   |
| Europe                       | 277                                   |
| India                        | 632                                   |
| Japan                        | 484                                   |
| Russia                       | 367                                   |
| USA                          | 368                                   |
| Global                       | 436                                   |

[^2]: [Ember Global Electricity Review 2023](https://ember-climate.org/insights/research/global-electricity-review-2023/)

In the absence of PCF data, broader industry ratios could be applied to an existing estimate of operational emissions to approximate annual embodied (primarily upstream) emissions. For example, using a typical annual electricity consumption of 26.4 kWh/yr and the carbon intensity for Europe, annual operational emissions can be estimated to be 26.4 kWh/yr * 0.277 kgCO2/kWh = ~7.3 kgCO2/yr. Taking an industry average of 20% of a laptop's emissions attributable to usage, embodied carbon (primarily upstream) can be estimated to be 4 times larger, i.e. ~7.3 * (0.8/0.2) = ~29kgCO2e/yr. Clearly, there is a discrepancy this estimation and the estimation derived from the PCF (~69 kgCO2e/yr) due to differences in the adopted assumptions. This highlights the importance of a consistent approach when approximating upstream emissions. 

{% include linkedHeading.html heading="Networking Hardware" level=3 %}
Network routers, switches, Wi-Fi access points installed.


{% include linkedHeading.html heading="Data centre and Server Hardware" level=3 %}
Servers, storage systems and data centre infrastructure installed on-premise.

