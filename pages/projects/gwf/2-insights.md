---
layout: projects
title: Green Web Foundation
permalink: /projects/green-web-foundation/insights
project: gwf
---

{: #top}

# Key insights

We've summarised the key points of interest arising from estimating our digital estate using the TCS. We also share the actionable opportunities that we believe will address some of the key sticking points that we've experienced in this process, many of which require systemic change to the way the digital industry operates.

*Quick note: When you see words like "we" and "us" in this section, please assume it's referring to the Green Web Foundation's perspective.*


## Summary of insights

1. [Digital technology is not impact free and reductions are possible](#insight-1)

2. [TCS helps fill key gaps in estimating digital estate emissions](#insight-2)

3. [TCS can't cover everything needed to produce estimates for digital products or services](#insight-3)

4. [The digital sustainability industry needs to look beyond green coding to influencing impactful structural change](#insight-4)

5. [There's a serious lack of data and transparency from suppliers](#insight-5)

6. [Employee hardware is more significant than originally assumed, especially monitors](#insight-6)

---

{: #insight-1}
## 1. Digital technology is not impact free and reductions are possible

**Actionable opportunity**

**It's valuable for organisations to take the time to measure their digital estate emissions, and openly share them. This helps to dispel the myth that digital is not impact free both internally within teams and around the wider industry. It also supports education around what steps can be taken to reduce impact.**

**The findings**

There's still a prevalent misconception that the digital technologies sector is green by default, and there's no carbon impact associated with using digital tools. Check the appendix for our [insight into why we think that might be](appendix/#green-by-default).

But we're starting to know better. There are now examples of organisations having a go at estimating their overall impact from digital, and for many it's surprising. Recent studies by digitally-enabled service based organisations, like [Salesforce](https://podcast.greensoftware.foundation/e/vnwrkjm8-the-week-in-green-software-net-zero-cloud) and [ABN Amro](https://www.abnamro.com/en/information/sustainability-reporting-and-publications?selectedTabs=Reporting), estimate that digital accounts for 40 - 50% of their organisation’s greenhouse gas emissions. Scott Logic's [2023 Environmental Impact Report](https://www.scottlogic.com/news/making-good-progress-towards-net-zero) details their digital emissions for the first time estimated at 158 tonnes CO<sub>2</sub>e, 15% of their organisation's total.

Our own 2023 digital estate emissions are [*at least* 496 kgCO<sub>2</sub>e](overview#estimates-summary). To put this figure into perspective it's estimated the average cow raised for beef in Scotland emits around [2,600 kgCO<sub>2</sub>e per year](https://www.gov.scot/publications/resas-climate-change-evidence-dairy-farmer-led-group/pages/3/).  An economy class return flight from [London to Berlin is 523 kgCO<sub>2</sub>](https://co2.myclimate.org/en/portfolios?calculation_id=7289065). If taken in isolation, you might continue to conclude that the digital impact is too small work on. But there are a couple of key things to bear in mind.

**We're very small.** We're a six person team operating a lean non-profit organisation, with a relatively straightforward set of digital products. We'd expect our emissions estimate to be small. Unfortunately we haven't done the rest of our 2023 emissions reporting yet to understand the relative percentage of that. But our napkin based figures suggest it'll be less than 10%, and that's mainly due to our travel.

**We've already optimised everything we can**. We think we've exhausted the most *impactful* commonly cited green coding guidance. We've chosen our hosting suppliers carefully based on a number of criteria such as use of renewable energy, transparency and quality of service. We've optimised our digital services as much as feasible. Our websites are lean, code is efficient enough and we have high utilisation rates on our cloud services. We monitor the impact of code changes on our Green Web Platform using the [Green Metrics tool](https://www.green-coding.io/projects/green-metrics-tool/). We're at a point where further code optimisation might be fun to do, but the gains aren't likely to reduce our estimates meaningfully. We have a BYOD policy for employee devices and purchase refurbed equipment when possible. For Saas and off the shelf software, we default to services that are open source. We would default to those with a verified, lower carbon estimate if we could. But the data isn't there to support that decision making yet, [more on that to come]((#insight-5)).

We don't know the *exact* reduction in estimated emissions from this effort as we don't have a before and after picture. In [our reducing impact](/reducing-impact) section we modelled reductiions arising from two areas, employee hardware and cloud services. We found that adjustments in just those two areas are estimated to have reduced our estimates by 268 kgCO<sub>2</sub>e. So without making those efforts, our estimates would have been *at least* 764 kgCO<sub>2</sub>e. **That's roughly a one third reduction.**

We recognise that making changes to our own practices is easier for us compared to larger organisations. Such organisations will have the same problems to address but at much more extreme rates of complexity, speed and cost. But that means the opportunities for making savings are likely to be greater too. A one third reduction from a much bigger number is not a trivial impact to make.


[To the top](#top)

---

{: #insight-2}
## 2. TCS helps fill key gaps in estimating digital estate emissions

**Actionable opportunity**

**More organisations should publicly show their approaches, calculations and concerns *in detail*. This supports building the field and filling the guidance gap for estimating digital estate emissions using best practices. This is just as applicable for organisations using the TCS or other standards.**

**The findings**

When we set [our goal to estimate GWF's emissions for 2023](overview#context---why-this-project) we reviewed what [solutions for small businesses exist](https://ib1.org/ecosystem/2024-carbon-reporting-solutions-report/) (thanks Icebreaker One!). Looking at how the most popular SaaS tools approached producing *digital estate* estimates, we saw that the methodologies revolved around using financial spend as the key metric. But frustratingly these approaches seemed opaque beyond the high level. 

We know from our own experience that spend based metrics are best viewed as a starting point. They're riddled with problems and don't lend any meaningful assistance when considering how to reduce impact as many commercial models rely on free, or reduced, offerings. We felt there's enough research out there by now that we can make the next iteration forward and improve upon this. Whilst of course embracing the concept of [progress over perfection](https://branch.climateaction.tech/issues/issue-8/).

Therefore we saw that openly test driving the TCS approach in collaboration with the Scott Logic team was a concrete way to address:

- the relative lack of detailed guidance on estimating an entire digital estate.
- approaches for how you can move beyond spend as a metric (when open-source data supports that).

[To the top](#top)

---

{: #insight-3}
## 3. TCS can't cover everything you need to produce estimates for digital products or services 

**Actionable opportunity**

**Organisations should make the scope boundaries they use abundantly clear when producing data about the emissions associated with a digital product or service they provide.**

**The findings**

This part is no secret - TCS make this completely clear on the [homepage](/). But it's important enough to reiterate. 

Out of scope from TCS are other key things that any organisation needs such as buildings, travel and overheads. All of these things also contribute to an organisation's emissions.

For example, if someone were to ask us to estimate the emissions associated with our [Green Web Dataset](https://www.thegreenwebfoundation.org/tools/green-web-dataset/), it would be remiss of us not to factor in these other parts of our business. We know we need to have office space, travel and manage other necessary overheads of our organisation, in order to develop and maintaining our open source tools. Excluding these items from our reporting scope would seem remiss.

Therefore, the TCS alone is not enough if you want to produce an estimate for a given digital product or service. It's best seen as a subset, a *vital* subset, of the work that's needed.

[To the top](#top)

---

{: #insight-4}
## 4. The digital sustainability industry needs to look beyond green coding to influencing impactful structural change

**Actionable opportunity**

**We need more investment into creating palatable ways for senior leaders to marshall resources into initiatives that go beyond their immediate organisation, and instead contribute to systemic changes.**

**The findings**

We believe we've exhausted the available guidance on how to make *impactful* changes in our own organisational context. Mostly this has involved our own individual efforts around efficiency or choosing different suppliers. We've changed what we feasibly can. What can we, or another organisation in our position, do next?

It's widely acknowledged that the kind of climate action we need happens at [both the individual and system level](https://www.forbes.com/sites/briankateman/2022/02/15/to-save-the-planet-we-need-systemic-change-but-your-individual-choices-still-matter/). We want to see more of this in the digital industry, and more tech firms being brave enough to support system change. Heroic individual actions from any one firm is not enough to counter the harms from digital's growing electricity consumption. 

We see a risk that as the digital sustainability industry starts to take off, it becomes synonynous with only building more efficient software. This is a practice commonly referred to as "*green coding*" or "*[green software](glossary#green-software)*". This is definitely an important part of digital sustainability and a skill we want to foster. Its one of the more palatable things to buy into at organisation leadership level because it immediately impacts organisation emission estimates and often profitability. A great starting point. But not enough.

If all the improved "green software" we work hard to produce fails to lead us to causing less harm to people over time, then we've somewhat missed the main challenge. Chris Adams from our team, has written a short personal blog on this: [Being in the Green Driving Foundation](https://rtl.chrisadams.me.uk/2024/05/being-in-the-green-driving-foundation/).

The biggest impacts come from sources other than code. It's more often more to do with infrastructure, hardware and how we share data. Things like where and how we site data centers, the carbon intensity of energy grids around the world and unhealthy practices like [planned obsolescence](https://en.wikipedia.org/wiki/Planned_obsolescence). We need to find a way to mobilise more leadership teams to use their resources to **affect structural change**. We get into some specifics in insights 5 and 6.

[To the top](#top)

---

{: #insight-5}
## 5. There's a serious lack of data and transparency from suppliers

**Actionable opportunities**

**Organisations can push suppliers to provide machine readable, publicly verifiable emission estimate data about their operations. Organisations can also actively support a number of non-profit organisations working to encourage disclosure of assumptions in digital services. Examples include [Boavista](https://boavizta.org/en), [Green Software Foundation](https://greensoftware.foundation/), [Sustainable Digital Infrastructure Alliance](https://sdialliance.org/), and of course ourselves at [Green Web Foundation](https://www.thegreenwebfoundation.org/) through our [carbon.txt project](https://www.thegreenwebfoundation.org/news/carbon-txt).**

**The findings**

Finding publicly available emissions estimates data for common software is basically impossible. In two areas, [OTS and Open Source Software](/projects/green-web-foundation/upstream#software) and [SaaS](/projects/green-web-foundation/operational#saas-services), we didn't manage to find any kind of public data for a single supplier to base an estimate on. This means we've got gaps in our understanding for the following: Django, Wordpress, Zoom, Chrome, Firefox, GitHub, NPM, Google workspaces (GDrive and Calendars), Trello, Zulip, Miro, Brevo, Sentry, 1password, 34SP (WordPress hosting and emails).

To be clear, we're not trying to throw shade at these suppliers. We know this stuff is an emerging practice, and it's hard. But nonetheless there is a glaring gap here at the moment.

For the cloud services category, things were a little more forthcoming. We were able to get data relating to spend based on actual usage and info about the specific server hardware being used. That gave us some key metrics from which we produced our own estimates using other publicly available data from the [Cloud Carbon Footprint tools](resources#cloud-carbon-footprint-ccf). But we know that spend is not really a metric we want to use. 

This could evolve if, as standard, suppliers of digital services provided machine readable, publicly verifiable emission estimate data about their operations as whole. Methodologies and assumptions would be completely transparent, not treated as trade secrets. In an ideal world, a customer wouldn't have to make a special request for this data based on their usage. It would be as easy to find as billing data.

The industry appears to be in a chicken and egg situation - everyone is reliant on each other's data but no-one wants to go first. Thankfully, the EU is introducing several sets of legislation aimed at breaking this stalemate. Legislation like the [Corporate Sustainability Reporting Directive (CSRD)](https://plana.earth/policy/corporate-sustainability-reporting-directive-csrd) literally says:

> Users of sustainability information increasingly expect such information to be findable, comparable and machine-readable in digital formats. Member States should be able to require that undertakings subject to the sustainability reporting requirements of Directive 2013/34/EU make their management reports available on their websites, free of charge to the public. ([clause 55](https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX:32022L2464))

[To the top](#top)

---

{: #insight-6}
## 6. Employee hardware is more significant than originally assumed, especially monitors

**Actionable opportunities**

**Organisations can make a considerable impact on their digital estate emission estimates by choosing to minimise unnecessary hardware and use what they do need efficiently. Procurement departments can prioritise refurbed, remanufactured or reused employee hardware and shortly, consider the ecodesign ratings on specific product groups. As an added bonus, organisations can also choose to support non-profit campaign groups like [repair.eu](https://repair.eu/).**

**The findings**

Everyone working on the project expected employee hardware emissions to be large. But no-one would have guessed it would turn out as 69% of the overall amount. This equates to 342 kgCO<sub>2</sub>e/year.

How confident can we be in the 69% figure? Is it to be trusted? The **short answer** is yes. We think it's *good enough* to demonstrate relative scale and support telling a story around the larger than expected impact of employee hardware versus other parts of the known digital estate.

The **longer answer** is that we recognise there are a multitude of ways you can poke holes in these estimates. Here's a few we can think of:

* The 69% part is relative to the other categories in the estate. Outside of the employee hardware grouping, we only have low to medium confidence in our chosen methodologies. When there are better ways to estimate these parts, the figures might change and the relative percentage of employee hardware may go up or down in response. On top of that, we couldn't produce any kind of estimate for OTS & Open Source Software and SaaS. Once we're able to do that, its likely the relative percentage of employee hardware will go down.
* The 342 kgCO<sub>2</sub>e/year figure comes from a snapshot in time. 2023 turns out to be a year that GWF ended up bearing responsibility for the emissions of four purchased machines (two refurbed and two new), but no monitor purchases. Is this an average year or an outlier? We can't know confidently until we estimate GWF's digital estate for a few more years.
* The 342 kgCO<sub>2</sub>e/year figure itself is only an estimate. The accuracy of any estimate should always be viewed with a pinch of salt. It is not a precise measurement. However, we rated the methodologies we used for the two largest parts of this calculation with high confidence. The third methodology with medium confidence. Is there room for improvement in these methodologies? Absolutely. Is there room for improvement in the [PCF](/glossary#product-carbon-footprint-pcf) datasheets produced, or in many cases not produced, by hardware manufacturers? Absolutely. *(Looking at you printer manufacturers.)*

What's really noteworthy about this section is the impact that buying refurbed, remanufactured or reused hardware has on estimates. [We modelled the impact of our laptop choices](reducing-impact#employee-hardware) and found that simply by choosing a refurbed machine over a new one, you can save nearly 85% of the carbon emissions.

Another surprise was what the numbers showed us about the impact of monitors. Again, if you'd asked the project team at the start which represented more emissions - laptops or monitors - we'd have all guessed laptops. But surprisingly the data we found shows monitors are estimated to produce more emissions on a unit by unit basis. This is true both for the embodied and usage emissions.

To illustrate this, below we summarise the estimates found in manufacturer [PCF](/glossary#product-carbon-footprint-pcf) datasheets for the laptops and monitors we actually use.

**Embodied (new only) - kgCO<sub>2</sub>e**

| **Device type** | **Lowest value** | **Highest value** |
| --- |  --- | --- |
| Laptops | 115 | 264 |
| Monitors | 110 | 435 |
| Difference | -5 = -4%  | 171 = 65% |

**Usage - kgCO<sub>2</sub>e/year**

| **Device type** | **Lowest value** | **Highest value** |
| --- |  --- | --- |
| Laptops | 4.48 | 18.29 |
| Monitors | 11.59 | 61.65 |
| Difference | 7.11 = 159%  | 43.36 = 237% |

<p style="text-align:center; font-style: italic;">For both tables, these estimated emissions are before we factor in what percentage of these emissions are allocated to GWF.</p>

What this shows is that for embodied carbon, the difference between laptops and monitors is between -4% and 65%. For usage, the difference is much larger. It's between 159% and 237%. Our smallest monitor creates around 1.5 times more emissions than our smallest laptop when running for the same length of time. There's a nearly a 2.5 times difference between running our most powerful laptop and largest monitor.

This raises an important question. What can we really do to minimize the impact of our employee devices beyond buying differently and using them mindfully? We accept that we do need a certain level of equipment to ensure our team are safe and productive. Once you've taken the obvious actions what's left? This takes us into the realm of systemic change, and the promise of the [EU's new eco-design legislation](https://commission.europa.eu/energy-climate-change-environment/standards-tools-and-labels/products-labelling-rules-and-requirements/sustainable-products/ecodesign-sustainable-products-regulation_en) that came into force in July 2024.

[To the top](#top)

---
[Next - Assumptions](assumptions)