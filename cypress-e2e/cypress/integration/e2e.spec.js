describe('Coops end-to-end Test Script', function () {

   it('checks with the login', function () {
      cy.visit('https://coops-dev.pathfinder.gov.bc.ca')
      cy.get('input[aria-label="Enter your Incorporation Number"]').type(Cypress.env('COOP_1_INCORP_NUM'))
      cy.get('input[aria-label="Enter your Passcode"]').type(Cypress.env('COOP_1_PASSCODE'))
      cy.get('button.sign-in-btn').should('be.visible').click()
   })


   it('Checks with the Buisness contact page',function(){
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

      //to do
      cy.get('div').contains('File 2019 Annual Report').should('be.visible')
      cy.get('div.v-btn__content').contains('File Now').should('be.visible')

      //filing history
      cy.contains('You have no filing history').should('be.visible')

      //current address
      cy.contains('Mailing Address').should('be.visible')

      cy.contains('Delivery Address').should('be.visible')
      
      //Current directors

      //edit buttons


      cy.get('#dashboardArticle > div > div > section:nth-child(1) > div > ul > li > div.v-expansion-panel__header > div.list-item > div.list-item__actions > button > div')
   })


   it.skip('checks with the AR page', function () {
      // cy.get('#app > div.application--wrap > div > div > div > div > main > div > main > div.entity-info > div').contains('legal name CP0002098')
      //cy.get('#AR-header').contains('File 2018 Annual Report ')
      cy.get('#agm-textfield').click()

      cy.get('#agm-datepicker > div > div > div.v-date-picker-table.v-date-picker-table--date.theme--light > table > tbody > tr:nth-child(2) > td:nth-child(6) > button > div').click()

      cy.get('#AR-step-2-header').contains('Registered Office Addresses')

      cy.get('#reg-off-addr-change-btn > div > span').click()

      cy.get('#annual-report-article > div > section:nth-child(2) > div > ul > li:nth-child(1) > div > div > div.meta-container__inner > form > div:nth-child(1) > div > div > div.v-input__slot > div > input[type=text]').clear().type('1030 pendergast st').wait(5000)
      cy.get('body > div.pca > div:nth-child(1) > div.pca.pcalist > div.pcaitem.pcaselected').click()

      cy.get('#annual-report-article > div > section:nth-child(2) > div > ul > li:nth-child(1) > div > div > div.meta-container__inner > form > div:nth-child(2) > div > div > div.v-input__slot > div > input[type=text]').clear().type('this is an additional blank')

      cy.get('#annual-report-article > div > section:nth-child(2) > div > ul > li:nth-child(1) > div > div > div.meta-container__inner > form > div.form__row.three-column > div:nth-child(1) > div > div.v-input__slot > div > input[type=text]').clear().type('victoria')

      cy.get('#annual-report-article > div > section:nth-child(2) > div > ul > li:nth-child(1) > div > div > div.meta-container__inner > form > div.form__row.three-column > div.v-input.item.v-text-field.v-text-field--box.v-text-field--enclosed.v-select.v-input--is-label-active.v-input--is-dirty.theme--light > div > div.v-input__slot > div.v-select__slot').click()

      cy.get('#app > div.v-menu__content.theme--light.menuable__content__active > div > div > div:nth-child(3) > a > div').click()

      cy.get('#annual-report-article > div > section:nth-child(2) > div > ul > li:nth-child(1) > div > div > div.meta-container__inner > form > div.form__row.three-column > div:nth-child(3) > div > div.v-input__slot > div > input[type=text]').clear().type('V2X2S2')

      cy.get('#annual-report-article > div > section:nth-child(2) > div > ul > li:nth-child(1) > div > div > div.meta-container__inner > form > div:nth-child(4) > div > div > div.v-input__slot > div > input[type=text]').clear().type('canada')
      cy.get('body > div.pca > div.pcaautocomplete.pcatext.pcacountrylist > div.pca.pcalist > div.pcaitem.pcaselected > div.pcaflaglabel').click()

      cy.get('#annual-report-article > div > section:nth-child(2) > div > ul > li:nth-child(1) > div > div > div.meta-container__inner > form > div:nth-child(5) > div > div > div.v-input__slot > div > textarea').clear().type('Hows it going')

      cy.get('#street-address').clear().type('4113 Hattfield rd')
      cy.get('body > div.pca > div:nth-child(1) > div.pca.pcalist > div.pcaitem.pcaselected').click()

      cy.get('#annual-report-article > div > section:nth-child(2) > div > ul > li:nth-child(2) > div > div > div.meta-container__inner > form > div:nth-child(2) > div > div > div.v-input__slot > div > input[type=text]').clear().type('i am an uselss field')

      cy.get('#annual-report-article > div > section:nth-child(2) > div > ul > li:nth-child(2) > div > div > div.meta-container__inner > form > div.form__row.three-column > div:nth-child(1) > div > div.v-input__slot > div > input[type=text]').clear().type('vancouver')

      cy.get('#annual-report-article > div > section:nth-child(2) > div > ul > li:nth-child(2) > div > div > div.meta-container__inner > form > div.form__row.three-column > div.v-input.item.v-text-field.v-text-field--box.v-text-field--enclosed.v-select.v-input--is-label-active.v-input--is-dirty.theme--light > div > div.v-input__slot > div.v-select__slot > div.v-select__selections').click()

      cy.get('#app > div.v-menu__content.theme--light.menuable__content__active > div > div > div:nth-child(3) > a > div > div').click()

      cy.get('#annual-report-article > div > section:nth-child(2) > div > ul > li:nth-child(2) > div > div > div.meta-container__inner > form > div.form__row.three-column > div:nth-child(3) > div > div.v-input__slot > div > input[type=text]').clear().type('M4C5LL87')
      cy.get('#address-country').clear().type('CANADA')
      cy.get('body > div.pca > div.pcaautocomplete.pcatext.pcacountrylist > div.pca.pcalist > div.pcaitem.pcaselected > div.pcaflaglabel').click()

      cy.get('#annual-report-article > div > section:nth-child(2) > div > ul > li:nth-child(2) > div > div > div.meta-container__inner > form > div:nth-child(5) > div > div > div.v-input__slot > div > textarea').clear().type('Leave it door steps')

      cy.get('#reg-off-update-addr-btn > div').click()
   })

   it.skip('checks with the DIRECTOR', function () {

      cy.get('#AR-step-3-header').contains('Directors')

      cy.get('#directors > div:nth-child(2) > button > div').click()

      cy.get('#directors > div.v-card.v-card--flat.v-sheet.theme--light > ul.list.new-director').should('be.visible')

      cy.get('#new-director__first-name').type('riyaz')

      cy.get('#directors > div.v-card.v-card--flat.v-sheet.theme--light > ul.list.new-director > li > div > div > form > div.form__row.three-column > div.v-input.item.director-initial.v-text-field.v-text-field--box.v-text-field--enclosed.theme--light > div > div.v-input__slot > div > input[type=text]').type('remo')

      cy.get('#directors > div.v-card.v-card--flat.v-sheet.theme--light > ul.list.new-director > li > div > div > form > div:nth-child(1) > div:nth-child(3) > div > div.v-input__slot > div > input[type=text]').type('rocking')

      cy.get('#directors > div.v-card.v-card--flat.v-sheet.theme--light > ul.list.new-director > li > div > div > form > div.meta-container__inner > form > div:nth-child(1) > div > div > div.v-input__slot > div > input[type=text]').type('1030 pendergast').trigger('mousedown').click()

      cy.get("#directors > div.v-card.v-card--flat.v-sheet.theme--light > ul.list.new-director > li > div > div > form > div.meta-container__inner > form > div:nth-child(2) > div > div > div.v-input__slot > div > input[type=text]").type('hello world')

      cy.get('input[aria-label="City"]').filter(':visible').type('victoria')

      cy.get('#directors > div.v-card.v-card--flat.v-sheet.theme--light > ul.list.new-director > li > div > div > form > div.meta-container__inner > form > div.form__row.three-column > div.v-input.item.v-text-field.v-text-field--box.v-text-field--enclosed.v-select.theme--light > div > div.v-input__slot > div.v-select__slot > div.v-select__selections').click()

      cy.get('#app > div.v-menu__content.theme--light.menuable__content__active > div > div > div:nth-child(5) > a > div > div').click()

      cy.get('#directors > div.v-card.v-card--flat.v-sheet.theme--light > ul.list.new-director > li > div > div > form > div.meta-container__inner > form > div.form__row.three-column > div:nth-child(3) > div > div.v-input__slot > div > input[type=text]').type('v1v1v1')

      cy.get('#directors > div.v-card.v-card--flat.v-sheet.theme--light > ul.list.new-director > li > div > div > form > div.meta-container__inner > form > div:nth-child(4) > div > div > div.v-input__slot > div > input[type=text]').clear().type('Canada')
      cy.get('body > div.pca > div.pcaautocomplete.pcatext.pcacountrylist > div.pca.pcalist > div.pcaitem.pcaselected > div.pcaflaglabel').click()

      cy.get('#directors > div.v-card.v-card--flat.v-sheet.theme--light > ul.list.new-director > li > div > div > form > div.meta-container__inner > form > div:nth-child(5) > div > div > div.v-input__slot > div > textarea').type('I will be home')

      cy.get('#new-director__appointment-date').click()
      cy.get('#new-director__appointment-date__datepicker > div > div > div.v-date-picker-table.v-date-picker-table--date.theme--light > table > tbody > tr:nth-child(3) > td:nth-child(5) > button > div').click()

      cy.get('#directors > div.v-card.v-card--flat.v-sheet.theme--light > ul.list.new-director > li > div > div > form > div.form__row.form__btns > button.form-primary-btn.v-btn.theme--light.primary > div').click()
   })
   it.skip('checks with the Cease of Directors', function () {
      cy.get('#director-1-cease-btn > div > span').click()
      cy.get("#ar-pay-btn > div").click()
   })
   //it('checks with the pdf downloads',function(){
   // cy.get('#dashboardArticle > div > div > section:nth-child(2) > div > ul > li:nth-child(1) > div.v-expansion-panel__header > div.v-expansion-panel__header__icon > i').click()
   // cy.get('#dashboardArticle > div > div > section:nth-child(2) > div > ul > li.v-expansion-panel__container.filing-history-list.v-expansion-panel__container--active > div.v-expansion-panel__body > div > button > div').click()
   it.skip('checks  with the certification page', function () {
      cy.get('#AR-step-4-container > div > div.certifiedby-container > div > div > div > div.v-input__slot > div').type('Boss Baby')
      cy.get('#AR-step-4-container > div > div.v-input.v-input--selection-controls.v-input--checkbox.theme--light > div > div.v-input__slot > div > div').click()
   })

   it.skip('Checks with the CANCEL button', function () {
      cy.get('#ar-cancel-btn > div').click()
   })
})