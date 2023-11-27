Feature: Pruebas funcionales en Ghost

@user1 @web
Scenario: #18 Como usuario, navego hacia un miembro y edito su nombre con una bio
  Given I navigate to page "<GHOST5>"
  And I wait for 1 seconds
  And I load a priori dataset
  And I login into the page with my email "<LOGINEMAIL>" and password "<LOGINPASSWORD>"
  And I wait for 2 seconds
  When I navigate to members page
  And I wait for 1 seconds
  And I edit a member with priori random bio as name
  And I wait for 2 seconds