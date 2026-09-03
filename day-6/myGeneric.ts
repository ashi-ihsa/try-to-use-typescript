const score: Array<number> = []
const names: Array<string> = []

function identityOne(val: boolean | number): boolean| number {
  return val;
}

function identityTwo(val:any):any{
  return val;
}

// the topic we were discussing
function identityThree<Type>(val:Type):Type{
  // what the difference with any?
  // with this the input and output will be the same type!
  return val;
}
identityThree("3");

function identityFour<T>(val: T): T {
  // literally same thing with line13
  return val;
}
interface Bootle {
  brand: string,
  type: number, 
}
identityFour<Bootle>({brand: "", type: 1})

function getSearchProducts<T>(products: T[]):T {
  // do some database operations
  const myIndex = 3;
  return products[myIndex];
}

const getMoreSearchProducts = <T,>(products: T[]): T=>{
  // do some database operations
  const myIndex = 3;
  return products[myIndex];
}