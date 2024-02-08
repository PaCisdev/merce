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
