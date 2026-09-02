let score: number | string;
score = 44;
score = "Selamat Pagi"
// score = true

type User = {
  id: number;
  name: string,
}

type Admin = {
  id: number;
  username: string,
}

let harry: User | Admin = {
  name: "Harry",
  id: 12
}

harry = {
  username: "Harry",
  id: 12
};

function getDBbyId(id: number | string){
  console.log(`DB id is: ${id}`);
}
getDBbyId(3);
getDBbyId("3")

function getDBbyId2(id: number | string){
  // id.toLowerCase();
  if(typeof id === "string"){
    id.toLowerCase();
  } else {
    id +=2;
  }
}

// Array
const data: number[] | string[] = [1,2,3,4];
const data2: (string|number)[] = [1,"2",3,"4"];

let pi:3.14 = 3.14;

let seatAllotment: "aisle" | "middle" | "window";