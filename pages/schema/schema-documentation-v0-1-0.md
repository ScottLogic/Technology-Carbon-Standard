---
layout: sideNavigation
title: TCS Schema
permalink: /schema/techcarbonstandard/v0-1-0
---

# Technology Carbon Standard Schema

The Technology Carbon Standard is a structured framework for measuring and managing the carbon emissions of an organisation's technology estate. This schema provides organisations with a consistent way to report on their technology-related carbon emissions across their complete ICT landscape.

## Purpose

The TCS Schema serves a critical purpose in the sustainability landscape:

- **Standardised Reporting**: It creates a uniform machine-readable format for technology-related carbon emissions, enabling consistent reporting across organisations.
- **Discoverability**: Organisations publish their TCS emissions data in a standardised file named *tcs.json* at the root domain: *https://example.com/tcs.json*.
- **Accessibility**: This standard location and format makes emissions data directly accessible to automated systems, reporting tools, industry benchmarks, and other machine-readable services without requiring manual data extraction.
- **Transparency**: By making emissions data available in a structured, public format, organisations demonstrate their commitment to transparency and environmental responsibility.
- **Comparability**: The standardised format allows for meaningful comparison of emissions data across different organisations and time periods.

By implementing the Technology Carbon Standard, your organisation contributes to a more transparent technology sector where carbon emissions can be systematically tracked, compared, and ultimately reduced.

## Overview

The Technology Carbon Standard uses a modular schema architecture consisting of:

1. **Reporting Organisation Schema** - Defines the root structure including organisation details and emissions reports collection
2. **Emissions Report Schema** - Defines the structure for individual emissions reports including verification and disclosures
3. **Tech Carbon Standard Schema** - Defines the specific emissions categories and data structure

This modular approach allows each component to be versioned independently, providing flexibility for schema evolution while maintaining backward compatibility.

## Schemas

Provided are three schemas using a modular schema struucture. The [Tech Carbon Standard Schema](/schemas/tech_carbon_standard/v0.0.1.json) can used be independently as required, representing the TCS categories. However, the [Reporting Organisation](/schemas/reporting_organisation/v0.1.0.json) and [Emissions Report](/schemas/emissions_report/v0.0.1.json) Schemas are intended to be used together in conjunction with the Tech Carbon Standard Schema for reporting emissions. The schemas are seperated to enable version control over time with each emissions report.

The schemas follows semantic versioning (MAJOR.MINOR.PATCH) and with version-specific hosting:

### Reporting Organisation Schemas

