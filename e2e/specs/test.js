
module.exports={
    '@tags': ['signin'],
    step1:function (browser){
        browser
        .url('https://coops-dev.pathfinder.gov.bc.ca/auth/')
        .waitForElementVisible('body',1000)
        .setValue('#app > div.application--wrap > div.app-body > div > div > article > div > div > div > form > div:nth-child(2) > div > div > div.v-input__slot > div > input[type=text]','CP0001430')
        .setValue('#app > div.application--wrap > div.app-body > div > div > article > div > div > div > form > div:nth-child(3) > div > div > div.v-input__slot > div.v-text-field__slot > input[type=password]','524590148')
        browser.click('#app > div.application--wrap > div.app-body > div > div > article > div > div > div > form > div.passcode-form__row.passcode-form__form-btns > button.sign-in-btn.v-btn.v-btn--large.theme--light.primary > div')
        .pause(10000)
    },
    step2:function(browser){
        browser
        .click('#btn-standalone-addresses > div > span').pause(10000)
        .click('#reg-off-addr-change-btn > div > span')
        .waitForElementVisible('body',1000)

        .click('[name=street-address]')
        .clearValue('[name=street-address]')
        .setValue('[name=street-address]','123test')

        .click('[name=street-address-additional]')
        .clearValue('[name=street-address-additional]')
        .setValue('[name=street-address-additional]','321 test')
         
        .click('[name=address-city]')
        .clearValue('[name=address-city]')
        .setValue('[name=address-city]','victoria')

        .clearValue('[name=postal-code]')
        .setValue('[name=postal-code]','V1V1V1')

        .clearValue('[name=address-country]')
        .setValue('[name=address-country]','canada')
         
        .click('[name=delivery-instructions]')
        .clearValue('[name=delivery-instructions]')
        .setValue('[name=delivery-instructions]','optional')

        .click('#standalone-office-address-article > div > section:nth-child(1) > div > ul > li:nth-child(2) > div > div > div:nth-child(1) > div > div > div.v-input__slot > div > div')
         
        .click('#reg-off-update-addr-btn > div')
        .setValue('#certified-by-textfield','test')
        .click('#AR-step-4-container > div > div.v-input.v-input--selection-controls.v-input--checkbox.theme--light > div > div.v-input__slot > div > div')
        .click('#coa-file-pay-btn')
    }
};    
