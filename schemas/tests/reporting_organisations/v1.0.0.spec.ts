import Ajv2020 from "ajv/dist/2020";
import addFormats from "ajv-formats";
import {ValidateFunction} from "ajv/dist/jtd";
import {error_details} from "../utils/ajv_utils";
import "../utils/jest_utils";
import reportingOrganisationsV001Schema from "../../reporting_organisations/v1.0.0.json";
import emissionsReportV001Schema from "../../emissions_report/v0.0.1.json";
import techCarbonStandardV001Schema from "../../tech_carbon_standard/v0.0.1.json";
import reportingOrganisationsV001Example from "../../examples/reporting_organisations/v1.0.0.json";

let testDocument: any;
let validate: ValidateFunction<any>;
let ajv: Ajv2020;

beforeAll(() => {
    // Create AJV instance with 2020-12 draft support
    ajv = new Ajv2020({
        allErrors: true,
        verbose: true
    })
        .addSchema(emissionsReportV001Schema)
        .addSchema(techCarbonStandardV001Schema);

    // Add format validators
    addFormats(ajv);
});

beforeEach(() => {
  validate = ajv.compile<any>(reportingOrganisationsV001Schema);
  testDocument = structuredClone(reportingOrganisationsV001Example);
});

describe('Reporting Organisations v1.0.0 documents', () => {
    it(`should be valid if all required fields are present`, () => {
        const valid = validate(testDocument);
        expect(valid).toBeTruthyWithMessage(error_details(validate));
    });

    it(`should be valid if no organisations are supplied`, () => {
        const valid = validate({
            "schema_version": "1.0.0",
            "organisations": []
        });
        expect(valid).toBeTruthyWithMessage(error_details(validate));
    });

    it(`should be invalid if no auditor link is supplied when 'verification' is 'independently verified'`, () => {
        testDocument["organisations"][0]["emissions_reports"][0]["report"]["verification"] = "independently verified";
        const valid = validate(testDocument);
        expect(valid).toBeFalsy();
        expect(validate.errors).toEqual([
            expect.objectContaining({
                instancePath: "/organisations/0/emissions_reports/0/report",
                message: "must have required property 'auditor_link'",
                schemaPath: "#/allOf/0/then/required",
                params: {
                    "missingProperty": "auditor_link"
                }
            }),
            expect.objectContaining({
                instancePath: "/organisations/0/emissions_reports/0/report",
                message: "must match \"then\" schema",
                schemaPath: "#/allOf/0/if",
                params: {
                    "failingKeyword": "then"
                }
            }),
            expect.objectContaining({
                instancePath: "/organisations/0/emissions_reports/0",
                message: "must match \"then\" schema",
                schemaPath: "#/properties/organisations/items/properties/emissions_reports/items/allOf/0/if",
                params: {
                    "failingKeyword": "then"
                }
            })
        ]);
    });

    it(`should be valid if no auditor link is supplied when 'verification' is 'independently verified'`, () => {
        testDocument["organisations"][0]["emissions_reports"][0]["report"]["verification"] = "independently verified";
        testDocument["organisations"][0]["emissions_reports"][0]["report"]["auditor_link"] = "http://example.com/auditor";
        const valid = validate(testDocument);
        expect(valid).toBeTruthyWithMessage(error_details(validate));
    });
});
