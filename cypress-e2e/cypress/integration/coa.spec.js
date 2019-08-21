describe('For The Standalone Change Of Address', function() {
    beforeEach(function(){
        Cypress.Cookies.defaults({
            whitelist: 'JSESSIONID'
        });

        cy.fixture('CP0001847').as('business')
    })

    it('checks with the login',function(){    
        cy.visit('https://coops-dev.pathfinder.gov.bc.ca/')
        cy.get('input[aria-label="Enter your Incorporation Number"]').type(this.business.identifier)
        cy.get('input[aria-label="Enter your Passcode"]').type(this.business.passcode)
        cy.get('button.sign-in-btn').click()
    })

    it('launches a stand-alone change of address',function(){
        cy.get('#btn-standalone-addresses > div > span').click()
        cy.get('#filing-header').contains('Change of Office Addresses')
    }) 

    it('edits delivery address',function(){
        cy.get('#reg-off-addr-change-btn > div > span').click()
        cy.server() 
        cy.route('**/AddressComplete/**', 'fixture:addresscomplete.json').as('AddressComplete')
        cy.get('#standalone-office-address-article > div > section:nth-child(1) > div > ul > li:nth-child(1) > div > div > div.meta-container__inner > form > div.form__row.three-column > div.v-input.item.v-text-field.v-text-field--box.v-text-field--enclosed.v-select.theme--light > div > div.v-input__slot > div.v-select__slot > div.v-select__selections').click()
        cy.get('#app > div.v-menu__content.theme--light.menuable__content__active > div > div > div:nth-child(1) > a > div').click()
        cy.get('#standalone-office-address-article > div > section:nth-child(1) > div > ul > li:nth-child(1) > div > div > div.meta-container__inner > form').within(($form) => {
            cy.get('[name=street-address]').clear().type('1 delivery street')
            cy.get('[name=street-address]').click()
            cy.get('[name=street-address-additional]').clear().type('TESTING FIELD 1')
            cy.get('[name=address-city]').filter(':visible').clear().type('victoria')
            cy.get('[name=postal-code]').clear().type('V1V1V1')
            cy.get('[name=address-country]').clear().type('CANADA{enter}')
            cy.get('[name=delivery-instructions]').clear().type('TESTING FIELD 2')
        })

    })

    it('edits mailing address',function(){
        cy.server() 
        cy.route('**/AddressComplete/**', 'fixture:addresscomplete.json').as('AddressComplete')
        cy.get('#standalone-office-address-article > div > section:nth-child(1) > div > ul > li:nth-child(2) > div > div > div.meta-container__inner > form > div.form__row.three-column > div.v-input.item.v-text-field.v-text-field--box.v-text-field--enclosed.v-select.theme--light > div > div.v-input__slot > div.v-select__slot > div.v-select__selections').click()
        cy.get('#app > div.v-menu__content.theme--light.menuable__content__active > div > div > div:nth-child(1) > a > div').click()
        cy.get('#standalone-office-address-article > div > section:nth-child(1) > div > ul > li:nth-child(2) > div > div > div.meta-container__inner> form').within(($form) => {
            cy.get('[name=street-address]').clear().type('1 mailing street')
            cy.get('[name=street-address]').click()
            cy.get('[name=street-address-additional]').clear().type('TESTING FIELD 3')
            cy.get('[name=address-city]').clear().type('vancouver')
            cy.get('[name=postal-code]').clear().type('V1V1V1')
            cy.get('[name=address-country]').clear().type('CANADA{enter}')
            cy.get('[name=delivery-instructions]').type('TESTING FIELD 4')        
        })

    })

    it('clicks update address and checks fees',function(){
        cy.get('button').contains('Update Addresses').click()

        cy.get('#standalone-office-address-article > div > section:nth-child(1) > div > ul > li:nth-child(1) > div > div > div.meta-container__inner > div > div > div:nth-child(1)').contains('1 delivery street')
        cy.get('#standalone-office-address-article > div > section:nth-child(1) > div > ul > li:nth-child(2) > div > div > div.meta-container__inner > div > div > div:nth-child(1)').contains('1 mailing street')
        cy.get('div').contains('Reset').should('be.visible')
    })

    it('checks with the certified button',function(){
        cy.get('#certified-by-textfield').type('TEST')
        cy.get('[type=checkbox]').click({force: true})
        cy.get('#coa-file-pay-btn').click()
    })

    it('checks with the payment page',function(){
        cy.get('#main-content > h1').contains('Add Invoice(s) to your Cart to make payment')
        cy.get('#PBCSCN005 > tbody > tr > td:nth-child(3)').contains(this.business.legalName)//change this
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
        cy.get('#dashboardArticle > div > aside > section:nth-child(1) > div > ul > li:nth-child(1) > div.address > div.list-item__subtitle > ul > li:nth-child(1)').contains('1 mailing street')

        cy.contains('Delivery Address').should('be.visible')
        cy.get('#dashboardArticle > div > aside > section:nth-child(1) > div > ul > li:nth-child(2) > div.address > div.list-item__subtitle > ul > li:nth-child(1)').contains('1 delivery street')
    
    //Confirm Filing History has been updated and the current filing is expanded
        cy.contains('Recent Filing History (1)').should('be.visible')
        cy.get('#dashboardArticle > div > div > section:nth-child(2) > div > ul > li').should('have.attr', 'aria-expanded', 'true')
        cy.get('#dashboardArticle > div > div > section:nth-child(2) > div > ul > li').contains('Address Change')
        cy.get('#dashboardArticle > div > div > section:nth-child(2) > div > ul > li').contains('FILED AND PAID')
    })
})
  
  
