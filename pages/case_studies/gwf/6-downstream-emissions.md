---
layout: caseStudies
title: Green Web Foundation
permalink: /case-studies/green-web-foundation/downstream
caseStudy: gwf
---

{: #top}

<div class="pb-4">
  {% include categoryLabel.html label="CatD" %}
</div>

# Estimating the Downstream Emissions (Category D)

Read the TCS overview of [downstream emissions](/categories/downstream) for a primer on this category.

The approach used and why for each sub-category in downstream emissions:

- [End-User Devices](#end-user-devices)
- [Network Data Transfer](#network-data-transfer)

## End-User Devices
{% include categoryItem.html item="CatDEndUserDevices" %}

### Estimated emissions

**Estimate used: High level = 116.92 kgCO<sub>2</sub>e/year - 24% of overall digital estate**

Estimate confidence: Low

### Agreed scope

GWF's public websites:
- [www.thegreenwebfoundation.org](https://www.thegreenwebfoundation.org/)
- [branch.climateaction.tech](https://branch.climateaction.tech/)
- [app.greenweb.org/directory](https://app.greenweb.org/directory)
- [developers.thegreenwebfoundation.org](https://developers.thegreenwebfoundation.org/)
- [carbontxt.org](https://carbontxt.org)

We added one more website:
- [datasets.thegreenwebfoundation.org/](https://datasets.thegreenwebfoundation.org/) - the Green Web Dataset accessible in the browser. This estimate is for loading the page, and doesn't take any users interacting and searching the dataset into account as we don't currently have reasonable access to data about this. 

Also in scope is the downstream infrastructure emissions arising from self-hosting a copy of the [Green Web Dataset](https://www.thegreenwebfoundation.org/tools/green-web-dataset/).

### High level estimate methodology

**Public websites**

GWF websites user analytics provided by [Cabin](https://withcabin.com/). Cabin provides [estimates of website carbon emissions](https://docs.withcabin.com/carbon-tracking.html) using the Sustainable Web Design Methodology version 3, found within GWF’s own CO2.js library. 

To support our high level estimates, we use the emissions values provided by Cabin. 

| **Website**                           | **Cabin estimate, kgCO<sub>2</sub>e** | **Notes**   |
| ------------------------------------- | ----------- | ------------------------------------- |
| www.thegreenwebfoundation.org         | 27          | 1st January 2023 - 31st December 2023 |
| branch.climateaction.tech             | 19.8        | 1st January 2023 - 31st December 2023 |
| app.greenweb.org/directory            | 0.16        | 6th September 2023 - 31st December 2023 (no data before 6th September) |
| developers.thegreenwebfoundation.org  | 0.4         | 1st January 2023 - 31st December 2023 |
| carbontxt.org                         | 0.25        | 20th July 2023 - 31st December 2023 (no data before 20th July) |
| **Total**                             | **47.39**   |                                       |

**Dataset access site**

The [dataset browser](https://datasets.thegreenwebfoundation.org/) emissions are manually calculated using [Sustainable Web Design Methodology version 3](https://sustainablewebdesign.org/estimating-digital-emissions-version-3/), which uses the main metric of page load size. 

Only the end-user devices boundary is included. This means 52% of the 0.81kWh/GB SWD metric = 0.4212kWh/GB. 

The page load transfers were measured using Google Chrome developer tools. For **uncached visits we had a pagesize value of 0.134MB** (= 0.000134GB), and for **cached/returning visits of 0.119MB** (= 0.000119GB).

Energy per new (uncached) visit:

$$ 0.000134\ GB \times 0.4212\ kWh/GB = 0.0000564408\ kWh $$

Energy per returning (cached) visit:

$$ 0.000119\ GB \times 0.4212\ kWh/GB = 0.0000501228\ kWh $$

The number of page views are assumed to be similar to the developers.thegreenwebfoundation.org and app.greenweb.org. We used 27,500 annual visits of which 40% were unique/new visitors.

Energy per visit, weighted by new (40%) vs returning (60%) visitors:

$$ 0.0000564408\ kWh \times 0.4 + 0.0000501228\ kWh \times 0.6 = 0.00005265\ kWh $$

Multiply the energy per visit by the number of visits per year:

$$ 0.00005265\ kWh \times 27500\ visits/year = 1.447875\ kWh/year $$

Given the global audience noted in the Cabin analytics, we also assume a [global carbon intensity](/case-studies/green-web-foundation/assumptions#regional-carbon-intensity) of 0.490kgCO<sub>2</sub>e/kWh. We calculate the estimated emissions per year:

$$ 1.447875\ kWh/year \times 0.490\ kgCO_2e/kWh = 0.71\ kgCO_2e/year $$

**Downstream infrastructure from self-hosting Green Web Dataset**

To estimate the carbon cost of hosting a copy of the dataset, we considered three costs: storage, compute (for serving the data), and transfer from queries to the dataset. Populating the dataset is covered in the [Network data transfer category](/case-studies/green-web-foundation/downstream#network-data-transfer), also in Downstream Emissions.

The storage was estimated using [Cloud Carbon Footprint (CCF)](https://www.cloudcarbonfootprint.org/)’s estimates for AWS. Investigation suggested these numbers would be approximately correct for other cloud servers, and likely of the correct order-of-magnitude for local hosting. 

The current Green Web Dataset was measured at around 500 MB. Storing it for a year represents (0.5 × 24 × 365 = ) 4.38 TBh. At the estimated costs of 0.004 kWh/TBh and with a global [carbon intensity](/case-studies/green-web-foundation/assumptions#regional-carbon-intensity) of 0.49 kgCO2e/kWh. That comes to 0.086 kgCO2e/year to store the dataset.

Compute costs were estimated similarly, assuming that a dedicated virtual CPU would be running the data server. The CCF data suggests that a vCPU runs at around 14 watts; a server kept running for around 4 hours per working day would then run a total of 0.014 × 4 × 250 = 14 kWh/year. (his assumes a high use rate, keeping the vCPU active, and is likely an overestimate. At the same carbon intensity, that comes to 6.86 kgCO2e/year.

Costs from subsequent downloads were estimated in the same way as the [Green Web Check API](/case-studies/green-web-foundation/downstream#network-data-transfer). Each response was estimated to cost 2.81×10^(-9) kWh. So even a high request rate of 10 million requests per year would use 0.0281 kWh and cause emissions of 0.013 kgCO2e/year.

From these estimates, by far the greatest share is from compute costs, and the overall estimate is 6.88 kgCO2e/year per user. Even assuming a far lower use rate (at 10 vCPU hours per year, estimated for local hosting as a back-up to the GWF API, most of the costs would come from compute.

Assuming 10 self-hosted users with high vCPU usage (1000 hours):

$$ 10\ users \times 6.88\ kgCO2e/year = 68.82\ kgCO_2e/year $$

This is a very low confidence estimate given that we are assuming high (1000 hours) of compute time per year and that 10 users are using it at this rate. We also assume a global carbon intensity. Each of these aspects are beyond GWF's current visibility and control, and as such these estimates could swing the carbon impact wildly by mulitple orders of magnitude. Without further evidence or understanding how this data set is stored and used, its really impossible to have any confidence in this value.

**3rd Party Websites using CO2.js**

We considered the impact of [CO2.js](https://www.thegreenwebfoundation.org/co2-js/), GWF's popular open source JavaScript library, being used by third-party websites. The approach was to take the data transfer size of the CO2.js library as the primary metric.

However, this value was ultimately reduced to zero. The reasoning behind this is that very few websites load the CO2.js library in the client’s web browser. Instead, most sites use CO2.js on the server side. The few websites that do load the CO2.js library in the client’s browser are assumed to have a low visitor count or reach. Of those, the minified library has minimal impact on emissions (based on an SWD method device boundary). Given the lack of detailed data for usage in the browser (but assumed to be very low) and the small payload (0.194MB uncompressed, but expected to be much lower when compressed and transferred), a high level emissions estimate would be so negligible we dismissed doing any further investigation.

With little visibility as to how CO2.js is used on client servers and it's small size, we also dismissed any further investigation into estimating the impact of CO2.js downstream.

**Resulting detailed estimate**

| **Area of scope** | **Estimate, kgCO<sub>2</sub>e/year** |
| --- | --- |
| Public facing websites | 47.39 |
| Dataset access site | 0.71 |
| Downstream infrastructure from self-hosting Green Web Dataset | 68.82 |
| 3rd Party Websites using CO2.js | 0 |
| **Total** | **116.92** |  |


**How could we improve upon this?**

For the websites part, we're somewhere between low and medium confidence in our high level approach. It's not clear what calculations Cabin is making beyond the use of CO2.js. We also know that the Sustainable Web Design Methodology (SWDM) that Cabin uses is version 3. [Version 4](https://www.thegreenwebfoundation.org/news/understanding-the-latest-sustainable-web-design-model-update/), released in June 2024, has an improved approach and typically produces estimates two thirds smaller. Additionally the SWDM uses data transfer as it's main metric. We view this as a great starting point as that data is relatively easy to obtain. But as research deepens it's becoming more clear that the relationship betweem energy consumption and network energy use is non-linear, especially at network level. 

For self-hosting Green Web Dataset part. As noted, this is very low confidence. Without a clear understanding of how the dataset is used in practice, this estimate is best viewed as an educated shot in the dark. 

[To the top](#top)

---

## Network Data Transfer
{% include categoryItem.html item="CatDNetworkDataTransfer" %}

### Estimated emissions
**Estimate used: High level = 9.74 kgCO<sub>2</sub>e/year - 2% of overall digital estate**

Estimate confidence: Medium


### Agreed scope

There are two parts to the Network Data Transfer we considered:

1. [Green Web API calls](https://admin.thegreenwebfoundation.org/api-docs/)
1. [Download of the Green Web Dataset](https://admin.thegreenwebfoundation.org/admin/green-urls) across the networks.

### High level estimate methodology

**Green Web Check API**

For the [Green Web Check API (greencheck/{url})](https://admin.thegreenwebfoundation.org/api-docs/), there are two kinds of respones. A green response and a grey response. 

We inspected the file size of a Green Web Check response, using "thegreenwebfoundation.org" as a sample URL to check. The response body is 1kB. API responses with a grey value are much smaller as they don't contain evidence of green credentials. It’s also assumed that there will be some variance depending on the supporting documentation that verifies the green credentials. However, for the purposes of the high level estimates and keeping things simple, we based our calculations on all responses having a response payload size of 1kB or (1 x 10^<sup>-6</sup> GB).

We used the [Green Coding Berlin](https://www.green-coding.io/) network (fixed-line) transmission energy rate of 0.0028125kWh/GB to calculate the energy consumption per API response:

$$ 1 \times 10^{-6}\ GB \times 0.0028125\ kWh/GB = 2.8125 \times 10^{-9}\ kWh $$

The [Green Web Check API (greencheck/{url})] has 174.3 million API calls per month, which is 2,091 million per year. We can calculate the data transfer energy use as:

$$ 2.8125 \times 10^{-9}\ kWh \times 2.091 \times 10^{9}/year = 5.88\ kWh/year $$

Assuming a global audience using this API, we use the [global carbon intensity](/case-studies/green-web-foundation/assumptions#regional-carbon-intensity) of 0.49kgCO<sub>2</sub>e/kWh to calculate the carbon emissions:

$$ 5.88\ kWh/year \times 0.49\ kgCO_2e/kWh = 2.88\ kgCO_2e/year $$

Network data transfer carbon emissions for Green Web Check API response = 2.88 kgCO2e/year

**Dataset Download**

We used the recent download size of 166MB (0.166GB) to estimate totals. For a per transmission energy cost, we used the [Green Code Berlin estimate for transmission energy rate](https://www.green-coding.io/co2-formulas/) of 0.0028125GB/kWh.

$$ 0.166\ GB \times 0.0028125\ GB/kWh = 0.000466875\ kWh $$

We assume that most users of the Data Set will keep it up-to-date, and so download it approximately 300 times per year, per user. And we estimated 100 users downloading and using the data set this way for a total of 30,000 downloads per year:

$$ 30,000\ downloads \times 0.000466875\ kWh = 14\ kWh/year $$

Assuming a global audience, we apply the [global carbon intensity](/case-studies/green-web-foundation/assumptions#regional-carbon-intensity) of 0.490kgCO<sub>2</sub>e/kWh:

$$ 14\ kWh/year \times 0.490\ kgCO_2e/kWh = 6.86\ kgCO_2e/year $$

**Resulting high level estimate**

| **Scope area** | **Annual estimate** |
| --- | --- | 
| Green Web Check API | 2.88 kgCO<sub>2</sub>e/year | 
| Dataset Download | 6.86 kgCO<sub>2</sub>e/year |
| **TOTAL** | **9.74 kgCO<sub>2</sub>e** | 

[To the top](#top)

---

[Next - Reducing impact](reducing-impact)

---