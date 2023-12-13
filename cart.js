//class cart
export class Cart {
    constructor(cardId) {
        this.cardId = cardId;
        this.items = [];
    }

//method for additem cart details

    addItem(product, quantity) {
        this.items.push({ product, quantity})
        console.log(`${quantity} ${product.productName} added to the cart.`)
     }

//method for remove car details

    removeItem(product) {
        this.items = this.items.filter(item => item.product !== product)
        console.log(`${product.productName} remove from the cart.`)
    }

//method for view cart details

    displayCart() {
        console.log('Cart contents:')
        console.log(`Cart ID: ${this.cardId}`)
        console.log(`List Product in Cart`)
        this.items.forEach(item => {
            console.log(`${item.quantity} ${item.product.productName} (s) - $${item.product.price * item.quantity}`)
        })
        const totalAmount = this.calculateTotal()
        console.log(`Total Amount: $${totalAmount}`)
    }

//method for calculate cart details

    calculateTotal() {
        return this.items.reduce((total, item) => + item.product.price * item.quantity, 0)
    }


}