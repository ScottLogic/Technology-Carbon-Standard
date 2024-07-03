---
layout: projects
title: Green Web Foundation
permalink: /projects/green-web-foundation/overview
project: gwf
---

{: #top}

# Overview

This project, a collaboration between [Green Web Foundation](https://www.thegreenwebfoundation.org/) and [Scott Logic](https://www.scottlogic.com/), uses the TCS framework to estimate Green Web Foundation's digital estate. This write-up provides full documentation of the decisions, methodology and learning points so others can learn from what we experienced.

- [Results summary](#results-summary)
- [Why do this project?](#context---why-this-project)
- [Partnering organisations and team](#partnering-organisations-and-team)

## Results summary

**This project estimates that in 2023, Green Web Foundation's (GWF) digital estate was responsible for 601 kgCO<sub>2</sub>e.**

The biggest area of emissions by far, over three quarters, comes from the purchase and use of employee hardware eg laptops, monitors, printers and office internet. This accounts for 76% of the emissions - 42% arising from the purchase of employee hardware, 27% arising from the use of it and a further 7% from running internet in our office spaces. 

Next we estimated that emissions arising from the end-use of our digital services, such as our websites and Green Web Platform, account for 17% of the emissions. 

Lastly, GWF's use of cloud services accounts for 5%. The remaining 2% comes from data transfer across the internet arising from public use of GWF's Green Web APIs.

![GWF Emissions Treemap](/assets/images/projects/GWF/gwf-emissions-treemap.png)
<p class="italic text-center">Visual summary of carbon emission estimates for Green Web Foundation 1st Jan - 31st Dec 2023.</p>

<div class="gwf-results-table"></div>

| Category | Carbon emissions<br/>kgCO<sub>2</sub>e/year | as % | Notes |
| --- | --- | --- |  --- | 
| Upstream Emissions | 252 | 42% | |
| [OTS and Open Source Software](/projects/green-web-foundation/upstream#software) | <span class="text-charcoal-300">0</span> | <span class="text-charcoal-300">0%</span> | No data |
| [Employee Hardware](/projects/green-web-foundation/upstream#employee-hardware) | 252 | 42% | Detailed estimate - high confidence |
| [Networking and Infrastructure Hardware](/projects/green-web-foundation/upstream#networking-and-infrastructure-hardware) | <span class="text-charcoal-300">0</span> | <span class="text-charcoal-300">0%</span> | High level estimate - medium confidence |
| [Server and Storage Hardware](/projects/green-web-foundation/upstream#servers-and-storage-hardware) | <span class="text-charcoal-300">0</span> | <span class="text-charcoal-300">0%</span> | <span class="text-charcoal-300">n/a</span> |
| Operational Emissions | 234 | 39% | |
| [Employee Devices](/projects/green-web-foundation/operational#employee-devices) | 162 | 27% | Detailed estimate |
| [Networking and Infrastructure](/projects/green-web-foundation/operational#networking-and-infrastructure) | 40 | 7% | High level estimate |
| [Servers and Storage](/projects/green-web-foundation/operational#servers-and-storage) | <span class="text-charcoal-300">0</span> | <span class="text-charcoal-300">0%</span> | <span class="text-charcoal-300">n/a</span> |
| [Generators](/projects/green-web-foundation/operational#generators) | <span class="text-charcoal-300">0</span> | <span class="text-charcoal-300">0%</span> | <span class="text-charcoal-300">n/a</span> |
| [Cloud Services](/projects/green-web-foundation/operational#cloud-services) | 32 | 5% | Detailed estimate |
| [SaaS](/projects/green-web-foundation/operational#saas-services) | <span class="text-charcoal-300">0</span> | <span class="text-charcoal-300">0%</span> | No data |
| [Managed Services](/projects/green-web-foundation/operational#managed-services) | <span class="text-charcoal-300">0</span> | <span class="text-charcoal-300">0%</span> | High level estimate |
| Downstream Emissions | 115 | 19% | |
| [End-User Devices](/projects/green-web-foundation/downstream#end-user-devices) | 105 | 17% | High level estimate |
| [Network Data Transfer](/projects/green-web-foundation/downstream#network-data-transfer) | 10 | 2% | High level estimate |
| Total | 601 kgCO<sub>2</sub>e/year | 100% |

### Key insights

<span style="color: red">Still need to go through the retro doc and pick out other key insights.</span>

* Whilst everyone in the project expected to see that the emissions from employee hardware be large, we were all shocked by the relative size compared to other activities. Especially surprising was how impactful monitors are compared to laptops. The industry is emphasising building greener software, but is greener hardware, such as remanufactured, refurbished and second-hand, getting enough attention?

* There was a big difference between our high-level and detailed estimates for employee hardware -> 656 kg vs 252 kg. Collecting the specific data was worth the time and effort for a small organisation like ours. However, we wonder whether there would be such a large gap between methodologies for larger organisations with more purchases each year.

* The impact of the cloud services segment is down to suppliers being located in regions of low carbon intensity.

* Getting data for upstream emissions for printers and software was very difficult. Without suppliers conducting their own digital carbon estimates, even at a high level, this is hard nut to crack.


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

<img style="height:60px" src="/assets/images/projects/GWF/GWF-logo.svg">

<a href="https://www.thegreenwebfoundation.org/">Green Web Foundation website</a>

<p>Project team: <a href="https://www.linkedin.com/in/hanopcan/">Hannah Smith</a>, <a href="https://www.linkedin.com/in/mrchrisadams/">Chris Adams</a>, <a href="https://www.linkedin.com/in/fershad/">Fershad Irani</a></p>

<p>Green Web Foundation is a european non-profit organisation working towards a fossil-free internet by 2030. We maintain the world’s largest <a href="https://www.thegreenwebfoundation.org/green-web-datasets/">open dataset of websites</a> that run on green energy. We offer <a href="https://www.thegreenwebfoundation.org/tools/">open source tools</a> to manage the environmental impact of digital services. And we support <a href="https://www.thegreenwebfoundation.org/fellowships">movement leaders and policymakers</a> to effectively frame the conversation when advocating for a sustainable and just internet.</p>

</div>

<div class="basis-1/2">

<p><span style="color: red;">Scott Logic logo</span></p>

<p><a href="https://www.scottlogic.com/">Scott Logic website</a></p>

<p>Project team: David Rees, James Camilleri</p>

<p><span style="color: red;">Add some blurb here?</span></p>



</div>
</div>

[To the top](#top)

---
[Next - Assumptions](assumptions)

