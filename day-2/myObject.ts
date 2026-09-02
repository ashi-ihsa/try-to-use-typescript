const User = {
  name: "Harry",
  email: "lco.dev",
  isActive: true
}

function createUser({name, isPaid}:{name: string, isPaid: boolean}){}
createUser({name: "Harry", isPaid: false})

function createCourse():{name: string, price: number}{
  return {
    name: "TypeScript",
    price: 100
  }
}
export {}