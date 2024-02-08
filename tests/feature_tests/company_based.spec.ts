import { test, expect } from "@playwright/test";
import {chromium, Page} from "playwright";

let place1 = 'rack 1';
let place2 = 'rack 2';

let patientCompany1 = 'Apple';
let patientCompany2 = 'Microsoft';

function randomPlace(): string {
    const randomNumber: number = Math.floor(Math.random() * 2);


    if (randomNumber === 0) {
        return place1 ;
    } else {
        return place2 ;
    }
};
let patient1Place = randomPlace();
let patient2Place = randomPlace();


async function GivenPatientsFromDifferentCompany(){
    console.log('First patient company:', patientCompany1);
    console.log('Second patient company:;', patientCompany2);

};   //'Given patient profiles associated with different companies exist'

async function WhenTubeIsAssign(){
    console.log('First patient is assigne to' , patient1Place);
    console.log('Seconf patient is assinge to', patient2Place);
}; //When test tubes are assigned to racks

async function ThenNotIntTheSamePlace(){
    expect(patient1Place).not.toEqual(patient2Place);
    console.log('If failed, patient material are on the same rack');
};//Then patients working in the same company should not be placed in the same rack

function skipTestIfEqual(company1: string, company2: string): boolean{
    if (company1 === company2) {
        console.log("Company are the same. Test will be skipped");
        return true;
    } else {
        console.log("Company are different. Test will run.");
        return false;
    }
};

if (!skipTestIfEqual(patientCompany1, patientCompany2)) { 
        // skiping test if patient are in the same company
test.describe('Scenario: Company-based Rack Assigment', () => {

    
    test('should have not the same place for diffeerent company', async () => {
      await GivenPatientsFromDifferentCompany();
      await WhenTubeIsAssign();
      await ThenNotIntTheSamePlace();
      console.log('If test failed, patient material are on the same rack');
    });
});
};