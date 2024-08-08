---
layout: sideNavigation
title: Hardware Life Cycle Emissions
permalink: /technology_categories/lifecycle
---

# Hardware Life Cycle Emissions

The carbon footprint of an organisation's technology encompasses total emissions across the entire [product life cycle](/resources/glossary#product-life-cycle), from raw material extraction through manufacture, transportation, usage, and disposal. 

Broadly, the full life cycle view can be divided into two main groups: [embodied carbon](/resources/glossary#embodied-carbon) and [usage carbon](/resources/glossary#usage-carbon).

$$ C = C_E + C_U $$

Where
- C is total life cycle carbon emissions (kg CO2e).
- C<sub>E</sub> is embodied carbon emissions (kg CO2e).
- C<sub>U</sub> is usage carbon emissions (kg CO2e).

To measure an organisation's technology carbon footprint, it is essential to consider the full product life cycle emissions. 

[Read more about embodied carbon emissions.](/technology_categories/lifecycle/embodied)

[Read more about usage carbon emissions.](/technology_categories/lifecycle/usage)

{% include linkedHeading.html heading="Life Cycle Emissions Data" level=2 %}

A comprehensive [Life Cycle Assessment (LCA)](/resources/glossary#life-cycle-assessment-lca) is necessary to fully quantify the environmental impacts across all stages of a product's life cycle. Many manufacturers choose to provide [Product Carbon Footprint (PCF)](/resources/glossary#product-carbon-footprint-pcf) data for their products. A PCF provides an estimate of the greenhouse gas emissions attributable to a product over its full life cycle. This differs from an LCA, which considers broader environmental impacts beyond just greenhouse gas emissions (for example, water consumption, and land usage). 

Several international standards provide guidelines for estimating environmental impacts such as [ISO 14040](https://www.iso.org/standard/37456.html), [ISO 14044](https://www.iso.org/standard/38498.html), [ISO 14067](https://www.iso.org/standard/71206.html), and [IEC TR 62921](https://webstore.iec.ch/publication/25994). These standards outline different approaches and outputs, which can be difficult to reconcile. A widely used methodology in the ICT industry to quantify greenhouse gas (GHG) emissions and estimate product carbon footprints is the [Product Attribute to Impact Algorithm (PAIA)](https://msl.mit.edu/projects/paia/main.html), although it is not strictly compliant with such standards. Methodologies can still vary between manufacturers so published figures require careful scrutiny to determine comparability. 

Here are some examples of environmental reports, PCF documents, and LCAs from prominent manufacturers that detail the carbon footprints of their products over the full life cycle:

- [Apple Environmental Reports](https://www.apple.com/environment/)
- [Dell Product Carbon Footprints](https://www.dell.com/en-uk/dt/corporate/social-impact/advancing-sustainability/climate-action/product-carbon-footprints.htm)
- [HP Product Carbon Footprints](https://h20195.www2.hp.com/v2/library.aspx?doctype=95&footer=95&filter_doctype=no&showregionfacet=yes&filter_country=no&cc=us&lc=en&filter_oid=no&filter_prodtype=rw&prodtype=ij&showproductcompatibility=yes&showregion=yes&showreglangcol=yes&showdescription=yes%23doctype-95&sortorder-popular&teasers-off&isRetired-false&isRHParentNode-false&titleCheck-false#doctype-95&sortorder-popular&teasers-off&isRetired-false&isRHParentNode-false&titleCheck-false)
- [Samsung Life Cycle Assessment](https://www.samsung.com/global/sustainability/focus/products/sustainability-in-our-products/)

Reported emissions figures typically represent the mean value of carbon footprint estimates. Reported standard deviations or variances highlight the uncertainty inherent in these estimates, arising from the complexities involved in capturing accurate emissions data from manufacturing, transportation, and real-world usage scenarios.

{% include linkedHeading.html heading="Embodied vs Usage Carbon" level=2 %}

The total embodied carbon of an asset can be [amortised](/resources/glossary#amortisation) over its expected lifetime, if information about its typical refresh cycle or life span is available. This enables understanding the annual carbon emissions attributed to embodied carbon. By amortising the embodied carbon over the product's lifetime, it allows a like-for-like comparison against annual usage emissions. 

The ratio of embodied carbon to usage carbon varies across different types of device or product. In some cases, the embodied carbon associated with a product can exceed the carbon emissions from its usage, underscoring the importance of considering both when assessing the total carbon footprint. 

The following charts demonstrate the carbon emissions attributed to usage versus embodied carbon across various hardware types. Figures shown in the graphs are derived from an example of one hardware model per device type. In reality, such figures will differ depending on the particular device model and its usage context.

![embodied-vs-usage-amounts](/assets/images/embodied-vs-usage-amounts.png)

*Source: Dell Product Carbon Footprint (PCF) documents for an example model of Laptop[^laptop], Desktop[^desktop], Monitor[^monitor], and Server[^server].*

For devices such as laptops, embodied carbon typically accounts for around 80% of the total life cycle emissions, while usage emissions make up only 20%. In contrast, for servers, the breakdown can be reversed, with embodied carbon constituting around 20% and usage emissions around 80% of the total. These proportions can fluctuate depending on the specific device model. Desktops tend to have a higher proportion of usage emissions compared to other user devices like laptops or smartphones.

![embodied-vs-usage-proportions](/assets/images/embodied-vs-usage-proportions.png)

*Source: Dell Product Carbon Footprint (PCF) documents for an example model of Laptop[^laptop], Desktop[^desktop], Monitor[^monitor], and Server[^server].*

{% include linkedHeading.html heading=" Worked Examples" level=2 %}

[Click here to see a worked example of estimating life cycle emissions for a laptop.](/technology_categories/lifecycle/example/employee)

[Click here to see a worked example of estimating life cycle emissions for a server.](/technology_categories/lifecycle/example/server)

## References

[^laptop]: [Dell; XPS 13 9310 PCF Datasheet](https://www.delltechnologies.com/asset/en-gb/products/laptops-and-2-in-1s/technical-support/xps-13-9310.pdf)
[^desktop]: [Dell; OptiPlex 7090 Tower PCF Datasheet](https://www.delltechnologies.com/asset/en-gb/products/desktops-and-all-in-ones/technical-support/optiplex-7090-tower-pcf-datasheet.pdf)
[^monitor]: [Dell; P2422H Monitor PCF Datasheet](https://www.delltechnologies.com/asset/en-gb/products/electronics-and-accessories/technical-support/p2422h-monitor-pcf-datasheet.pdf)
[^server]: [Dell; PowerEdge R640 PCF Datasheet](https://i.dell.com/sites/csdocuments/CorpComm_Docs/en/carbon-footprint-poweredge-r640.pdf)