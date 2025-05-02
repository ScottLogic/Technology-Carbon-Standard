---
layout: sideNavigation
title: TCS Schema
permalink: /schema/techcarbonstandard/v1-0-0
---

# Technology Carbon Standard Schema

The Technology Carbon Standard is a structured framework for measuring and managing the carbon emissions of an organisation's technology estate. This schema provides organisations with a consistent way to report on their technology-related carbon emissions across their complete ICT landscape.

## Purpose

The TCS Schema serves a critical purpose in the sustainability landscape:

- **Standardised Reporting**: It creates a uniform machine-readable format for technology-related carbon emissions, enabling consistent reporting across organisations.
- **Discoverability - Details TBC**: Organisations publish their TCS emissions data in a standardised file named *tcs.json* at the root domain: *https://example.com/tcs.json*.
- **Accessibility**: This standard location and format makes emissions data directly accessible to automated systems, reporting tools, industry benchmarks, and other machine-readable services without requiring manual data extraction.
- **Transparency**: By making emissions data available in a structured, public format, organisations demonstrate their commitment to transparency and environmental responsibility.
- **Comparability**: The standardised format allows for meaningful comparison of emissions data across different organisations and time periods.

By implementing the Technology Carbon Standard, your organisation contributes to a more transparent technology sector where carbon emissions can be systematically tracked, compared, and ultimately reduced.

## Schema Version

Current version: **1.0.0**

The Technology Carbon Standard schema follows semantic versioning (MAJOR.MINOR.PATCH) and is hosted in a version-specific manner:

