Feature: Eliminar pagina

@user1 @web
Scenario: #16 Como usuario de Ghost, creo una nueva página, accedo a ella por medio de su URL y la elimino
  Given I navigate to page "<GHOST5>"
  And I wait for 1 seconds
  And I login into the page with my email "<LOGINEMAIL>" and password "<LOGINPASSWORD>"
  When I go to the pages tab
  And I create a new page with title "$name_1" and body "$string_1"
  And I wait for 6 seconds
  And I publish the new page
  And I wait for 1 seconds
  Then I navigate to the page with name "$$name_1" and port "<G5PORT>"
  And I navigate to page "<GHOST5>"
  And I wait for 2 seconds
  And I go to the pages tab
  And I wait for 1 seconds
  And I delete the post with name "$$name_1"
  And I wait for 1 seconds