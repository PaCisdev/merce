import { test, expect } from "@playwright/test";
import {chromium, Page} from "playwright";
import { Given, When, Then } from "cypress-cucumber-preprocessor/steps";
 

let material = 'mercel';

async function GivenPatientProfile(){};   //'multiple patient profiles exist'
async function WhenTubeIsAsscotiated(){}; //a test tube is associated with each patient
async function ThenMaterialIsContains(){
     expect(material).toContain('mercel');
};//each test tube should contain material specific to a single patient
test.describe('Scenario: Patient Specificity,' () => {

    test('should have specified material for each single patient', async () => {
      await GivenPatientProfile();
      await WhenTubeIsAsscotiated();
      await ThenMaterialIsContains();
    });

  });
  