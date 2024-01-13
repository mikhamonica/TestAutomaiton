class LoginPage{
    Element={
        usernameField:() => cy.xpath('//input[@id="user-name"]'),
        passwordField:() => cy.xpath ('//input[@id="password"]'),
        LoginButton :() => cy.xpath('//input[@id="login-button"]')
    }

    Inputusername(username){
        this.Element.usernameField().type(username)
    }

    Inputpassword(password){
        this.Element.passwordField().type(password)
    }

    ClickButtonLogIn(){
        this.Element.LoginButton().click()
    }
}
export default LoginPage
