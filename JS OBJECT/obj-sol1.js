//? Create a product object which is having property as product name, price, stock, category, rating :

function product(name,price,stock,category,rating){
    this.name=name
    this.price=price
    this.stock=stock            //: Boolean value
    this.category=category
    this.rating=rating
}
var product1= new product("Iphone 14 Pro Max", 129900, true, "Mobile", 4.5)

