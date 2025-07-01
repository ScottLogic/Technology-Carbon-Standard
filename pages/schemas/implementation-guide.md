---
layout: sideNavigation
title: Implementation Guide
permalink: /schemas/implementation-guide
---

# Technology Carbon Standard Schema Implementation Guide

This guide provides step-by-step instructions for implementing the Technology Carbon Standard schema using the modular schema architecture, from understanding the schema structure to publishing your tcs.json file.

## Purpose

The TCS Schema serves a critical purpose in the sustainability landscape:

- **Standardised Reporting**: It creates a uniform machine-readable format for technology-related carbon emissions, enabling consistent reporting across organisations.
- **Discoverability**: Organisations publish their TCS emissions data in a standardised file named *tcs.json* at the root domain; *https://example.com/tcs.json*, making it easily discoverable.
- **Accessibility**: This standard location and format makes emissions data directly accessible to automated systems, reporting tools, industry benchmarks, and other machine-readable services without requiring manual data extraction.
- **Transparency**: By making emissions data available in a structured, public format, organisations demonstrate their commitment to transparency and environmental responsibility.
- **Comparability**: The standardised format allows for meaningful comparison of emissions data across different organisations and time periods.

By implementing the Technology Carbon Standard file, your organisation contributes to a more transparent technology sector where carbon emissions can be systematically tracked, compared, and ultimately reduced.

## Understanding the Modular Schema Architecture

The Technology Carbon Standard uses a modular schema design with four interconnected components that work together to provide flexible, versioned carbon emissions reporting.

### Schema Components Overview

```
┌─────────────────┐    ┌──────────────────────────┐
│   Router Schema │───▶│ Reporting Organisation   │
│   (index.json)  │    │ Schema                   │
└─────────────────┘    └────────────┬─────────────┘
                                    │
                                    ▼
                       ┌──────────────────────────┐
                       │ Emissions Report Schema  │
                       │                          │
                       └────────────┬─────────────┘
                                    │
                                    ▼
                       ┌──────────────────────────┐
                       │ Tech Carbon Standard     │
                       │ Schema                   │
                       └──────────────────────────┘
```

### 1. [Router Schema](/schemas/router) ([`index.json`](/schemas/index.json))
- **Purpose**: Entry point that directs validation to the correct reporting organisation schema version
- **Function**: Routes documents based on the root-level `schema_version` field
- **Current Support**: Versions 0.1.0 and 0.0.1

### 2. [Reporting Organisation Schema](/schemas/reporting-organisation/v0-1-0) ([`reporting_organisation/v0.1.0.json`](/schemas/reporting_organisation/v0.1.0.json))
- **Purpose**: Defines the root document structure for TCS reporting
- **Contains**: Organisation details and collection of emissions reports
- **Flexibility**: Each emissions report can use different schema versions

### 3. [Emissions Report Schema](/schemas/emissions-report/v0-0-1) ([`emissions_report/v0.0.1.json`](/schemas/emissions_report/v0.0.1.json))
- **Purpose**: Defines structure for individual emissions reports
- **Contains**: Reporting periods, verification, disclosures, and references to TCS emissions data
- **Features**: Conditional validation (auditor_link required for independent verification)

### 4. [Tech Carbon Standard Schema](/schemas/tech-carbon-standard/v0-0-2) ([`tech_carbon_standard/v0.0.2.json`](/schemas/tech_carbon_standard/v0.0.2.json))
- **Purpose**: Defines the actual emissions data structure and categories
- **Contains**: Four emissions categories with detailed sub-categories
- **Standards**: All emissions in kgCO2e, optional Scope 2 methodology specification

## Document Structure Overview

Your published `tcs.json` file follows this hierarchical structure:

```json
{
  "schema_version": "0.1.0",                    // Router Schema
  "organisation": {                             // Reporting Organisation Schema
    "organisation_name": "Your Company",
    "description": "...",
    "open_corporates_url": "...",
    "registered_country": "..."
  },
  "emissions_reports": [                        // Array of Emissions Reports
    {
      "schema_version": "0.0.1",               // Emissions Report Schema
      "reporting_period": { "from_date": "...", "to_date": "..." },
      "verification": "self reported",
      "disclosures": [...],
      "tech_carbon_standard": {                // Tech Carbon Standard Schema
        "schema_version": "0.0.1",
        "upstream_emissions": {...},
        "direct_emissions": {...},
        "indirect_emissions": {...},
        "downstream_emissions": {...}
      }
    }
  ]
}
```

## Implementation Steps

### Step 1: Understand Your Reporting Requirements

Before creating your TCS document, determine:

**Organisational Scope**:
- Will you report for the entire organisation or specific units?
- Do you need multiple reporting units (regions, divisions)?
- What's your reporting period (calendar year, fiscal year)?

**Data Availability**:
- Which TCS categories do you have data for?
- What's the quality of your data (measured vs estimated)?
- Do you have verification/audit requirements?


