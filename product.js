// import { Category } from "./category";

//create a product class
export class Product {
    products = []
    constructor(productId, productName, price, descpription) {
        this.productId = productId;
        this.productName = productName;
        this.price = price;
        this.descpription = descpription;
        this.categories = [];
    }

//method for displaying product details
    
    displayInfo() {
        console.log(`Product ID: ${this.productId}`)
        console.log(`Product Name: ${this.productName}`)
        console.log(`Price: $${this.price}`)
        console.log(`Description: ${this.descpription}`)
        console.log(`Categories: ${this.categories.map(category => category.categoryName).join(',')}`)
    }

//method for updating products

    updateProduct(newProductName, newPrice, newDescription) {
        this.productName = newProductName;
        this.price = newPrice;
        this.descpription = newDescription;
        console.log('Update detail product')
    }

    addCategory(category) {
        this.categories.push(category)
        category.products.push(this)
    }
}



