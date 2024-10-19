/*

To the preceding object class, add the method to calculate the total price of the item.
Create another object class for the shopping cart which contains an array of ShoppingCartItem instances. 
To the shopping cart object, add the following methods.
Add the methods to: 
Get the total of items inside the cart
Add items
Remove items
Display cart items
Go on to test the ability of our objects to:
Create products
Create a shopping cart
Add items to the cart
Display the cart
Remove an item from the cart*/
const theList = document.getElementsById('the-list');
const  total = document.getElementById('total');
const cards = document.getElementsByClassName('card');
for(let card of cards){
    const add = document.querySelector('add-button');
    const minus = document.querySelector('minus-button');
    const name = document.querySelector('title');
    const price = document.querySelector('price');
    const quantity = document.querySelector('quantity');
class product {
    constructor (id , name , price  ){
this.id = id ;
this.name = name ; 
this.price = price;
    }
}
class items {
    constructor(name , quantity){
        this.name = name ;
        this.quantity = quantity ;
    }
    calculate (price , quantity) {
        return price*quantity ; 
    }
}

}