describe('Coops end-to-end Test Script', function () {

   it('checks with the login', function () {
      cy.visit('https://coops-dev.pathfinder.gov.bc.ca')
      cy.get('input[aria-label="Enter your Incorporation Number"]').type(Cypress.env('COOP_1_INCORP_NUM'))
      cy.get('input[aria-label="Enter your Passcode"]').type(Cypress.env('COOP_1_PASSCODE'))
      cy.get('button.sign-in-btn').should('be.visible').click()
   })

   it('Checks with the Buisness contact page', function () {
      cy.get('input[aria-label="Email Address"]').type('testoutputs@gov.bc.ca')
      cy.get('input[aria-label="Confirm Email Address"]').type('testoutputs@gov.bc.ca')
      cy.get('input[type=tel]').type('6476475545')
      cy.get('input[aria-label="Extension"]').type('564')
      cy.contains('Skip').should('be.visible').click()
   })

   it('checks with the MVP DASHBOARD', function () {
      // tombstone
      cy.get('div.entity-name').contains('SUNDUNE HOUSING CO-OPERATIVE')
      cy.get('dd.incorp-number').contains(Cypress.env('COOP_1_INCORP_NUM'));
      cy.get('dd.business-number').contains('Not Available');

      //to do
      cy.get('div').contains('File 2019 Annual Report').should('be.visible')
      cy.get('div.v-btn__content').contains('File Now').should('be.visible')

      //filing history
      //cy.contains('You have no filing history').should('be.visible')

      //current address
      cy.contains('Mailing Address').should('be.visible')
      cy.get('#dashboardArticle > div > aside > section:nth-child(1) > div > ul > li:nth-child(1) > div.address > div.list-item__subtitle > ul > li:nth-child(1)').contains('COMMERCIAL')

      cy.contains('Delivery Address').should('be.visible')
      cy.get('#dashboardArticle > div > aside > section:nth-child(1) > div > ul > li:nth-child(2) > div.address > div.list-item__subtitle > ul > li:nth-child(1)').contains('COMMERCIAL')

      //Current directors      
      cy.get('#dashboardArticle > div > aside > section:nth-child(2) > div > ul').children().should('have.length', 6)

      //edit buttons
      cy.get('#btn-standalone-directors').should('be.enabled')
      cy.get('#btn-standalone-addresses').should('be.enabled')

      cy.get('button').contains('File Now').click()
   })

   it('Loads the AR filing', function () {
      //tombstone
      cy.get('div.entity-name').contains('SUNDUNE HOUSING CO-OPERATIVE')
      cy.get('dd.incorp-number').contains(Cypress.env('COOP_1_INCORP_NUM'));
      cy.get('dd.business-number').contains('Not Available');

      //confirm Address and Directors match Dashboard
      cy.get('#annual-report-article > div > section:nth-child(2) > div > ul > li:nth-child(1) > div > div > div.meta-container__inner > div > div > div:nth-child(1)').contains('COMMERCIAL')
      cy.get('#annual-report-article > div > section:nth-child(2) > div > ul > li:nth-child(2) > div > div > div.meta-container__inner > div > div > div:nth-child(1)').contains('COMMERCIAL')
      cy.get('#directors > div.v-card.v-card--flat.v-sheet.theme--light > ul.list.director-list').children().should('have.length', 6)

      //heading checks
      cy.get('#AR-header').contains('2019')
      cy.get('#AR-step-1-header').contains('Annual General Meeting')
      cy.get('#AR-step-2-header').contains('Registered Office Addresses')
      cy.get('#AR-step-3-header').contains('Directors')
      cy.get('#AR-step-4-header').contains('Certify Correct')

      //confirm date picker shows
      cy.get('#agm-textfield').as('agm-date')
        .click()
        .get('#agm-datepicker').should('be.visible') 
      cy.get('@agm-date').click()

   })

   it('Edits Office Address', function() {
      //stubbing the response to save $$$
      cy.server() 
      cy.route('**/AddressComplete/**', 'fixture:AddressComplete.json').as('AddressComplete')
      
      //fill in Delivery Address
      cy.get('#reg-off-addr-change-btn').click() 
      cy.get('#annual-report-article > div > section:nth-child(2) > div > ul > li:nth-child(1) > div > div > div.meta-container__inner > form').within(($form) => {
         cy.get('input[aria-label="Street Address"]').clear().type('123 test street')
         cy.get('input[aria-label="Street Address"]').click()
         cy.get('input[aria-label="Additional Street Address (Optional)"]').clear().type('additional address info')
         cy.get('input[aria-label="City"]').clear().type('Victoria')
         //Province = BC
         cy.get('input[aria-label="Postal Code"]').clear().type('V8V 4K8')
         //Country = CA
      })

      //Same as Delivery
      cy.get('input[aria-label="Same as Delivery Address"]').should('have.attr', 'type', 'checkbox').check({
         force: true
      }).should('be.checked') 
      cy.get('button').contains('Update Addresses').click()

      cy.get('#annual-report-article > div > section:nth-child(2) > div > ul > li:nth-child(1) > div > div > div.meta-container__inner > div > div > div:nth-child(1)').contains('123 test street')
      cy.get('#annual-report-article > div > section:nth-child(2) > div > ul > li:nth-child(2) > div > div > div.meta-container__inner > div > div > div:nth-child(1)').contains('123 test street')
      cy.get('div').contains('Reset').should('be.visible')
   })

   it('Appoints a director', function () {  
      //stubbing the response to save $$$
      cy.server() 
      cy.route('**/AddressComplete/**', 'fixture:AddressComplete.json').as('AddressComplete')

      cy.get('button').contains('Appoint New Director').click()   
      cy.get('#directors > div.v-card.v-card--flat.v-sheet.theme--light > ul.list.new-director').within(($dir) => {
         cy.get('#new-director__first-name').type('Test').should('have.attr', 'required', 'required')
         cy.get('input[aria-label="Last Name"]').type('Test').should('have.attr', 'required', 'required')
         cy.get('input[aria-label="Street Address"]').clear().type('123 test street')
         cy.get('input[aria-label="Street Address"]').click()
         cy.get('input[aria-label="Additional Street Address (Optional)"]').clear().type('additional address info')
         cy.get('input[aria-label="City"]').clear().type('Victoria')
         cy.get('div.v-select__slot').click()

      })
      cy.get('#app > div.v-menu__content.theme--light.menuable__content__active > div > div > div:nth-child(1) > a > div > div').click()
   
      // cy.get('#new-director__first-name').type('riyaz')
   
      // cy.get('#directors > div.v-card.v-card--flat.v-sheet.theme--light > ul.list.new-director > li > div > div > form > div.form__row.three-column > div.v-input.item.director-initial.v-text-field.v-text-field--box.v-text-field--enclosed.theme--light > div > div.v-input__slot > div > input[type=text]').type('remo')
   
      // cy.get('#directors > div.v-card.v-card--flat.v-sheet.theme--light > ul.list.new-director > li > div > div > form > div:nth-child(1) > div:nth-child(3) > div > div.v-input__slot > div > input[type=text]').type('rocking')
   
      // cy.get('#directors > div.v-card.v-card--flat.v-sheet.theme--light > ul.list.new-director > li > div > div > form > div.meta-container__inner > form > div:nth-child(1) > div > div > div.v-input__slot > div > input[type=text]').type('1030 pendergast').trigger('mousedown').click()
   
      // cy.get("#directors > div.v-card.v-card--flat.v-sheet.theme--light > ul.list.new-director > li > div > div > form > div.meta-container__inner > form > div:nth-child(2) > div > div > div.v-input__slot > div > input[type=text]").type('hello world')
   
      // cy.get('input[aria-label="City"]').filter(':visible').type('victoria')
   
      // cy.get('#directors > div.v-card.v-card--flat.v-sheet.theme--light > ul.list.new-director > li > div > div > form > div.meta-container__inner > form > div.form__row.three-column > div.v-input.item.v-text-field.v-text-field--box.v-text-field--enclosed.v-select.theme--light > div > div.v-input__slot > div.v-select__slot > div.v-select__selections').click()
   
      // cy.get('#app > div.v-menu__content.theme--light.menuable__content__active > div > div > div:nth-child(5) > a > div > div').click()
   
      // cy.get('#directors > div.v-card.v-card--flat.v-sheet.theme--light > ul.list.new-director > li > div > div > form > div.meta-container__inner > form > div.form__row.three-column > div:nth-child(3) > div > div.v-input__slot > div > input[type=text]').type('v1v1v1')
   
      // cy.get('#directors > div.v-card.v-card--flat.v-sheet.theme--light > ul.list.new-director > li > div > div > form > div.meta-container__inner > form > div:nth-child(4) > div > div > div.v-input__slot > div > input[type=text]').clear().type('Canada')
      // cy.get('body > div.pca > div.pcaautocomplete.pcatext.pcacountrylist > div.pca.pcalist > div.pcaitem.pcaselected > div.pcaflaglabel').click()
   
      // cy.get('#directors > div.v-card.v-card--flat.v-sheet.theme--light > ul.list.new-director > li > div > div > form > div.meta-container__inner > form > div:nth-child(5) > div > div > div.v-input__slot > div > textarea').type('I will be home')
   
      // cy.get('#new-director__appointment-date').click()
      // cy.get('#new-director__appointment-date__datepicker > div > div > div.v-date-picker-table.v-date-picker-table--date.theme--light > table > tbody > tr:nth-child(3) > td:nth-child(5) > button > div').click()
   
      // cy.get('#directors > div.v-card.v-card--flat.v-sheet.theme--light > ul.list.new-director > li > div > div > form > div.form__row.form__btns > button.form-primary-btn.v-btn.theme--light.primary > div').click()
   }) 
})


//it.skip('checks with the Cease of Directors', function () {
//    cy.get('#director-1-cease-btn > div > span').click()
//    cy.get("#ar-pay-btn > div").click()
// })
// //it('checks with the pdf downloads',function(){
// // cy.get('#dashboardArticle > div > div > section:nth-child(2) > div > ul > li:nth-child(1) > div.v-expansion-panel__header > div.v-expansion-panel__header__icon > i').click()
// // cy.get('#dashboardArticle > div > div > section:nth-child(2) > div > ul > li.v-expansion-panel__container.filing-history-list.v-expansion-panel__container--active > div.v-expansion-panel__body > div > button > div').click()
// it.skip('checks  with the certification page', function () {
//    cy.get('#AR-step-4-container > div > div.certifiedby-container > div > div > div > div.v-input__slot > div').type('Boss Baby')
//    cy.get('#AR-step-4-container > div > div.v-input.v-input--selection-controls.v-input--checkbox.theme--light > div > div.v-input__slot > div > div').click()
// })

// it.skip('Checks with the CANCEL button', function () {
//    cy.get('#ar-cancel-btn > div').click()
// })
// })