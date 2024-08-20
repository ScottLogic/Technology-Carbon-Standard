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
- [Key insights summary](#key-insights)
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

<span style="color:red;">Once insights are finished summarise in bullet point list here.</span>

[Insights full write-up](Insights)

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
[Next - Insights](Insights)

