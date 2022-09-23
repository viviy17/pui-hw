
/*To calculate the total price*/

class Item {

    constructor (name,price,quantity) {
        this.name=name;
        this.price=price;
        this.quantity=quantity;
    
    }

    getTotal(){
        return this.price*this.quantity;
    }

    display() {
        return this.price*this.quantity.toFixed(2);
    }

}





