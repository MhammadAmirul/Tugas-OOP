//class order

export class Order {
    constructor(orderId) {
        this.orderId = orderId;
        this.items = [];
        this.totalAmount = 0;  
    }

//method for displaying create order details

    createOrder(cart) {
        this.items = [...cart.items]
        this.totalAmount = cart.calculateTotal()
        console.log('Order create successfully.')
    }

//method for details order

    displayOrderDetails() {
        console.log(`Order ID: ${this.orderId}`)
        console.log('Order Details:')
        this.items.forEach(item => {
            console.log(`${item.quantity} ${item.product.productName} (s) - $${item.product.price * item.quantity}`)
          
        })
        console.log(`Total Amount: $${this.totalAmount}`)
    }

}

