# mercel
TestPlan and implementation in Playwright sample code


## Test Plan: Sample Sorter Application

## Objective:
To verify that the Sample Sorter Application handles the unique legal requirements governing the sorting of blood samples. In this Test Plan, we ensure that the application appropriately handles edge cases and constraints imposed by the limited number of racks while maintaining compliance with legal regulations and safeguarding patient privacy and data integrity.

## Scope:
This test plan covers the testing of the Sample Sorter Application to verify compliance with the following requirements:
1. Each tube contains a material for a specific patient.
2. It is illegal to place patients of the same age into the same rack.
3. It is illegal to place patients working in the same company into the same rack.
4. It is illegal to place patients who live in the same city district into the same rack.
5. Placing patients with the same vision defect into the same rack is illegal.
6. The number of racks is minimal.

##**Testing Approach:**
The testing approach will involve a combination of automated tests. It will cover functional and boundary testing to ensure the application's correctness, and compliance with legal requirements.

##**Test Scenarios:**
1. **Patient Specificity:**
   - Verify that each tube contains material specific to a single patient.
   - Verify that the application correctly associates each tube with the corresponding patient.

2. **Age-based Rack Assignment:**
   - Test scenario:
     - Create multiple patient profiles with different ages.
     - Verify that patients of the same age are not placed in the same rack.
   
3. **Company-based Rack Assignment:**
   - Test scenario:
     - Create patient profiles associated with different companies.
     - Verify that patients working in the same company are not placed in the same rack.
   
4. **City District-based Rack Assignment:**
   - Test scenario:
     - Create patient profiles residing in different city districts.
     - Verify that patients living in the same city district are not placed in the same rack.
   
5. **Vision Defect-based Rack Assignment:**
   - Test scenario:
     - Create patient profiles with different vision defects.
     - Verify that patients with the same vision defect are not placed in the same rack.
   
6. **Rack Limitation:**
   - Test scenario:
     - Create a large number of patient profiles exceeding the rack limit.
     - Verify that the application handles the rack limitation appropriately, such as providing an error message or prioritizing patient assignment based on other criteria.

## **Test Environment:**
The testing will be conducted in an environment that mirrors the production environment as closely as possible. This includes using similar hardware configurations, operating systems, and database setups.


## **Testing Tools:**
This Test Plan includes only automated tests in Playwright. We assumed that this application was the web tool Sample Sorter Application


## **Testing Deliverables:**
- Test cases document detailing test scenarios, test steps, and expected results.
- Test execution report summarizing test results, including any defects found.
- Any additional documentation or artifacts generated during the testing process.

## **Testing Schedule:**
Testing will commence immediately after the development phase and continue iteratively until all test cases have been executed successfully. The duration of testing will depend on the complexity of the application and the number of iterations required.

## **Risks and Mitigation:**
- Risk: Inaccurate patient data may lead to incorrect rack assignments.
  - Mitigation: Implement data validation checks to ensure the accuracy and integrity of patient information.
- Risk: Limited rack availability may result in inadequate patient sorting.
  - Mitigation: Implement prioritization strategies to optimize rack utilization based on legal requirements and critical patient factors.

## **Sign-off:**
Testing will be considered complete and ready for deployment after all test cases have been executed, and any identified defects have been resolved to the satisfaction of stakeholders.



To run solution:

1. Import repository into any IDE tool
2. Run command:
     npm install playwright
3. To run test, enter command in CL:
  
  npx playwright test "age_rack.spec.ts"
  npx playwright test "company_based.spec.ts"
  npx playwright test "patient_specify.spec.ts" 
  
