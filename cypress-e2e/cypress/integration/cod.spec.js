describe('My First Test', function() {
    beforeEach(function(){
    })

      it('checks with the login',function(){
         
      cy.visit('https://coops-dev.pathfinder.gov.bc.ca/auth/')

      cy.get('input[aria-label="Enter your Incorporation Number"]').type('CP0001430')

      cy.get('input[aria-label="Enter your Passcode"]').type('524590148')

      cy.get('#app > div.application--wrap > div > div > div > div > main > div > article > div > div > div > form > div.passcode-form__row.passcode-form__form-btns > button.sign-in-btn.v-btn.v-btn--large.theme--light.primary > div > span').click()
      })

      it('checks with the COD',function(){
          cy.get('#btn-standalone-directors > div').click()
          cy.get('#directors > div:nth-child(2) > button > div').click()
          cy.get('#new-director__first-name').type('boss')
          cy.get('#directors > div.v-card.v-card--flat.v-sheet.theme--light > ul.list.new-director > li > div > div > form > div:nth-child(1) > div.v-input.item.director-initial.v-text-field.v-text-field--box.v-text-field--enclosed.theme--light > div > div.v-input__slot > div > input[type=text]').type('MR')
          cy.get('#directors > div.v-card.v-card--flat.v-sheet.theme--light > ul.list.new-director > li > div > div > form > div:nth-child(1) > div:nth-child(3) > div > div.v-input__slot > div > input[type=text]').type('baby')
          cy.get('#directors > div.v-card.v-card--flat.v-sheet.theme--light > ul.list.new-director > li > div > div > form > div.meta-container__inner > form > div:nth-child(1) > div > div > div.v-input__slot > div > input[type=text]').click()
          .wait(1000).type('4113 Hatfield rd').trigger('mousedown').click()
          //cy.get('body > div.pca > div:nth-child(1) > div.pca.pcalist > div').click()

          cy.get('#directors > div.v-card.v-card--flat.v-sheet.theme--light > ul.list.new-director > li > div > div > form > div.meta-container__inner > form > div:nth-child(2) > div > div > div.v-input__slot > div > input[type=text]').type('additional field')


         // cy.get('#directors > div.v-card.v-card--flat.v-sheet.theme--light > ul.list.new-director > li > div > div > form > div.meta-container__inner > form > div.form__row.three-column > div.v-input.item.v-text-field.v-text-field--box.v-text-field--enclosed.v-input--has-state.theme--light.error--text > div > div.v-input__slot > div > input[type=text]').clear().type('victoria')

          cy.get('#directors > div.v-card.v-card--flat.v-sheet.theme--light > ul.list.new-director > li > div > div > form > div.meta-container__inner > form > div.form__row.three-column > div.v-input.item.v-text-field.v-text-field--box.v-text-field--enclosed.v-select.v-input--has-state.theme--light.error--text > div > div.v-input__slot > div.v-select__slot > div.v-select__selections').click()
          cy.get('#app > div.v-menu__content.theme--light.menuable__content__active > div > div > div:nth-child(4) > a > div > div').click()

          cy.get('#directors > div.v-card.v-card--flat.v-sheet.theme--light > ul.list.new-director > li > div > div > form > div.meta-container__inner > form > div.form__row.three-column > div:nth-child(3) > div > div.v-input__slot > div > input[type=text]').clear().type('b1b1b1')
          cy.get('#address-country').type('canada')
          cy.get('body > div.pca > div.pcaautocomplete.pcatext.pcacountrylist > div.pca.pcalist > div.pcaitem.pcaselected').click()
          cy.get('#directors > div.v-card.v-card--flat.v-sheet.theme--light > ul.list.new-director > li > div > div > form > div.meta-container__inner > form > div:nth-child(5) > div > div > div.v-input__slot > div > textarea').type('attested')
          cy.get('#new-director__appointment-date').click()
          cy.get('#new-director__appointment-date__datepicker > div > div > div.v-date-picker-table.v-date-picker-table--date.theme--light > table > tbody > tr:nth-child(3) > td:nth-child(5) > button > div').click()
          cy.get('#directors > div.v-card.v-card--flat.v-sheet.theme--light > ul.list.new-director > li > div > div > form > div.form__row.form__btns > button.form-primary-btn.v-btn.theme--light.primary').click()
          cy.get('#director-8-cease-btn > div > span').click()
      })

      it('checks with the certified section',function(){
          cy.get('#certified-by-textfield').type('remo rocking')
          cy.get('#AR-step-4-container > div > div.v-input.v-input--selection-controls.v-input--checkbox.theme--light > div > div.v-input__slot > div > div').click()
      })
      })