- Main Router Schema: [https://techcarbonstandard.org/schemas/index.json](/schemas/index.json)
- TCS Schema (v1.0.0): [https://techcarbonstandard.org/schemas/tech_carbon_standard/v1.0.0.json](/schemas/tech_carbon_standard/v1.0.0.json)
- Latest TCS Version: [https://techcarbonstandard.org/schemas/tech_carbon_standard/latest.json](/schemas/tech_carbon_standard/latest.json)
- Emissions Report Schema (v0.0.1): [https://techcarbonstandard.org/schemas/emissions_report/v0.0.1.json](/schemas/emissions_report/v0.0.1.json)
- Latest Emissions Report Version: [https://techcarbonstandard.org/schemas/emissions_report/latest.json](/schemas/emissions_report/latest.json)

Organisations implementing the standard should reference the specific version they are using in their implementation while developers and tools can use the "latest" URL to stay current with updates.

## Overview

The Technology Carbon Standard now uses a modular schema architecture consisting of:

1. A router schema (`index.json`) that directs validation based on version
2. The Tech Carbon Standard schema that defines the overall structure
3. The Emissions Report schema that defines the structure for individual reports

The TCS document structure consists of:

- Standard version information (required)
- Organisations array with one or more reporting organisations (required)
- Emissions reports for each organisation (required)
- Each emissions report contains reporting period, verification method, and emissions data

The categories of emissions are organized into four main categories:

1. **Upstream Emissions**: Embodied carbon in hardware and carbon impact of software development
2. **Direct Emissions**: Running costs from electricity powering servers, networks, and devices
3. **Indirect Emissions**: Running costs attributed to external hardware and service solutions
4. **Downstream Emissions**: Carbon emissions associated with the use of products and services by end users

{% include linkedHeading.html heading="Schema Structure" level=2 %}

The schema requires a root object with the standard version and organisations array:

```json
// tcs.json
{
  "standard_version": "1.0.0",
  "organisations": [
    {
      "organisation_name": "Example Corp",
      "description": "Description of the organisation",
      "open_corporates_url": "https://opencorporates.com/companies/gb/12345678",
      "registered_country": "England",
      "emissions_reports": [...]
    }
  ]
}
```

### Standard Version (required)

The version of the Technology Carbon Standard being used:

```json
"standard_version": "1.0.0"
```

You can also use "latest" to reference the most recent version:

```json
"standard_version": "latest"
```

### Organisation Information (required)

Basic details about the reporting organisation:

```json
"organisation_name": "Example Corp",
"description": "Description of the organisation",
"open_corporates_url": "https://opencorporates.com/companies/gb/12345678",
"registered_country": "England"
```

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| organisation_name | string | Yes | Name of the reporting organisation |
| description | string | No | Description of the reporting organisation |
| open_corporates_url | string | No | URL to the organisation's Open Corporates page |
| registered_country | string | No | Country of registration of the reporting organisation |

### Emissions Reports

Each organisation can have multiple emissions reports over time:

```json
"emissions_reports": [
  {
    "schema_version": "0.0.1",
    "report_data": {
      // Emissions report content
    }
  }
]
```

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| schema_version | string | Yes | Version of the emissions report schema used ("0.0.1" or "latest") |
| report_data | object | Yes | The emissions report data that will be validated against the specified schema version |

### Emissions Report Structure

The `report_data` object contains the actual emissions report information:

```json
"report_data": {
  "reporting_period": {
    "from_date": "2023-01-01",
    "to_date": "2023-12-31"
  },
  "verification": "self reported",
  "disclosures": [...],
  "upstream_emissions": {...},
  "direct_emissions": {...},
  "indirect_emissions": {...},
  "downstream_emissions": {...}
}
```

#### Verification and Auditing (required)

The schema includes fields for verification status and auditor information:

```json
"verification": "independently verified",
"auditor_link": "https://example-auditor.com/"
```

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| verification | enum | Yes | Verification status - must be either "self reported" or "independently verified" |
| auditor_link | string (URI) | Conditional | Link to auditor's website - required if verification is "independently verified" |

**Conditional Requirement**: When `verification` is set to `'independently verified'`, the `auditor_link` field becomes required.

#### Reporting Period (required)

The timeframe covered by the emissions report:

```json
"reporting_period": {
  "from_date": "2023-01-01",
  "to_date": "2023-12-31"
}
```

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| from_date | string (date) | Yes | Start date in ISO8601 format (YYYY-MM-DD) |
| to_date | string (date) | Yes | End date in ISO8601 format (YYYY-MM-DD) |

#### Disclosures

The disclosures property contains an array of objects that document and link to relevant sustainability and emissions calculation methodology information:

```json
"disclosures": [
  {
    "url": "https://example.com/sustainability",
    "doc_type": "report",
    "description": "Annual sustainability report"
  }
]
```

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| url | string (URI format) | Yes | URL pointing to the disclosure document |
| doc_type | enum | Yes | Type of disclosure - must be one of: "report", "methodology", or "other" |
| description | string | No | Brief description of what the disclosure contains |

### Emissions Categories

Each emissions category uses a common structure and is **always reported in kgCO2e**:

```json
{
  "emissions": 1000,
  "notes": "Notes on the carbon calculation"
}
```

For GHG Scope 2 emissions (direct operational emission), a further optional field is available for indicating the use of location or market based emissions calculation:

```json
{
  "emissions": 1000,
  "notes": "Notes on the carbon calculation",
  "method": "location-based"
}
```

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| emissions | number | Yes | Carbon emissions **in kgCO2e** |
| notes | string | No | Notes on methodology or calculation |
| method | enum | No | The emissions calculation method, must be one of: "location-based", "market-based", "mixed-methods" or "other" (applicable only to direct operational emissions) |

#### 1. Upstream Emissions

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

#### 2. Direct Emissions

Emissions from electricity powering the organisation's technology:

```json
"direct_emissions": {
  "onsite_employee_hardware": { "emissions": 5000, "notes": "...", "method": "location-based" },
  "networking": { "emissions": 1000, "notes": "...", "method": "location-based" },
  "servers": { "emissions": 1000, "notes": "...", "method": "mixed-methods" },
  "generators": { "emissions": 0, "notes": "..." }
}
```

| Category | Description |
|----------|-------------|
| onsite_employee_hardware | Emissions from operating organisation-owned end-user devices on-site |
| networking | Emissions from operating on-site networking infrastructure |
| servers | Energy consumed by on-premise servers |
| generators | Emissions from on-site power generation |

Note that the GHG Scope 2 `onsite_employee_hardware`, `networking` and `servers` have an additional, optional field for recording the calculation method; `method`.

#### 3. Indirect Emissions

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

#### 4. Downstream Emissions

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

### Required Fields

- `standard_version`
- `organisations` array with at least one organisation
- Each organisation must have:
  - `organisation_name`
  - `emissions_reports` array with at least one report
- Each emissions report must have:
  - `schema_version`
  - `report_data` with required fields:
    - `reporting_period` (with required sub-fields `from_date` and `to_date`)
    - `verification`

### Conditionally Required Fields

- `auditor_link`: Required in the report_data if `verification` is set to `'independently verified'`

### Optional Emissions Categories

Emissions categories are optional, providing flexibility for organisations to report only on categories relevant to their operations. The schema validates that:

- If categories are included, they must follow the correct structure
- All fields within a category must use the appropriate emissions definition format

## Example Implementation

Below is an example of a complete Technology Carbon Standard document:

```json
{
  "standard_version": "1.0.0",
  "organisations": [
    {
      "organisation_name": "Scott Logic",
      "open_corporates_url": "https://opencorporates.com/companies/gb/05377430",
      "emissions_reports": [
        {
          "schema_version": "0.0.1",
          "report_data": {
            "reporting_period": {
              "from_date": "2023-01-01",
              "to_date": "2023-12-31"
            },
            "verification": "self reported",
            "disclosures": [
              {
                "url": "https://scottlogic.cdn.prismic.io/scottlogic/ZrSd7UaF0TcGIxye_EnvironmentalImpactReport2023.pdf",
                "doc_type": "report",
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
                "notes": "Calculated using UK grid carbon intensity 2023; exact laptop and monitor counts; and, average laptop and monitor power consumption figures"
              },
              "networking": {
                "emissions": 1000,
                "notes": "Loose estimate, based on known minimal networking infrastructure"
              },
              "servers": {
                "emissions": 1000,
                "notes": "Loose estimate, based on known minimal infrastructure"
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
        }
      ]
    }
  ]
}
```

## Implementation Guide

### 1. Gather Emissions Data

Use the [Technology Carbon Standard](/) to identify the categories of technology emissions and the recommendations for gathering and calculating these emissions.

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

### 2. Create a tcs.json File

Create a **tcs.json** file that follows the [Technology Carbon Standard Schema](/schemas/index.json) and populate it with:

1. The standard version you're using
2. Your organisation's information
3. At least one emissions report with appropriate schema version reference

You can validate your tcs.json file against the schema using tools like:

- [JSON Schema Validator](https://www.jsonschemavalidator.net/)
- Command-line tools such as `ajv-cli`

### 3. Publish the tcs.json File

Publish your **tcs.json** file at the root of your organisation's web domain e.g., **https://example.com/tcs.json** or, preferably at the "well-known location" of their web domain e.g., *https://example.com/.well-known/tcs.json* and ensure it is publicly accessible.

## Resources

- [Index Schema](/schemas/index.json)
- [Latest TCS Schema](/schemas/tech_carbon_standard/latest.json)
- [Latest Emissions Report Schema](/schemas/emissions_report/latest.json)
- [GitHub Repository](https://github.com/ScottLogic/Technology-Carbon-Standard/)

## Contributing

We welcome contributions to improve the Technology Carbon Standard. Please submit issues or pull requests to our [GitHub](https://github.com/ScottLogic/Technology-Carbon-Standard/) repository.