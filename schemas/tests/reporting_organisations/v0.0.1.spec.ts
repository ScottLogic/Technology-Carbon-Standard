import Ajv2020 from "ajv/dist/2020";
import addFormats from "ajv-formats";
import {ValidateFunction} from "ajv/dist/jtd";
import {error_details} from "../utils/ajv_utils";
import "../utils/jest_utils";
import reportingOrganisationsV001Schema from "../../reporting_organisation/v0.0.1.json";
import reportingOrganisationsV001Example from "../../examples/reporting_organisation/v0.0.1.json";

let testDocument: any;
let validate: ValidateFunction<any>;
let ajv: Ajv2020;

beforeAll(() => {
    // Create AJV instance with 2020-12 draft support
    ajv = new Ajv2020({
        allErrors: true,
        verbose: true
    });

    // Add format validators
    addFormats(ajv);
});

beforeEach(() => {
  validate = ajv.compile<any>(reportingOrganisationsV001Schema);
  testDocument = structuredClone(reportingOrganisationsV001Example);
});

describe('Reporting Organisations v0.0.1 documents', () => {
    it(`should be valid if all required fields are present`, () => {
        const valid = validate(testDocument);
        expect(valid).toBeTruthyWithMessage(error_details(validate));
    });

    it(`should be valid if consisting of only empty arrays`, () => {
        const valid = validate([]);
        expect(valid).toBeTruthyWithMessage(error_details(validate));
    });

    it(`should be invalid if no auditor link is supplied when 'verification' is 'independently verified'`, () => {
        testDocument[0]["verification"] = "independently verified";
        const valid = validate(testDocument);
        expect(valid).toBeFalsy();
        expect(validate.errors?.map(error => error.message)).toEqual([
            "must have required property 'auditor_link'",
            "must match \"then\" schema"
        ]);
    });

    it(`should be valid if no auditor link is supplied when 'verification' is 'independently verified'`, () => {
        testDocument[0]["verification"] = "independently verified";
        testDocument[0]["auditor_link"] = "http://example.com/auditor";
        const valid = validate(testDocument);
        expect(valid).toBeTruthyWithMessage(error_details(validate));
    });

    it(`should be invalid if no organisation object is supplied'`, () => {
        testDocument[0]["organisation"] = null;
        const valid = validate(testDocument);
        expect(valid).toBeFalsy();
        expect(validate.errors?.map(error => error.schemaPath)).toEqual([
            "#/items/properties/organisation/type"
        ]);
        expect(validate.errors?.map(error => error.message)).toEqual([
            "must be object"
        ]);
    });

    it(`should be invalid if no name is supplied for organisation object'`, () => {
        testDocument[0]["organisation"]["name"] = null;
        const valid = validate(testDocument);
        expect(valid).toBeFalsy();
        expect(validate.errors?.map(error => error.schemaPath)).toEqual([
            "#/items/properties/organisation/properties/name/type"
        ]);
        expect(validate.errors?.map(error => error.message)).toEqual([
            "must be string"
        ]);
    });

    it(`should be invalid if no reporting_period object is supplied'`, () => {
        testDocument[0]["reporting_period"] = null;
        const valid = validate(testDocument);
        expect(valid).toBeFalsy();
        expect(validate.errors?.map(error => error.schemaPath)).toEqual([
            "#/items/properties/reporting_period/type"
        ]);
        expect(validate.errors?.map(error => error.message)).toEqual([
            "must be object"
        ]);
    });

    it(`should be invalid if no from_date is supplied for reporting_period object'`, () => {
        testDocument[0]["reporting_period"]["from_date"] = null;
        const valid = validate(testDocument);
        expect(valid).toBeFalsy();
        expect(validate.errors?.map(error => error.schemaPath)).toEqual([
            "#/items/properties/reporting_period/properties/from_date/type"
        ]);
        expect(validate.errors?.map(error => error.message)).toEqual([
            "must be string"
        ]);
    });

    it(`should be invalid if no from_date is supplied for reporting_period object'`, () => {
        testDocument[0]["reporting_period"]["to_date"] = null;
        const valid = validate(testDocument);
        expect(valid).toBeFalsy();
        expect(validate.errors?.map(error => error.schemaPath)).toEqual([
            "#/items/properties/reporting_period/properties/to_date/type"
        ]);
        expect(validate.errors?.map(error => error.message)).toEqual([
            "must be string"
        ]);
    });

    it(`should be invalid if no verification object is supplied'`, () => {
        testDocument[0]["verification"] = null;
        const valid = validate(testDocument);
        expect(valid).toBeFalsy();
        expect(validate.errors?.map(error => error.schemaPath)).toEqual([
            "#/items/properties/verification/type",
            "#/items/properties/verification/enum"
        ]);
        expect(validate.errors?.map(error => error.message)).toEqual([
            "must be string",
            "must be equal to one of the allowed values"
        ]);
    });

    it(`should be invalid if no url is supplied for disclosures object'`, () => {
        testDocument[0]["disclosures"][0]["url"] = null;
        const valid = validate(testDocument);
        expect(valid).toBeFalsy();
        expect(validate.errors?.map(error => error.schemaPath)).toEqual([
            "#/items/properties/disclosures/items/properties/url/type"
        ]);
        expect(validate.errors?.map(error => error.message)).toEqual([
            "must be string"
        ]);
    });

    it(`should be invalid if no doc_type is supplied for disclosures object'`, () => {
        testDocument[0]["disclosures"][0]["doc_type"] = null;
        const valid = validate(testDocument);
        expect(valid).toBeFalsy();
        expect(validate.errors?.map(error => error.schemaPath)).toEqual([
            "#/items/properties/disclosures/items/properties/doc_type/enum"
        ]);
        expect(validate.errors?.map(error => error.message)).toEqual([
            "must be equal to one of the allowed values"
        ]);
    });

    it(`should be invalid if invalid doc_type is supplied for disclosures object'`, () => {
        testDocument[0]["disclosures"][0]["doc_type"] = "invalid";
        const valid = validate(testDocument);
        expect(valid).toBeFalsy();
        expect(validate.errors?.map(error => error.schemaPath)).toEqual([
            "#/items/properties/disclosures/items/properties/doc_type/enum"
        ]);
        expect(validate.errors?.map(error => error.message)).toEqual([
            "must be equal to one of the allowed values"
        ]);
    });
});
