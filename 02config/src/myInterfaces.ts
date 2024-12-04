interface TakePhoto{
    cameraMode:string,
    filter:string,
    burstMode:number
}

class Instrgram implements TakePhoto{
    constructor(public cameraMode:string, public filter: string, public burstMode:number){}
}

class Youtube implements TakePhoto{
    constructor(
        public cameraMode:string,
        public filter:string,
        public burstMode:number,
        public short:string
    ){}
}

