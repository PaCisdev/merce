import { test, expect } from "@playwright/test";
import {chromium, Page} from "playwright";


let place1 = 'rack 1';
let place2 = 'rack 2';

let patient1Age: number = 33;
let patient2Age: number = 34;

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

async function GivenPatientWithDifferentAge(){
    console.log('First patient age:', patient1Age);
    console.log('Second patient age:;', patient2Age);

};   //'multiple patient profiles with different ages exist'

async function WhenTubeIsAssign(){

    console.log('First patient is assigne to' , patient1Place);
    console.log('Seconf patient is assinge to', patient2Place);
};   //'test tubes are assigned to racks'

async function ThenNotIntTheSamePlace(){

    expect(patient1Place).not.toEqual(patient2Place);
   
}; //patients of the same age should not be placed in the same rack'


function skipTestIfEqual(age1: number, age2: number): boolean{
    if (age1 === age2) {
        console.log("Age are the same. Test will be skipped");
        return true;
    } else {
        console.log("Age are different. Test will run.");
        return false;
    };
};

    // skiping test if patient are in the same age
test.describe('Age-based Rack Assignmenty', () => {

 
    if (!skipTestIfEqual(patient1Age, patient2Age)) {    
        test('should have not the same place for diffeerent ages', async () => {
          await GivenPatientWithDifferentAge(); 
          await WhenTubeIsAssign();
          await ThenNotIntTheSamePlace();
        });
    
    console.log("Run test because of different age of patients...");
    };
});


