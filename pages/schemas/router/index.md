---
layout: schemaNavigation
title: Router Schema
permalink: /schemas/router/
---

# TCS Router Schema

The Router Schema ([`index.json`](/schemas/index.json)) serves as the entry point for the Technology Carbon Standard, directing validation to the appropriate version of the Reporting Organisation schema based on the document's schema version.

## Purpose

The Router Schema provides:

- **Version Management**: Routes documents to the correct schema version for validation
- **Future-Proofing**: Allows for seamless addition of new schema versions
- **Backward Compatibility**: Maintains support for older schema versions
- **Single Entry Point**: Provides a consistent validation endpoint regardless of document version

## Schema Information

- **Schema ID**: [`https://techcarbonstandard.org/schemas/index.json`](/schemas/index.json)
- **Current Supported Versions**: `0.1.2`, `0.1.1`, `0.1.0`, `0.0.1`
- **Schema Type**: Router/Dispatcher

## Schema Structure

The Router Schema is intentionally minimal, containing only the routing logic:

```json
{
  "$schema": "https://json-schema.org/draft/2020-12/schema",
  "$id": "https://techcarbonstandard.org/schemas/index.json",
  "title": "Technology Carbon Standard Root Schema",
  "description": "Root schema that routes validation to the appropriate version of the Technology Carbon Standard",
  "type": "object",
  "properties": {
    "schema_version": {
      "type": "string",
      "description": "Version of the root Technology Carbon Standard report schema being used",
      "enum": ["0.1.2", "0.1.1", "0.1.0", "0.0.1"]
    }
  },
  "required": ["schema_version"],
  "allOf": [
    {
      "if": {
        "properties": {
          "schema_version": { "const": "0.1.2" }
        }
      },
      "then": {
        "$ref": "https://techcarbonstandard.org/schemas/reporting_organisation/v0.1.2.json"
      }
    },
    {
      "if": {
        "properties": {
          "schema_version": { "const": "0.1.1" }
        }
      },
      "then": {
        "$ref": "https://techcarbonstandard.org/schemas/reporting_organisation/v0.1.1.json"
      }
    },
    {
      "if": {
        "properties": {
          "schema_version": { "const": "0.1.0" }
        }
      },
      "then": {
        "$ref": "https://techcarbonstandard.org/schemas/reporting_organisation/v0.1.0.json"
      }
    },
    {
      "if": {
        "properties": {
          "schema_version": { "const": "0.0.1" }
        }
      },
      "then": {
        "$ref": "https://techcarbonstandard.org/schemas/reporting_organisation/v0.0.1.json"
      }
    }
  ],
  "additionalProperties": true
}
```

## How It Works

1. **Document Validation**: When a TCS document is validated against the router schema, it first checks the `schema_version` field
2. **Version Routing**: Based on the version value, it routes to the appropriate Reporting Organisation schema:
   - `"0.0.3"` → Routes to [`reporting_organisation/v0.1.2.json`](/schemas/reporting_organisation/v0.1.2.json)
   - `"0.1.1"` → Routes to [`reporting_organisation/v0.1.1.json`](/schemas/reporting_organisation/v0.1.1.json)
   - `"0.1.0"` → Routes to [`reporting_organisation/v0.1.0.json`](/schemas/reporting_organisation/v0.1.0.json)
   - `"0.0.1"` → Routes to [`reporting_organisation/v0.0.1.json`](/schemas/reporting_organisation/v0.0.1.json)
3. **Validation Delegation**: The actual validation is performed by the target schema

## Required Fields

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| schema_version | string (enum) | Yes | Must be one of the supported versions: "0.1.2", "0.1.1", "0.1.0" or "0.0.1" |

## Usage Example

Any valid TCS document must start with a schema version declaration:

```json
{
  "schema_version": "0.1.1",
  "organisation": {
    "organisation_name": "Example Corp"
  },
  "emissions_reports": [...]
}
```

## Adding New Versions

When new schema versions are released, the router schema is updated to include:

1. The new version in the `enum` list
2. A new conditional routing rule in the `allOf` section

Example of adding version `0.2.0`:

```json
{
  "properties": {
    "schema_version": {
      "enum": ["0.2.0", "0.1.0", "0.0.1"]
    }
  },
  "allOf": [
    {
      "if": {
        "properties": {
          "schema_version": { "const": "0.2.0" }
        }
      },
      "then": {
        "$ref": "https://techcarbonstandard.org/schemas/reporting_organisation/v0.2.0.json"
      }
    }
  ]
}
```


## Related Documentation

{% include schemaDocumentationLinks.html %}

## Resources

- [Router Schema](https://techcarbonstandard.org/schemas/index.json)
- [GitHub Repository](https://github.com/ScottLogic/Technology-Carbon-Standard/)