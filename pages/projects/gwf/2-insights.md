---
layout: projects
title: Green Web Foundation
permalink: /projects/green-web-foundation/insights
project: gwf
---

{: #top}

# Key insights

- The TCS is helping to fill an important gap
- There is a serious lack of data and transparency from suppliers
- Employee hardware is more significant than originally assumed
- Our monitors probably deserve more attention, especially the big ones
- The digital sustainability industry might be over indexing on green coding too much


## The TCS is helping to fill an important gap

This was designed to address a need (method for assessing digital operations) rather than overall operational emissions 
Addressing problem: Existing guidance is hard to follow, there’s a gap in doing this specifica subset
We want to help close the gap in this area
We wanted to test-drive this.

Stuff that is out of scope
Heated offices, travel etc. 




## There is a serious lack of data and transparency from suppliers

<div style="color:red;">

Hypothesis: Machine readable data, publicly verifiable data 
This methods and numbers should be accessible. And emphasize how to improve reporting by giving access to machine-readable data 
<br/><br/>
In the field: others are trying to solve this as well, Boavista, GSF, SDIA
(examples of initiatives that are trying to encourage disclosure of assumptions in digital services)
<br/><br/>
Our work: Would carbon.txt help to close this gap at all?
Could we link to the manifest files being touted by GSF for example
</div>


Finding publicly available emissions estimates data for common software is basically impossible. In two areas, [OTS and Open Source Software](/projects/green-web-foundation/upstream#software) and [SaaS](/projects/green-web-foundation/operational#saas-services), we didn't manage to find any kind of public data for a single supplier to base an estimate on. This means we've got gaps in our understanding for the following: Django, Wordpress, Zoom, Chrome, Firefox, GitHub, NPM, Google workspaces (GDrive and Calendars), Trello, Zulip, Miro, Brevo, Sentry, 1password, 34SP (WordPress hosting and emails).

For the cloud services category, things were a little more forthcoming. We were able to get data relating to GWF's spend based on actual usage and info about the specific server hardware being used. That gave us some key metrics from which we produced our own estimates using other publicly available data from the [Cloud Carbon Footprint tools](resources#cloud-carbon-footprint-ccf).

This whole process would be a lot easier if suppliers of digital services provided carbon estimates to their customers based on their usage as standard. In an ideal world a customer wouldn't have to make a special request for this data. It would be as easy to find as billing data and the methodologies and assumptions would completely transparent, not treated as trade secrets.

The industry appears to be in a chicken and egg situation - everyone is reliant on each other's data but no-one wants to go first. We'd argue that the world's most valuable companies, the Big Tech companies, could spare some resources to do this if they really wanted to. What will it take for the Big Tech companies to put the interests of a liveable planet first and come together to bust through these issues?

Without key suppliers getting off the starting blocks and conducting their own digital carbon estimates, even at a high, imperfect level like we've done here, the industry remains stuck.

## Employee hardware is more significant than originally assumed

Everyone working on the project expected employee hardware emissions to be large. But no-one would have guessed it would turn out as 69% of the overall amount. This equates to 342 kgCO<sub>2</sub>e/year.

How confident can we be in the 69% figure? Is it to be trusted? The **short answer** is yes. We think it's *good enough* to demonstrate relative scale and support telling a story around the larger than expected impact of employee hardware versus other parts of the known estate.

The **longer answer** is that we recognise there are a multitude of ways you can poke holes in these estimates. Here's a few we can think of:

* The 69% part is relative to the other categories in the estate. For those categories outside of the employee hardware grouping that we attempted to estimate, we only have medium or low confidence in the methodologies we used. When there are better ways to estimate these parts, the figures might change and the relative percentage of employee hardware may go up or down in response. On top of that, we couldn't produce any kind of estimate for OTS & Open Source Software and SaaS. Once we're able to do that, its likely the relative percentage of employee hardware will go down.
* The 342 kgCO<sub>2</sub>e/year figure comes from a snapshot in time. 2023 turns out to be a year that GWF ended up bearing responsibility for the emissions of four purchased machines (two refurbed and two new), but no monitor purchases. Is this an average year or an outlier? We can't know confidently until we estimate GWF's digital estate for a few more years.
* The 342 kgCO<sub>2</sub>e/year figure itself is only an estimate. The accuracy of any estimate should always be viewed with a pinch of salt. It is not a precise measurement. However, we rated the methodologies we used for the two largest parts of this calculation with high confidence. The third methodology with medium confidence. Is there room for improvement in these methodologies? Absolutely. Is there room for improvement in the [PCF](/glossary#product-carbon-footprint-pcf) datasheets produced, or in many cases not produced, by hardware manufacturers? Absolutely. *(Looking at you printer manufacturers.)* We look forward to seeing more organisations run through this process and publicly publish they way they did it so our industry can learn and grow together. 

## Our monitors probably deserve more attention, especially the big ones

<div style="color:red;">
Tradeoffs around employee productivity and comfort. 
it wasn’t easy  to find guidance on reducing “embodied carbon.” – incentives around hardware? What are we incenstived to do/change as a result. 
</div>

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