---
layout: projects
title: Green Web Foundation
permalink: /projects/green-web-foundation/data-assumptions
project: gwf
---

# Assumptions and Decisions

## Units

For the purpose of this project and mapping the GWF technology estate to the TCS, we are calculating the final figures to **kgCO2e/year**. We will typically use **kW** and **kWhs** when quoting energy use and consumption. Carbon intensity is typically quoted in **gCO2e/kWh**.

We're rounding values of the calculations used which may lead to some rounding errors and variation in the results.

## Regional Carbon Intensity

Given that GWF employees are positioned around the world, we use the regional electricity grid’s carbon intensity to calculate the operational carbon emissions. The following regional carbon intensities are used:
- Germany: 363.982gCO2e/kWh
- Netherlands: 386.189gCO2e/kWh
- Taiwan: 565.629gCO2e/kWh
- UK: 268.255gCO2e/kWh
- Global: 490gCO2e/kWh
- Europe: 328gCO2e/kWh

These values were obtained from GWF’s own [Grid Intensity CLI tool](https://developers.thegreenwebfoundation.org/grid-intensity-cli/overview/) and the Tech Carbon Standard (based on Ember Data Explorer).

---
[Next - Estimating the Upstream Emissions](upstream)