const user: (string | number)[] = ["hc",1];
const TuplesUser: [string,number,boolean] = ["dev",123,true];

let rgb: [number,number,number] = [255,123,112];

type TUser = [number,string];
const newUser: TUser = [123, "exampleGoogle.com"];
newUser[1] = "Good";
// newUser.push(true);

export {}