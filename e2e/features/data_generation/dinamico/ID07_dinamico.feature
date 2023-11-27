Feature: Pruebas funcionales en Ghost

@user1 @web
Scenario: #07 Como usuario, navego hacia un miembro y edito su correo
  Given I navigate to page "<GHOST5>"
  And I wait for 1 seconds
  And I load a dynamic dataset
  And I wait for 1 seconds
  And I login into the page with my email "<LOGINEMAIL>" and password "<LOGINPASSWORD>"
  And I wait for 2 seconds
  When I navigate to members page
  And I wait for 1 seconds
  And I edit a member with dynamic random email
  And I wait for 2 seconds