---
layout: projects
title: Green Web Foundation
permalink: /projects/green-web-foundation/overview
project: gwf
---

{: #top}

# Overview

This project collaboration between [Green Web Foundation](https://www.thegreenwebfoundation.org/) and [Scott Logic](https://www.scottlogic.com/) ran in mid 2024. It trialled using an early version of the TCS framework to estimate the carbon emissions arising from Green Web Foundation's digital estate, using publicly available data. This write-up provides full documentation of the decisions, methodology and learning points so others can learn from what we experienced.

- [Estimates summary](#estimates-summary)
- [Key insights summary](#key-insights)
- [Why do this project?](#context---why-this-project)
- [Partnering organisations and team](#partnering-organisations-and-team)

---

## Estimates summary

**Green Web Foundation's digital estate is estimated to be responsible for *at least*&#42; 496 kgCO<sub>2</sub>e in 2023.**

![GWF Emissions Treemap](/assets/images/projects/GWF/gwf-emissions-treemap.png)
<p class="italic text-center">Visual summary of carbon equivalent emission estimates for Green Web Foundation 1st Jan - 31st Dec 2023.</p>

To put this into perspective it's estimated [the average cow raised for beef in Scotland emits in the region of 2,600 kgCO<sub>2</sub>e per year](https://www.gov.scot/publications/resas-climate-change-evidence-dairy-farmer-led-group/pages/3/).  An economy class return flight from [London to Berlin is 523 kgCO<sub>2</sub>](https://co2.myclimate.org/en/portfolios?calculation_id=7289065).

### Results summary by category area

By far the biggest area of estimated emissions comes from Green Web Foundation's (GWF) purchase and use of employee hardware eg laptops, monitors, printers and office internet. This accounts for 69% of the emissions. 38% arising from the purchase of employee hardware, 23% arising from the use of it and a further 8% from running internet in GWF office spaces. 

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

We've summarised the key learning points arising from estimating our digital estate using the TCS. We also share the actionable opportunities that we believe will address some of the key sticking points we've experienced in this process.

[1. Digital technology is not impact free and reductions are possible](#insight-1)

It's valuable for organisations to take the time to measure their digital estate emissions, and openly share them. This helps to dispel the myth that digital is not impact free both internally within teams and around the wider industry. It also supports education around what steps can be taken to reduce impact

[2. TCS helps fill key gaps in estimating digital estate emissions](#insight-2)

More organisations should publicly show their approaches, calculations and concerns *in detail*. This supports building the field and filling the guidance gap for estimating digital estate emissions using best practices. This is just as applicable for organisations using the TCS or other standards.

[3. TCS can't cover everything needed to produce estimates for digital products or services](#insight-3)

Organisations should make the scope boundaries they use abundantly clear when producing data about the emissions associated with a digital product or service they provide.

[4. The digital sustainability industry needs to look beyond green coding to influencing impactful structural change](#insight-4)

We need more investment into creating palatable ways for senior leaders to marshall resources into initiatives that go beyond their immediate organisation, and instead contribute to systemic changes.

[5. There's a serious lack of data and transparency from suppliers](#insight-5)

Organisations can push suppliers to provide machine readable, publicly verifiable emission estimate data about their operations. Organisations can also actively support a number of non-profit organisations working to encourage disclosure of assumptions in digital services. Examples include [Boavista](https://boavizta.org/en), [Green Software Foundation](https://greensoftware.foundation/), [Sustainable Digital Infrastructure Alliance](https://sdialliance.org/), and of course ourselves at [Green Web Foundation](https://www.thegreenwebfoundation.org/) through our [carbon.txt project](https://www.thegreenwebfoundation.org/news/carbon-txt).

[6. Employee hardware is more significant than originally assumed, especially monitors](#insight-6)

Organisations can make a considerable impact on their digital estate emission estimates by choosing to minimise unnecessary hardware and use what they do need efficiently. Procurement departments can prioritise refurbed, remanufactured or reused employee hardware and shortly, consider the ecodesign ratings on specific product groups. As an added bonus, organisations can also choose to support non-profit campaign groups like [repair.eu](https://repair.eu/).

[Insights full write-up](Insights)

[To the top](#top)

---

## Context - why this project?

At the beginning of 2024, Green Web Foundation (GWF) set a goal to estimate the carbon emissions of all the organisation's activities for the first time. The Given the GWF team's knowledge of estimating digital emissions, the team decided to split the project into two:

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

