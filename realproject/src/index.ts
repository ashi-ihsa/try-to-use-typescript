type User = {
  name: string,
  email: string
}

let newUser: User = {
  name: "Harry",
  email: "idk@gmail.com"
}

console.log("typescript is here!");
console.log(newUser.name.toLowerCase());
console.log(newUser.email.toUpperCase());
export {};