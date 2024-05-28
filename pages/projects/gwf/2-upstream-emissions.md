---
layout: projects
title: Green Web Foundation
permalink: /projects/green-web-foundation/upstream
project: gwf
---

# Estimating the Upstream Emissions (Category U)

## Software

We identified some software prominently used by GWF employees. This includes software installed on servers that are used by GWF to provide their services as well as typically used software installed on the employee laptops:
- Django (server installations)
- Wordpress (server installations)
- Zoom
- Chrome
- Firefox 

Whilst we had initially planned to investigate and attempt to gather information to allow us to estimate the carbon footprints of this software, it was agreed that gathering this data would be espeically difficult. Due to time constraints, this was ultimately not undertaken.

## Employee Hardware

For user hardware and devices, we gathered information regarding the number, type and locations of these devices:

- 6 Laptops (3× Germany, 1× UK, 1× Netherlands, 1× Taiwan)
- 10 Monitors (6× Germany, 3× UK, 1× Taiwan)
- 1 Small Desktop Printer (Germany)

We also ascertained that most of this equipment is personally owned by GWF employees, with a Bring Your Own Device (BYOD) policy. 

> Bring Your Own Devcies (BYOD) policies was not something we had yet considered how to account for in the TCS. After further discussions with the Scott Logic Sustainability team and GWF, we came to an agreement as to how we would attribute these devices to the organisation.

Since there is no standard or convention for accounting for carbon emissions of BYODs, it was decided that the responsibility of determining the percentage of attributional carbon to be attributed to GWF for these devices lies solely on GWF's preference, and what they felt was fair. GWF agreed on attributing 70% of the embodied carbon of BYODs to GWFs carbon footprint. Any equipment owned (purchased by GWF for GWF use) would be 100% attributable.

### Laptops

For the purposes of "beer mat" estimates, we assumed non-specific laptop equipment, using typical, average figures for embodied and operational energy consumption. For laptops, this embodied carbon is 230kgCO2e. This figure is obtained and concluded from multiple research sources and averaging multiple laptop datasheets from Dell, Hewlett-Packard (HP) and Apple.

With only a single laptop owned by GWF and the other five being BYODs, we attribute 100% of the embodied carbon to one laptop, and 70% to the other five.

$$ (230kgCO_2e \times 1) + 5 \times (230kgCO_2e \times 0.7) = 1035kgCO_2e $$

<p style="text-align:center; font-style: italic;">Parentheses added for clarity.</p>

To keep it a simple, high-level estimation, we have not taken into account that some of this equipment is refurbished, older and second-hand hardware. The laptops are simply assumed to be up to 5 years old and have a refresh cycle of 5 years. 

> Older, re-used and refurbished equipment would have a further positive impact on the amortisation calculations, reducing the embodied carbon footprint further.


### Monitors

For monitors we used a typical, average embodied carbon of 355kgCO2e. Of the 10 monitors used, four of those are wholly owned by GWF, the remaining six are BYODs. 

$$ 4 \times (355kgCO_2e \times 1) + 6 \times (355kgCO_2e \times 0.7) = 2911kgCO_2e $$

<p style="text-align:center; font-style: italic;">Parentheses added for clarity.</p>


## Printers

We identified a single printer located in the Germany office. This is a home/ small office all-in-one inkjet printer, copier, and scanner. Unfortunately, however, we could find little (substantiated) data or research[^1],[^2], on printers (in a short period of time). As a high-level, “beer mat” estimate, a single small printer with (assuming) light use, it didn’t seem necessary to spend much time researching further. However, the basic research included gathering data from manufacturers of several home and small office inkjet and laser printers, such as Canon and HP, and a few articles suggesting the carbon footprints of printers. The printer manufacturers do not offer carbon estimates for these devices; they only offer energy use (standby and whilst printing) and [Typical Energy Consumption](/glossary#typical-energy-consumption-tec).

Assumptions were made based on other IT hardware, such as laptops, monitors, servers and networking equipment, to estimate the embodied carbon of such printers. Therefore it seemed reasonable to assume an embodied carbon of 150kgCO2e ± 50kgCO2e. As a GWF-owned device this is 100% attributable.

> Some assumptions and guesses needed to be made regarding the embodied carbon of printers as the manufacturers do not publish this data. This certainly reduces the confidence we can have in this carbon emissions estimate, but we *felt* like we made a reasonable assumption.

---

[Next - Estimating the Operational Emissions](operational)

---

[^1]:[Grzesik, Katarzyna & Terefeńko, Tomasz. (2012). Life cycle assessment of an inkjet printer. Polish Journal of Environmental Studies. vol 21. 95–105.](https://www.researchgate.net/publication/276385268_Life_cycle_assessment_of_an_inkjet_printer)
[^2]:[CDP 2015 Climate Change 2015 Information Request KLEEN STRIKE (UK) ltd](https://www.kleenstrike.co.uk/carbon/carbon2015.pdf)