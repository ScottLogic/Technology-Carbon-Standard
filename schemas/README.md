# Technology Carbon Standard Schema

This repository contains JSON Schema definitions for the Technology Carbon Standard (TCS), a framework for measuring and reporting carbon emissions from technology products and services.

## Directory Structure

```
schemas/
├── index.json                  # Schema router
├── reporting_organisation/     # The root schema for the reporting organisation
│   ├──v0.1.0.json              # Reporting organisations version 0.1.0
│   ├──v0.0.1.json              # The original TCS schema - version 0.0.1
├── emissions_report/           # Emissions report schemas
│   ├── v0.0.1.json             # Emissions report version 0.0.1
├── tech_carbon_standard/       # TCS schemas
│   ├── v0.0.1.json             # TCS version 0.0.1
│   ├── v0.0.2.json             # TCS version 0.0.2
├── tests/                      # Unit tests for schemas
│   ├── reporting_organisations # Tests for the reporting organisations schema
|   ├── utils                   # Utility functions for the tests
├── examples/                   # Example documents
│   ├── reporting_organisations # Example reporting organisations documents
```

## Schema Overview

The Technology Carbon Standard uses a modular schema structure with three main components:

1. **Reporting Organisation Schema**: The root schema that defines the overall structure for technology carbon emissions reporting.
2. **Emissions Report Schema**: A sub-schema that defines the detailed structure for individual emissions reports.
3. **Tech Carbon Standard Schema**: The TCS schema that defines carbon emissions reporting per TCS the categories.

Each component can be versioned independently, allowing for flexibility in schema evolution.

### Schema Router (index.json)

The schema (`index.json`) simply acts as a router that directs to the appropriate version of the Reporting Organisation schema based on the `schema_version` property in the document.

### Reporting Organisations Schema

This schema defines the overall structure for technology carbon reporting, including:

- Schema version information
- Organisation details
- The organisation's collection of emissions reports

### Emissions Report Schema

This schema defines the structure for individual emissions reports, including:

- Reporting period
- Verification status
- Disclosures
- The reported Technology Carbon Standard emissions

### Technology Carbon Standard Schema

This schema aligns specifically to the Technology Carbon Standard categories and contains the reported emissions of each:

- Emissions data organised by category (upstream, direct, indirect, downstream)


## Examples

The `examples/` directory contains example documents that demonstrate how to structure valid TCS documents:

- `reporting_organisation/v0.0.1.json`: An example document for the v0.0.1 reporting organisation schema
- `reporting_organisation/v0.1.0.json`: An example document for the v0.1.0 reporting organisation schema

Example of a minimal valid document:

```json
{
  "schema_version": "0.1.0",
  "organisation": {
    "organisation_name": "Example Corp"
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

## Testing

The schema includes a set of unit tests which use the Jest testing framework.

To run the tests:

1. Ensure Node.js is installed (version 17+ is required)
2. Install dependencies:
   ```
   npm install
   ```
3. Run the tests:
   ```
   npm test
   ```

The tests are located in `schemas/tests` and load example data from the `schemas/examples` directory.

Any new tests with the extension `.spec.ts` will be picked up by the `npm test` command.

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

To add a new version of the Reporting Organisation schema:

1. Create a new file in `reporting_organisation/` (e.g., `v0.2.0.json`)
2. Update `index.json` to include the new version in the `enum` list and conditional logic
3. Update tests to reflect changes made to the schema

To add a new version of the Emissions Report schema:

1. Create a new file in `emissions_report/` (e.g., `v0.0.2.json`)
2. Update all Tech Carbon Standard schemas that reference emissions reports to include the new version
3. Update tests to reflect changes made to the schema

To add a new version of the Tech Carbon Standard schema:

1. Create a new file in `tech_carbon_standard/` (e.g., `v1.1.0.json`)
2. Update `index.json` to include the new version in the `enum` list and conditional logic
3. Update tests to reflect changes made to the schema

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
4. Update and run tests to ensure all changes work together correctly
