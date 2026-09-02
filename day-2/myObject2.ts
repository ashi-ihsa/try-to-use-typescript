type User = {
  name: string,
  email: string,
  isActive: boolean
}

function createUser1(user: User): User{
  return {
    name: "Harry",
    email: "lco.dev",
    isActive: true
  }
}

type User2 = {
  readonly _id: string,
  name: string,
  email: string,
  isActive: boolean,
  credentials?: string
}

let myUser2: User2 = {
  _id: "12345",
  name: "Harry",
  email: "lco.dev",
  isActive: false
}

// myUser2._id = "qwerty";
// Error because it is a readonly

type cardNumber = {
  cardNumber: string
}

type cardDate = {
  cardDate: string
}

type cardDetails = cardNumber & cardDate & {
  cvv: number
}

let card: cardDetails = {
  cardNumber: "12345",
  cardDate: "09/01/2026",
  cvv: 298
}
export {}