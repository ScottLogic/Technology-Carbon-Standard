const Ajv2020 = require('ajv/dist/2020');
const addFormats = require('ajv-formats');
const fs = require('fs');
const path = require('path');

// Define exact file paths based on the new directory structure
const PATHS = {
  rootSchema: path.resolve(__dirname, '../index.json'),
  reportingOrganisationsV010Schema: path.resolve(__dirname, '../reporting_organisation/v0.1.0.json'),
  reportingOrganisationsV001Schema: path.resolve(__dirname, '../reporting_organisation/v0.0.1.json'),
  emissionsV001Schema: path.resolve(__dirname, '../emissions_report/v0.0.1.json'),
  techCarbonStandardV001Schema: path.resolve(__dirname, '../tech_carbon_standard/v0.0.1.json'),
  techCarbonStandardV002Schema: path.resolve(__dirname, '../tech_carbon_standard/v0.0.2.json'),
  tcsDocument: path.resolve(__dirname, '../examples/reporting_organisation/v0.1.0.json')
};

// For debugging - make sure we can find all files
Object.entries(PATHS).forEach(([key, filePath]) => {
  console.log(`Checking ${key}: ${filePath}`);
  if (fs.existsSync(filePath)) {
    console.log(`  ✓ File exists`);
  } else {
    console.error(`  ✗ FILE NOT FOUND`);
  }
});

// Create AJV instance with 2020-12 draft support
const ajv = new Ajv2020({
  allErrors: true,
  verbose: true
});

// Add format validators
addFormats(ajv);

async function validateTcsDocument() {
  try {
    console.log('\n=== LOADING SCHEMAS ===');

    // Load all schemas as strings first
    const rootSchemaStr = fs.readFileSync(PATHS.rootSchema, 'utf8');
    const reportingOrganisationsV001SchemaStr = fs.readFileSync(PATHS.reportingOrganisationsV001Schema, 'utf8');
    const reportingOrganisationsV010SchemaStr = fs.readFileSync(PATHS.reportingOrganisationsV010Schema, 'utf8');
    const emissionsV001SchemaStr = fs.readFileSync(PATHS.emissionsV001Schema, 'utf8');
    const techCarbonStandardV001SchemaStr = fs.readFileSync(PATHS.techCarbonStandardV001Schema, 'utf8');
    const techCarbonStandardV002SchemaStr = fs.readFileSync(PATHS.techCarbonStandardV002Schema, 'utf8');

    // Parse all schemas
    const rootSchema = JSON.parse(rootSchemaStr);
    const reportingOrganisationsV001Schema = JSON.parse(reportingOrganisationsV001SchemaStr);
    const reportingOrganisationsV010Schema = JSON.parse(reportingOrganisationsV010SchemaStr);
    const emissionsV001Schema = JSON.parse(emissionsV001SchemaStr);
    const techCarbonStandardV001Schema = JSON.parse(techCarbonStandardV001SchemaStr);
    const techCarbonStandardV002Schema = JSON.parse(techCarbonStandardV002SchemaStr);

    console.log('All schemas parsed successfully');

    // Using the standardized URI-based schema IDs
    const reportingOrganisationsV001SchemaId = 'https://techcarbonstandard.org/schemas/reporting_organisation/v0.0.1.json';
    const reportingOrganisationsV010SchemaId = 'https://techcarbonstandard.org/schemas/reporting_organisation/v0.1.0.json';
    const techCarbonStandardV001SchemaId = 'https://techcarbonstandard.org/schemas/tech_carbon_standard/v0.0.1.json';
    const techCarbonStandardV002SchemaId = 'https://techcarbonstandard.org/schemas/tech_carbon_standard/v0.0.2.json';
    const emissionsV001SchemaId = 'https://techcarbonstandard.org/schemas/emissions_report/v0.0.1.json';
    const rootSchemaId = 'https://techcarbonstandard.org/schemas/index.json';

    console.log('Registering schemas with AJV:');

    // Register all schemas with their standardized IDs
    ajv.addSchema(techCarbonStandardV001Schema, techCarbonStandardV001SchemaId);
    console.log(` - Added tcs v0.0.1 schema with ID: ${techCarbonStandardV001SchemaId}`);

    ajv.addSchema(techCarbonStandardV002Schema, techCarbonStandardV002SchemaId);
    console.log(` - Added tcs v0.0.2 schema with ID: ${techCarbonStandardV002SchemaId}`);

    ajv.addSchema(emissionsV001Schema, emissionsV001SchemaId);
    console.log(` - Added emissions v0.0.1 schema with ID: ${emissionsV001SchemaId}`);

    ajv.addSchema(reportingOrganisationsV010Schema, reportingOrganisationsV010SchemaId);
    console.log(` - Added TCS v0.1.0 schema with ID: ${reportingOrganisationsV010SchemaId}`);

    ajv.addSchema(reportingOrganisationsV001Schema, reportingOrganisationsV001SchemaId);
    console.log(` - Added TCS v0.0.1 schema with ID: ${reportingOrganisationsV001SchemaId}`);

    ajv.addSchema(rootSchema, rootSchemaId);
    console.log(` - Added root schema with ID: ${rootSchemaId}`);

    // Load the document to validate
    const tcsDocumentStr = fs.readFileSync(PATHS.tcsDocument, 'utf8');
    const tcsDocument = JSON.parse(tcsDocumentStr);
    console.log('Loaded TCS document successfully');

    // First check if the document has the expected basic structure
    console.log('\n=== BASIC VALIDATION ===');
    if (!tcsDocument.schema_version) {
      console.error('Document missing schema_version field');
      return;
    }

    // if (!Array.isArray(tcsDocument.organisations)) {
    //   console.error('Document missing organisations array or not an array');
    //   return;
    // }

    console.log('Basic document structure looks good');

    // Validate using the rootSchema directly
    console.log('\n=== VALIDATING WITH ROOT SCHEMA ===');
    const validate = ajv.compile(rootSchema);
    const valid = validate(tcsDocument);

    if (valid) {
      console.log('✅ Document is valid!');
    } else {
      console.log('❌ Document validation failed:');

      // Format and display the errors in a more readable way
      validate.errors.forEach((error, index) => {
        console.log(`\nError #${index + 1}:`);
        console.log(` - Path: ${error.instancePath}`);
        console.log(` - Message: ${error.message}`);
        console.log(` - Schema path: ${error.schemaPath}`);
        if (error.params) {
          console.log(` - Params: ${JSON.stringify(error.params)}`);
        }
      });
    }

  } catch (err) {
    console.error('Error during validation:', err);
  }
}

// Run the validation
validateTcsDocument().catch(err => {
  console.error('Fatal error:', err);
});