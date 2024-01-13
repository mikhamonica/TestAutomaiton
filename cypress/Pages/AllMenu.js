class AllMenu{
    Element={
        SortBy:() => cy.xpath('//select[@class="product_sort_container"]'),
        SortByDesc :() => cy.xpath ('//option[@value="za"]'),
        AddToCart:() => cy.xpath ('//button[@id="add-to-cart-test.allthethings()-t-shirt-(red)"]'),
        Cart :() => cy.xpath('//div[@id="shopping_cart_container"]'),
        ProductName :() => cy.xpath('//a[@id="item_4_title_link"]'),
        RemoveButton :() => cy.xpath('//button[@id="remove-sauce-labs-backpack"]'),
        Checkout :()=> cy.xpath ('//button[@id="checkout"]'),
        Cancel :() => cy.xpath ('//button[@id="cancel"]')
    }

    ClickSortBy(){
        this.Element.SearchBar().click()
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
