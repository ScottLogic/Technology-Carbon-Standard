---
layout: projects
title: Green Web Foundation
permalink: /projects/green-web-foundation/overview
project: gwf
---

{: #top}

# Overview

This project collaboration between [Green Web Foundation](https://www.thegreenwebfoundation.org/) and [Scott Logic](https://www.scottlogic.com/) ran in mid 2024. It trialled using an early version of the TCS framework to estimate the carbon emissions arising from Green Web Foundation's digital estate. This write-up provides full documentation of the decisions, methodology and learning points so others can learn from what we experienced.

- [Results summary](#results-summary)
- [Key insights](#key-insights)
- [Why do this project?](#context---why-this-project)
- [Partnering organisations and team](#partnering-organisations-and-team)

## Results summary

**Green Web Foundation's digital estate is estimated to be responsible for *at least*&#42; 496 kgCO<sub>2</sub>e in 2023.**

![GWF Emissions Treemap](/assets/images/projects/GWF/gwf-emissions-treemap.png)
<p class="italic text-center">Visual summary of carbon equivalent emission estimates for Green Web Foundation 1st Jan - 31st Dec 2023.</p>

By far the biggest area of estimated emissions comes from Green Web Foundation's (GWF) purchase and use of employee hardware eg laptops, monitors, printers and office internet. This accounts for 69% of the emissions. 38% arising from the purchase of employee hardware, 23% arising from the use of it and a further 8% from running internet in office spaces. 

Next we estimated that 24% of the emissions arise from the end-use of our digital services, such as websites and the Green Web Platform. 

GWF's use of cloud services accounts for 5%. 

Lastly, the remaining 2% comes from data transfer across the internet arising from public use of GWF's Green Web APIs.

*&#42; The "at least" part refers to two areas of GWF's digital estate, OTS & Open Source Software and SaaS, that are likely to have caused emissions but we lacked sensible data to make any kind of estimate.*

<div class="gwf-results-table"></div>

| Category | Carbon emissions<br/>kgCO<sub>2</sub>e/year | as % | Notes |
| --- | --- | --- |  --- | 
| Upstream Emissions | 186 | 38% | |
| [OTS and Open Source Software](/projects/green-web-foundation/upstream#software) | 0 | 0% | No data |
| [Employee Hardware](/projects/green-web-foundation/upstream#employee-hardware) | 186 | 38% | Detailed estimate - high confidence |
| [Networking and Infrastructure Hardware](/projects/green-web-foundation/upstream#networking-and-infrastructure-hardware) | 0 | 0% | High level estimate - medium confidence |
| [Server and Storage Hardware](/projects/green-web-foundation/upstream#servers-and-storage-hardware) | <span class="text-charcoal-300">0</span> | <span class="text-charcoal-300">0%</span> | <span class="text-charcoal-300">n/a</span> |
| Direct Operational Emissions | 156 | 31% | |
| [Employee Devices](/projects/green-web-foundation/operational#employee-devices) | 116 | 23% | Detailed estimate - high confidence |
| [Networking and Infrastructure](/projects/green-web-foundation/operational#networking-and-infrastructure) | 40 | 8% | High level estimate - medium confidence |
| [Servers and Storage](/projects/green-web-foundation/operational#servers-and-storage) | <span class="text-charcoal-300">0</span> | <span class="text-charcoal-300">0%</span> | <span class="text-charcoal-300">n/a</span> |
| [Generators](/projects/green-web-foundation/operational#generators) | <span class="text-charcoal-300">0</span> | <span class="text-charcoal-300">0%</span> | <span class="text-charcoal-300">n/a</span> |
| Indirect Operational Emissions | 27 | 5% | |
| [Cloud Services](/projects/green-web-foundation/operational#cloud-services) | 27 | 5% | Mix of high level and detailed estimates - low to medium confidence |
| [SaaS](/projects/green-web-foundation/operational#saas-services) | 0 | 0% | No data |
| [Managed Services](/projects/green-web-foundation/operational#managed-services) | 0 | 0% | High level estimate - medium confidence |
| Downstream Emissions | 127 | 26% | |
| [End-User Devices](/projects/green-web-foundation/downstream#end-user-devices) | 117 | 24% | High level estimate - low confidence |
| [Network Data Transfer](/projects/green-web-foundation/downstream#network-data-transfer) | 10 | 2% | High level estimate - medium confidence |
| Total | 496 kgCO<sub>2</sub>e/year | 100% |

[To the top](#top)

---

## Key insights

### There is a serious lack of data and transparency from suppliers

Finding publicly available emissions estimates data for common software is basically impossible. In two areas, [OTS and Open Source Software](/projects/green-web-foundation/upstream#software) and [SaaS](/projects/green-web-foundation/operational#saas-services), we didn't manage to find any kind of public data for a single supplier to base an estimate on. This means we've got gaps in our understanding for the following: Django, Wordpress, Zoom, Chrome, Firefox, GitHub, NPM, Google workspaces (GDrive and Calendars), Trello, Zulip, Miro, Brevo, Sentry, 1password, 34SP (WordPress hosting and emails).

For the cloud services category, things were a little more forthcoming. We were able to get data relating to GWF's spend based on actual usage and info about the specific server hardware being used. That gave us some key metrics from which we produced our own estimates using other publicly available data from the [Cloud Carbon Footprint tools](resources#cloud-carbon-footprint-ccf).

This whole process would be a lot easier if suppliers of digital services provided carbon estimates to their customers based on their usage as standard. In an ideal world a customer wouldn't have to make a special request for this data. It would be as easy to find as billing data and the methodologies and assumptions would completely transparent, not treated as trade secrets.

The industry appears to be in a chicken and egg situation - everyone is reliant on each other's data but no-one wants to go first. We'd argue that the world's most valuable companies, the Big Tech companies, could spare some resources to do this if they really wanted to. What will it take for the Big Tech companies to put the interests of a liveable planet first and come together to bust through these issues?

Without key suppliers getting off the starting blocks and conducting their own digital carbon estimates, even at a high, imperfect level like we've done here, the industry remains stuck.

### Employee hardware is more significant than originally assumed

Everyone working on the project expected employee hardware emissions to be large. But no-one would have guessed it would turn out as 69% of the overall amount. This equates to 342 kgCO<sub>2</sub>e/year.

How confident can we be in the 69% figure? Is it to be trusted? The **short answer** is yes. We think it's *good enough* to demonstrate relative scale and support telling a story around the larger than expected impact of employee hardware versus other parts of the known estate.

The **longer answer** is that we recognise there are a multitude of ways you can poke holes in these estimates. Here's a few we can think of:

* The 69% part is relative to the other categories in the estate. For those categories outside of the employee hardware grouping that we attempted to estimate, we only have medium or low confidence in the methodologies we used. When there are better ways to estimate these parts, the figures might change and the relative percentage of employee hardware may go up or down in response. On top of that, we couldn't produce any kind of estimate for OTS & Open Source Software and SaaS. Once we're able to do that, its likely the relative percentage of employee hardware will go down.
* The 342 kgCO<sub>2</sub>e/year figure comes from a snapshot in time. 2023 turns out to be a year that GWF ended up bearing responsibility for the emissions of four purchased machines (two refurbed and two new), but no monitor purchases. Is this an average year or an outlier? We can't know confidently until we estimate GWF's digital estate for a few more years.
* The 342 kgCO<sub>2</sub>e/year figure itself is only an estimate. The accuracy of any estimate should always be viewed with a pinch of salt. It is not a precise measurement. However, we rated the methodologies we used for the two largest parts of this calculation with high confidence. The third methodology with medium confidence. Is there room for improvement in these methodologies? Absolutely. Is there room for improvement in the [PCF](/glossary#product-carbon-footprint-pcf) datasheets produced, or in many cases not produced, by hardware manufacturers? Absolutely. *(Looking at you printer manufacturers.)* We look forward to seeing more organisations run through this process and publicly publish they way they did it so our industry can learn and grow together. 

### Our monitors probably deserve more attention, especially the big ones.

If you'd asked the project team ahead of the project which represented more emissions, laptops or monitors, we'd have all guessed laptops. But surprisingly the data we found shows the organisation's monitors are estimated to produce more emissions on a unit by unit basis. This is true both for the embodied and usage emissions.

To illustrate this, below we summarise the estimates found in manufacturer [PCF](/glossary#product-carbon-footprint-pcf) datasheets for laptops and monitors. These are the estimated emissions for a new unit, and before we factor in what percentage of these emissions are allocated to GWF.

| **Device type** | **Estimate category** | **Lowest value** | **Highest value** |
| --- | --- | --- | --- |
| Laptops | Embodied (new only) - kgCO<sub>2</sub>e | 115 | 264 |
| Monitors | Embodied (new only) - kgCO<sub>2</sub>e | 110 | 435 |
| Laptops | Usage - kgCO<sub>2</sub>e/year | 4.48 | 18.29 |
| Monitors | Usage - kgCO<sub>2</sub>e/year | 11.59 | 61.65 |

Of note, is that the bigger and more high definition the monitor the greater the impact. Also some GWF staff have multiple monitors stationed in their various work locations. It's not always a 1:1 relationship like laptops appear to be. Plus some members of the technical team may use two monitors when doing some types of work. These factors mean an even greater impact from monitors. 

This raises a question: are the emissions from monitors getting enough attention? Is there as much effort going into reducing the impact by manufacturers and users alike, say compared to laptops, or even software iteself. For example Europe's eco-design legislation does not cover monitors <span style="color: red;"> I need to fact check this some more, it may well be wrong. Was reading this - https://repair.eu/news/new-ecodesign-for-sustainable-products-regulation-espr-what-does-it-mean-for-repair/ - HAN</span>

Which leads us to our next insight...


### The digital sustainability industry might be over indexing on green coding too much.

As the digital sustainability industry starts to take off, there is a risk that it becomes synonynous with only building more efficient software. A practice commonly referred to as "green coding" or "green software engineering". Whilst this is definitely an important part of digital sustainability, there is more to it than that. 

If all the improved green software we produced fails to lead to us using less resources (energy, water, rare raw materials) over time and reducing the  or seeing our overall use of electricity drop 

 But our estimates lead us to think a more impactful place to start looking is possibly less glamourous, it's a procurement problem rather than an engineering one. 

Is greener hardware, such as remanufactured, refurbished and second-hand, getting enough attention inside digital sustainability circles? This is also a relevant question for data centers who typically refresh hardware every five years. But recent data shows this is becoming shorter due to technological improvements. 








[To the top](#top)

---

## Context - why this project?

At the beginning of 2024, Green Web Foundation (GWF) set a goal to estimate the carbon emissions of all the organisation's activities for the first time. Given the GWF team's knowledge of estimating digital emissions, the team decided to split the project into two:

1. Emissions from their digital estate.
2. Emissions arising from other business activities such as travel, office estate and other non-digital operational activities.

Also around the start of 2024, the first version of the open-source [Technology Carbon Standard](https://www.techcarbonstandard.org/) (TCS) was [launched by Scott Logic](https://blog.scottlogic.com/2024/02/13/announcing-the-proposed-technology-carbon-standard.html). The key goal of the TCS is to

> provide a standardised method for organisations to map, measure, and mitigate the environmental impacts of their technology.

GWF and Scott Logic connected through [Green Tech South West](https://greentechsouthwest.org/), a meetup community based in the UK's South West region, where both organisations have team members based. As long-term advocates for the benefits of open-source, we agreed to partner up and form this project. 

The project set out to use the TCS framework to estimate GWF's digital estate, fully documenting the decisions, methodology and learning points as we went so others could learn from and hopefully build on our experience. This project write-up is the result of this collaboration.

[To the top](#top)

---

## Partnering organisations and team

<div class="flex gap-8">

<div class="basis-1/2">

<a href="https://www.thegreenwebfoundation.org/" target="_blank"><img style="height:60px" src="/assets/images/projects/GWF/GWF-logo.svg"></a>

<a href="https://www.thegreenwebfoundation.org/" target="_blank">Green Web Foundation website</a>

<p>Project team: <a href="https://www.linkedin.com/in/hanopcan/">Hannah Smith</a>, <a href="https://www.linkedin.com/in/mrchrisadams/">Chris Adams</a>, <a href="https://www.linkedin.com/in/fershad/">Fershad Irani</a></p>

<p>Green Web Foundation is a european non-profit organisation working towards a fossil-free internet by 2030. We maintain the world’s largest <a href="https://www.thegreenwebfoundation.org/green-web-datasets/">open dataset of websites</a> that run on green energy. We offer <a href="https://www.thegreenwebfoundation.org/tools/">open source tools</a> to manage the environmental impact of digital services. And we support <a href="https://www.thegreenwebfoundation.org/fellowships">movement leaders and policymakers</a> to effectively frame the conversation when advocating for a sustainable and just internet.</p>

</div>

<div class="basis-1/2">

<a href="https://www.scottlogic.com/" target="_blank"><img style="height:60px" src="/assets/images/scott-logic-primary-no-tagline-full-color-rgb.svg"></a>

<p><a href="https://www.scottlogic.com/" target="_blank">Scott Logic website</a></p>

<p>Project team: David Rees, James Camilleri</p>

<p>Scott Logic transforms clients’ businesses by engineering innovative, bespoke software solutions that drive measurable value, whilst also enhancing the core strengths of their technology delivery capability.</p>

<p>We advise on and implement sustainable solutions across a series of sustainability themes. We go beyond just green and carbon considerations to design and build software that balances the many trade-offs – including impacts to ongoing software costs, impacts to users, and security and risk considerations – while aligning sustainability with organisational quality goals.</p>

</div>
</div>

[To the top](#top)

---
[Next - Assumptions](assumptions)

