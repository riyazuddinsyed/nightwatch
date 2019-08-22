describe('Coops end-to-end Test Script', function () {
    beforeEach(function(){
      Cypress.Cookies.defaults({
         whitelist: 'JSESSIONID'
      });

      cy.fixture('CP0001570').as('business')
      
    })

    it('checks with the login', function () {
       cy.visit('https://coops-dev.pathfinder.gov.bc.ca')
       cy.get('input[aria-label="Enter your Incorporation Number"]').type(this.business.identifier)
       cy.get('input[aria-label="Enter your Passcode"]').type(this.business.passcode)
       cy.get('button.sign-in-btn').should('be.visible').click()
    })
 
    it('Checks with the Buisness contact page', function () { 
      cy.get('input[aria-label="Email Address"]').type('testoutputs@gov.bc.ca')
      cy.get('input[aria-label="Confirm Email Address"]').type('testoutputs@gov.bc.com')

      //confirm validation error triggers for mis-matched emails
      cy.get('#app > div > div.app-body > div > div > article > div > div > div > form > div:nth-child(3) > div').should('have.class', 'error--text')

      cy.get('input[aria-label="Confirm Email Address"]').clear().type('testoutputs@gov.bc.ca')

      //confirm validation error goes away
      cy.get('#app > div > div.app-body > div > div > article > div > div > div > form > div:nth-child(3) > div').should('not.have.class', 'error--text')

      cy.get('input[type=tel]').type('6476475545')
      cy.get('input[aria-label="Extension"]').type('564')       

      cy.visit('https://coops-dev.pathfinder.gov.bc.ca/dashboard')
    })    
 
    it('checks initial state of the dashboard', function () {
       // tombstone
       cy.get('div.entity-name').contains(this.business.legalName)
       cy.get('dd.incorp-number').contains(this.business.identifier);
       cy.get('dd.business-number').contains('Not Available');
 
       //to do
       cy.get('div').contains('File 2019 Annual Report').should('be.visible')
       cy.get('div.v-btn__content').contains('File Now').should('be.visible')
 
       //filing history
       cy.contains('You have no filing history').should('be.visible')
 
       //current address
       cy.contains('Mailing Address').should('be.visible')
       cy.get('#dashboardArticle > div > aside > section:nth-child(1) > div > ul > li:nth-child(1) > div.address > div.list-item__subtitle > ul > li:nth-child(1)').contains(this.business.mailingAddress.streetAddress)
 
       cy.contains('Delivery Address').should('be.visible')
       cy.get('#dashboardArticle > div > aside > section:nth-child(1) > div > ul > li:nth-child(2) > div.address > div.list-item__subtitle > ul > li:nth-child(1)').contains(this.business.deliveryAddress.streetAddress)
 
       //Current directors      
       cy.get('#dashboardArticle > div > aside > section:nth-child(2) > div > ul').children().should('have.length', this.business.initialDirCount)
 
       //edit buttons
       cy.get('#btn-standalone-directors').should('be.enabled')
       cy.get('#btn-standalone-addresses').should('be.enabled')
    })    

    it('Clicks with the FILE NOW button', function () {  
       cy.get('button').contains('File Now').click()
    })

    it('Loads the AR filing', function () {
       //tombstone
       cy.get('div.entity-name').contains(this.business.legalName)
       cy.get('dd.incorp-number').contains(this.business.identifier);
       cy.get('dd.business-number').contains('Not Available');
 
       //confirm Address and Directors match Dashboard
       cy.get('#annual-report-article > div > section:nth-child(2) > div > ul > li:nth-child(1) > div > div > div.meta-container__inner > div > div > div:nth-child(1)').contains(this.business.mailingAddress.streetAddress)
       cy.get('#annual-report-article > div > section:nth-child(2) > div > ul > li:nth-child(2) > div > div > div.meta-container__inner > div > div > div:nth-child(1)').contains(this.business.deliveryAddress.streetAddress)
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
          cy.get('input[aria-label="Postal Code"]').clear().type('V8V 4K8')
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
       cy.get('#directors > div.v-card.v-card--flat.v-sheet.theme--light > ul.list.new-director > li > div > div > form > div.meta-container__inner > form > div.form__row.three-column > div.v-input.item.v-text-field.v-text-field--box.v-text-field--enclosed.v-select.theme--light > div > div.v-input__slot > div.v-select__slot').click()
       cy.get('#app > div.v-menu__content.theme--light.menuable__content__active > div > div > div:nth-child(1) > a > div > div').click()  
       cy.get('#directors > div.v-card.v-card--flat.v-sheet.theme--light > ul.list.new-director').as('Appoint-Director-Form').within(($dir) => {
          cy.get('#new-director__first-name').type('Test').should('have.attr', 'required', 'required')
          cy.get('input[aria-label="Last Name"]').type('Test').should('have.attr', 'required', 'required')
          cy.get('input[aria-label="Street Address"]').clear().type('123 test street')
          cy.get('input[aria-label="Street Address"]').click()
          cy.get('input[aria-label="Additional Street Address (Optional)"]').clear().type('additional address info')
          cy.get('input[aria-label="City"]').clear().type('Victoria')
          cy.get('input[aria-label="Postal Code"]').clear().type('V8V 4K8')  
          cy.get('[name=address-country]').clear().type('CANADA{enter}')
          cy.get('[name=delivery-instructions]').type('This is a test field')
          cy.contains('Done').click()      
       })
    })

    it('Checks with Cease of directors', function () {
        cy.get('#director-3-cease-btn').click()
        cy.get('#director-3-cease-btn').should('contain','undo')
    })

    it('completes certified section',function(){
        cy.get('#certified-by-textfield').type('TEST')
        cy.get('[type=checkbox]').click({force: true})
        cy.get('#ar-file-pay-btn').click()
    })

    it('checks with the PayBC invoice screen',function(){
        cy.get('#main-content > h1').contains('Add Invoice(s) to your Cart to make payment')
        cy.get('#PBCSCN005 > tbody > tr > td:nth-child(3)').contains(this.business.legalName)
        cy.get('#paylistbutton').click()
    })

    it('checks with the PayBC cart page',function(){
        cy.get('#creditForm > div > div.panel-heading > div:nth-child(1) > h3').contains('Credit Card Cart')
        cy.get('#credit_payBtn').click()     
    })

    it('credit card page',function(){
        cy.get('#form-heading').contains('Enter Payment Information')
        cy.get('[name=trnCardNumber]').type('4030000010001234')
        cy.get('[name=trnCardCvd]').type('123')
        cy.get('[name=submitButton]').click()
    })
    
    it('verifies the dashboard to confirm filing completed as expected', function() {
      // tombstone
      cy.get('div.entity-name').contains(this.business.legalName)
      cy.get('dd.incorp-number').contains(this.business.identifier);
      cy.get('dd.business-number').contains('Not Available');

   //edit buttons
      cy.get('#btn-standalone-directors').should('be.enabled')
      cy.get('#btn-standalone-addresses').should('be.enabled')

   //Confirm address was changed
      cy.contains('Mailing Address').should('be.visible')
      cy.get('#dashboardArticle > div > aside > section:nth-child(1) > div > ul > li:nth-child(1) > div.address > div.list-item__subtitle > ul > li:nth-child(1)').contains('123 test street')

      cy.contains('Delivery Address').should('be.visible')
      cy.get('#dashboardArticle > div > aside > section:nth-child(1) > div > ul > li:nth-child(2) > div.address > div.list-item__subtitle > ul > li:nth-child(1)').contains('123 test street')

   //Confirm director count is still the same
      cy.get('#dashboardArticle > div > aside > section:nth-child(2) > div > ul').children().should('have.length', this.business.initialDirCount)
      cy.get('#dashboardArticle > div > aside > section:nth-child(2) > div > ul').children().should('contain', 'TEST TEST')

   //Confirm To Do list has been updated
      cy.contains("You don't have anything to do yet").should('be.visible')

   //Confirm Filing History has been updated and the current filing is expanded
      cy.contains('Recent Filing History (1)').should('be.visible')
      cy.get('#dashboardArticle > div > div > section:nth-child(2) > div > ul > li').should('have.attr', 'aria-expanded', 'true')
      cy.get('#dashboardArticle > div > div > section:nth-child(2) > div > ul > li').contains('Annual Report (2019)')
      cy.get('#dashboardArticle > div > div > section:nth-child(2) > div > ul > li').contains('FILED AND PAID')

    })

})

      