- Reporting organisation Schema (v0.1.0): [https://techcarbonstandard.org/schemas/reporting_organisation/v0.1.0.json](/schemas/reporting_organisation/v0.1.0.json)
- Reporting organisation Schema (v0.0.1): [https://techcarbonstandard.org/schemas/reporting_organisation/v0.0.1.json](/schemas/reporting_organisation/v0.0.1.json)

### Emissions Report Schemas

- Emissions Report Schema (v0.0.1): [https://techcarbonstandard.org/schemas/emissions_report/v0.0.1.json](/schemas/emissions_report/v0.0.1.json)

### Tech Carbon Standard Schemas

- Tech Carbon Standard Schema (v0.0.1): [https://techcarbonstandard.org/schemas/tech_carbon_standard/v0.0.1.json](/schemas/tech_carbon_standard/v0.0.1.json)

**Organisations implementing the standard should reference the specific version they are using in their implementation.**



<!-- The TCS document structure consists of:

- Standard version information (required)
- Organisations array with one or more reporting organisations (required)
- Emissions reports for each organisation (required)
- Each emissions report contains reporting period, verification method, and emissions data

The categories of emissions are organized into four main categories:

1. **Upstream Emissions**: Embodied carbon in hardware and carbon impact of software development
2. **Direct Emissions**: Running costs from electricity powering servers, networks, and devices
3. **Indirect Emissions**: Running costs attributed to external hardware and service solutions
4. **Downstream Emissions**: Carbon emissions associated with the use of products and services by end users -->

{% include linkedHeading.html heading="Schema Structure" level=2 %}

The schema requires a root object with the schema version, organisation details, and emissions reports:

```json
// tcs.json
{
  "schema_version": "0.1.0",
  "organisation": {
    "organisation_name": "Example Corp",
    "description": "Description of the organisation",
    "open_corporates_url": "https://opencorporates.com/companies/gb/12345678",
  },
  "emissions_reports": [
    {
      "schema_version": "0.0.1",
      "reporting_period": {
        "from_date": "2023-01-01",
        "to_date": "2023-12-31"
      },
      "verification": "self reported",
      "tech_carbon_standard": {
        "schema_version": "0.0.1"
      }
    }
  ]
}
```

### Schema Version (required)

The version of the Reporting Organisation Schema being used:

```json
"schema_version": "0.1.0"
```

### Organisation Information (required)

Basic details about the reporting organisation:

```json
"organisation": {
  "organisation_name": "Example Corp",
  "description": "Description of the organisation",
  "open_corporates_url": "https://opencorporates.com/companies/gb/12345678",
  "registered_country": "England"
}
```

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| organisation_name | string | Yes | Name of the reporting organisation |
| description | string | No | Description of the reporting organisation |
| open_corporates_url | string (URI) | No | Open Corporates URL for the reporting organisation |
| registered_country | string | No | Country of registration of the reporting organisation |

### Emissions Reports (required)

Each organisation must have an array of emissions reports. Each report can use a different Emissions Report schema version:

```json
"emissions_reports": [
  {
    "schema_version": "0.0.1",
    "reporting_unit": "UK Operations",
    "reporting_period": {
      "from_date": "2023-01-01",
      "to_date": "2023-12-31"
    },
    "verification": "independently verified",
    "auditor_link": "https://example-auditor.com/",
    "disclosures": [...],
    "tech_carbon_standard": {
      "schema_version": "0.0.1"
    }
  }
]
```

#### Emissions Report Fields

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| schema_version | string | Yes | Version of the emissions report schema used ("0.0.1") |
| reporting_unit | string | No | Identify the reporting unit (sub-organisation, region, or entity) |
| reporting_period | object | Yes | The reporting period for the carbon emissions data |
| verification | enum | Yes | Verification status - "self reported" or "independently verified" |
| auditor_link | string (URI) | Conditional | Link to auditor's website - required if verification is "independently verified" |
| disclosures | array | No | Array of disclosure documents |
| tech_carbon_standard | object | Yes | The Technology Carbon Standard emissions data |

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


### Technology Carbon Standard Data

The `tech_carbon_standard` object contains the emissions data structured according to the Tech Carbon Standard schema. This can use a specific schema version::

```json
"tech_carbon_standard": {
  "schema_version": "0.0.1",
  "upstream_emissions": {...},
  "direct_emissions": {...},
  "indirect_emissions": {...},
  "downstream_emissions": {...}
}
```



### Emissions Categories

Each emissions category uses a common structure and is **always reported in kgCO2e**:

```json
{
  "emissions": 1000,
  "notes": "Notes on the carbon calculation"
}
```

For GHG Scope 2 emissions (direct operational emissions), an additional optional field is available for indicating the calculation method:

```json
{
  "emissions": 1000,
  "notes": "Notes on the carbon calculation",
  "method": "location-based"
}
```

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| emissions | number | Yes | Carbon emissions **in kgCO2e** (minimum: 0) |
| notes | string | No | Notes on methodology or calculation |
| method | enum | No | Calculation method: "location-based", "market-based", "mixed-methods", or "other" (applicable only to Scope 2 emissions) |

#### 1. Upstream Emissions

Emissions related to embodied carbon in hardware and carbon impact of software development:

```json
"upstream_emissions": {
  "software": { 
    "emissions": 0, 
    "notes": "..."
  },
  "employee_hardware": { 
    "emissions": 55000, 
    "notes": "..." 
  },
  "network_hardware": { 
    "emissions": 1000, 
    "notes": "..." 
  },
  "server_hardware": { 
    "emissions": 0, 
    "notes": "..." 
  }
}
```

| Category | Description |
|----------|-------------|
| software | Emissions associated with developing and delivering off-the-shelf and open-source software installed on the organisation's systems |
| employee_hardware | Embodied carbon emissions associated with hardware devices owned by an organisation |
| network_hardware | Embodied carbon of networking devices owned by the organisation |
| server_hardware | Servers, storage systems, and data centre infrastructure installed on-premise |

#### 2. Direct Emissions

Direct running costs attributed to electricity powering servers, networks, and devices:

```json
"direct_emissions": {
  "onsite_employee_hardware": {
    "emissions": 5000,
    "notes": "...",
    "method": "location-based"
  },
  "networking": {
    "emissions": 1000,
    "notes": "...",
    "method": "location-based"
  },
  "servers": {
    "emissions": 1000,
    "notes": "...",
    "method": "mixed-methods"
  },
  "generators": {
    "emissions": 0,
    "notes": "..."
  }
}
```

| Category | Description |
|----------|-------------|
| onsite_employee_hardware | Emissions associated with the operation and use of devices owned by an organisation |
| networking | Emissions associated with the operation and use of networking and infrastructure |
| servers | The energy consumed by on-premise servers and data centres |
| generators | Any fossil fuel-powered generators, solar PV, wind turbines, or other systems installed on-site |

Note: The Scope 2 categories (`onsite_employee_hardware`, `networking`, and `servers`) include an additional optional `method` field for recording the calculation method.

#### 3. Indirect Emissions

Indirect running carbon costs attributed to external hardware and service solutions:

```json
"indirect_emissions": {
  "offsite_employee_hardware": {
    "emissions": 3000,
    "notes": "..."
  },
  "cloud_services": {
    "emissions": 5000,
    "notes": "..."
  },
  "saas": {
    "emissions": 84000,
    "notes": "..."
  },
  "managed_services": {
    "emissions": 1000,
    "notes": "..."
  }
}
```

| Category | Description |
|----------|-------------|
| offsite_employee_hardware | The emissions incurred by devices used by employees when used out-of-office |
| cloud_services | The emissions associated with cloud platform services like compute, storage, and networking |
| saas | The emissions associated with Software-as-a-Service (SaaS) applications |
| managed_services | The associated emissions of Managed Security Operations, IT support and data backup services |

#### 4. Downstream Emissions

Carbon associated with the use of products and services produced by the organisation:

```json
"downstream_emissions": {
  "end_user_devices": {
    "emissions": 1000,
    "notes": "..."
  },
  "network_data_transfer": {
    "emissions": 1000,
    "notes": "..."
  }
}
```

| Category | Description |
|----------|-------------|
| end_user_devices | Emissions generated from electricity consumption of devices that utilise the organisation's products or services |
| network_data_transfer | Emissions associated with data transmission infrastructure enabling end-user access |

## Required and Optional Fields

### Required Fields

- `schema_version` (root level)
- `organisation` object with required sub-fields:
  - `organisation_name`
- `emissions_reports` array with at least one report
- Each emissions report must have:
  - `schema_version`
  - `reporting_period` (with required sub-fields `from_date` and `to_date`)
  - `verification`
  - `tech_carbon_standard` object with required `schema_version`

### Conditionally Required Fields

- `auditor_link`: Required in the report_data if `verification` is set to `'independently verified'`

### Optional Fields

- Organisation: `description`, `open_corporates_url`, `registered_country`
- Emissions Report: `reporting_unit`, `disclosures`
- All emissions categories and their sub-categories are optional

## Example Implementation

Below is an example of a complete Technology Carbon Standard document using the modular schema structure:

```json
{
  "schema_version": "0.1.0",
  "organisation": {
    "organisation_name": "Scott Logic",
    "open_corporates_url": "https://opencorporates.com/companies/gb/05377430"
  },
  "emissions_reports": [
    {
      "schema_version": "0.0.1",
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
      "tech_carbon_standard": {
        "schema_version": "0.0.1",
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
            "method": "location-based"
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

Create a **tcs.json** file that follows the [Reporting Organisation Schema](/schemas/reporting_organisation/v0.1.0.json) and populate it with:

1. The schema version you're using ("0.1.0" for the current reporting organisation schema)
2. Your organisation's information
3. At least one emissions report with appropriate schema version reference
4. Emissions data structured according to the TCS categories

You can validate your tcs.json file against the schema using tools like:

- [JSON Schema Validator](https://www.jsonschemavalidator.net/)
- Command-line tools such as `ajv-cli`
- The validation utility included in the TCS repository

### 3. Publish the tcs.json File

Publish your **tcs.json** file at the root of your organisation's web domain e.g., **https://example.com/tcs.json**.

## Resources

- [Router Schema](https://techcarbonstandard.org/schemas/index.json)
- [Reporting Organisation Schema v0.1.0](https://techcarbonstandard.org/schemas/reporting_organisation/v0.1.0.json)
- [Emissions Report Schema v0.0.1](https://techcarbonstandard.org/schemas/emissions_report/v0.0.1.json)
- [Tech Carbon Standard Schema v0.0.1](https://techcarbonstandard.org/schemas/tech_carbon_standard/v0.0.1.json)
- [GitHub Repository](https://github.com/ScottLogic/Technology-Carbon-Standard/)

## Contributing

We welcome contributions to improve the Technology Carbon Standard. Please submit issues or pull requests to our [GitHub](https://github.com/ScottLogic/Technology-Carbon-Standard/) repository.