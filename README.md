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

Feature: Sample Sorter Application Tests

  Scenario: Patient Specificity
    Given multiple patient profiles exist
    When a test tube is associated with each patient
    Then each test tube should contain material specific to a single patient

  Scenario: Age-based Rack Assignment
    Given multiple patient profiles with different ages exist
    When test tubes are assigned to racks
    Then patients of the same age should not be placed in the same rack

  Scenario: Company-based Rack Assignment
    Given patient profiles associated with different companies exist
    When test tubes are assigned to racks
    Then patients working in the same company should not be placed in the same rack

  Scenario: City District-based Rack Assignment
    Given patient profiles residing in different city districts exist
    When test tubes are assigned to racks
    Then patients living in the same city district should not be placed in the same rack

  Scenario: Vision Defect-based Rack Assignment
    Given patient profiles with different vision defects exist
    When test tubes are assigned to racks
    Then patients with the same vision defect should not be placed in the same rack

  Scenario: Rack Limitation
    Given a limited number of racks is available
    And a large number of patient profiles exist
    When test tubes are assigned to racks
    Then the application should handle rack limitations appropriately


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


