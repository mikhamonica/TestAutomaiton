import LoginPage from "../Pages/loginPage"

let login = new LoginPage

describe('Menu Login',() =>
{
let LoginData;

    beforeEach('Masuk ke halaman Login',()=>{
        Cypress.on('uncaught:exception', (err, runnable) => {
            // returning false here prevents Cypress from failing the test
            return false;
        })

        cy.fixture("Login.json").then((data)=>{
            LoginData=data;
        })
        
        cy.visit('https://www.saucedemo.com/')
        cy.wait(6000)
    })

    it('Invalid UserName', () =>{
        login.Inputusername(LoginData.Invalidusername)
        login.Inputpassword(LoginData.ValidPassword)
        login.ClickButtonLogIn()
        cy.xpath('//h3[@data-test="error"]').should('be.visible','content.text','Epic sadface: Username and password do not match any user in this service')
    })

    it('Invalid Password', () =>{
        login.Inputusername(LoginData.Username)
        login.Inputpassword(LoginData.InvalidPassword)
        login.ClickButtonLogIn()
        cy.xpath('//h3[@data-test="error"]').should('be.visible','content.text','Epic sadface: Username and password do not match any user in this service')
    })

    it('Invalid User and Password', () =>{
        login.Inputusername(LoginData.Invalidusername)
        login.Inputpassword(LoginData.InvalidPassword)
        login.ClickButtonLogIn()
        cy.xpath('//h3[@data-test="error"]').should('be.visible','content.text','Epic sadface: Username and password do not match any user in this service')
    })

    it('Invalid User and Password', () =>{
        login.Inputusername(LoginData.Invalidusername)
        login.Inputpassword(LoginData.InvalidPassword)
        login.ClickButtonLogIn()
        cy.xpath('//h3[@data-test="error"]').should('be.visible','content.text','Epic sadface: Username and password do not match any user in this service')
    })

    it('Locked User', () =>{
        login.Inputusername(LoginData.Invalidusername)
        login.Inputpassword(LoginData.InvalidPassword)
        login.ClickButtonLogIn()
        cy.xpath('//h3[@data-test="error"]').should('be.visible','content.text','Epic sadface: Username and password do not match any user in this service')
    })

    it('Testing User Blocked', ()=> {
        for (let i = 0; i < 3; i++) {
            login.Inputusername(LoginData.Invalidusername)
            login.Inputpassword(LoginData.InvalidPassword)
            login.ClickButtonLogIn()
            cy.xpath('//h3[@data-test="error"]').should('be.visible','content.text','Akun Anda Di Blocker Karna Kesalahan Password 3 kali Berturut-turut')
        
        }
    })
   
    it('Valid Data',()=>{
        login.Inputusername(LoginData.Username)
        login.Inputpassword(LoginData.ValidPassword)
        login.ClickButtonLogIn()
    })
})