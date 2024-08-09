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

Getting data for the emissions associated with GWF's use of very common software was difficult. Basically impossible. In two areas, [OTS and Open Source Software](/projects/green-web-foundation/upstream#software) and [SaaS](/projects/green-web-foundation/operational#saas-services), we didn't manage to find any public data for a single supplier to base an estimate on. We failed to produce a high level estimate, even with with low confidence for the following: Django, Wordpress, Zoom, Chrome, Firefox, GitHub, NPM, Google workspaces, specifically GDrive and Calendars, Trello, Zulip, Miro, Brevo, Sentry, 1password, 34SP (specifically WordPress hosting).

On the cloud services level, we were able to get some data to work with such as fairly granular spend based data. Also some information about the specific hardware running on the machines we were using. But no granular information about the server's embodied carbon, or carbon emissions estimates from GWF's suppliers themselves.

We see the industry in a chicken and egg situation. Everyone is reliant on each other's data but no-one wants to go first. It would be great to see some of the Big Tech companies come together to bust through some of these issues. You can certainly argue that the world's most valuable companies could spare some resources to do this if they really wanted to.

Essentially without suppliers conducting their own digital carbon estimates, even at a high level like we've done here, the industry remains stuck.

### Employee hardware is much more significant than originally assumed

Everyone in the project expected employee hardware emissions to be large. But no-one would have guessed it would turn out as 69% of the overall amount. This equates to 342 kgCO<sub>2</sub>e/year.

How confident can we be in the 69% figure? Is it to be trusted? The **short answer** is yes. We think it's *good enough* to demonstrate the relative scale and support telling a story around the larger than expected impact of employee hardware versus other parts of the known estate.

The **longer answer** is that we recognise there a multitude of ways you can poke holes in our numbers. Here's a few we can think of:

* The 342 kgCO<sub>2</sub>e/year figure itself is only an estimate. The accuracy of any estimate should always be viewed with a pinch of salt and be considered as an indication of relative scale rather than a precise measurement. However, we rated the methodologies we used for the two largest parts of this calculation with high confidence. The third methodology with medium confidence. Is there room for improvement in our methodologies? Absolutely. Is there room for improvement in the [PCF](/glossary#product-carbon-footprint-pcf) datasheets produced, or in many cases not produced, by hardware manufacturers? Absolutely. *(Looking at you printer manufacturers.)* We look forward to seeing more organisations run through this process and publically publish they way they did it so our industry can learn and grow together. 
* The 342 kgCO<sub>2</sub>e/year figure comes from a snapshot in time. 2023 turns out to be a year that GWF ended up bearing responsibility for the emissions of four purchased machines (two refurbed and two new), but no monitor purchases. Is this an average year? Possibly, but we can't know confidently until we run the reporting for a few more years.
* The 69% part is relative to the other categories in the estate. All of these other ones that we attempted are rated as medium or low confidence. When there are better ways to estimate these parts, the figures might change and the relative percentage of employee hardware may go up or down as a response. On top of that the software element is not a full picture yet as we couldn't produce any kind of estimate for OTS & Open Source Software and SaaS.

### Our monitors probably deserve more attention, especially the big ones.

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

