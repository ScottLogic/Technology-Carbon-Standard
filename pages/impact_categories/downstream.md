---
layout: sideNavigation
title: Downstream Emissions
permalink: impact_categories/downstream
---

# Downstream Emissions

Downstream emissions (Category D) are the emissions produced by using an organisation’s products and/or services. This could be B2B or B2C users of the products and services. The emissions are attributed to the end-user’s device energy use and the transmission of data to use that product or service.

Downstream emissions are related to GHG Protocol Scope 3.

{% include linkedHeading.html heading="End-User Devices" level=2 %}

This considers the emissions generated from the electricity consumption of devices such as desktops, laptops, tablets, and mobile phones that utilise the products or services provided by an organisation. It is important to account for the differences in energy efficiency across various devices accessing these products and services. Typically, a smartphone uses less energy than a laptop, and a laptop uses less energy than a desktop. Understanding the [energy use of devices](/technology-categories/lifecycle/usage) can then be used to estimate carbon emissions by considering the source of the energy ([Carbon Intensity](/resources/glossary#carbon-intensity)) used to power or charge that device. Product metrics and web analytics provide valuable information for understanding the number of users, the types of devices the end-users use, where they are located, and the time spent using a product or service. This information is crucial for estimating downstream end-user emissions, and identifying the possible improvements that could be made.

The [embodied carbon of end-user devices](/technology-categories/lifecycle/embodied) is not required for attributional accounting of indirect scope 3 emissions. However, there is a consequential effect that organisations should consider when releasing digital products and services. If the software requires significantly powerful hardware or requires the latest operating systems, for example, this could force end-users to replace their hardware and devices to be able to use the product. This carries a downstream consequence of increasing the embodied emissions of end-user devices, as well as increasing waste. [Read more about hardware lifecycle emissions](/technology-categories/lifecycle).

{% include linkedHeading.html heading="Network Data Transfer" level=2 %}

These emissions are associated with the infrastructure enabling data transmission, enabling end-users to access the products and services. Data that is consumed over the Internet is hard to measure as the specifications of the equipment used over the public internet are not available. Even if that data was available, the system has no control over what route the data takes. Therefore it is appropriate to use a proxy such as:
- number of calls 
- payload size
- the distance transmitted
- the carbon intensity of the regions through which the data is transferred

All four categories of network listed in [the information on networks](/technology-categories/networks) should be considered. Tools such as [co2.js](https://www.thegreenwebfoundation.org/co2-js/) and [Green Coding's Green Metrics Tool](https://www.green-coding.io/projects/green-metrics-tool/) can be used to gain insight and attributional metrics on the carbon emissions of data transfer.


