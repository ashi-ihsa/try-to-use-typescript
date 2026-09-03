// Bad Implementation
class User {
  public email: string;
  private name: string;
  // #name: string
  readonly city: string = "Pontianak";
  constructor(email: string, name: string){
    this.email = email;
    this.name = name;
  }
}

const newUser = new User("hs@gmail.com", "Harry");
// newUser.city = "Pontianak";
// newUser.city

// Good Implementation
class User2 {
  readonly city: string = "Pontianak";
  // can only be access by it own class.
  private _courseCount = 1;
  protected _courseCountProtected:number = 5;

  constructor(
    public email: string, 
    public name: string,
    private userId: string
    ){
  }
  private deleteToken(){
    console.log("Token deleted");
  }
  get getAppleEmail():string{
    return `apple-${this.email}`;
  }

  get courseCount():number{
    return this._courseCount;
  }
  // should be nothing in type as output
  set courseCount(courseNumber){
    if(courseNumber<=1){
      throw new Error("Course count should be more than 1");
    }
    this._courseCount = courseNumber;
  }
} 

class SubUser extends User2 {
  isFamily: boolean = true;
  changeCourseCount(){
    this._courseCountProtected = 10;
  }
}


