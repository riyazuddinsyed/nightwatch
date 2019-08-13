describe('My First Test', function() {
    beforeEach(function(){
    })
      it.only('checks with the login',function(){
      cy.visit('https://coops-prototype-dev.pathfinder.gov.bc.ca/')
      cy.get('#app > div.application--wrap > div > main > div > article > section > div > div > div > form > div:nth-child(2) > div > div > div.v-input__slot > div.v-text-field__slot > input[type=text]').type('CP0001219')
      cy.get('#app > div.application--wrap > div > main > div > article > section > div > div > div > form > div:nth-child(3) > div > div > div.v-input__slot > div.v-text-field__slot > input[type=text]').type('219168648')
      cy.get('#app > div.application--wrap > div > main > div > article > section > div > div > div > form > div.form__row.form__btns > a > div').click()
      })
    })
  
      it.only('checks with the login',function(){
      cy.get('#app > div > div > main > div > div.container.view-container > article > section:nth-child(2) > div > ul > li > div.actions > button > div').click()
      })
      it.only('checks with teh AR page',function(){
      cy.get('#example-content > section:nth-child(2) > header > div > ul > li > div > div > form > div > div.v-input.v-text-field.v-text-field--box.v-text-field--enclosed.v-input--is-readonly.theme--light > div > div.v-input__slot > div.v-text-field__slot > input[type=text]').click()
      cy.get('#app > div.v-menu__content.theme--light.menuable__content__active > div > div > div > div.v-date-picker-table.v-date-picker-table--date.theme--light > table > tbody > tr:nth-child(3) > td:nth-child(5) > button').click()
      cy.get('#example-content > section:nth-child(3) > div > ul > li:nth-child(1) > div > div > div > div.actions > button > div').click()
      })
      it.only('checks with the CHANGE OF ADDRESS',function(){
      cy.get('#example-content > section:nth-child(3) > div > ul > li:nth-child(1) > div > div > form > div:nth-child(1) > div > div > div.v-input__slot > div > input[type=text]').type('1234 victoria street')
      cy.get('#example-content > section:nth-child(3) > div > ul > li:nth-child(1) > div > div > form > div.form__row.three-column > div:nth-child(1) > div > div.v-input__slot > div > input[type=text]').type('victoria')
      cy.get('#example-content > section:nth-child(3) > div > ul > li:nth-child(1) > div > div > form > div.form__row.three-column > div:nth-child(3) > div > div.v-input__slot > div > input[type=text]').type('V2X2S2')
      cy.get('#example-content > section:nth-child(3) > div > ul > li:nth-child(1) > div > div > form > div:nth-child(4) > div > div > div.v-input__slot > div > textarea').type('i will be home')
      cy.get('#example-content > section:nth-child(3) > div > ul > li:nth-child(2) > div > div > form > div:nth-child(1) > div > div > div.v-input__slot > div > div').click()
      })
      it.only('checks with the MAILING ADDRESS',function(){
      cy.get('#example-content > section:nth-child(3) > div > ul > li:nth-child(2) > div > div > form > div:nth-child(2) > div:nth-child(1) > div > div > div.v-input__slot > div > input[type=text]').type('2350 Dundas st west')
      cy.get('#example-content > section:nth-child(3) > div > ul > li:nth-child(2) > div > div > form > div:nth-child(2) > div.form__row.three-column > div:nth-child(1) > div > div.v-input__slot > div > input[type=text]').type('vancouver')
      cy.get('#example-content > section:nth-child(3) > div > ul > li:nth-child(2) > div > div > form > div:nth-child(2) > div.form__row.three-column > div:nth-child(3) > div > div.v-input__slot > div > input[type=text]').type('M4C59')
      cy.get('#example-content > section:nth-child(3) > div > ul > li:nth-child(2) > div > div > form > div:nth-child(2) > div:nth-child(4) > div > div > div.v-input__slot > div > textarea').type('ring my door bell')
      })
      it.only('checks with the CHANGE OF DIRECTORS',function(){
      cy.get('#example-content > section:nth-child(3) > div > ul > li:nth-child(2) > div > div > form > div.form__row.form__btns > button.form-primary-btn.v-btn.theme--light.primary > div').click()
      cy.get('#example-content > section:nth-child(4) > header > div > button > div').click().wait(10000)
      cy.get('#example-content > section:nth-child(4) > div > ul.list.new-director > li > div > div > form > div:nth-child(1) > div.v-input.item.v-text-field.v-text-field--box.v-text-field--enclosed.v-input--has-state.theme--light.error--text > div > div.v-input__slot > div > input[type=text]').type('Riyazuddin')
      cy.get('#example-content > section:nth-child(4) > div > ul.list.new-director > li > div > div > form > div:nth-child(1) > div.v-input.item.director-initial.v-text-field.v-text-field--box.v-text-field--enclosed.theme--light > div > div.v-input__slot > div > input[type=text]').type('syed')
      cy.get('#example-content > section:nth-child(4) > div > ul.list.new-director > li > div > div > form > div:nth-child(1) > div:nth-child(3) > div > div.v-input__slot > div > input[type=text]').type('FYI')
      cy.get('#example-content > section:nth-child(4) > div > ul.list.new-director > li > div > div > form > div:nth-child(2) > div > div > div.v-input__slot > div > input[type=text]').type('123 markham st')
      cy.get('#example-content > section:nth-child(4) > div > ul.list.new-director > li > div > div > form > div:nth-child(3) > div.v-input.item.v-text-field.v-text-field--box.v-text-field--enclosed.v-input--has-state.theme--light.error--text > div > div.v-input__slot > div > input[type=text]').type('Beautiful British Columbia')
    })
})