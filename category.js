//class category

export class Category {
    constructor(catogoryId, categoryName) {
        this.categoryId = catogoryId;
        this.categoryName = categoryName;
        this.products = [];
    }

//method for displaying category details

    displayInfo() {
        console.log(`Category ID: ${this.categoryId}`)
        console.log(`Category Name: ${this.categoryName}`)
    }

//method for updating categories
    updateCategory(newCategoryName) {
        this.categoryName = newCategoryName;
        console.log('Updated category details')
        
    }

    getProduct() {
        console.log(`==========================================`)
        console.log(`List product category ${this.categoryName}`)
        console.log(`Product: ${this.products.map(product => product.productName).join(',')}`)
    }
}

