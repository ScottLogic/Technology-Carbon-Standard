# Technology Carbon Standard Schema

This repository contains JSON Schema definitions for the Technology Carbon Standard (TCS), a framework for measuring and reporting carbon emissions from technology products and services.

## Directory Structure

```
schemas/
├── index.json                  # Root schema router
├── reporting_organisations/    # Lists the reporting organisations
│   ├──v1.0.0.json              # Reporting organisations version 1.0.0
│   ├──v0.0.1.json              # The original TCS schema - version 0.0.1
├── emissions_report/           # Emissions report schemas
│   ├── v0.0.1.json             # Emissions report version 0.0.1
├── tech_carbon_standard/       # TCS schemas
│   ├── v1.0.0.json             # TCS version 1.0.0
├── validators/                 # Validation utilities
│   ├── validate.js             # AJV-based validator
├── examples/                   # Example documents
│   ├── tcs.json                # Example TCS document
```

## Schema Overview

The Technology Carbon Standard uses a modular schema structure with two main components:

1. **Reporting Organisations Schema**: The root schema that defines the overall structure for technology carbon emissions reporting.
2. **Emissions Report Schema**: A sub-schema that defines the detailed structure for individual emissions reports.
3. **Tech Carbon Standard Schema**: The TCS schema that defines carbon emissions reporting per TCS the categories.

Each component can be versioned independently, allowing for flexibility in schema evolution.

### Root Schema (index.json)

The root schema (`index.json`) acts as a router that directs validation to the appropriate version of the Reporting Organisations schema based on the `schema_version` property in the document.

### Reporting Organisations Schema

This schema defines the overall structure for technology carbon reporting, including:

- Schema version information
- Organisation details
- The organisations collection of emissions reports

### Emissions Report Schema

This schema defines the structure for individual emissions reports, including:

- Reporting period
- Verification status
- Disclosures
- The reported Technology Carbon Standard emissions

### Technology Carbon Standard Schema

This schema aligns specifically to the Technology Carbon Standard categories and contains the reported emissions of each:

- Emissions data organised by category (upstream, direct, indirect, downstream)

<!-- ## Using "latest" vs. Specific Versions

The schema system supports both specific version references and a "latest" mechanism:

- Use `"standard_version": "1.0.0"` to validate against a specific version
- Use `"standard_version": "latest"` to validate against the current latest version

The same applies to emissions report schemas:

- Use `"schema_version": "0.0.1"` for a specific version
- Use `"schema_version": "latest"` for the current latest version -->

> **Note**: For production use, it's recommended to use specific versions to ensure stability and reproducibility.

## Examples

The `examples/` directory contains example documents that demonstrate how to structure valid TCS documents:

- `tcs.json`: A complete TCS document with organisation and emissions data

Example of a minimal valid document:

```json
{
  "schema_version": "1.0.0",
  "organisations": [
    {
      "organisation_name": "Example Corp",
      "emissions_reports": [
        {
          "schema_version": "0.0.1",
          "report_data": {
            "reporting_period": {
              "from_date": "2023-01-01",
              "to_date": "2023-12-31"
            },
            "verification": "self reported"
          }
        }
      ]
    }
  ]
}
```

## Validation

The schema includes a validation utility based on AJV (Another JSON Validator).

### Running the Validator

To validate a TCS document:

1. Ensure Node.js is installed
2. Install dependencies:
   ```
   npm install ajv ajv-formats
   ```
3. Run the validator:
   ```
   node schemas/validators/validate.js
   ```

The validator will:
- Check if all required schema files exist
- Load and parse all schemas
- Register them with AJV
- Validate the example document against the schema
- Display detailed error messages if validation fails

### Custom Validation

To validate your own document, modify the `PATHS.tcsDocument` constant in `validate.js` to point to your TCS document:

```javascript
const PATHS = {
  // ...
  tcsDocument: path.resolve(__dirname, '../path/to/your/document.json')
};
```

## Extending the Schema

### Adding New Versions

To add a new version of the Reporting Organisations schema:

1. Create a new file in `reporting_organisations/` (e.g., `v1.1.0.json`)
<!-- 2. Update `reporting_organisations/latest.json` to reference the new version -->
3. Update `index.json` to include the new version in the `enum` list and conditional logic

To add a new version of the Emissions Report schema:

1. Create a new file in `emissions_report/` (e.g., `v0.0.2.json`)
<!-- 2. Update `emissions_report/latest.json` to reference the new version -->
3. Update all Tech Carbon Standard schemas that reference emissions reports to include the new version

To add a new version of the Tech Carbon Standard schema:

1. Create a new file in `tech_carbon_standard/` (e.g., `v1.1.0.json`)
<!-- 2. Update `tech_carbon_standard/latest.json` to reference the new version -->
3. Update `index.json` to include the new version in the `enum` list and conditional logic

## Schema URI Format

All schema IDs use a consistent URI format:

```
https://techcarbonstandard.org/schemas/[schema_type]/[version].json
```

For example:
- `https://techcarbonstandard.org/schemas/tech_carbon_standard/v1.0.0.json`
- `https://techcarbonstandard.org/schemas/emissions_report/v0.0.1.json`

This format ensures proper reference resolution across schemas.

## Contributing

When modifying the schema:

1. Maintain backward compatibility when possible
2. Update all related schema files to maintain consistency
3. Update examples to demonstrate new features
4. Run validation to ensure all changes work together correctly

