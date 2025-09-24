import Ajv2020 from "ajv/dist/2020";
import addFormats from "ajv-formats";
import {ValidateFunction} from "ajv/dist/jtd";
import {error_details} from "../utils/ajv_utils";
import "../utils/jest_utils";
import reportingOrganisationsV012Schema from "../../reporting_organisation/v0.1.2.json";
import emissionsReportV001Schema from "../../emissions_report/v0.0.1.json";
import emissionsReportV002Schema from "../../emissions_report/v0.0.2.json";
import emissionsReportV003Schema from "../../emissions_report/v0.0.3.json";
import techCarbonStandardV001Schema from "../../tech_carbon_standard/v0.0.1.json";
import techCarbonStandardV002Schema from "../../tech_carbon_standard/v0.0.2.json";
import techCarbonStandardV010Schema from "../../tech_carbon_standard/v0.1.0.json";
import reportingOrganisationsV012Example from "../../examples/reporting_organisation/v0.1.2.json";
import emissionsReportV001Example from "../../examples/emissions_report/v0.0.1.json";
import emissionsReportV003Example from "../../examples/emissions_report/v0.0.3.json";
import techCarbonStandardV001Example from "../../examples/tech_carbon_standard/v0.0.1.json";
import techCarbonStandardV002Example from "../../examples/tech_carbon_standard/v0.0.2.json";
import techCarbonStandardV010Example from "../../examples/tech_carbon_standard/v0.1.0.json";

let testDocument: any;
let validate: ValidateFunction<any>;
let ajv: Ajv2020;

beforeAll(() => {
    // Create AJV instance with 2020-12 draft support
    ajv = new Ajv2020({
        allErrors: true,
        verbose: true
    })
        .addSchema(emissionsReportV001Schema, 'https://techcarbonstandard.org/schemas/emissions_report/v0.0.1.json')
        .addSchema(emissionsReportV002Schema, 'https://techcarbonstandard.org/schemas/emissions_report/v0.0.2.json')
        .addSchema(emissionsReportV003Schema, 'https://techcarbonstandard.org/schemas/emissions_report/v0.0.3.json')
        .addSchema(techCarbonStandardV001Schema, 'https://techcarbonstandard.org/schemas/tech_carbon_standard/v0.0.1.json')
        .addSchema(techCarbonStandardV002Schema, 'https://techcarbonstandard.org/schemas/tech_carbon_standard/v0.0.2.json')
        .addSchema(techCarbonStandardV010Schema, 'https://techcarbonstandard.org/schemas/tech_carbon_standard/v0.1.0.json');

    // Add format validators
    addFormats(ajv);
});

beforeEach(() => {
  validate = ajv.compile<any>(reportingOrganisationsV012Schema);
  testDocument = structuredClone(reportingOrganisationsV012Example);
});

describe('Reporting Organisations v0.1.2 documents', () => {
    it(`should be valid if all required fields are present`, () => {
        const valid = validate(testDocument);
        expect(valid).toBeTruthyWithMessage(error_details(validate));
    });

    it(`should be valid for a mix of tech_carbon_standard v0.0.1, v0.0.2 and v0.1.0 documents`, () => {
        const emissionsReportWithTCSv001 = structuredClone(emissionsReportV001Example);
        emissionsReportWithTCSv001.tech_carbon_standard = structuredClone(techCarbonStandardV001Example);

        const emissionsReportWithTCSv002 = structuredClone(emissionsReportV001Example);
        emissionsReportWithTCSv002.schema_version = "0.0.2";
        emissionsReportWithTCSv002.tech_carbon_standard = structuredClone(techCarbonStandardV002Example);

        const emissionsReportWithTCSv003 = structuredClone(emissionsReportV003Example);
        emissionsReportWithTCSv003.schema_version = "0.0.3";
        emissionsReportWithTCSv003.tech_carbon_standard = structuredClone(techCarbonStandardV010Example);

        testDocument["emissions_reports"] = [
            emissionsReportWithTCSv001,
            emissionsReportWithTCSv002,
            emissionsReportWithTCSv003
        ];

        const valid = validate(testDocument);
        expect(valid).toBeTruthyWithMessage(error_details(validate));
    });

    it(`should be invalid if no auditor link is supplied when 'verification' is 'independently verified'`, () => {
        testDocument["emissions_reports"][0]["verification"] = "independently verified";
        const valid = validate(testDocument);
        expect(valid).toBeFalsy();
        expect(validate.errors).toEqual([
            expect.objectContaining({
                instancePath: "/emissions_reports/0",
                message: "must have required property 'auditor_link'",
                schemaPath: "#/allOf/0/then/required",
                params: {
                    "missingProperty": "auditor_link"
                }
            }),
            expect.objectContaining({
                instancePath: "/emissions_reports/0",
                message: "must match \"then\" schema",
                schemaPath: "#/allOf/0/if",
                params: {
                    "failingKeyword": "then"
                }
            }),
            expect.objectContaining({
                instancePath: "/emissions_reports/0",
                message: "must match \"then\" schema",
                schemaPath: "#/properties/emissions_reports/items/allOf/0/if",
                params: {
                    "failingKeyword": "then"
                }
            })
        ]);
    });

    it(`should be valid if no auditor link is supplied when 'verification' is 'independently verified'`, () => {
        testDocument["emissions_reports"][0]["verification"] = "independently verified";
        testDocument["emissions_reports"][0]["auditor_link"] = "http://example.com/auditor";
        const valid = validate(testDocument);
        expect(valid).toBeTruthyWithMessage(error_details(validate));
    });
});
