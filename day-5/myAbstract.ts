abstract class TakePhoto {
  constructor(
    public cameraMode: string,
    public filter: string,
  ){}
  abstract getSepia():void
  getReelTime():number{
    // calculation
    return 1;
  }
}

// const TakePhoto = new TakePhoto("test","dark-mode");
// Abstract just a blueprint, that you can't use!

class Instagram extends TakePhoto {
  constructor(
    public cameraMode: string,
    public filter: string,
    public burst: number
  ){
    super(cameraMode,filter)
  }
  getSepia(): void {
    console.log("Sepia!");
  }
}

const newUser = new Instagram("test1","dark-mode",1);
newUser.getReelTime();