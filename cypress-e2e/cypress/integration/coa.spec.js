describe('My First Test', function() {
    beforeEach(function(){
    })

      it('checks with the login',function(){
         
      cy.visit('https://coops-dev.pathfinder.gov.bc.ca/auth/')

      cy.get('input[aria-label="Enter your Incorporation Number"]').type('CP0001356')

      cy.get('input[aria-label="Enter your Passcode"]').type('140265174')

      cy.get('#app > div.application--wrap > div > div > div > div > main > div > article > div > div > div > form > div.passcode-form__row.passcode-form__form-btns > button.sign-in-btn.v-btn.v-btn--large.theme--light.primary > div > span').click()
      })

//CHECKS WITH THE BUISNESS PROFILE Page
      /*it('Checks with the Buisness contact page',function(){
        cy.get('input[aria-label="Email Address"]').type('Bossbabies@gmail.com')
        cy.get('#app > div > div > div > div > div > main > div > article > div > div > div > form > div:nth-child(3) > div > div > div.v-input__slot > div > input[type=text]').type('Bossbabies@gmail.com')
        cy.get('#app > div > div > div > div > div > main > div > article > div > div > div > form > div:nth-child(4) > div > div.flex.mr-5.xs6 > div > div > div.v-input__slot > div > input[type=tel]').type('6476475545')
        cy.get('#app > div > div > div > div > div > main > div > article > div > div > div > form > div:nth-child(4) > div > div.flex.xs3 > div > div > div.v-input__slot > div > input[type=text]').type('564')
        cy.get('#app > div > div > div > div > div > main > div > article > div > div > div > form > div:nth-child(5) > div > button.\2e save-continue-button.v-btn.v-btn--large.theme--light.primary > div > span').click()
     })*/


  //CHECKS WITH THE SKIP BUTTON OF BUISNESS PROFILE PAGE
     it('checks with the mail',function(){
         cy.get('#app > div > div > div > div > div > main > div > article > div > div > div > form > div:nth-child(5) > div > button.\.skip-button.mr-0.v-btn.v-btn--large.theme--light.secondary > div > span').click()

     })

       //Clicks with the COA EDIT Button
      it('checks with the standlaone  change of address',function(){
          cy.get('#btn-standalone-addresses > div > span').click()
      })
      
      it('checks with the COA',function(){
          cy.get('#reg-off-addr-change-btn > div > span').click()
          cy.get('#standalone-office-address-article > div > section:nth-child(1) > div > ul > li:nth-child(1) > div > div > div.meta-container__inner > form > div:nth-child(1) > div > div > div.v-input__slot > div > input[type=text]').type('1030 pendergast st')
          cy.get('body > div.pca > div:nth-child(1) > div.pca.pcalist > div.pcaitem.pcaselected').click()
          cy.get('#standalone-office-address-article > div > section:nth-child(1) > div > ul > li:nth-child(1) > div > div > div.meta-container__inner > form > div:nth-child(2) > div > div > div.v-input__slot > div > input[type=text]').type('this field is waiting')
          cy.get('#standalone-office-address-article > div > section:nth-child(1) > div > ul > li:nth-child(1) > div > div > div.meta-container__inner > form > div.form__row.three-column > div.v-input.item.v-text-field.v-text-field--box.v-text-field--enclosed.v-input--has-state.theme--light.error--text > div > div.v-input__slot > div > input[type=text]').clear().type('victoria')
          cy.get('#standalone-office-address-article > div > section:nth-child(1) > div > ul > li:nth-child(1) > div > div > div.meta-container__inner > form > div.form__row.three-column > div.v-input.item.v-text-field.v-text-field--box.v-text-field--enclosed.v-select.theme--light > div > div.v-input__slot > div.v-select__slot > div.v-select__selections').click()
          cy.get('#app > div.v-menu__content.theme--light.menuable__content__active > div > div > div:nth-child(2) > a > div > div').click()
          cy.get('#standalone-office-address-article > div > section:nth-child(1) > div > ul > li:nth-child(1) > div > div > div.meta-container__inner > form > div.form__row.three-column > div:nth-child(3) > div > div.v-input__slot > div > input[type=text]').clear().type('V8X2S2')
          cy.get('#address-country').clear().type('CANADA')
          cy.get('body > div.pca > div.pcaautocomplete.pcatext.pcacountrylist > div.pca.pcalist > div.pcaitem.pcaselected > div.pcaflaglabel').click()
          cy.get('#standalone-office-address-article > div > section:nth-child(1) > div > ul > li:nth-child(1) > div > div > div.meta-container__inner > form > div:nth-child(5) > div > div > div.v-input__slot > div > textarea').type('Hello world')

          cy.get('#standalone-office-address-article > div > section:nth-child(1) > div > ul > li:nth-child(2) > div > div > div.meta-container__inner > form > div:nth-child(1) > div > div > div.v-input__slot > div > input[type=text]').type('4113 Hattfield rd')
          cy.get('body > div.pca > div:nth-child(1) > div.pca.pcalist > div').click()
          cy.get('#standalone-office-address-article > div > section:nth-child(1) > div > ul > li:nth-child(2) > div > div > div.meta-container__inner > form > div:nth-child(2) > div > div > div.v-input__slot > div > input[type=text]').type('Nothing here')
          cy.get('#standalone-office-address-article > div > section:nth-child(1) > div > ul > li:nth-child(2) > div > div > div.meta-container__inner > form > div.form__row.three-column > div.v-input.item.v-text-field.v-text-field--box.v-text-field--enclosed.v-input--has-state.theme--light.error--text > div > div.v-input__slot > div > input[type=text]').clear().type('vancouver')
          cy.get('#standalone-office-address-article > div > section:nth-child(1) > div > ul > li:nth-child(2) > div > div > div.meta-container__inner > form > div.form__row.three-column > div.v-input.item.v-text-field.v-text-field--box.v-text-field--enclosed.v-select.theme--light > div > div.v-input__slot > div.v-select__slot > div.v-select__selections').click()
          cy.get('#app > div.v-menu__content.theme--light.menuable__content__active > div > div > div:nth-child(4) > a > div > div')
          cy.get('#standalone-office-address-article > div > section:nth-child(1) > div > ul > li:nth-child(2) > div > div > div.meta-container__inner > form > div.form__row.three-column > div:nth-child(3) > div > div.v-input__slot > div > input[type=text]').clear().type('V1A1S1')
          cy.get('#address-country').clear().type('CANADA')
          cy.get('#standalone-office-address-article > div > section:nth-child(1) > div > ul > li:nth-child(2) > div > div > div.meta-container__inner > form > div:nth-child(5) > div > div > div.v-input__slot > div > textarea').type('lets see')
          cy.get('#reg-off-update-addr-btn > div').click()

        cy.get('#certified-by-textfield').type('Boss Baby')
        cy.get('#AR-step-4-container > div > div.v-input.v-input--selection-controls.v-input--checkbox.theme--light > div > div.v-input__slot > div > div').click()
        cy.get('#coa-cancel-btn > div').click()
      })
      })