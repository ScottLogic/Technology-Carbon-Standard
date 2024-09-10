---
layout: default
title: GHG Alignment
permalink: /ghg
---

# GHG Alignment

The Greenhouse Gas (GHG) Protocol is a widely used international accounting tool for governments and businesses to understand, quantify, and manage their greenhouse gas emissions. [Read more about the GHG Protocol](resources/glossary#greenhouse-gas-ghg-protocols).

The Tech Carbon Standard (TCS) specifically focuses on the technology landscape, a subset of a company's overall GHG emissions. This focus is to help organisations identify technology related sources of GHG emissions. Furthermore, the TCS provides guidance for selecting the calculation approaches, reliable sources of data and emissions factors to be able to calculate those emissions, which can then be used to roll-up to corporate level GHG reporting.

<div class="grid place-content-center">
  <img class="max-h-72 place-self-center" src="/assets/images/ghg-emissions-process.png" title="Steps in identifying and calculating GHG emissions" />
  <a class="text-center" href="https://ghgprotocol.org/sites/default/files/standards/ghg-protocol-revised.pdf">Steps in identifying and calculating GHG emission - GHG Protocol Reporting Standard</a>
</div>

The TCS is most helpful and applicable for identifying emissions sources and calculating GHG Scope 3 emissions. Scopes 1 and 2 should never be double counted, and these Scopes are often accounted for at corporate level by taking consideration of the energy and fuels purchased by the company. So, we would advise not to use the TCS categories for reporting GHG Scopes 1 and 2, to avoid the risk of double counting. For example; the energy consumption data collected by the company does not take into any consideration of how that energy is used or distributed between heating, lighting, and technology use. These categories should be reserved for breakdown and analysis of it's contributing factors to Scope 1 and 2, rather than reporting them. GHG Protocol is focuses on an attributional model, meaning that the identification of sources and the emissions calculations are used for accoutning and reporting, "attributing" emissions to the company, fitting squarely into Scope 1, 2 or 3. But where the TCS is used to breakdown and analyse these emissions for the purpose of influencing and reducing the company's GHG emissions, the TCS shifts to a consequential model. The detailed breakdown and understanding of the sources of emissions enables companies to identify the potential effects of making changes to mitigate and reduce GHG emissions.

Explained below is how to view the TCS with the GHG Protocol Reporting Standard.

### GHG Scope 1
{% include categoryLabel.html label="CatG" %}

Scope 1 applies to all fuel burning power generators, often used for backup power supplies for on-premise data centres and critical infrastructure, and/ or in regions with an unstable electicity grid.

GHG Scope 1 applies to TCS Category G (Generators).

### GHG Scope 2

{% include categoryLabel.html label="CatO" %}

Scope 2 applies to the electricity consumption of all on-site IT equipment and devices. This includes all on-premise employee devices such as computers, monitors; networking and infrastructure; and servers and storage. Energy used for lighting, heating and cooling is out of scope in the TCS, but would be accounted for in an organisation's wider GHG accounting.

### GHG Scope 3

Scope 3 makes up a large proportion of company emissions and the technology related Scope 3 emissions is no exception. Whilst it is an optional reporting category, there is increasing pressure on organisations to report Scope 3 emisions due to the scale of it's impact. Companies may wish to account for and report on Scope 3 emissions that are relevant to their business and have reliable information for. This, however can make it difficult to compare performance across companies.

[The GHG Protocol Reporting Standard](https://ghgprotocol.org/sites/default/files/standards/ghg-protocol-revised.pdf) acknowledges that Scope 3 is a difficult and is largely inaccurate to account for. A full life cycle analysis is not required, and the company can focus its accounting effort on GHG generating activities at their discretion. It does recommend some general guidance when assessing Scope 3 emissions:

1. **Describe the value chain.** For transparency, provide a general description of the value chain and associated GHG sources.
2. **Determine which Scope 3 categories are relevant.** Only some upstream and downstream emissions are relevant to the company, for various reasons:
  - they are (beleived to be) large relative to Scope 1 and 2 emissions
  - they contribute to the company's GHG risk exposure and deemed critical by stakeholders
  - there is opportunity to influence or reduce emissions
3. **Identify partners along the value chain.** Identify any partners along the value chain that potentially contribute significant GHGs to identify sources, relevant data and calculate emissions.
4. **Quantify Scope 3 emissions.** It is accepted that Scope 3 emissions may not be accurate due to data availability and reliability. Estimates are acceptable as long as the approach, and methodology is transparent, and that the data used is adequate and reliable.

Inline with this recommended approach, the TCS describes the technology value chain across three categories, identifiying potential sources of technology emissions. The company should carefully consider these categories and sources of emissions that are most relevant to them. Using the [TCS Carbon Estimator tool](/estimator) can help identify which categories and sources may be relatively large and contribute high GHGs. Finally, the TCS provides guidance for quantifying these emissions, with details of appropriate approaches, methodology and sources of reliable data.

The TCS defines three categories that fall within GHG Protocol Scope 3:

{% include categoryLabel.html label="CatU" %}

The upstream value chain; TCS Category U (Upstream), encompasses the embodied carbon of technology including all employee devices, networking equipment and servers. This can make up a significant portion of the organisation's overall GHG emissions. [Product Carbon Footprints](/resources/glossary#product-carbon-footprint-pcf) are generally easily accessible for reporting. However, the upstream impact of purchasing off-the-self and open-source software, is still very difficult to obtain.

{% include categoryLabel.html label="CatC" %}

Category C (Cloud), encompasses the supply of services to the organisation, such as cloud servcies, software-as-a-service (SaaS) and managed services. Notably, it also considers the off-site use of employee devices such as laptops used by employees working from home, for example. For GHG Protocol reporting, high-level, top-down methodologies are suitable for calcualting emissions. Although inaccurate, a cost-based approach for estimating cloud services is a common approach. For off-site employee devices, the [typical energy consumption (TEC)](/resources/glossary#typical-energy-consumption-tec) can be used. However, SaaS and Managed Services are difficult to obtain relaible methodologies.

{% include categoryLabel.html label="CatD" %}

The downstream value chain; Category D (Downstream), considers the emissions of technology provided to the company's end users. This includes:
- the electricity consumption of end user devices whilst using the company's public websites and APIs, software and SaaS services and products.
- the fixed and radio transmission of data used by end users of those services.
- the manufacture, transport, end-of-life use of produced technology hardware ([product carbon footprint](/resources/glossary#product-carbon-footprint-pcf)).

There are top-down approaches for measuring GHG emissions from end-user devices and network data transfer, which are appropriate for Scope 3 reporting. For guidance and requirements for calculating the product life cycle, there is the [Product Life Cycle Accounting and Reporting Standard](https://ghgprotocol.org/product-standard) from GHG Protocol. 
