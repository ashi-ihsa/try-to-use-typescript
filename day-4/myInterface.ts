interface User {
  readonly _dbId: number
  email: string,
  userId: number,
  googleId?: string,

  startTrail: () => string,
  startTrail2():string,
  getCoupon(couponName: string, value:number): number
}

// with this you can re-opening the interface.
interface User {
  githubToken?: string
}

interface Admin extends User {
  role: "admin" | "ta" | "learner"
}

const newUser: Admin = {
  _dbId: 22,
  email: "hs.dev",
  userId: 2211,
  role: "admin",

  startTrail: () => {
    return "trail started";
  },
  startTrail2: () => {
    return "trail started";
  },
  getCoupon: (name: "hitesh10", value:10) => {
    return 10;
  }
}