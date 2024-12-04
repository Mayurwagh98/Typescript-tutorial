interface TakePhoto{
    cameraMode:string,
    filter:string,
    burstMode:number,
}

interface Story{
    createStory(): void
}

class Instrgram implements TakePhoto{
    constructor(public cameraMode:string, public filter: string, public burstMode:number){}
}

// class Youtube implements TakePhoto{
//     constructor(
//         public cameraMode:string,
//         public filter:string,
//         public burstMode:number,
//         public short:string
//     ){}
// }

// we can use multiple calsses as well
class Youtube implements TakePhoto, Story{
    constructor(
        public cameraMode:string,
        public filter:string,
        public burstMode:number,
        public short:string
    ){}

    createStory(): void {
        console.log("hey")        
    }
}



