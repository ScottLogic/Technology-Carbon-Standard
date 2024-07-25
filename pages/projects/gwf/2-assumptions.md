---
layout: projects
title: Green Web Foundation
permalink: /projects/green-web-foundation/assumptions
project: gwf
---

# Assumptions and Decisions

## Digital sustainability vs carbon

Digital sustainability and decarbonising digital are not the same thing. Sustainability, or understanding ones wider impact, involves a much broader set of considerations covering other planetary boundaries (water, rare raw materials, land use) and social implications. 

This project narrowed in on carbon emissions as a starting lens to begin understanding these questions.

Hannah, from GWF, has spoken a lot about this issue in the past. Her fellowship project, [doingthedoughnut.tech](https://doingthedoughnut.tech/), goes into this in a lot more detail.



## Estimates vs measurements: what models are we using?

It’s important to be aware of the kind of model you’re working with, as it will impact estimates results. Top down models, tend to look at entire systems and as such are more likely to overestimate emissions. Bottom up models look to estimate smaller components of larger systems, and are likely to underestimate emissions. 

That is to say, all models have flaws and it is important to understand their flaws and limitations. We've done our best to keep this in mind throughout this project, and clearly state the known flaws and limitiations for any approaches we've used.

Fershad, from GWF, has spoken quite a bit about this difference in the past - his slides on [The Nuance of Quantifying Digital Carbon Emissions](https://www.thegreenwebfoundation.org/news/speaking-about-green-it-in-asia-green-io-conference-singapore-and-more/).


### High-level estimates

We decided that for each category in the TCS we would attempt to produce at least a high-level estimate.

We assumed a high-level estimate would be characterised as:

- Imperfect but relatively quick to do
- Containing broad assumptions and averages
- Favouring publically available data rather than specific measurements unique to GWF
- Intended to give a feel for the magnitude of emissions on particular category vs another, allowing us to identify areas of most potential concern
- Better than nothing

### Detailed estimates

We decided that after producing our initial set of high-level estimates, we would deep dive into particular areas of concern or interest as remaining capacity allowed.

We assumed that detailed-level estimates would be characterised as:

- Still imperfect, but aiming to be robust enough to satisfy [GHG accounting standards](https://ghgprotocol.org/sites/default/files/standards/Scope3_Calculation_Guidance_0.pdf).
- Time-consuming, complex and required detailed knowledge to produce.
- Using specific measurements unique to GWF's set-up as much as possible.
- Helpful for understanding what can be changed to reduce impact.

Our approaches to producing these high-level, and when relevant detailed estimates, are documented in this project write-up.


## Units

For this project of mapping the GWF technology estate using TCS, we calculate the final figures to **kgCO2e/year**. 

We typically use **kW** and **kWhs** when quoting energy use and consumption. 

Carbon intensity is typically quoted in **gCO2e/kWh**.

We've chosen to round calcuation outputs when appropriate, which may lead to some rounding errors and very minor variation in the results.

## Regional Carbon Intensity

The GWF team are a remote team, positioned around the world. We used the regional electricity grid’s [carbon intensity](/glossary#carbon-intensity) to calculate the operational carbon emissions. 

The following regional carbon intensities are used:
- Germany: 363.982gCO2e/kWh
- Netherlands: 386.189gCO2e/kWh
- Taiwan: 565.629gCO2e/kWh
- UK: 268.255gCO2e/kWh
- Global: 490gCO2e/kWh
- Europe: 328gCO2e/kWh

These values were obtained from the GWF [Grid Intensity CLI tool](https://developers.thegreenwebfoundation.org/grid-intensity-cli/overview/) and the Tech Carbon Standard (based on Ember Data Explorer).

---
[Next - Estimating the Upstream Emissions](upstream)