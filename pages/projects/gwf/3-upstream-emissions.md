---
layout: projects
title: Green Web Foundation
permalink: /projects/green-web-foundation/upstream
project: gwf
---

{: #top}

<div class="pb-4">
{% include categoryLabel.html label="CatU" %}
</div>

# GWF: Estimating upstream emissions (Category U)
Read the TCS overview of <a class="text-inherit hover:text-inherit hover:opacity-80" href="/categories/upstream">upstream emissions</a> for a primer on this category.

When attemping to estimate Green Web Foundation's digital upstream emissions, we describe the approach used and why for each sub-category.

- [Software](#software)
- [Employee Hardware](#employee-hardware)
- [Networking and Infrastructure Hardware](#networking-and-infrastructure-hardware)
- [Servers and Storage Hardware](#servers-and-storage-hardware)


## Software

{% include categoryItem.html item="CatUSoftware" %}

### Estimated emissions

Unknown

Estimate confidence: *n/a - not attempted*

### Agreed scope

We started by identifying the software used most prominently by the GWF team, eg what's in our digital supply chain. We used the team's internal finance tracker to generate a starting list. We realised early on that trying to measure everything was inpractical so looked for the top 5. We agreed that software installed on employee laptops, as well as software installed on GWF controlled servers was in scope. 

The first version of this list we settled on is:
- Django (server installations)
- Wordpress (server installations)
- Zoom
- Chrome
- Firefox 

### High level estimate methodology

The idea for this was to see what data exists to help us understand the embodied carbon in each piece of software. The key thing is that we know a whole bunch of energy would have been consumed making the software versions we see and use today. We were wondering if we can reflect this in some way in our own digital carbon estimates. 

After a quick internet search for any such information from these suppliers we concluded this is, unsurprisingly, not yet readily available. Due to time constraints, we decided to prioritise our efforts elsewhere.

**How could we improve upon this?**

In an ideal world we would reach out to the relevant software support teams to raise this issue with them. In the absence of data, one of the most useful steps a team can take is to tell a software supplier they are looking for it. 

We also could have looked for any kind of industry benchmarks and extracted some broad assumptions from those. Whilst those would have provided low confidence estimates, that would have been better than nothing.

[To the top](#top)

## Employee Hardware

{% include categoryItem.html item="CatUEmployeeHardware" %}

### Estimated emissions

<span style="color: red">TBC</span>

<span style="color: red">Estimate confidence: High</span>

### Agreed scope

We limited the scope to the digital devices that require a power source used by staff on a day to day basis. Specifically this covers:

- Laptops/desktops
- Monitors
- Printers
- Company purchased mobile phones

We agreed that other hardware such as keyboards, mice, landline phones and microphones are out of scope at this point. 

Much of this equipment is personally owned by GWF employees, with a Bring Your Own Device (BYOD) policy enabling use at work. This meant that BYOD devices needed to be in scope as well as those purchased by GWF. 

We started with an outline list regarding the quantity and location of each type of device.

- 6 laptops (3× Germany, 1× UK, 1× Netherlands, 1× Taiwan)
- 8 monitors (3× Germany, 3× UK, 1x Netherlands, 1× Taiwan)</span>
- 1 small desktop printer (Germany)

### High level estimate methodology

Firstly we needed to decide a way to attribute the BYOD emissions to GWF. How much of the emissions are attributable to GWF and how much to the individual?

> Bring Your Own Devcies (BYOD) policies was not something we had yet considered how to account for in the TCS. After further discussions with the Scott Logic Sustainability team and GWF, we came to an agreement as to how we would attribute these devices to the organisation.

We couldn't find a standard or convention for accounting for the carbon emissions of BYODs. Therefore, we all decided the best approach was for GWF to decide this for themselves, based on a broad sense of usage and fairness. GWF agreed on attributing 70% of the embodied carbon of BYODs to GWF's carbon footprint. Any equipment purchased by GWF would be 100% attributable to GWF.

**Laptops**

To start with we assumed non-specific equipment. We sourced an average embodied carbon figure of 230kgCO2e. This figure came from averaging multiple laptop datasheets from [Dell](https://www.dell.com/en-uk/dt/corporate/social-impact/advancing-sustainability/climate-action/product-carbon-footprints.htm), [Hewlett-Packard (HP)](https://h20195.www2.hp.com/v2/library.aspx) and [Apple](https://www.apple.com/environment/) (<span style="color: red">~~can we link to some examples, or better yet specifics of where people can find these?~~</span> ✅). This was cross-referenced against multiple research sources to check the number was in the right ballpark. We were not seeking high degrees of accuracy at this point and felt this was good enough. The Product Carbon Footprint [(PCF)](/glossary#product-carbon-footprint-pcf) data sheets typically provide a breakdown of carbon emissions during the products full life cycle, including it's usage. We remove the usage carbon emissions value (around 20%) from the total carbon footprint leaving us a value for manufacture, transport and end of life. We use this value as the embodied carbon value.

<span style="color: red">*This might need a bit of an overhaul now we've amended our approach here?*</span>
<span style="color: coral">*- DR: This is the beer mat estimate approach, ignoring amortisation - but it does still assume all devices acquired (ie. not for this accounting period). It's a weird one because the later detailed estimates have come back around to drive the old beer mat estimate - which originally was amortised (which we now realise is wrong).*</span>

<div style="color: blue;">

With only a single laptop owned by GWF and the other five being BYODs, we attribute 100% of the embodied carbon to one laptop, and 70% to the other five.

$$ (230\ kgCO_2e \times 1) + 5 \times (230\ kgCO_2e \times 0.7) = 1035\ kgCO_2e $$

<p style="text-align:center; font-style: italic;">Parentheses added for clarity.</p>

To keep it a simple, high-level estimation, we have not taken into account that some of this equipment is refurbished, older and second-hand hardware. This also assumes all laptops accountable this year, and not just laptops acquired this accounting year. The laptops are simply assumed to be up to 5 years old and have a refresh cycle of 5 years. 

> Older, re-used and refurbished equipment would have a further positive impact on the amortisation calculations, reducing the embodied carbon footprint further.

</div>

**Monitors**

For monitors we used a typical, average embodied carbon of 355kgCO2e. This figure is derived from data by [Dell](https://www.dell.com/en-uk/dt/corporate/social-impact/advancing-sustainability/climate-action/product-carbon-footprints.htm) and [Hewlett-Packard (HP)](https://h20195.www2.hp.com/v2/library.aspx) 24-inch monitors.

<span style="color: red">*This might need a bit of an overhaul now we've amended our approach here?*</span>
<span style="color: coral">*- DR: As per above.*</span>

<div style="color: blue;">

Of the 8 monitors used, one of those are wholly owned by GWF, the remaining seven are BYODs. 

$$ 1 \times (355\ kgCO_2e \times 1) + 7 \times (355\ kgCO_2e \times 0.7) = 2094\ kgCO_2e $$

<p style="text-align:center; font-style: italic;">Parentheses added for clarity.</p>

</div>

**Printers**

We identified a single printer located in the Germany office. This is a home/ small office all-in-one inkjet printer, copier, and scanner. Unfortunately, however, we could find little (substantiated) data or research[^1],[^2], on printers (in a short period of time). As a high-level, “beer mat” estimate, a single small printer with (assuming) light use, it didn’t seem necessary to spend much time researching further. However, the basic research included gathering data from manufacturers of several home and small office inkjet and laser printers, such as Canon and HP, and a few articles suggesting the carbon footprints of printers. The printer manufacturers do not offer carbon estimates for these devices; they only offer energy use (standby and whilst printing) and [Typical Energy Consumption](/glossary#typical-energy-consumption-tec).

Assumptions were made based on other IT hardware, such as laptops, monitors, servers and networking equipment, to estimate the embodied carbon of such printers. Therefore it seemed reasonable to assume an embodied carbon of 150kgCO2e ± 50kgCO2e. As a GWF-owned device this is 100% attributable.

> Some assumptions and guesses needed to be made regarding the embodied carbon of printers as the manufacturers do not publish this data. This certainly reduces the confidence we can have in this carbon emissions estimate, but we *felt* like we made a reasonable assumption.

**How could we improve upon this?**

After looking at these high level estimates in comparison to the other categories, we decided to go further and produce details estimates based on specifics.


### Detailed estimate methodology

<span style="color: red">TBC</span>

[To the top](#top)


## Networking and Infrastructure Hardware

{% include categoryItem.html item="CatUNetworkHardware" %}

### Estimated emissions

<span style="color: red">TBC</span>

<span style="color: red">Estimate confidence: Medium</span>

### Agreed scope

We started by identifying what office space GWF employees regularly use. There is dedicated office space in Berlin, and another co-working space in the UK. We decided not to include the home routers that staff use when working from home. Our reasoning being they would have these devices regardless of their work with GWF. We found out what networking equipment was in each office and used that as our starting point.

### High level estimate methodology

To calculate the embodied carbon, we found a [research paper from 2021](https://www.sciencedirect.com/science/article/pii/S0921344921005607). This gives a value of 171.7kgCO<sub>2</sub>e, which we felt was robust enough for producing an initial estimate. However, we were surprised by this value as it was higher than expected. 

<div style="text-decoration-line: line-through;">
  <span style="color: red">*Is this correct?*</span>
  
  <div style="color: blue;">
    We assume a life span of 5 years for the routers and divide the embodied carbon by the lifespan to arrive at an amortised carbon total (one fifth of the embodied carbon for each of the five years). As one of the offices is shared, we only take a third of this carbon total for that office.
  </div>
</div>

As one of the offices is a co-shared space with two others, so we simply attributed 33.3% of the office router's embodied carbon to GWF. The router dedicated to the GWF office attributes it's full embodied carbon to GWF.

$$ (171.7\ kgCO_2e \times 0.333) + 171.7\ kgCO_2e = 229\ kgCO_2e $$

**How could we improve upon this?**

If we were looking at more networking hardware in a larger organisation, we could have found more research sources or attempted our own calculations based on weight and materials.

## Servers and Storage Hardware

{% include categoryItem.html item="CatUServerHardware" %}

### Estimated emissions

**0**

<span style="color: red">Estimate confidence: High</span>

### Agreed scope

GWF does not own any of it's own servers or storage hardware, <span style="color: coral;">~~We agreed to take this category out of scope.~~</span> so, there are no carbon emissions to report in this category.  

[To the top](#top)


---

[Next - Estimating the Operational Emissions](operational)

---

[^1]:[Grzesik, Katarzyna & Terefeńko, Tomasz. (2012). Life cycle assessment of an inkjet printer. Polish Journal of Environmental Studies. vol 21. 95–105.](https://www.researchgate.net/publication/276385268_Life_cycle_assessment_of_an_inkjet_printer)
[^2]:[CDP 2015 Climate Change 2015 Information Request KLEEN STRIKE (UK) ltd](https://www.kleenstrike.co.uk/carbon/carbon2015.pdf)