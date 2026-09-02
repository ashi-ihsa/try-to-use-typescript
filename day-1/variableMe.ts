// string
let greetings: string = "Harry Sanjaya";
greetings.toLowerCase();

// number
let userId: number = 334455;
userId.toExponential();

// boolean
let isLoggedIn: boolean = false;
isLoggedIn.valueOf();

/**
 * Kau tidak perlu menentukan tipe variablenya selalu
 * let variable: type = value
 * 
 * terkadang ini adalah bad practice karena TypeScript
 * itu sudah sangat pintar menentukan tipenya
 * 
 * jika kau mendeklarasi Variabel dan Valuenya
 * TypeScript secara lansung mengassign fungsinya
 * berdasarkan valuenya.
 */

/**
 * Any umumnya jarang banget digunakan bahkan
 * saat menggunakan ini, sama saja kau menggunakan
 * JavaScript umumnya.
 * terdapat flag noImplicitAny
 * untuk mencegah penggunaan Any dalam pemakaiannya
 */
let hero: string;
function getHero(){
  return "Thor";
}
hero = getHero();

console.log(greetings);
export {}