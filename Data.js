exports.IslandGenLog = class {
    deviceModel = "";
    deviceUniqueIdentifier = "";
    deviceProcessorCount = 0;
    deviceMemoryTotal = 0;

    graphicsDeviceName = ""
    graphicsDeviceType = "";
    graphicsMemorySize = 0

    playerTag = "";
    playerName = "";

    gameAverageFPS = 0;
    gameMemoryUsage = 0;

    timestamp = 0;

    genTotalTime = 0;
    genGroundTime = 0;
    genTreeTime = 0;
    genBuildingTime = 0;
    
    constructor(obj){
        if(obj){
            Object.assign(this, obj)
        }
    }
}

exports.FPSLog = class {
    
    constructor(obj){
        if(obj){
            Object.assign(this, obj)
        }
    }
}