---
layout: category
title: Downstream Emissions
permalink: categories/downstream
---

# Downstream Emissions

Downstream emissions (Category D) are the emissions produced by using an organisation’s products and/or services. This could be B2B or B2C users of the products and services. The emissions are attributed to the end-user’s device energy use and the transmission of data to use that product or service.

{% include linkedHeading.html heading="End-User Devices" level=2 %}

This considers the emissions generated from the electricity consumption of devices such as desktops, laptops, tablets, and mobile phones that utilise the products or services provided by the organisation. It is important to account for the differences in energy efficiency across various devices accessing these products and services. Typically, a smartphone uses less energy than a laptop, and a laptop uses less energy than a desktop. Understanding the energy use of devices can then be used to estimate carbon emissions by considering the source of the energy used to power or charge that device. Finally, end-user devices should have their embodied carbon estimated. This should take into account the product's life span to consider the entire [Product Life Cycle](/glossary#product-life-cycle).

{% include linkedHeading.html heading="End-User Device Energy Consumption" level=3 %}
Power range and average power of devices, data compiled from Dimpact [^dimpact], Scope3 [^scope3] and Fershad Irani [^fershad] and our own device energy use research:

| Device             | Power Range (W)    | Average Power (W)  |
| ------------------ | ------------------ | ------------------ |
| Desktop            | 72 - 100           | 72.3               |
| Laptop             | 15 - 30            | 17.1               |
| Tablet             | 3 - 5.5            | 3                  |
| Smartphone         | 0.77 - 2           | 1                  |
| Monitor            | 17 - 30            | 30                 |
| Television         | 40 - 120           | 74                 |

Based on Scope3 and Urban et al's [^urban] installed base data:

| Device             | Installed Base     |
| ------------------ | ------------------ |
| Desktop            | 37%                |
| Laptop             | 63%                |
| Monitor            | 52%                |

When the end user’s computer cannot be determined between a laptop (with or without a monitor) and a desktop, we can use the installed base data to estimate that a personal computer consumes an average of 53.2W (rounded up):

$$
(0.37 \times 72.3) + (0.63 \times 17.1) + (0.52 \times 30) = 53.12W
$$

With these values, it is possible to estimate the power consumption by users when using a product or service on a device. The more information available about what devices are used and how much time users spend on these products, the more accurate the estimates can be.

To calculate energy use (Wh), the power (W) of the device is divided by the time factor (hours = 1, minutes = 60, seconds = 3600), then multiplied by the duration. For example, assume a blog page with an estimated reading time of 5 minutes. The energy consumption of a user on a laptop (without a monitor) can be estimated using the following calculation:

$$ Energy\ (Wh) = 17.1W / 60 \times 5 = 1.4Wh $$

Examples of device energy consumption per minute:

| Device             | Power (W)          | Time               | Energy (Wh)        |
| ------------------ | ------------------ | ------------------ | ------------------ |
| Personal Computer  | 53.2               | 1 minute           | 0.89               |
| Desktop + Monitor  | 102.3              | 1 minute           | 1.71               |
| Laptop + Monitor   | 47.1               | 1 minute           | 0.79               |
| Laptop             | 17.1               | 1 minute           | 0.29               |
| Tablet             | 3                  | 1 minute           | 0.05               |
| Smartphone         | 1                  | 1 minute           | 0.02               |


{% include linkedHeading.html heading="End-User Device Carbon Emissions" level=3 %}
Using the user's location, the [carbon intensity](/glossary#carbon-intensity) of the energy grid can be used to calculate the carbon emissions of the device.

Continuing the example above, a user, in the UK reading a blog page on a laptop for 5 minutes; we can calculate the estimated carbon emissions based on the energy consumed (1.4Wh = 0.0014kWh) and the UK energy grid (238gCO2e/kWh):

$$ Carbon\ Emissions\ (gCO2e) = 0.0014 \times 238 = 0.33gCO2e $$

An understanding of which devices, how long and how many end-users there are of these products and services is important to estimating these emissions. Product and website metrics and analytic tools are especially useful for gathering this information.


{% include linkedHeading.html heading="End-User Device Embodied Carbon" level=3 %}

It's important to consider the embodied carbon of the device that goes beyond just the operational emissions. This includes the carbon emissions generated from the mining of raw materials, production of the device, transport and end-of-life processing. This data can usually be obtained from the manufacturers, for example:

- [Apple Environmental Reports](https://www.apple.com/environment/)
- [Dell Product Carbon Footprints](https://www.dell.com/en-uk/dt/corporate/social-impact/advancing-sustainability/climate-action/product-carbon-footprints.htm)
- [HP Product Carbon Footprints](https://h20195.www2.hp.com/v2/library.aspx?doctype=95&footer=95&filter_doctype=no&showregionfacet=yes&filter_country=no&cc=us&lc=en&filter_oid=no&filter_prodtype=rw&prodtype=ij&showproductcompatibility=yes&showregion=yes&showreglangcol=yes&showdescription=yes%23doctype-95&sortorder-popular&teasers-off&isRetired-false&isRHParentNode-false&titleCheck-false#doctype-95&sortorder-popular&teasers-off&isRetired-false&isRHParentNode-false&titleCheck-false)
- [Samsung Life Cycle Assessment](https://www.samsung.com/global/sustainability/focus/products/sustainability-in-our-products/)

Typically, a laptop has on average, an expected life span of four years. Approximately 80% of its product life cycle emissions are attributed to production emissions and 20% to operational emissions. Transport and end-of-life processing make up negligible percentages. It is important to factor in the average life cycles of devices, given that the majority of its carbon emissions are attributed to production. Extending the life of a device, i.e. using it beyond its expected life cycle bears a significant impact on the hardware efficiency. Read more about [amortisation here](/glossary#amortisation).

End-user device life spans are driven by several factors, but it is often driven by social behaviour (a market-driven desire for newer, improved technology). Other factors include:
- built-in obsolescence by manufacturers - removed support and security 
- applications demanding higher performance, the latest operating systems and hardware
- un-repairable devices and hardware components (cannot physically be repaired/replaced or is cost prohibitive to do so)

Whilst the end-user device's embodied carbon is beyond the direct control of an organisation's products and services, there are several things to consider, that can help extend the life of these devices:
- ensure backward compatibility with hardware, operating systems and browsers, for as long as reasonably possible.
- optimise applications; demand less from hardware and resources, minimise data transfer.

Reducing the need for users to replace their devices can go a long way to reducing the carbon emissions associated with production and of course, waste.


{% include linkedHeading.html heading="Network Data Transfer" level=2 %}

These emissions are associated with the infrastructure enabling data transmission, enabling end-users to access the products and services. Network emissions can be estimated based on the size of the data transferred, the distance transmitted, and the carbon intensity of the regions through which the data is transferred.

Tracking the multiple components related to end-users' usage and access to digital solutions across various hardware and networks represents the complex downstream component of technology carbon accounting.

Downstream emissions are related to GHG Protocol Scope 3.

## References


[^dimpact]: [Dimpact; Methodology Statement](https://dimpact.org/publications)
[^scope3]: [Scope3; Consumer Devices](https://methodology.scope3.com/consumer_devices)
[^fershad]: [Fershad Irani; Thinking about a way to estimate website energy use](https://methodology.scope3.com/consumer_devices)
[^urban]: Urban, Bryan & Roth, Kurt & Singh, Mahendra & Howes, Duncan. (2019). [Residential Consumer Electronics Energy Consumption in the United States in 2017](https://www.researchgate.net/publication/335911295_Residential_Consumer_Electronics_Energy_Consumption_in_the_United_States_in_2017). 10.2760/667696. 
