---
layout: category
title: Life Cycle Emissions
permalink: /information/lifecycle
---

# Life Cycle Emissions

The carbon footprint of an organisation's technology encompasses total emissions across the entire [product life cycle](/glossary#product-life-cycle), from raw material extraction through manufacture, transportation, usage and disposal. 

Broadly, the full life cycle view can be divided into two main groups: [embodied carbon](/glossary#embodied-carbon) and [operational carbon](/glossary#operational-carbon).

$$ Life\ Cycle\ Carbon\ Footprint\ =\ Embodied\ Carbon\ +\ Operational\ Carbon $$

To measure an organisation's technology carbon footprint, it is essential to consider the full product life cycle emissions. 

The Technology Carbon Standard aims to categorise an organisation's technology assets, which are then grouped under three broad emissions areas (upstream, operational and downstream) to provide a comprehensive view of the carbon footprint. In general, embodied carbon relates to upstream emissions (Category U) and operational emissions are associated with categories O, C, G and D. 

{% include linkedHeading.html heading="Life Cycle Emissions Data" level=3 %}

A comprehensive [Life Cycle Assessment (LCA)](/glossary#life-cycle-assessment-lca) is necessary to fully quantify the environmental impacts across all stages of a product's life cycle. If such data is unavailable, high-level estimates can be based on average emissions per device type, employees’ equipment, shipping mileage.

Many manufacturers choose to provide [Product Carbon Footprint (PCF)](/glossary#product-carbon-footprint-pcf) data for their products. A PCF provides an estimate of the greenhouse gas emissions attributable to a product over its full life cycle. This differs from an LCA, which considers broader environmental impacts beyond just greenhouse gas emissions (for example, water consumption and land usage). 

Several international standards provide guidelines for estimating environmental impacts such as [ISO 14040](https://www.iso.org/standard/37456.html), [ISO 14044](https://www.iso.org/standard/38498.html) and [ISO 14067](https://www.iso.org/standard/71206.html) and [IEC TR 62921](https://webstore.iec.ch/publication/25994). These standards outline different approaches and outputs, which can be difficult to reconcile. A widely used methodology in the ICT industry to quantify greenhouse gas (GHG) emissions and estimate product carbon footprints is the [Product Attribute to Impact Algorithm (PAIA)](https://msl.mit.edu/projects/paia/main.html), although it is not strictly compliant with such standards. Methodologies can still vary between manufacturers so published figures require careful scrutiny to determine comparability. 

Here are some examples of environmental reports, PCF documents and LCAs from prominent manufacturers that detail the carbon footprints of their products over the full life cycle:

- [Apple Environmental Reports](https://www.apple.com/environment/)
- [Dell Product Carbon Footprints](https://www.dell.com/en-uk/dt/corporate/social-impact/advancing-sustainability/climate-action/product-carbon-footprints.htm)
- [HP Product Carbon Footprints](https://h20195.www2.hp.com/v2/library.aspx?doctype=95&footer=95&filter_doctype=no&showregionfacet=yes&filter_country=no&cc=us&lc=en&filter_oid=no&filter_prodtype=rw&prodtype=ij&showproductcompatibility=yes&showregion=yes&showreglangcol=yes&showdescription=yes%23doctype-95&sortorder-popular&teasers-off&isRetired-false&isRHParentNode-false&titleCheck-false#doctype-95&sortorder-popular&teasers-off&isRetired-false&isRHParentNode-false&titleCheck-false)
- [Samsung Life Cycle Assessment](https://www.samsung.com/global/sustainability/focus/products/sustainability-in-our-products/)

Reported emissions figures typically represent the mean value of carbon footprint estimates. Reported standard deviations or variances highlight the uncertainty inherent in these estimates, arising from the complexities involved in capturing accurate emissions data from manufacturing, transportation and real-world usage scenarios.

{% include linkedHeading.html heading="Embodied vs Operational Carbon" level=3 %}

The total embodied carbon of an asset can be [amortised](/glossary#amortisation) over its expected lifetime, if information about its typical refresh cycle or life span is available. This enables understanding the annual carbon emissions attributed to embodied carbon. By amortising the embodied carbon over the product's lifetime, it allows a like-for-like comparison against annual operational emissions. 

The ratio of embodied carbon to operational carbon varies across different types of device or product. In some cases, the embodied carbon associated with a product can exceed the carbon emissions from its operational usage, underscoring the importance of considering both when assessing the total carbon footprint. The following chart illustrates the relative contribution of operational carbon versus embodied carbon for different types of hardware.

![embodied-vs-operational-amounts](/assets/images/embodied-vs-operational-amounts.png)

*Source: Dell Product Carbon Footprint (PCF) documents for an example model of Laptop[^laptop], Desktop[^desktop], Monitor[^monitor] and Server[^server].*

For end-user or employee devices such as laptops, embodied carbon typically accounts for around 80% of the total life cycle emissions, while operational emissions make up only 20%. In contrast, for servers, the breakdown can be reversed, with embodied carbon constituting around 20% and operational emissions around 80% of the total. These proportions can fluctuate depending on the specific device model. Desktops tend to have a higher proportion of operational emissions compared to other end-user or employee devices like laptops or smartphones.

![embodied-vs-operational-percentages](/assets/images/embodied-vs-operational-percentages.png)

*Source: Dell Product Carbon Footprint (PCF) documents for an example model of Laptop[^laptop], Desktop[^desktop], Monitor[^monitor] and Server[^server].*

## References

[^laptop]: [XPS 13 9310 PCF datasheet (delltechnologies.com)](https://www.delltechnologies.com/asset/en-gb/products/laptops-and-2-in-1s/technical-support/xps-13-9310.pdf)
[^desktop]: [OptiPlex 7090 Tower PCF Datasheet (delltechnologies.com)](https://www.delltechnologies.com/asset/en-gb/products/desktops-and-all-in-ones/technical-support/optiplex-7090-tower-pcf-datasheet.pdf)
[^monitor]: [P2422H Monitor PCF datasheet (delltechnologies.com)](https://www.delltechnologies.com/asset/en-gb/products/electronics-and-accessories/technical-support/p2422h-monitor-pcf-datasheet.pdf)
[^server]: [carbon-footprint-poweredge-r640.pdf (dell.com)](https://i.dell.com/sites/csdocuments/CorpComm_Docs/en/carbon-footprint-poweredge-r640.pdf)