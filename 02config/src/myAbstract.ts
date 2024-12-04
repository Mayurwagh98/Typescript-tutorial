abstract class TakePhoto{
    constructor(
        cameraMode:string,
        filter:string
    ){}
    abstract getSiri(): void 
    getReelTime():number{
        return 8
    }
}

// const my = new TakePhoto("mayur","filter") -> throws an error as cannot create instace of an abstract

class Instagram extends TakePhoto{
    constructor(
        cameraMode:string,
        filter:string
    ){super(cameraMode, filter)}
    getSiri():void{
        console.log("siri")
    }
    
}
const my = new Instagram("mayur","filter") // valid way
my.getReelTime()