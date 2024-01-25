import LoginPage from "../Pages/loginPage"
import AllMenu from "../Pages/AllMenu"

let login = new LoginPage
let allMenu = new AllMenu

describe('Menu Login',() =>
{
let LoginData;

    before('Masuk ke halaman Login',()=>{
        Cypress.on('uncaught:exception', (err, runnable) => {
            // returning false here prevents Cypress from failing the test
            return false;
        })

        cy.fixture("Login.json").then((data)=>{
            LoginData=data;
        })
        
       // cy.visit('https://www.saucedemo.com/')
        cy.visit('https://www.saucedemo.com/v1/index.html')
        login.Inputusername('standard_user')
        login.Inputpassword('secret_sauce')
        login.ClickButtonLogIn()
        cy.wait(6000)
        cy.xpath('//div[@class="app_logo"]').should('be.visible','content.text','Swag Labs')
    })

    it('Add Product', () =>{
        allMenu.ClickSortBy()
        allMenu.ClickSortByDesc()
        allMenu.ClickAddToCart()
        allMenu.ClickCart()
        allMenu.ClickProductName()
        allMenu.ClickRemoveButton()
        allMenu.ClickCheckout()
        allMenu.ClickCancel()
    })
   
})