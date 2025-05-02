const Ajv2020 = require('ajv/dist/2020');
const addFormats = require('ajv-formats');
const fs = require('fs');
const path = require('path');

// Define exact file paths based on the new directory structure
const PATHS = {
  rootSchema: path.resolve(__dirname, '../index.json'),
  tcsLatestSchema: path.resolve(__dirname, '../tech_carbon_standard/latest.json'),
  tcsV1Schema: path.resolve(__dirname, '../tech_carbon_standard/v1.0.0.json'),
  emissionsLatestSchema: path.resolve(__dirname, '../emissions_report/latest.json'),
  emissionsV0Schema: path.resolve(__dirname, '../emissions_report/v0.0.1.json'),
  tcsDocument: path.resolve(__dirname, '../examples/tcs.json')
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
    const tcsLatestSchemaStr = fs.readFileSync(PATHS.tcsLatestSchema, 'utf8');
    const tcsV1SchemaStr = fs.readFileSync(PATHS.tcsV1Schema, 'utf8');
    const emissionsLatestSchemaStr = fs.readFileSync(PATHS.emissionsLatestSchema, 'utf8');
    const emissionsV0SchemaStr = fs.readFileSync(PATHS.emissionsV0Schema, 'utf8');

    // Parse all schemas
    const rootSchema = JSON.parse(rootSchemaStr);
    const tcsLatestSchema = JSON.parse(tcsLatestSchemaStr);
    const tcsV1Schema = JSON.parse(tcsV1SchemaStr);
    const emissionsLatestSchema = JSON.parse(emissionsLatestSchemaStr);
    const emissionsV0Schema = JSON.parse(emissionsV0SchemaStr);

    console.log('All schemas parsed successfully');

    // Using the standardized URI-based schema IDs
    const emissionsV0SchemaId = 'https://techcarbonstandard.org/schemas/emissions_report/v0.0.1.json';
    const emissionsLatestSchemaId = 'https://techcarbonstandard.org/schemas/emissions_report/latest.json';
    const tcsV1SchemaId = 'https://techcarbonstandard.org/schemas/tech_carbon_standard/v1.0.0.json';
    const tcsLatestSchemaId = 'https://techcarbonstandard.org/schemas/tech_carbon_standard/latest.json';
    const rootSchemaId = 'https://techcarbonstandard.org/schemas/index.json';

    console.log('Registering schemas with AJV:');

    // Register all schemas with their standardized IDs
    ajv.addSchema(emissionsV0Schema, emissionsV0SchemaId);
    console.log(` - Added emissions v0.0.1 schema with ID: ${emissionsV0SchemaId}`);

    ajv.addSchema(emissionsLatestSchema, emissionsLatestSchemaId);
    console.log(` - Added emissions latest schema with ID: ${emissionsLatestSchemaId}`);

    ajv.addSchema(tcsV1Schema, tcsV1SchemaId);
    console.log(` - Added TCS v1.0.0 schema with ID: ${tcsV1SchemaId}`);

    ajv.addSchema(tcsLatestSchema, tcsLatestSchemaId);
    console.log(` - Added TCS latest schema with ID: ${tcsLatestSchemaId}`);

    ajv.addSchema(rootSchema, rootSchemaId);
    console.log(` - Added root schema with ID: ${rootSchemaId}`);

    // Load the document to validate
    const tcsDocumentStr = fs.readFileSync(PATHS.tcsDocument, 'utf8');
    const tcsDocument = JSON.parse(tcsDocumentStr);
    console.log('Loaded TCS document successfully');

    // First check if the document has the expected basic structure
    console.log('\n=== BASIC VALIDATION ===');
    if (!tcsDocument.standard_version) {
      console.error('Document missing standard_version field');
      return;
    }

    if (!Array.isArray(tcsDocument.organisations)) {
      console.error('Document missing organisations array or not an array');
      return;
    }

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