---
layout: projects
title: Green Web Foundation
permalink: /projects/green-web-foundation/insights
project: gwf
---

{: #top}

# Key insights

<span style="color:red;">
Summary:<br/>
*Data* refers to unanalyzed user observations<br/>
*Finding*s capture patterns among data points<br/>
*Insights* are the actionable opportunities based on research and business goals - what can we do about it?</span>

These key insights have been written by Green Web Foundation. When you see words like "we" and "us" in this section, please assume it's referring solely to Green Web Foundation's perspective. 

- TCS helps fill key gaps in estimating digital estate emissions
- TCS can't cover everything needed to produce estimates for digital products or services 
- There is a serious lack of data and transparency from suppliers
- Employee hardware is more significant than originally assumed, especially monitors
- The digital sustainability industry might be over indexing on green coding


## TCS helps fill key gaps in estimating digital estate emissions

When we set [our goal to estimate GWF's emissions for 2023](overview#context---why-this-project) we reviewed what [solutions for small businesses exist](https://ib1.org/ecosystem/2024-carbon-reporting-solutions-report/) (thanks Icebreaker One!). Looking at how the most popular SaaS tools approached producing *digital estate* estimates, we saw that the methodologies revolved around using financial spend as the key metric. But frustratingly these approaches seemed opaque beyond the high level. 

We know from our own experience that spend based metrics are best viewed as a starting point. They're riddled with problems and don't lend any meaningful assistance when considering how to reduce impact as many commercial models rely on free, or reduced, offerings. We felt there's enough research out there by now that we can make the next iteration forward and improve upon this. Whilst of course embracing the concept of [progress over perfection](https://branch.climateaction.tech/issues/issue-8/).

Therefore we saw that openly test driving the TCS approach in collaboration with the Scott Logic team was a concrete way to address:

- the relative lack of detailed guidance on estimating an entire digital estate.
- approaches for how you can move beyond spend as a metric (when open-source data supports that).

**Actionable opportunity**

We encourage more organisations to publicly show their approaches, calculations and concerns in detail. Together we can contribute back to the field and fill the guidance gap for estimating digital estate emissions using best practices. This is just as applicable for organisations using the TCS or other standards.


## TCS can't cover everything you need to produce estimates for digital products or services 

This part is no secret! TCS make this completely clear on the [homepage](/). But it's important enough to reiterate. 

Out of scope from TCS are other key things that any organisation needs such as buildings, travel and overheads. All of these things also contribute to an organisation's emissions.

For example, if someone were to ask us to estimate the emissions associated with our [Green Web Dataset](https://www.thegreenwebfoundation.org/tools/green-web-dataset/), it would be remiss of us not to factor in these other parts of our business. We know we need to have office space, travel and manage other necessary overheads of our organisation, in order to develop and maintaining our open source tools. Excluding these items from our reporting scope would seem remiss.

Therefore, the TCS alone is not enough if you want to produce an estimate for a given digital product or service. Its best seen as a subset, a *vital* subset, of the work that's needed.

**Actionable opportunity**

Organisations responding to transparency requests from customers around the emissions associated with a digital product or service should make the scope boundaries they use abundantly clear. 


## There is a serious lack of data and transparency from suppliers

Finding publicly available emissions estimates data for common software is basically impossible. In two areas, [OTS and Open Source Software](/projects/green-web-foundation/upstream#software) and [SaaS](/projects/green-web-foundation/operational#saas-services), we didn't manage to find any kind of public data for a single supplier to base an estimate on. This means we've got gaps in our understanding for the following: Django, Wordpress, Zoom, Chrome, Firefox, GitHub, NPM, Google workspaces (GDrive and Calendars), Trello, Zulip, Miro, Brevo, Sentry, 1password, 34SP (WordPress hosting and emails).

To be clear, we're not trying to throw shade at these suppliers. We know this stuff is an emerging practice, and it's hard. But nonetheless there is a glaring gap here at the moment.

For the cloud services category, things were a little more forthcoming. We were able to get data relating to spend based on actual usage and info about the specific server hardware being used. That gave us some key metrics from which we produced our own estimates using other publicly available data from the [Cloud Carbon Footprint tools](resources#cloud-carbon-footprint-ccf). But we know that spend is not really a metric we want to use. 

This could evolve if, as standard, suppliers of digital services provided machine readable, publicly verifiable emission estimate data about their operations as whole. Methodologies and assumptions would be completely transparent, not treated as trade secrets. In an ideal world, a customer wouldn't have to make a special request for this data based on their usage. It would be as easy to find as billing data.

The industry appears to be in a chicken and egg situation - everyone is reliant on each other's data but no-one wants to go first. Thankfully, the EU is introducing several sets of legislation aimed at breaking this stalemate. Legislation like the [Corporate Sustainability Reporting Directive (CSRD)](https://plana.earth/policy/corporate-sustainability-reporting-directive-csrd) literally says:

> Users of sustainability information increasingly expect such information to be findable, comparable and machine-readable in digital formats. Member States should be able to require that undertakings subject to the sustainability reporting requirements of Directive 2013/34/EU make their management reports available on their websites, free of charge to the public. ([clause 55](https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX:32022L2464))

**Actionable opportunities**

Organisations can push suppliers to provide machine readable, publicly verifiable emission estimate data about their operations. Organisations can also actively support, and sign post others to a number of non-profit organisations working to encourage disclosure of assumptions in digital services. Examples include [Boavista](https://boavizta.org/en), [Green Software Foundation](https://greensoftware.foundation/), [Sustainable Digital Infrastructure Alliance](https://sdialliance.org/), and of course ourselves at [Green Web Foundation](https://www.thegreenwebfoundation.org/) through our [carbon.txt project](https://www.thegreenwebfoundation.org/news/carbon-txt).


## Employee hardware is more significant than originally assumed, especially monitors

<div style="color:red;">
Tradeoffs around employee productivity and comfort. 
it wasn’t easy  to find guidance on reducing “embodied carbon.” – incentives around hardware? What are we incenstived to do/change as a result. 
</div>

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

<span style="color:red;">*please can this section be sense-checked by someone?* What this shows is that for embodied carbon, the difference between laptops and monitors is between -4% and 65%. For usage, the difference is much larger. It's between 159% and 237%. Our smallest monitor creates around 1.5 times more emissions than our smallest laptop when running for the same length of time. There's a nearly a 2.5 times difference between running our most powerful laptop and largest monitor.</span>

This raises an important question. What can we really do to minimize the impact of our employee devices beyond buying differently and using them mindfully? We accept that we do need a certain level of equipment to ensure our team are safe and productive. Once you've taken the obvious actions what's left? This takes us into the realm of systemic change, and the promise of the [EU's new eco-design legislation](https://commission.europa.eu/energy-climate-change-environment/standards-tools-and-labels/products-labelling-rules-and-requirements/sustainable-products/ecodesign-sustainable-products-regulation_en) that came into force in July 2024.

**Actionable opportunities**

Organisations can make a considerable impact on their digital estate emission estimates by choosing to minimise unnecessary hardware and use what they do need efficiently. Procurement departments can prioritise refurbed, remanufactured or reused employee hardware and shortly, consider the ecodesign ratings on specific product groups. As an added bonus, organisations can also choose to support non-profit campaign groups like [repair.eu](https://repair.eu/). 


## The digital sustainability industry might be over indexing on green coding too much

<div style="color:red;">
Problem: As an org trying to reduce our impacts, we didn’t find enough guidance on addressing impacts beyond making code more efficient and this is a gap in the digital sustainability practice.  
Hypothesis: The digital sustainability field invests a lot in making code more efficient because it’s “easier” to integrate these practices rather than addressing impacts elsewhere. However, structural changes are also needed. As well as addressing supply AND demand (example, not using AI if it’s not needed). And addressing some of the “harder” parts of making digital operations greener. 
Are we a typical organisation? - We’ve optimised as much as we can, we have high utilisation rates in our cloud services. We’ve done the reasonable stuff 
We need guidance to change these other bigger impacts. There are gaps in the guidance that the digital sustainability field provides.   
These include: not only looking at efficiency, structural changes are needed (decarbonizing the whole grid) 
Personal blog: Being in the green driving foundation
C’s suggested framing - there are new skills as an industry we would need to pick up. Green coding is one of the easier things to buy into because politically it is much more palatable, and less risky than organisational change.
The biggest impacts come from sources other than code—meanwhile, the digital sustainability invests most of its effort in making code more efficient (-> its the infrastructure)
Operational efficiency vs coding efficiency - this is outlined in Building Green Software (cite Ann Currie) 
We’re pumping a lot of time and effort into optimising code, but the real structural levers are elsewhere. There’s a lot of investment in this green coding area, but the high impact areas need more guidance/investment.
Efficiency is not the only important metric. 
Structural changes are also needed 
Example: UK setting goal for fossil-free grid by 2030. A structural change that came about through democracy, etc rather than changing coding practice
Supply and demand are both levers (not just green your work, but also use less – example from our AI briefing: do you even need AI?)
CID (consumption, intensity and direction) 
</div>

As the digital sustainability industry starts to take off, there is a risk that it becomes synonynous with only building more efficient software. A practice commonly referred to as "green coding" or "green software engineering". Whilst this is definitely an important part of digital sustainability, there is more to it than that. 

If all the improved green software we produced fails to lead to us using less resources (energy, water, rare raw materials) over time and reducing the  or seeing our overall use of electricity drop 

 But our estimates lead us to think a more impactful place to start looking is possibly less glamourous, it's a procurement problem rather than an engineering one. 

Is greener hardware, such as remanufactured, refurbished and second-hand, getting enough attention inside digital sustainability circles? This is also a relevant question for data centers who typically refresh hardware every five years. But recent data shows this is becoming shorter due to technological improvements. 


[To the top](#top)

---
[Next - Assumptions](assumptions)