---
layout: sideNavigation
title: Downstream Emissions
permalink: /impact-categories/downstream
redirect_from:
    - /categories/downstream    
---

# Downstream Emissions

Downstream emissions (Category D) are the emissions produced by using an organisation’s products and/or services. This could be B2B or B2C users of the products and services. The emissions are attributed to the customer’s device energy use and the transmission of data to use that product or service.

To assess the downstream water footprint of an organisation's operations, it is essential to include the water required to use the products or services, as well as the water embedded in the energy consumed by customer devices and data transmission.

Downstream emissions are related to GHG Protocol Scope 3.

{% include linkedHeading.html heading="Customer Devices" level=2 %}

This considers the emissions generated from the electricity consumption of devices such as desktops, laptops, tablets, and mobile phones that utilise the products or services provided by an organisation. It is important to account for the differences in energy efficiency across various devices accessing these products and services. Typically, a smartphone uses less energy than a laptop, and a laptop uses less energy than a desktop. Understanding the [energy use of devices](/technology-categories/lifecycle/usage) can then be used to estimate carbon emissions by considering the source of the energy ([Carbon Intensity](/resources/glossary#carbon-intensity)) used to power or charge that device. Product metrics and web analytics provide valuable information for understanding the number of users, the types of devices the customers use, where they are located, and the time spent using a product or service. This information is crucial for estimating downstream customer emissions, and identifying the possible improvements that could be made.

The [embodied carbon of customer devices](/technology-categories/lifecycle/embodied) is not required for attributional accounting of indirect scope 3 emissions. However, there is a consequential effect that organisations should consider when releasing digital products and services. If the software requires significantly powerful hardware or requires the latest operating systems, for example, this could force customers to replace their hardware and devices to be able to use the product. This carries a downstream consequence of increasing the embodied emissions of customer devices, as well as increasing waste. [Read more about hardware lifecycle emissions](/technology-categories/lifecycle).

The embodied or virtual water tied to customer devices includes both the water used to generate the electricity they consume and the water embedded in their manufacturing. As software requires more computing power, it increases electricity consumption. In addition, when new software requires customers to upgrade or replace their devices, the water impact grows further.

When content and data are consumed by customers, it is essential to account for both the carbon and water usages across all interactions, including:
- Streaming, playback or download 
- Content creation such as live streaming and uploads 
- Embedding and sharing on third-party platforms
- AI-enabled features such as auto-captions and recommendations

Special consideration also needs to be given to AI applications. As the size of LLMs continues to increase so do the hardware requirements needed to run them effectively. If your customers need to upgrade their devices to run your AI applications this will contribute to e-waste as mentioned above and could also lead to increased energy and water consumption. 

It is also important to consider the number of end users that will be consuming your AI. A [study released by Mistral AI in July 2025](https://mistral.ai/news/our-contribution-to-a-global-environmental-standard-for-ai) into the energy usage of their Large 2 model stated that to generate 1 page of text or 400 tokens produces 1.14 gCO₂e and uses 45 mL of water. This is roughly equivalent to a user in the U.S. streaming online video for 10 seconds. While this per-request impact may appear minimal, the cumulative emissions and water consumed scale rapidly when multiplied across thousands of users performing inferences multiple times per day. 

It is therefore important to consider ways to reduce the number of inference attempts a user needs to obtain the desired information as well as reducing how long inference takes and the length of the answer returned.

{% include linkedHeading.html heading="Network Data Transfer" level=2 %}

These emissions are associated with the infrastructure enabling data transmission, enabling customers to access the products and services. This includes LLMs used as SaaS, via an API provider or an AI-powered tool. Data that is consumed over the Internet is hard to measure as the specifications of the equipment used over the public internet are not available. Even if that data was available, the system has no control over what route the data takes. Therefore it is appropriate to use a proxy such as:
- number of calls 
- payload size
- the distance transmitted
- the carbon intensity of the regions through which the data is transferred

All four categories of network listed in [the information on networks](/technology-categories/networks) should be considered. Tools such as [co2.js](https://www.thegreenwebfoundation.org/co2-js/) and [Green Coding's Green Metrics Tool](https://www.green-coding.io/projects/green-metrics-tool/) can be used to gain insight and attributional metrics on the carbon emissions of data transfer.

In the context of AI applications, writing more precise prompts and requesting concise answers is not only important to reduce the impact of inference but also to reduce the amount of network traffic being transferred between yourself and the consumer of your AI.

{% include linkedHeading.html heading="Downstream Infrastructure" level=2 %}

These emissions come from physical infrastructure and systems that your customers deploy or operate to use your products or services. This includes IoT (Internet of Things) devices, locally hosted servers, edge computing / embedded devices, dedicated storage systems, networking equipment, and specialised hardware (also know as OT or Operational Technology) that customers must install for your service to function. For example, if your cloud-based IoT platform requires customers to install local gateways and sensors, or your enterprise software needs on-premises servers at customer sites.

The usage related emissions from this customer infrastructure should be accounted for under the customer's operational energy and therefore water consumption which can vary greatly depending on the type energy used (unless it's something like a managed service where you pay for the electricity consumed - in which case it should be included under your operational emissions) and, where relevant, the embodied carbon of hardware that customers acquire specifically to use your offerings. Unlike general-purpose devices, this infrastructure often has longer lifecycles and a range of power requirements (depending on the nature of the device).

Consider the cumulative impact across your entire customer base, especially where your service requires distributed infrastructure deployment. The geographic spread of customer infrastructure affects carbon intensity and water consumption calculations, as different regions have varying grid emissions. Your product design decisions around hardware requirements, efficiency, and deployment patterns directly influence the overall carbon and water footprints of your service ecosystem.

If your AI application requires your customers to host the application locally then they may need to implement specialised hardware to ensure optimal performance. For example, dedicated servers and GPUs, additional RAM, specialist storage solutions such as NVMe SSDs, and enhanced cooling systems may all be necessary. 