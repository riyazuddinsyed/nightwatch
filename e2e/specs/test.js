
module.exports={
   '@disabled':true,
    step1:function (browser){
        browser
        .url('https://coops-dev.pathfinder.gov.bc.ca/auth/')
        .setValue('input[aria-label="Enter your Incorporation Number"]','CP0001463')
        .setValue('input[type="password"]','488784901')
        .click('button.sign-in-btn')
    },
        
Step2:function (browser){
    browser
    .click('#btn-standalone-addresses > div > span')
    .click('#reg-off-addr-change-btn > div > span')
    .setValue('#street-address','test street')
    .setValue('#standalone-office-address-article > div > section:nth-child(1) > div > ul > li:nth-child(1) > div > div > div.meta-container__inner > form > div:nth-child(2) > div > div > div.v-input__slot > div > input[type=text]','test 2')
    .setValue('#standalone-office-address-article > div > section:nth-child(1) > div > ul > li:nth-child(1) > div > div > div.meta-container__inner > form > div.form__row.three-column > div:nth-child(1) > div > div.v-input__slot > div > input[type=text]','victoria')
    .setValue('#standalone-office-address-article > div > section:nth-child(1) > div > ul > li:nth-child(1) > div > div > div.meta-container__inner > form > div.form__row.three-column > div:nth-child(3) > div > div.v-input__slot > div > input[type=text]','v1s2a1')
    .setValue('#address-country','canada')
    .setValue('#standalone-office-address-article > div > section:nth-child(1) > div > ul > li:nth-child(1) > div > div > div.meta-container__inner > form > div:nth-child(5) > div > div > div.v-input__slot > div > textarea','optional field')
    .click('#standalone-office-address-article > div > section:nth-child(1) > div > ul > li:nth-child(2) > div > div > div:nth-child(1) > div > div > div.v-input__slot > div > div')
    .click('#reg-off-update-addr-btn')
    .setValue('#certified-by-textfield','test')
    .click('#AR-step-4-container > div > div.v-input.v-input--selection-controls.v-input--checkbox.theme--light > div > div.v-input__slot > div > input[type=checkbox]')
    .click('#coa-file-pay-btn > div')
    }
};
