---
layout: sideNavigation
title: TCS Schema Changelog
permalink: /schema/changelog
---

# Technology Carbon Standard Schema Changelog

This page documents the changes between different versions of the Technology Carbon Standard schema.

## Version 0.0.1 to 1.0.0 (Major Update)

This update represents a significant architectural change to the TCS schema structure, evolving from a standalone schema to a modular, router-based architecture.

### Schema Architecture Changes

- **Router-Based Architecture**:
  - Added a new `index.json` schema that acts as a router directing validation to the appropriate version of the Tech Carbon Standard
  - Implemented conditional validation using `allOf`, `if`, `then` structures to route based on the `standard_version` property
  - Created a `latest.json` schema that redirects to the current latest version

- **Document Root Structure**: 
  - Changed from an array-based structure to an object-based structure
  - Previous version: Root was an array of emission report objects
  - New version: Root is an object with `standard_version` and `organisations` array

- **Versioning Approach**: 
  - Added explicit version selection via the `standard_version` field at the root level
  - Supports both specific version references (`"standard_version": "1.0.0"`) and a "latest" mechanism (`"standard_version": "latest"`)
  - Changed schema ID from `/techcarbonstandard_schema/v0.0.1.json` to `/tech_carbon_standard/v1.0.0.json`

### Modular Schema Organization

- **Separation of Concerns**:
  - Created a multi-level schema structure with distinct components:
    1. **Root Schema (`index.json`)**: Router that directs validation based on version
    2. **Tech Carbon Standard Schema**: Defines overall structure for technology carbon reporting
    3. **Emissions Report Schema**: Defines structure for individual emissions reports
  
- **Independent Versioning**:
  - Each component can now be versioned independently
  - Emissions Report schema can evolve separately from the main TCS schema
  - Both schemas support a "latest" reference mechanism

- **Schema URI Format**: 
  - Implemented a consistent URI format: `https://techcarbonstandard.org/schemas/[schema_type]/[version].json`
  - Old pattern: `https://techcarbonstandard.org/schemas/techcarbonstandard_schema/v0.0.1.json`
  - New pattern: `https://techcarbonstandard.org/schemas/tech_carbon_standard/v1.0.0.json` and `https://techcarbonstandard.org/schemas/emissions_report/v0.0.1.json`

### Organisation Information Restructuring

- **Enhanced Multi-Organisation Support**:
  - Moved from a direct `organisation` object to a nested `organisations` array
  - Enables reporting for multiple organisations within a single document
  - Renamed fields for consistency:
    - `name` → `organisation_name`
    - `open_corporates_id` → `open_corporates_url`

- **Data Model Improvements**:
  - Organisations now collected in an array to support multi-entity reporting
  - Enhanced structure for future extensibility
  - Better support for corporate structures with multiple legal entities

### Emissions Report Structure

- **Modular Emissions Report Schema**:
  - Created a dedicated emissions report schema that can be versioned independently
  - Each organisation can have multiple emissions reports over time
  - Each report can specify its own schema version via `schema_version` property
  - Supports both specific version references and "latest" mechanism

- **Hierarchical Structure**:
  - Added `emissions_reports` array to contain multiple reports per organisation
  - Added `schema_version` and `report_data` nesting for version control
  - Emissions categories now organised within the report_data structure
  - Enables historical reporting and tracking emissions changes over time

### Field Validation Changes

- **Conditional Validation Logic**:
  - Implemented advanced JSON Schema validation using `allOf`, `if`, `then` structures
  - Schema now enforces proper version routing and conditional field requirements
  - Added requirement for `auditor_link` when `verification` is set to `"independently verified"`

- **Emissions Fields Consistency**:
  - Maintained consistent structure for emissions data across schema versions
  - Preserved support for notes and detailed documentation
  - Retained specialised scope_2_emissions_def for direct emissions

### Documentation Improvements

- **Enhanced Schema Documentation**:
  - Created more comprehensive README with directory structure and implementation guides
  - Added example documents demonstrating valid TCS document structures
  - Provided validation utilities based on AJV (Another JSON Validator)

- **Versioning Documentation**:
  - Added clear guidelines on using "latest" vs. specific versions
  - Documentation of the schema URI format and resolution process
  - Recommendations for production use of specific versions for stability

## Implementation Guide Updates

- **New Publishing Guidelines**:
  - Provided validation methods and tools including JSON Schema Validator
  - Added guidance for creating a complete TCS document

- **Validation Tools**:
  - Included a validation utility based on AJV
  - Added instructions for running the validator
  - Provided guidance for validating custom documents

- **Example Implementation**:
  - Added a minimal valid document example in the README
  - Included a complete example in the `examples/` directory
  - Structured examples to demonstrate proper nesting and relationships

---

**Note**: This changelog documents the transition from Technology Carbon Standard schema version 0.0.1 to the new version 1.0.0. The version number increase reflects the maturation of the schema from a pre-release version (0.0.1) to a stable production release (1.0.0), with significant architectural improvements to enhance usability, maintainability, and future extensibility through a modular, router-based architecture.