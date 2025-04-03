---
layout: default
title: TCS Schema
permalink: /schema/techcarbonstandard
---

# Technology Carbon Standard Schema

The Technology Carbon Standard is a structured framework for measuring and managing the carbon emissions of an organisation's technology estate. This schema provides organisations with a consistent way to report on their technology-related carbon emissions across their complete ICT landscape.

## Purpose

The TCS Schema serves a critical purpose in the sustainability landscape:

- **Standardised Reporting**: It creates a uniform machine-readable format for technology-related carbon emissions, enabling consistent reporting across organisations.
- **Discoverability**: Organisations publish their emissions data in a standardised file named *tcs-emissions.json* (**TBC**) at the root of their web domain e.g., *https://example.com/tcs-emissions.json*, making it easily discoverable.
- **Accessibility**: This standard location and format makes emissions data directly accessible to automated systems, reporting tools, industry benchmarks, and other machine-readable services without requiring manual data extraction.
- **Transparency**: By making emissions data available in a structured, public format, organisations demonstrate their commitment to transparency and environmental responsibility.
- **Comparability**: The standardised format allows for meaningful comparison of emissions data across different organisations and time periods.

By implementing the Technology Carbon Standard, your organisation contributes to a more transparent technology sector where carbon emissions can be systematically tracked, compared, and ultimately reduced.

## Schema Version

Current version: **0.0.1**

The Technology Carbon Standard schema follows semantic versioning (MAJOR.MINOR.PATCH) and is hosted in a version-specific manner:

