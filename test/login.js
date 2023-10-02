const { Selector } = require("testcafe");

fixture`Login Suite`.page("./");
test("Valid Login", async (t)=>{
    await t
    .typeText("#user-name","standard_user")
    .typeText("#password","secret_sauce")
    .click("#login-button")
    .expect(Selector(".title").innerText).eql("Products")
});

test("Invalid Login", async (t)=>{
    await t
    .typeText("#user-name","id")
    .typeText("#password","password")
    .click("#login-button")
    .expect(Selector(`h3[data-test="error"]`).innerText).eql("Epic sadface: Username and password do not match any user in this service")
});
//Amazon LogIn
//Please enter id and password at the place of id and password place
// test("Valid Login", async (t)=>{
//     await t
//     .click("#nav-link-accountList")
//     .typeText("#ap_email","Id")
//     .click(".a-button-input")
//     .typeText("#ap_password","Password")
//     .click(".a-button-input")

// });