### Step 2: Collect Emissions Data by Category

Use the [Tech Carbon Standard](/) to gather data for each applicable category:

#### Upstream Emissions (Embodied Carbon)
```json
"upstream_emissions": {
  "software": {
    "emissions": 2000,
    "notes": "Development infrastructure energy consumption estimate"
  },
  "employee_hardware": {
    "emissions": 55000,
    "notes": "Laptops and monitors purchased in 2023 using manufacturer LCA data"
  },
  "network_hardware": {
    "emissions": 3000,
    "notes": "Routers, switches, and WiFi equipment embodied carbon"
  },
  "server_hardware": {
    "emissions": 15000,
    "notes": "On-premise servers and storage purchased"
  }
}
```

#### Direct Emissions (On-site Operations)
```json
"direct_emissions": {
  "onsite_employee_hardware": {
    "emissions": 5000,
    "notes": "Office electricity for employee devices",
    "method": "location-based"
  },
  "networking": {
    "emissions": 2000,
    "notes": "Network infrastructure electricity consumption",
    "method": "location-based"
  },
  "servers": {
    "emissions": 8000,
    "notes": "On-premise server electricity consumption",
    "method": "market-based"
  },
  "generators": {
    "emissions": 0,
    "notes": "No on-site generators"
  }
}
```

#### Indirect Emissions (External Services)
```json
"indirect_emissions": {
  "offsite_employee_hardware": {
    "emissions": 3000,
    "notes": "Remote work electricity estimate"
  },
  "cloud_services": {
    "emissions": 12000,
    "notes": "AWS and Azure measured using provider carbon tools"
  },
  "saas": {
    "emissions": 8000,
    "notes": "SaaS applications spend-based estimate"
  },
  "managed_services": {
    "emissions": 2000,
    "notes": "Managed security and backup services"
  }
}
```

#### Downstream Emissions (Customer Impact)
```json
"downstream_emissions": {
  "end_user_devices": {
    "emissions": 5000,
    "notes": "Customer device usage for accessing our services"
  },
  "network_data_transfer": {
    "emissions": 2000,
    "notes": "Data transfer infrastructure for service delivery"
  },
  "downstream_infrastructure": {
    "emissions": 2000,
    "notes": "Customer devices used to run our services"
  }
}
```

### Step 3: Structure Your TCS Document

#### Choose Schema Versions
For new implementations, use the latest available versions:
- **Root Schema**: `"schema_version": "0.1.0"`
- **Emissions Report**: `"schema_version": "0.0.1"`
- **Tech Carbon Standard**: `"schema_version": "0.0.2"`

#### Build the Document Structure

**Start with the Root Level**:
```json
{
  "schema_version": "0.1.0",
  "organisation": {
    "organisation_name": "Your Organisation Name",
    "description": "Brief description of your organisation",
    "open_corporates_url": "https://opencorporates.com/companies/gb/12345678",
    "registered_country": "England"
  },
  "emissions_reports": [
    // Your emissions reports go here
  ]
}
```

**Add Your Emissions Report**:
```json
"emissions_reports": [
  {
    "schema_version": "0.0.1",
    "reporting_unit": "Global Operations",
    "reporting_period": {
      "from_date": "2023-01-01",
      "to_date": "2023-12-31"
    },
    "verification": "self reported",
    "disclosures": [
      {
        "url": "https://yourcompany.com/sustainability-report.pdf",
        "doc_type": "report",
        "description": "Annual sustainability report"
      }
    ],
    "tech_carbon_standard": {
      "schema_version": "0.0.2",
      // Your emissions data here
    }
  }
]
```

**Include Your Emissions Data**:
```json
"tech_carbon_standard": {
  "schema_version": "0.0.2",
  "upstream_emissions": {
    // Include categories with data
  },
  "direct_emissions": {
    // Include categories with data
  },
  "indirect_emissions": {
    // Include categories with data
  },
  "downstream_emissions": {
    // Include categories with data
  }
}
```

### Step 4: Validate Your Document

#### Using Online Validation

