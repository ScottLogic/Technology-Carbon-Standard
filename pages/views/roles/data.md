---
layout: default
title: Data View
permalink: views/roles/data
---

# Data View

{% include carbonStandard.html variant=site.data.overlays.data hideOutOfScope=true %}

Every bit of data, at rest or in transit, incurs a carbon cost.
If a user minimises the amount of data they store, then, they can significantly reduce carbon emissions due to storage. Doing so is also likely to reduce monetary costs: hosted services generally charge by data use, while local storage will use less energy to read and write the data, and can use fewer or smaller storage options, reducing embedded carbon.

## Upstream Emissions

## Operational Emissions

While upstream data has a carbon cost, it is operational emissions where a company can make the choices for the greatest effect.

The first, and perhaps biggest choice, is where to store data: on local servers, or on the cloud (or some other hosted solution).

In either case, though, costs scale with the amount of data stored (and, to a lesser extent, with the rate at which that data is written or read). Therefore, compressing the data is likely to reduce storage costs; however, it will incur extra emissions in computing for compression and decompression.

### Direct
{% include categoryLabel.html label="CatO" %}
{% include categoryItem.html item="CatONetworkDevices" id="NetworkDevices" noLink=true %}
<!--This link isn't working -->

Transferring data over networks incurs an electricity cost, and therefore a carbon cost. 

{% include categoryItem.html item="CatOServers" id="Servers" noLink=true %}

When hosting locally, the biggest factor in emissions is likely to be the embodied carbon of the servers.

| Storage Type            | Embedded Carbon (kgCO2e/TB) | Operating Power (W/TB) |
| ----------------------- | --------------------------: | ---------------------: |
| Hard Disk Drive (HDD)   | 38                          | 1                      |
| Solid State Drive (SSD) | 316                         | 2.5                    |

(These figures are for a 8 TB HDD and a 1 TB SSD. Of course, there are reasons for using SSDs over HDDs, such as faster read/write speed.)

A HDD will therefore have roughly equal amortised embodied carbon and operating emissions over 10 years of constant operation (while a SSD would require 35 years!). Since most storage media have a typical use life of around 5 years, increasing the lifespan of storage media is likely to have a significant effect on average emissions. 

#### Multiple Copies and Backups

Backups are commonly recommended for most data, and certainly all important data. Guidance like the 3-2-1 rule suggest keeping multiple copies, across multiple media and multiple sites.

<!--Still looking for good data on e.g. magnetic tape storage-->

### Indirect

{% include categoryLabel.html label="CatC" %}

{% include categoryItem.html item="CatCManaged" id="Managed" noLink=true %}

Much data is now stored on cloud storage - that is, storage managed by a cloud provider and accessed over the internet. Almost all cloud storage exists, ultimately, in HDD or SSD, and so while embedded carbon costs are hidden from the user, they are still incurred by the provider.

Cloud storage provision also incurs a carbon cost from use, and this can be more visible to the end user. Some cloud providers allow users to examine estimated emissions from their services, but not all do; still, emissions can be estimated since they are roughly proportional to the amount of data stored. Storing one terabyte of data on a major cloud storage provider for one year uses around 35 kilowatt-hours of electricity.

It should be noted that, by default, most cloud providers duplicate data, keeping three copies on three different machines (to ensure availability and insure against drive failure).

#### Location and Legislation

Since users can typically select different regions for their cloud service hosting, they can select regions with different carbon intensities and so different resultant emissions. However, there may be data localisation laws, which limit the sites at which personal data may be stored.

## Downstream Emissions

{% include categoryLabel.html label="CatD" %}

{% include categoryItem.html item="CatDEndUserDevices" id="EndUserDevices" noLink=true %}

The same arguments for storage on servers (see above) apply to user devices (though embodied carbon can no longer be measured). However, electricity use for storage can be estimated, using the knowledge of the type and size of data stored, and the likely storage medium. (For instance, smartphones store data in flash storage, while laptops and desktops may use SSDs or HDDs.)

{% include categoryItem.html item="CatDNetworkDataTransfer" id="NetworkTransfer" noLink=true %}

<!--What should we do about references? Footnotes, perhaps?-->
<!--Add links to glossary-->