import { test, expect } from "@playwright/test";
import {chromium, Page} from "playwright";

 let patient1profile;
 let patient2profile;

 let patient1Place = 'rack 1';
 let patient2Place = 'rack 2';

let material = 'mercel';

async function GivenPatientProfile(){
     console.log('First patient profile:', patient1profile);
    console.log('Second patient profile:;', patient2profile);
};   //'multiple patient profiles exist'

async function WhenTubeIsAsscotiated(){
     console.log('First patient is assigne to' , patient1Place);
     console.log('Seconf patient is assinge to', patient2Place);
}; //a test tube is associated with each patient

async function ThenMaterialIsContains(){
   
};//each test tube should contain material specific to a single patient
test.describe('Patient Specificity', () => {
    test('should have specified material for each single patient', async () => {
     await GivenPatientProfile();
     await WhenTubeIsAsscotiated();
     await ThenMaterialIsContains();
    });

  });
  