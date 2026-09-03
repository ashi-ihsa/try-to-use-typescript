interface Database {
  connection: string,
  username: string,
  password: string
}

function functionOne<T,U extends Database>(valOne: T,ValTwo: U): object {
  return {
    valOne,
    ValTwo
  }
}
functionOne(3,{
  connection:"1",
  username:"1",
  password:"1",
});

interface Quiz {
  name: string,
  type: string,
}

interface Course{
  name: string,
  author: string,
  subject: string
}

// class SellAble<T>{
//   public cart: T[]: [],
//   addToCart(product: T){
//     this.cart.push(product);
//   }
// }