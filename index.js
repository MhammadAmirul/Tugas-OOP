//import all class

import { Product } from "./product.js";
import {Category} from "./category.js";
import {Cart} from "./cart.js";
import {Order} from "./order.js";

//create new products
const laptop = new Product(1, 'Laptop', 8000, 'Lenovo');
const mouse = new Product(2, 'Mouse', 6000,'Logitec' );
const keyboard = new Product(3, 'Keyboard', 10000, 'Logitec')

//create new category
const elektronik = new Category("1", 'Elektronik');

//create new cart
const cart1 = new Cart()
const cart2 = new Cart()

//create new order
const order = new Order(1)

//add category
laptop.addCategory(elektronik)
mouse.addCategory(elektronik)
keyboard.addCategory(elektronik)

//display
laptop.displayInfo()
elektronik.displayInfo()
elektronik.getProduct()

mouse.displayInfo()
keyboard.displayInfo()

//update product
laptop.updateProduct('Laptop', 8000, 'Lenovo')
mouse.updateProduct('Mouse', 6000, 'Logitec')
keyboard.updateProduct('Keyboard', 10000, 'Logitec')

//add cart and cart display
cart1.addItem(laptop, 3)
cart2.displayCart()

//create order and display rder
order.createOrder(cart1)
order.displayOrderDetails()