**JSON Schema Validator**: [https://www.jsonschemavalidator.net/](https://www.jsonschemavalidator.net/)

1. Open the JSON Schema Validator in your browser
2. In the **Schema** panel (left side):
   - Paste the schema URL: `https://techcarbonstandard.org/schemas/index.json`
   - The router will automatically direct validation to the correct schemas based on your document's version
3. In the **Data** panel (right side):
   - Paste your complete TCS document
4. Click **Validate** to check for errors
5. Review any validation errors and fix them in your document

The online validator will show you exactly which fields are missing, incorrectly formatted, or violate schema constraints.

### Step 5: Publish Your TCS File

#### File Location Standards

Publish your **tcs.json** to the root domain of your public corporate website (i.e. https://yourcompany.com/tcs.json), making it easily discoverable.


## Complete Example Implementation

Here's a complete example TCS document using the modular schema:

```json
{
  "schema_version": "0.1.0",
  "organisation": {
    "organisation_name": "Scott Logic",
    "description": "Software consultancy and product development company",
    "open_corporates_url": "https://opencorporates.com/companies/gb/05377430",
    "registered_country": "England"
  },
  "emissions_reports": [
    {
      "schema_version": "0.0.1",
      "reporting_unit": "Global Operations",
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
        "schema_version": "0.0.2",
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
          },
          "downstream_infrastructure": {
            "emissions": 2000,
            "notes": "Customer devices used to run our services"
          }
        }
      }
    }
  ]
}
```

## Advanced Implementation Scenarios

### Multiple Reporting Units

For organisations with multiple divisions or geographic regions:

```json
{
  "schema_version": "0.1.0",
  "organisation": {
    "organisation_name": "Global Tech Corp"
  },
  "emissions_reports": [
    {
      "schema_version": "0.0.1",
      "reporting_unit": "North America Operations",
      "reporting_period": {
        "from_date": "2023-01-01",
        "to_date": "2023-12-31"
      },
      "verification": "independently verified",
      "auditor_link": "https://example-auditor.com/",
      "tech_carbon_standard": {
        "schema_version": "0.0.2"
        // North America emissions data
      }
    },
    {
      "schema_version": "0.0.1",
      "reporting_unit": "EMEA Operations",
      "reporting_period": {
        "from_date": "2023-01-01",
        "to_date": "2023-12-31"
      },
      "verification": "self reported",
      "tech_carbon_standard": {
        "schema_version": "0.0.2"
        // EMEA emissions data
      }
    }
  ]
}
```

### Multi-Year Historical Data

```json
{
  "schema_version": "0.1.0",
  "organisation": {
    "organisation_name": "Your Company"
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
        "schema_version": "0.0.2"
        // 2023 data
      }
    },
    {
      "schema_version": "0.0.1",
      "reporting_period": {
        "from_date": "2022-01-01",
        "to_date": "2022-12-31"
      },
      "verification": "self reported",
      "tech_carbon_standard": {
        "schema_version": "0.0.1"
        // 2022 data
      }
    }
  ]
}
```

### Schema Version Migration

When new schema versions become available, you can migrate gradually:

```json
{
  "schema_version": "0.1.0",
  "organisation": {
    "organisation_name": "Your Company"
  },
  "emissions_reports": [
    {
      "schema_version": "0.0.2",  // Newer version
      "reporting_period": {
        "from_date": "2024-01-01",
        "to_date": "2024-12-31"
      },
      "tech_carbon_standard": {
        "schema_version": "0.0.2"  // Newer TCS schema
        // 2024 data using new schema features
      }
    },
    {
      "schema_version": "0.0.1",  // Legacy version
      "reporting_period": {
        "from_date": "2023-01-01",
        "to_date": "2023-12-31"
      },
      "tech_carbon_standard": {
        "schema_version": "0.0.2"  // Original TCS schema
        // 2023 historical data
      }
    }
  ]
}
```


## Troubleshooting Common Issues

### Validation Errors

**Schema Version Mismatch**:
```
Error: Document uses unsupported schema version
Solution: Ensure schema_version values match supported versions in each schema
```

**Missing Required Fields**:
```
Error: Missing required property 'organisation_name'
Solution: Check each schema level for required fields
```

**Conditional Validation Failures**:
```
Error: Missing 'auditor_link' when verification is 'independently verified'
Solution: Add auditor_link or change verification method
```


## Resources and Tools

### Validation Tools
- [JSON Schema Validator](https://www.jsonschemavalidator.net/)


### Development Resources
- [TCS GitHub Repository](https://github.com/ScottLogic/Technology-Carbon-Standard/)
- [JSON Schema Documentation](https://json-schema.org/)
- [GHG Protocol Resources](https://ghgprotocol.org/)

## Related Documentation

- [Router Schema](/schemas/router/) - Schema routing and version management
- [Reporting Organisation Schema v0.1.0](/schemas/reporting-organisation/v0-1-0) - Root document structure
- [Emissions Report Schema v0.0.1](/schemas/emissions-report/v0-0-1) - Individual report structure
- [Tech Carbon Standard Schema v0.0.2](/schemas/tech-carbon-standard/v0-0-2) - Emissions data structure

## Support and Contributing

### Getting Help
- **GitHub Issues**: Report problems or ask questions
- **Documentation**: Reference detailed schema documentation
- **Community**: Connect with other TCS implementers

### Contributing to TCS
- **Schema Feedback**: Suggest improvements or report issues
- **Tool Development**: Contribute validation tools or calculators
- **Best Practices**: Share implementation experiences and lessons learned

The Technology Carbon Standard is an evolving standard. Your feedback and contributions help improve the framework for the entire community.