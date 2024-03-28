---
layout: category
title: Networks Emissions
permalink: /information/networks
---
# Network Emissions
Networks can be challenging when considering carbon emissions for two reasons:-
- Networks are often shared.
- Network equipment can draw a constant amount of baseline power, regardless of its usage.

There are several carbon estimators that calculate the carbon emissions of software my multiplying the payload size in megabytes by a number (such as 0.06) to obtain a value in KWh. This technique is based on previous research that looked at the wired backbone internet. It is a fine proxy to use initially when evaluating an IT estate to see where effort is best applied to reduce carbon emissions. It also works well as an attributional estimate, allowing the organisation to allocate responsibility of emissions to different parties.

However, this kind of estimation should not be used in a consequential context. This means that it should not use a multiplier to determine that carbon emissions have been lowered in a system by simply reducing its page size. This is because routers are high availability devices that consume most of their power, regardless of their load. Under high load, a wired router will still consume more power, but not a great deal more than when it is idle. Therefore, halving the size of its payload will not halve the power it consumes or the carbon emissions of the system.

This does not mean that reducing the payload of a system transmitted by a network is without merit. By reducing page sizes and the number of network calls, the pressure the system contributes to both the public internet infrastructure and the clients networking hardware is reduced. This may allow upstream dependencies and downstream dependents to run less networking infrastructure or renew their hardware with less frequency.

{% include linkedHeading.html heading="Network Categories" level=2 %}

When considering measuring network hardware, it is useful to split it into four categories:
- _The Operational Network_: This is the network of the organisation that owns the system. It includes routers, switches, WiFi access points and the like. This hardware can be catalogued and data sheets or power supplies can be inspected to determine the maximum power draw of each device. From this data, you can measure the baseline power draw and power draw under load of each device to calculate the carbon emissions of the network.
- _Backbone Internet_: This includes the main infrastructure of the wired internet from an internet supplier, across all intermediate wired networks, to the closest it can get to the destination client's network or device. As this network carries traffic for all users of the internet, and cannot be measured,  an appropriate proxy can be used, such as multiplying page size in MB by 0.06 to gain an estimate in kWh.
- _Public Wireless Networks_: This includes all public wireless networks such as 4g and 5g that carries data from its source (likely the wired backbone internet), to the destination device or network. Again, measurements here are impossible, so estimation techniques and proxy measurements must be used.
- _The Client Network_: Finally, the destination client's network should be considered, if they are likely to have one. While client networks cannot be measured either, analytics and marketing data can provide insight into the kinds of customer who are using your system. This could be used to extrapolate an assumed network configuration for each segment of customers. For example, a B2B system aimed at small to medium sized enterprises can assume a network topology of a certain size, and multiply that up by the number of customers. Meanwhile a system that is used in homes could assume the presence of a home WiFi router and perhaps home mesh network.

By considering each part of the data journey from its origin system to the final device in these categories, a better estimation of the carbon emissions created by the IT system can be put together. Each category of network should have appropriate measurements and proxies used to best estimate the total carbon cost of data transmission.