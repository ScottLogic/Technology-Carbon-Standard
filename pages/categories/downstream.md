---
layout: category
title: Downstream Emissions
permalink: categories/downstream
---

# Downstream Emissions

Downstream emissions (Category D) are the emissions produced by using an organisation’s products and/or services. This could be B2B or B2C users of the products and services. The emissions are attributed to the end-user’s device energy use and the transmission of data to use that product or service.

{% include linkedHeading.html heading="End-User Devices" level=2 %}

This considers the emissions generated from the electricity consumption of devices such as desktops, laptops, tablets, and mobile phones that utilise the products or services provided by the organisation. It is important to account for the differences in energy efficiency across various devices accessing these products and services. Typically, a smartphone uses less energy than a laptop, and a laptop uses less energy than a desktop. Understanding the energy use of devices can then be used to estimate carbon emissions by considering the source of the energy used to power or charge that device. Finally, end-user devices should have their embodied carbon estimated. This should take into account the product's life span to consider the entire Product Life Cycle.

{% include linkedHeading.html heading="End-User Device Energy Consumption" level=3 %}
Power range and average power of devices, data compiled from [Dimpact](#dimpact), [Scope3](#scope3) and [Fershad Irani](#fershad) and our own device energy use research:

| Device             | Power Range (W)    | Average Power (W)  |
| ------------------ | ------------------ | ------------------ |
| Desktop            | 72 - 100           | 72.3               |
| Laptop             | 15 - 30            | 17.1               |
| Tablet             | 3 - 5.5            | 3                  |
| Smartphone         | 0.77 - 2           | 1                  |
| Monitor            | 17 - 30            | 30                 |
| Television         | 40 - 120           | 74                 |

Based on [Scope3](#scope3) and [Urban et al's](#urban-et-al) Installed Base data:

| Device             | Installed Base     |
| ------------------ | ------------------ |
| Desktop            | 37%                |
| Laptop             | 63%                |
| Monitor            | 52%                |

When the end user's computer cannot be determined between a laptop (with or without a monitor) and a desktop. We can use the installed base data to estimate that a personal computer consumes an average of 53.2W (rounded up):

<pre>(0.37 x 72.3) + (0.63 x 17.1) + (0.52 x 30) = 53.12W</pre>

With these values, its possible to estimate the power consumption by users when using a product or service on a device. The more information available about what devices are used, and how much time users spend on these products, the more accurate the estimates can be. 

To calculate energy use (Wh), the power (W) of the device is divided by the time factor (hours = 1, minutes = 60, seconds = 3600), then multiplied by the duration. For example to calculate 5 minutes of energy use of a laptop (without a monitor):

<pre>Energy (Wh) = 17.1W / 60(minutes) x 5(duration) = 1.4Wh</pre>

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
Using the user's location, the carbon intenisty of the energy grid can be used to calcuate the carbon emissions of the device. #TODO Reference to Ember data

| Region             | Carbon Intensity (gCO2e/kWh)   |
| ------------------ | ------------------------------ |
| Global             | 442                            |
| UK                 | 268                            |
| More examples...   |                                |

#TODO: Example calculation of carbon emissions...

{% include linkedHeading.html heading="End-User Device Embodied Carbon" level=3 %}
#TODO:
It is recommended to factor in the average length of use cycles of devices, before their replacement with new ones, when estimating the embodied carbon of end-user devices in downstream emissions.


{% include linkedHeading.html heading="Network Data Transfer" level=2 %}

#TODO:

These emissions are associated with the infrastructure enabling data transmission, enabling end-users to access the products and services. Network emissions can be estimated based on the size of the data transferred, the distance transmitted, and the carbon intensity of the regions through which the data is transferred.

Tracking the multiple components related to end-users' usage and access to digital solutions across various hardware and networks represents the complex downstream component of technology carbon accounting.

Downstream emissions are related to GHG Protocol Scope 3.

## References

<h3 id="dimpact">Dimpact</h3>
[Methodology Statement](https://dimpact.org/publications)

<h3 id="scope3">Scope3</h3>
[Consumer Devices](https://methodology.scope3.com/consumer_devices)

<h3 id="fershad">Fershad Irani</h3>
[Thinking about a way to estimate website energy use](https://fershad.com/writing/thinking-about-a-way-to-estimate-website-energy-use/)

<h3 id="urban-et-al">Urban, et al</h3>
Urban, Bryan & Roth, Kurt & Singh, Mahendra & Howes, Duncan. (2019). [Residential Consumer Electronics Energy Consumption in the United States in 2017](https://www.researchgate.net/publication/335911295_Residential_Consumer_Electronics_Energy_Consumption_in_the_United_States_in_2017). 10.2760/667696. 