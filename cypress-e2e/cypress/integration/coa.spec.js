describe('For The Standalone Change Of Address', function() {
    beforeEach(function(){
        Cypress.Cookies.defaults({
            whitelist: 'JSESSIONID'
            });
    })
      it('checks with the login',function(){    
      cy.visit('https://coops-dev.pathfinder.gov.bc.ca/auth/')
      cy.get('input[aria-label="Enter your Incorporation Number"]').type(Cypress.env('username'))
      cy.get('input[aria-label="Enter your Passcode"]').type(Cypress.env('Passcode'))
      cy.get('button.sign-in-btn').click()
      })
       //Clicks with the COA EDIT Button
      it('checks with the standlaone  change of address',function(){
          cy.get('#btn-standalone-addresses > div > span').click()
          cy.get('#filing-header').contains('Change of Office Addresses')
      }) 
    it('checks with the COA',function(){
        cy.get('#reg-off-addr-change-btn > div > span').click()
        cy.server() 
        cy.route('**/AddressComplete/**', 'fixture:addresscomplete.json').as('AddressComplete')
        cy.get('#standalone-office-address-article > div > section:nth-child(1) > div > ul > li:nth-child(1) > div > div > div.meta-container__inner > form > div.form__row.three-column > div.v-input.item.v-text-field.v-text-field--box.v-text-field--enclosed.v-select.theme--light > div > div.v-input__slot > div.v-select__slot > div.v-select__selections').click()
        cy.get('#app > div.v-menu__content.theme--light.menuable__content__active > div > div > div:nth-child(1) > a > div').click()
        cy.get('#standalone-office-address-article > div > section:nth-child(1) > div > ul > li:nth-child(1) > div > div > div.meta-container__inner > form').within(($form) => {
        cy.get('[name=street-address]').clear().type('1 test ')
        cy.get('[name=street-address]').click()
        cy.get('[name=street-address-additional]').clear().type('TESTING FIELD 1')
        cy.get('[name=address-city]').filter(':visible').clear().type('victoria')
        cy.get('[name=postal-code]').clear().type('V1V1V1')
        cy.get('[name=address-country]').clear().type('CANADA{enter}')
        cy.get('[name=delivery-instructions]').clear().type('TESTING FIELD 2')
        })})
        it('checks with the COA2',function(){
        //cy.get('#standalone-office-address-article > div > section:nth-child(1) > div > ul > li:nth-child(2) > div > div > div:nth-child(1) > div > div > div.v-input__slot > div > div').click()// check box button
        cy.server() 
        cy.route('**/AddressComplete/**', 'fixture:addresscomplete.json').as('AddressComplete')
        cy.get('#standalone-office-address-article > div > section:nth-child(1) > div > ul > li:nth-child(2) > div > div > div.meta-container__inner > form > div.form__row.three-column > div.v-input.item.v-text-field.v-text-field--box.v-text-field--enclosed.v-select.theme--light > div > div.v-input__slot > div.v-select__slot > div.v-select__selections').click()
        cy.get('#app > div.v-menu__content.theme--light.menuable__content__active > div > div > div:nth-child(1) > a > div').click()
        cy.get('#standalone-office-address-article > div > section:nth-child(1) > div > ul > li:nth-child(2) > div > div > div.meta-container__inner> form').within(($form) => {
        cy.get('[name=street-address]').clear().type('2 TEST')
        cy.get('[name=street-address]').click()
        cy.get('[name=street-address-additional]').clear().type('TESTING FIELD 3')
        cy.get('[name=address-city]').clear().type('vancouver')
        cy.get('[name=postal-code]').clear().type('V1V1V1')
        cy.get('[name=address-country]').clear().type('CANADA{enter}')
        cy.get('[name=delivery-instructions]').type('TESTING FIELD 4')
        
        })})
        it('checks with the certified button',function(){
        cy.get('button').contains('Update Addresses').click()
        })
      it('checks with the certified button',function(){
         cy.get('#certified-by-textfield').type('Boss Baby')
         cy.get('[type=checkbox]').click({force: true})
         cy.get('#coa-file-pay-btn').click()
       })   
      it('checks with the payment page',function(){
      cy.get('#main-content > h1').contains('Add Invoice(s) to your Cart to make payment')
      cy.get('#PBCSCN005 > tbody > tr > td:nth-child(3)').contains('BENRYK MEWS HOUSING CO-OPERATIVE')//change this
      cy.get('#paylistbutton').click()
      })
  it('checks with the cart page',function(){
      cy.get('#creditForm > div > div.panel-heading > div:nth-child(1) > h3').contains('Credit Card Cart')
      cy.get('#credit_payBtn').click()     
  })
  it('checks with the Payment information page',function(){
      cy.get('#form-heading').contains('Enter Payment Information')
      cy.get('[name=trnCardNumber]').type('4030000010001234')
      cy.get('[name=trnCardCvd]').type('123')
      cy.get('[name=submitButton]').click()
  })         
  })
  
  