- Canonical URL: [https://techcarbonstandard.org/schemas/techcarbonstandard_schema/v0.0.1.json](/schemas/techcarbonstandard_schema/v0.0.1.json)
- Latest Version: [https://techcarbonstandard.org/schemas/techcarbonstandard_schema/latest.json](/schemas/techcarbonstandard_schema/latest.json)

Organisations implementing the standard should reference the specific version they are using in their implementation while developers and tools can use the "latest" URL to stay current with updates.

## Overview

The Technology Carbon Standard categorises emissions into four main categories:

1. **Upstream Emissions**: Embodied carbon in hardware and carbon impact of software development
2. **Direct Emissions**: Running costs from electricity powering servers, networks, and devices
3. **Indirect Emissions**: Running costs attributed to external hardware and service solutions
4. **Downstream Emissions**: Carbon emissions associated with the use of products and services by end users

## Schema Structure

### Organisation Information (required)

Basic details about the reporting organisation, for example:

```json
"organisation": {
  "name": "Example Corp",
  "description": "Description of the organisation",
  "company_registration_id": "12345678",
  "company_registration_country": "England",
}
```

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| name | string | Yes | Name of the reporting organisation |
| description | string | No | Description of the reporting organisation |
| company_registration_id | string | No | Company registration number of the reporting organisation |
| company_registration_country | string | No | Country of registration of the reporting organisation |


### Verification and Auditing (required)

The schema includes fields for verification status and auditor information. The `verification` field indicates the level of assurance for the reported emissions data:

```json
"verification": "independently verified",
"auditor_link": "https://example.com/auditor-statement-2023.pdf"
```

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| verification | enum | Yes | Verification status - must be either "self reported" or "independently verified" |
| auditor_link | string (URI) | Conditional | Link to auditor's verification statement - required if verification is "independently verified" |

**Conditional Requirement**: When `verification` is set to `"independently verified"`, the `auditor_link` field becomes required. This ensures that claims of independent verification are supported by accessible documentation.

```json
// Example with self-reported data
"verification": "self reported"

// Example with independently verified data
"verification": "independently verified",
"auditor_link": "https://example.com/auditor-verification.pdf"
```

### Reporting Period (required)

The timeframe covered by the emissions report:

```json
"reportingPeriod": {
  "fromDate": "2023-01-01",
  "toDate": "2023-12-31"
}
```

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| fromDate | string (date) | Yes | Start date in ISO8601 format (YYYY-MM-DD) |
| toDate | string (date) | Yes | End date in ISO8601 format (YYYY-MM-DD) |

### Disclosures

The disclosures property contains an array of objects that document and link to relevant sustainability and emissions calculation methodology information. For example:

```json
"disclosures": [
  {
    "url": "https://example.com/sustainability",
    "doc_type": "Sustainability Report",
    "description": "Annual sustainability report"
  },
  {
    "url": "https://example.com/methodology",
    "doc_type": "Methodology",
    "description": "Carbon calculation methodology"
  }
]
```

| Field | Type | Required | Description |
| url | string (URI format) | Yes | URL pointing to the disclosure document |
| doc_type | enum | Yes | Type of disclosure - must be one of: "Web Page", "Report", "Methodology", or "Other" |
| description | string | No | Brief description of what the disclosure contains |

### Emissions Categories

Each emissions category uses a common structure and is **always reported in kgCO2e**:

```json
{
  "emissions": 1000,
  "notes": "Notes on the carbon calculation"
}
```

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| emissions | number | Yes | Carbon emissions **in kgCO2e** |
| notes | string | No | Notes on methodology or calculation |


{% include linkedHeading.html heading="1. Upstream Emissions" level=3 %}

Emissions related to embodied carbon in hardware and carbon impact of software development:

```json
"upstream_emissions": {
  "software": { "emissions": 0, "notes": "..." },
  "employee_hardware": { "emissions": 55000, "notes": "..." },
  "network_hardware": { "emissions": 1000, "notes": "..." },
  "server_hardware": { "emissions": 0, "notes": "..." }
}
```

| Category | Description |
|----------|-------------|
| software | Emissions from the development and delivery of software procured by the organisation in the reporting period |
| employee_hardware | Embodied carbon in end-user devices procured by the organisation in the reporting period |
| network_hardware | Embodied carbon in networking and infrastructure equipment procured in the reporting period |
| server_hardware | Embodied carbon from servers procured in the reporting period |


{% include linkedHeading.html heading="2. Direct Emissions" level=3 %}

Emissions from electricity powering the organisation's technology:

```json
"direct_emissions": {
  "onsite_employee_hardware": { "emissions": 5000, "notes": "..." },
  "networking": { "emissions": 1000, "notes": "..." },
  "servers": { "emissions": 1000, "notes": "..." },
  "generators": { "emissions": 0, "notes": "..." }
}
```

| Category | Description |
|----------|-------------|
| onsite_employee_hardware | Emissions from operating organisation-owned end-user devices on-site |
| networking | Emissions from operating on-site networking infrastructure |
| servers | Energy consumed by on-premise servers |
| generators | Emissions from on-site power generation |

{% include linkedHeading.html heading="3. Indirect Emissions" level=3 %}

Emissions related to off-site end-user equipment and services:

```json
"indirect_emissions": {
  "offsite_employee_hardware": { "emissions": 3000, "notes": "..." },
  "cloud_services": { "emissions": 5000, "notes": "..." },
  "saas": { "emissions": 84000, "notes": "..." },
  "managed_services": { "emissions": 1000, "notes": "..." }
}
```

| Category | Description |
|----------|-------------|
| offsite_employee_hardware | Emissions from employee devices used off-site i.e. remote working |
| cloud_services | Emissions from cloud platform services |
| saas | Emissions from Software-as-a-Service applications |
| managed_services | Emissions from managed IT services |

{% include linkedHeading.html heading="4. Downstream Emissions" level=3 %}

Emissions associated with customer use of products and services provided by the reporting organisation:

```json
"downstream_emissions": {
  "end_user_devices": { "emissions": 1000, "notes": "..." },
  "network_data_transfer": { "emissions": 1000, "notes": "..." }
}
```

| Category | Description |
|----------|-------------|
| end_user_devices | Emissions from electricity used by customer devices |
| network_data_transfer | Emissions from data transmission infrastructure used by customers |


## Required and Optional Fields
The Technology Carbon Standard schema requires certain fields while making others optional:

### Required Fields

- `organisation` (with required sub-field `name`)
- `reportingPeriod` (with required sub-fields `fromDate` and `toDate`)
- `verification`

### Conditionally Required Fields

- `auditor_link`: Required if `verification` is set to `"independently verified"`

### Optional Emissions Categories

Emissions categories are optional, providing flexibility for organisations to report only on categories relevant to their operations. The schema validates that:

- If categories are included, they must follow the correct structure
- All fields within a category must use the appropriate emissions definition format


{% include linkedHeading.html heading="Example Implementation" level=2 %}

Below is an example of a complete Technology Carbon Standard report:

```json
{
	"organisation": {
		"name": "Scott Logic"
	},
	"reportingPeriod": {
		"fromDate": "2023-01-01",
		"toDate": "2023-12-31"
	},
	"verification": "self reported",
	"disclosures": [
		{
			"url": "https://www.scottlogic.com/who-we-are/sustainability",
			"doc_type": "Web Page",
			"description": "Scott Logic Sustainability web page"
		},
		{
			"url": "https://scottlogic.cdn.prismic.io/scottlogic/ZrSd7UaF0TcGIxye_EnvironmentalImpactReport2023.pdf",
			"doc_type": "Report",
			"description": "Scott Logic 2023 Sustainability Report"
		}
	],
	"upstream_emissions": {
		"software": {
			"emissions": 0,
			"notes": "Not currently meaningfully calculable or estimatable"
		},
		"employee_hardware": {
			"emissions": 55000,
			"notes": "Embodied carbon of purchased laptops and monitors, using production and transportation figures from manufacturers' product lifecycle reports"
		},
		"network_hardware": {
			"emissions": 1000,
			"notes": "Loose estimate, based on minimal hardware purchase"
		},
		"server_hardware": {
			"emissions": 0,
			"notes": "No servers or storage hardware purchased"
		}
	},
	"direct_emissions": {
		"onsite_employee_hardware": {
			"emissions": 5000,
			"notes": "Calculated using UK grid carbon intensity 2023; exact laptop and monitor counts; and, average laptop and monitor power consumption figures",
			"market_based": false
		},
		"networking": {
			"emissions": 1000,
			"notes": "Loose estimate, based on known minimal networking infrastructure",
			"market_based": false
		},
		"servers": {
			"emissions": 1000,
			"notes": "Loose estimate, based on known minimal infrastructure",
			"market_based": false
		},
		"generators": {
			"emissions": 0,
			"notes": "No generators"
		}
	},
	"indirect_emissions": {
		"offsite_employee_hardware": {
			"emissions": 3000,
			"notes": "Calculated using UK grid carbon intensity 2023; exact laptop and monitor counts; and, average laptop and monitor power consumption figures"
		},
		"cloud_services": {
			"emissions": 5000,
			"notes": "Full cloud estate measured using Cloud Carbon Footprinting tool"
		},
		"saas": {
			"emissions": 84000,
			"notes": "Spend-based estimate calculated using Plan A platform"
		},
		"managed_services": {
			"emissions": 1000,
			"notes": "Loose estimate, based on known minimal managed services"
		}
	},
	"downstream_emissions": {
		"end_user_devices": {
			"emissions": 1000,
			"notes": "Calculated based on www website traffic figures"
		},
		"network_data_transfer": {
			"emissions": 1000,
			"notes": "Calculated based on emissions estimate associated with www website and its traffic figures"
		}
	}
}
```

{% include linkedHeading.html heading="Implementation Guide" level=2 %}

### 1. Gather Emissions Data

Use the [Technology Carbon Standard](/) to identify the categories of technology emissions and the recommendations for gaterhing and calculating these emissions.

#### Upstream Emissions
{% include categoryLabel.html label="CatU" %}
{% include categoryItem.html item="CatUSoftware" %}
{% include categoryItem.html item="CatUEmployeeHardware" %}
{% include categoryItem.html item="CatUNetworkHardware" %}
{% include categoryItem.html item="CatUServerHardware" %}

#### Direct Operational Emissions
{% include categoryLabel.html label="CatO" %}
{% include categoryItem.html item="CatOOnsiteEmployeeDevices" %}
{% include categoryItem.html item="CatONetworkDevices" %}
{% include categoryItem.html item="CatOServers" %}

{% include categoryLabel.html label="CatG" %}
{% include categoryItem.html item="CatGGenerators" %}

#### Indirect Operational Emissions
{% include categoryLabel.html label="CatC" %}
{% include categoryItem.html item="CatCOffsiteEmployeeDevices" %}
{% include categoryItem.html item="CatCCloud" %}
{% include categoryItem.html item="CatCSaas" %}
{% include categoryItem.html item="CatCManaged" %}

#### Downstream Emissions
{% include categoryLabel.html label="CatD" %}
{% include categoryItem.html item="CatDEndUserDevices" %}
{% include categoryItem.html item="CatDNetworkDataTransfer" %}


### 2. Create a tcs-emissions.json File

Create a **tcs-emissions.json** (**TBC**) file that follows the [Technology Carbon Standard Schema](/schemas/techcarbonstandard_schema/latest.json) and populate the emissions data.

You can validate your tcs-emissions.json file against the schema using tools like:

- [JSON Schema Validator](https://www.jsonschemavalidator.net/)
- Command-line tools such as `ajv-cli`

### 3. Publish the tcs-emissions.json File

Publish your **tcs-emissions.json** file at the root of your organisation's web domain e.g., **https://example.com/tcs-emissions.json** and ensure it is publically accessible.


{% include linkedHeading.html heading="Resources" level=2 %}

- [Complete JSON Schema](/schemas/techcarbonstandard_schema/latest.json)
- [GitHub Repository](https://github.com/ScottLogic/Technology-Carbon-Standard/schemas/techcarbonstandard_schema)

## Contributing

We welcome contributions to improve the Technology Carbon Standard. Please submit issues or pull requests to our [GitHub](https://github.com/ScottLogic/Technology-Carbon-Standard/) repository.
