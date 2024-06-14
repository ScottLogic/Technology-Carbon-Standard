---
layout: projects
title: Green Web Foundation
permalink: /projects/green-web-foundation/downstream
project: gwf
---

{: #top}

<div class="pb-4">
  {% include categoryLabel.html label="CatD" %}
</div>

# Estimating the Downstream Emissions (Category D)

Read the TCS overview of [downstream emissions](/categories/downstream) for a primer on this category.

When attemping to estimate Green Web Foundation's digital downstream emissions, we describe the approach used and why for each sub-category.

- [End-User Devices](#end-user-devices)
- [Network Data Transfer](#network-data-transfer)

## End-User Devices
{% include categoryItem.html item="CatDEndUserDevices" %}

### Estimated emissions
<span style="color: red">Estimate confidence: Medium</span>

### Agreed scope

Three public websites were identified for GWF end-users. This includes:
- www.thegreenwebfoundation.org
- developers.thegreenwebfoundation.org
- carbontxt.org

The app.greenweb.org is a provider portal for registered users and has limited access and analytics available.

The [Green Web Data](https://datasets.thegreenwebfoundation.org/) set is accessible in the browser. The measurement is taken for the loading of this page, but it doesnt take into account users interacting and searching the dataset. 

### High level estimate methodology

#### Websites and Applications

The three public websites have user analytics provided by [Cabin](https://withcabin.com/), that use GWF’s own CO2.js and SWD method to calculate the carbon emissions of the websites.

For the high-level estimates of these websites, we’ll use the emissions values provided by Cabin. These figures are based on the period of 1st April 2023 - 31st March 2024:
- www.thegreenwebfoundation.org: **28kgCO<sub>2</sub>e/year**
- developers.thegreenwebfoundation.org: **0.44kgCO<sub>2</sub>e/year**
- carbontxt.org: **0.05kgCO<sub>2</sub>e/year**

I’m unsure how much detail is possible from the app.greenweb.org portal, but Cabin does provide a value of **6.8kgCO2e/year**.

Note that carbon.txt and app.greenweb.org do not have data reaching a year back, so I’ve used the last 90days of data (~3months) and multiplied it by 4 to get approximately a years carbon estimate.

The dataset browser emissions are calculated using the SWD method, but specifically only the end-user devices boundary (52% of the 0.81kWh/GB SWD metric = 0.4212kWh/GB). The page load transfers were measured in Google Chrome developer tools, using a cached (0.119MB = 0.000119GB) and uncached (0.134MB = 0.000134GB) measurement:

Energy per new (uncached) visit:

$$ 0.000134\ GB \times 0.4212\ kWh/GB = 0.0000564408\ kWh $$

Energy per returning (cached) visit:

$$ 0.000119\ GB \times 0.4212\ kWh/GB = 0.0000501228\ kWh $$

The number of page views are assumed to be similar to the developers.thegreenwebfoundation.org and app.greenweb.org (27,500 visits, 40% unique/new visitors).

Energy per visit, weighted by new (40%) vs returning (60%) visitors:

$$ 0.0000564408\ kWh \times 0.4 + 0.0000501228\ kWh \times 0.6 = 0.00005265\ kWh $$

Multiply the energy per visit by the number of visits per year:

$$ 0.00005265\ kWh \times 27500\ visits/year = 1.447875\ kWh/year $$

Given the global audience noted in the Cabin analytics, we also assume a global carbon intensity (0.490kgCO<sub>2</sub>e/kWh) and so can calculate the estimated emissions per year:

$$ 1.447875\ kWh/year \times 0.490\ kgCO_2e/kWh = 0.71\ kgCO_2e/year $$

**Total carbon emissions of Websites and Applications: 36kgCO<sub>2</sub>e/year**

#### 3rd Party Websites using CO2.js
We considered the impact of CO2.js being used by third-party websites. The approach was to use the same methodology as above, taking the data transfer size of the CO2.js library.

However, this value was ultimately reduced to zero. The reasoning behind this is that very few websites load the CO2.js library in the client’s web browser. Instead, most sites use CO2.js on the server side. The few websites that do load the CO2.js library in the client’s browser are assumed to have a low visitor count or reach. Of those, the minified library has minimal impact on emissions (based on an SWD method device boundary). Given the lack of detailed data for usage in the browser (but assumed to be very low) and the small payload (0.194MB uncompressed, but expected to be much lower when compressed and transferred), a high-level beer mat estimate emissions calculation would be so negligible we dismissed doing any further investigation.

With little visibility as to how CO2.js is used on client servers and it's small size, we also dismissed any further investigation into estimating the impact of CO2.js downstream.

#### Downstream Infrastructure

To estimate the carbon cost of hosting a copy of the dataset, we considered three costs: storage, compute (for serving the data), and transfer from queries to the dataset. (Populating the dataset is covered by the Green Web Dataset download category, below.)

The storage was estimated using CCF’s estimates for AWS; previous investigation suggested that these numbers would be approximately correct for other cloud servers, and likely of the correct order-of-magnitude for local hosting. The current dataset was estimated at around 500 MB, so storing it for a year represents (0.5 × 24 × 365 = ) 4.38 TBh. At the estimated costs of 0.004 kWh/TBh and with a global carbon intensity of 0.49 kgCO2e/kWh. That comes to 0.086 kgCO2e/year to store the dataset.

Compute costs were estimated similarly, assuming that a dedicated virtual CPU would be running the data server. The CCF data suggests that a vCPU runs at around 14 watts; a server kept running for around 4 hours per working day would then run a total of 0.014 × 4 × 250 = 14 kWh/year. (This assumes a high use rate, keeping the vCPU active, and is likely an overestimate.) At the same carbon intensity, that comes to 6.86 kgCO2e/year.

Costs from subsequent downloads were estimated as below (for the Green Web Check API); each response was estimated to cost 2.81×10^(-9) kWh, so even a high request rate of 10,000,000 requests per year would use 0.0281 kWh and cause emissions of 0.013 kgCO2e/year.

From these estimates, by far the greatest share is from compute costs, and the overall estimate is 6.88 kgCO2e/year per user. Even assuming a far lower use rate (at 10 vCPU hours per year, estimated for local hosting as a back-up to the GWF API), most of the costs would come from compute.

Assuming 10 users with high vCPU usage (1000 hours):

$$ 10\ users \times 6.88\ kgCO2e/year = 68.82\ kgCO_2e/year $$

This is a very low confidence estimate given that we are assuming high (1000 hours) of compute time per year and that 10 users are using it at this rate. We also assume a global carbon intensity. Each of these aspects are beyond GWF's visibility and control, and as such these estimates could swing the carbon impact wildly by mulitple orders of magnitude. Without further evidence or understanding how this data set is stored and used, its really impossible to have any confidence in this value.
 

**Total carbon emissions of downstream infrastructure: 68.82kgCO<sub>2</sub>e/year (with very little confidence)**

**Total carbon emissions of end-user devices: 104.82kgCO<sub>2</sub>e/year (but with very little confidence, per above)**

### Detailed estimate methodology

No further detailed estimation was attempted, as we would have likely measured each website and applied the SWD method as we did for the online data set; - which Cabin already uses. Though it's not exactly clear what calculations Cabin is making beyond the use of CO2.js, it didn't seem like a good use of time to focus any more effort for the realtively small carbon emissions estimated.

[To the top](#top)

---

## Network Data Transfer
{% include categoryItem.html item="CatDNetworkDataTransfer" %}

### Estimated emissions
<span style="color: red">Estimate confidence: Medium</span>

### Agreed scope

There are two parts to the Network Data Transfer we considered; the API calls and the download of the data set across the networks.

### High level estimate methodology

#### Data Set Download

We used the recent download size of 166MB (0.166GB) to estimate totals, and the [Green Code Berlin estimate for transmission energy rate](https://www.green-coding.io/co2-formulas/) of 0.0028125GB/kWh, to give a per transmission energy cost:

$$ 0.166\ GB \times 0.0028125\ GB/kWh = 0.000466875\ kWh $$

We assume that most users of the Data Set will keep it up-to-date, and so download it approximately 300 times per year, per user. And we estimated 100 users downloading and using the data set this way for a total of 30,000 downloads per year:

$$ 30000\ downloads \times 0.000466875\ kWh = 14\ kWh/year $$

Assuming a global audience, we apply the global carbon intensity of 0.490kgCO<sub>2</sub>e/kWh:

$$ 14\ kWh/year \times 0.490\ kgCO_2e/kWh = 6.86\ kgCO_2e/year $$

#### Green Web Check API

For the [Green Web Check API (greencheck/{url})](https://admin.thegreenwebfoundation.org/api-docs/), we inspected the file size of a green web check response, using the “thegreenwebfoundation.org” URL as a sample. This response body is 1kB. We understand that API responses with a false “green” value would be much smaller and lack evidence and detail of its green credentials. It’s also assumed that there will be some variance depending on the supporting documentation that verifies the green credentials. However, for the purposes of beer mat estimates, we have based our calculations on 1kB (1x10^(-6)GB) API responses.

We have used the Green Coding Berlin network (fixed-line) transmission energy rate of 0.0028125kWh/GB to calculate the energy consumption per API response:

$$ 1 \times 10^{-6}\ GB \times 0.0028125\ kWh/GB = 2.8125 \times 10^{-9}\ kWh $$

Given the 174.3 million API calls per month (2,091 million per year), we can calculate the data transfer energy use as:

$$ 2.8125 \times 10^{-9}\ kWh \times 2.091 \times 10^{9}/year = 5.88\ kWh/year $$

Assuming a global audience using this API, we use the global carbon intensity of 0.49kgCO<sub>2</sub>e/kWh to calculate the carbon emissions:

$$ 5.88\ kWh/year \times 0.49\ kgCO_2e/kWh = 2.88\ kgCO_2e/year $$

** Network data transfer carbon emissions for Green Web Check API response = 2.88kgCO2e/year


**Total carbon emissions of network data transfer: 9.74kgCO<sub>2</sub>e/year**


### Detailed estimate methodology

No further detailed estimate was undertaken.

[To the top](#top)

---

[Next - Reducing impact](reducing-impact)

---