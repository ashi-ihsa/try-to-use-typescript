function addTwo(num: number): number{
  return num + 2;
  // return "Hello"
  // dengan TypeScript kita bisa menentukan output dari function
  // function nameFunction (input: type): [type Output]{}
}

function getUpper(val: string){
  return val.toUpperCase();
}

function signUpUser(name: string, email: string, isPaid: boolean){}
let loginUser = (name: string, email: string, isPaid: boolean = false) => {}

let variable: number = addTwo(5);
getUpper("Selamat Pagi");
signUpUser("Harry", "lco.dev", true);
loginUser("Harry", "lco.dev");

const getHello = (s:string):string => {
  return "";
}

const heroes = ["Spiderman", "Zuko", "Aang"];
heroes.map((hero):string => {
  return `Hero is ${hero}`;
})

function consoleErr(Err: string): void {
  console.log(Err);
}

function handleErr(Err: string): never {
  // Tidak pernah terjadi Errornya
  throw new Error(Err);
}

export {}