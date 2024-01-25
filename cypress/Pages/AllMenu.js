class AllMenu{
    Element={
        SortBy:() => cy.xpath('//div[@id="inventory_filter_container"]/select'),
        SortByDesc :() => cy.xpath ('//option[@value="za"]'),
        AddToCart:() => cy.xpath ('(//button[@class="btn_primary btn_inventory"])[1]'),
        Cart :() => cy.xpath('//div[@id="shopping_cart_container"]'),
        ProductName :() => cy.xpath('//a[@id="item_4_title_link"]'),
        RemoveButton :() => cy.xpath('//button[@id="remove-sauce-labs-backpack"]'),
        Checkout :()=> cy.xpath ('//button[@id="checkout"]'),
        Cancel :() => cy.xpath ('//button[@id="cancel"]')
    }

    ClickSortBy(){
        this.Element.SortBy().click()
    }

    ClickSortByDesc(){
        this.Element.SortByDesc().click()
    }

    ClickAddToCart(){
        this.Element.AddToCart().click()
    }

    ClickCart(){
        this.Element.Cart().click()
    }

    ClickProductName(){
        this.Element.ProductName().click()
    }

    ClickRemoveButton(){
        this.Element.RemoveButton().click()
    }

    ClickCheckout(){
        this.Element.Checkout().click()
    }

    ClickCancel(){
        this.Element.Cancel().click()
    }

}
export default AllMenu
