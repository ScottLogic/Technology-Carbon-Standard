---
layout: sideNavigation
title: Data View
permalink: /technology-categories/data
---

# Data View

{% include carbonStandard.html variant=site.data.overlays.data hideOutOfScope=true %}

Every bit of data, at rest or in transit, incurs a carbon cost.
If a user minimises the amount of data they store, then they can significantly reduce carbon emissions due to storage. Doing so is also likely to reduce monetary costs: hosted services generally charge by data use, while local storage will use less energy to read and write the data, and can use fewer or smaller storage options, reducing embodied carbon.

## Upstream Emissions

### Servers and Storage Hardware 
{% include categoryItem.html item="CatUServerHardware" id="ServerHardware" %}

The first, and perhaps biggest choice, is where to store data: on local servers, or on the cloud (for which, see direct, below).

The embodied costs of storage hardware will likely be a major contribution from on-premise storage:

| Storage Type            | Embodied Carbon            |
| ----------------------- | -------------------------: |
| Hard Disk Drive (HDD)   | 20 kgCO2e/TB               |
| Solid State Drive (SSD) | 160 kgCO2e/TB              |
| Tape Drive (LTO 8)      | 46 kgCO2e + 0.62 kgCO2e/TB |

(These embodied figures are average estmates from Tammu/Nair[^dirtysecret] and a tape data sheet[^tapedrive]. Of course, there are other considerations between media, such as faster read/write speed.)

#### Long-term Copies and Backups

Backups are commonly recommended for most data, and certainly all important data. Guidance like the 3-2-1 rule[^321rule] suggest keeping multiple copies, across multiple media and multiple sites. This will increase the carbon cost of storage accordingly, and should be accounted for.

Removable media should also be considered for long-term storage. Their intermittent use makes it harder to estimate energy use while active, though published data imply that energy use is significantly lower than that for fixed drives.

## Operational Emissions

### Direct
{% include categoryLabel.html label="CatO" %}
{% include categoryItem.html item="CatONetworkDevices" id="NetworkDevices" %}

Transferring data over networks incurs an electricity cost, and therefore a carbon cost. As with data at rest, these costs can be minimised by compression.

{% include categoryItem.html item="CatOServers" id="Servers" %}

Running the drives incurs a cost in electricity and therefore carbon. Most devices, regardless of type or size, run at a power of single-digit Watts when reading or writing; idle powers can vary more significantly, even within single media types. High-power drives in frequent use may therefore have yearly power consumptions of hundreds of kWh, and concomitantly high emissions.

### Indirect

{% include categoryLabel.html label="CatC" %}

{% include categoryItem.html item="CatCCloud" id="Cloud" %}

Much data is now stored on cloud storage - that is, storage managed by a cloud provider and accessed over the internet. Almost all cloud storage exists, ultimately, in HDD or SSD, and so while embodied carbon costs are hidden from the user, they are still incurred by the provider.

Cloud storage provision also incurs a carbon cost from use, and this can be more visible to the end user. Some cloud providers allow users to examine estimated emissions from their services, but not all do; still, emissions can be estimated since they are roughly proportional to the amount of data stored. Storing one terabyte of data on a major cloud storage provider for one year uses around 32 kilowatt-hours of electricity[^CloudStorageRate].

It should be noted that, by default, most cloud providers duplicate data, keeping three copies on three different machines (to ensure availability and insure against drive failure).

#### Location and Legislation

Since users can typically select different regions for their cloud service hosting, they can select regions with different carbon intensities and so different resultant emissions. However, data localisation laws, which limit the sites at which personal data may be stored, may constrain this choice.

#### ROT Data and auditing

ROT (Redundant, Obsolete or Trivial) is a term used to describe useless data; surveys indicate that around 30% of data stored on the cloud is ROT[^ROTscale]. Since this data is still hosted, it will contribute to emissions as with useful data. It can be minimised with regular data audits, which analyse stored data to detect and remove ROT.

## Downstream Emissions

{% include categoryLabel.html label="CatD" %}

{% include categoryItem.html item="CatDEndUserDevices" id="EndUserDevices" %}

The same arguments for storage on servers (see above) apply to user devices (though embodied carbon can no longer be measured so confidently, since developers will typically not know the users' device choices). However, electricity use for storage can be estimated, using the knowledge of the type and size of data stored, and the likely storage medium. (For instance, smartphones store data in flash storage, while laptops and desktops may use SSDs or HDDs.)

## References
[^321rule]: [US-CERT Data Backup Options](https://www.cisa.gov/sites/default/files/publications/data_backup_options.pdf)
[^dirtysecret]: [Tannu/Nair 2023, The Dirty Secret of SSDs](https://arxiv.org/pdf/2207.10793). See also [Pure Storage on Embodied Carbon](https://blog.purestorage.com/perspectives/how-does-the-embodied-carbon-dioxide-equivalent-of-flash-compare-to-hdds/), a rebuttal (whose numbers do not include upstream emissions from e.g. mineral extraction).
[^tapedrive]: [IBM, Phyiscal Tape CO2, p. 6](https://www.ibm.com/downloads/cas/YE5WAQ0B)
[^ROTscale]: [Veritas Databerg Report, 2020](https://www.veritas.com/content/dam/www/en_us/documents/at-a-glance/AG_uk_databerg_report.pdf)
[^CloudStorageRate]: [Cloud Carbon Footprint methodology](https://www.cloudcarbonfootprint.org/docs/methodology/#storage)
