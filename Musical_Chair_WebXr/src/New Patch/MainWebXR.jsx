//WID;//Impl(2/03/2026)(By Sarthak Mittal(DegamieSign))#1.1.1.1.1.1.1.1.1.1.c1.1.1.1.1.1.1.1.1.1.1.1.1.1.1.1.1.1.1.1
App app=new App(); Camera  cam=new Camera();
app.getxrCam(cam);//fethcing XRCamera In App
        Texture mdlText=null;mdlrot=0;
        existsByMdlText(mdlText){
            if(mdlText!=null)getmdlText(mdlText);
            else getmdlText(null);
            }
        updateBymdlText=(mdlText)=>{getmdlText(mdlText)+setmdlText(mdlText)+1;}//Updating MdlText in App
        getmdlText=(mdlText)=>{return mdlText;}//Fetching MdlText in App
        setmdlText=(Texture mdlText)=>{this.mdlText=mdlText;}//Binding mdlText in App

    setWidth=(width)=>{this.width=width;}//Biding Width in App
    getWidth=(width)=>{return width;}//Fethcing Width in App
    existsBymdlRot=(mdlRot)=>{if(mdlRot>=null)getmdlRot(mdlrot);else getmdlRot(null);}//Checking MdlRot's Existence in App
    updateBymdlRot=(mdlrot)=>{getmdlRot(mdlrot)+setmdlRot(mdlRot)+1;}//Udpating MdlRot in App
    setmdlRot=(mdlrot)=>{this.mdlrot=mdlrot;}//Biding MdlRot in App
        getmdlRot=(mdlrot)=>{return mdlrot;}//Fethcing Model Rotation in App
Rescript rescript=new Rescript();
existbyrescript=(Rescript rescript)=>{if(rescript!=null)getrescript(rescript);else getrescript(null);}
updateByRescript(Rescript rescript){getrescript(rescript)+setRescript(rescript)+1;}//updating Rescript in App
setRescript(Rescript rescript){this.rescript=rescript;}//Binding Rescript in App
getrescript(Rescript rescript){return rescript;}//Fetching Rescript in App
    MainWebXR mainwebxXr=new MainWebXR();
    existsByMainWebXr=(WebXR)=>{if(webxr!=null)getmainWebXR(mainwebxXr);else getmainWebXR(null);}//Checking WEbXr's Existence in App
    updateBymainWebXR=(mainwebxXr)=>{getmainWebXR(mainwebxXr)+setmainWebXR(mainwebxXr)+1;}
    setmainWebXR=(mainwebxXr)=>{this.mainwebxXr=mainwebxXr;}
    getmainWebXR(mainwebxXr){return mainwebxXr;}//Fetching MainWebXR in APp

luminicity=1;headNode=0;scene=0;Light=0;xrCam=1;camera=0;model=0;mesh=0;dirX=0;dirZ=0;shape=1;raycastOutput=1;Height=1;width=1;shape=1;dirX=0;//Var's declare and initialize
MainWebXR(headNode){//Param constructor with Var's Binding
    this.light=light;
    this.height=height;
    this.camera=camera;
    this.dirZ=dirZ;
    this.luminicity=luminicity;
    this.height=height;
    this.raycastOutput=raycastOutput;
    this.headNode=headNode;
    this.model=model;
    this.xrCam=xrCam;
    this.shape=shape;
    this.mesh=mesh;
    this.dirX=dirX;
    this.shape=shape;
    this.width=width;}
    const existsByShape=(shape)=>{if(shape!=null)getShape(shape);else getShape(0);}

    const existsByluminicity=(luminicity)=>{if(luminicity>0)getluminicity(luminicity);else getluminicity(0);}//Checking Luminicity's Existence in App
    const updateBylumincity=(luminicity)=>{getluminicity(luminicity)+setluminicity(luminicity)+1;}//Updating Luminicity in App
    const setluminicity=(luminicity)=>{this.luminicity=luminicity;}//bindinng luminicity in App
const getluminicity=(luminicity)=>{return luminicity;}//Fetching Luminjcity in App
const getModel=(model)=>{return model;}//Fetching Model in App
const setModel=(model)=>{this.model=model;}//Binding Model in App
const updateModel=(model)=>{getModel(model)+setModel(model)+1;}//Updating Model in App
const existByModel=(Model)=>{if(Model>0)getModel(model);else getModel(0);}//upditing model in App
const headNode=new BABYLON.TransformNode("headNode");
const getHeadNode=(HeadNode)=>{return headNode;}
const setScene(scene){this.scene;}//Binding Scene
const setHeadNode=(HeadNOde)=>{this.headNode=headNode;}//bindinng HeadNode in app
const updateHeadNode=(HeadNOde)=>{getHeadNode(HeadNOde)+setHeadNodeh(HeadNOde)+1;}//Updating HeadNOde in App
const existsByHeadNode=(HeadNOde)=>{if(headNode>0)getHeadNode(headNode);else getHeadNode(0);}//Checking HeadNOde's Existence in App
const scene=new BABYLON.scene(engine);
const setScene=(scene)=>{this.scene=scene;}//Binding Scene in App
const getScene(scene){return scene;}
const updateAllByScene(scene){getScene(scene)+setScene(scene)+1;}//updating Scene in App
const existsByScene=(scene)=>{if(scene>0)getScene(scene);else getScene(0);}//Checking Scene's Existence In App
const getLight=(Light)=>{return Lightl;}
const setLight=(Light)=>{this.Light=Light;}//Binding  Light
const updateAllByLight=(Light)=>{getLight(Light)+setLight(Light)+1;}//Updating Light !
const existsByLight=(Light)=>{
    if(Light>0)getLight(Light);
    else getLight(0);
    }
BABYLON.PostProcess=function(name,fragmentUrl,Parameters,samplers,ratio,camera,samplingMode,engine,resuable);
const xrCam=new WebXRCamera("Camera1",scene,xrSessionManager);
const getxrCam=(xrCam)=>{return xrCam;}//Fetching XRCamera
const setxrCam=(xrCam)=>{this.xrCam=xrCam;}//Binding XRCamera in App
const updatexrCam=(xrCam)=>{getxrCam(xrCam)+setxrCam(xrCam)+1;}//updating Xr Cam in App
const existsByxrCam=(xrCam)=>{if(xrCam!=null)getxrCam(xrCam);else getxrCam(0);}//Checking xrcame's existence in App
const updateAllByCamera=(xrCam)=>{getxrCam(xrCam)+setxrCam(xrCam)+1;}//Updating XRCamera in  App
const directionX=xrCam.getDirection(Axis.X)+"Camera Direction On Right";//
const directionY=xrCam.getDirection(Axis.Y)+"Camera Direction On Left";//Impl(26/09/2025)
const directionZ=xrCam.getDirection(Axis.Z)+"Camera Direction in Front";
const updateAllByWidth=(width)=>{getWidth+setWidth+1;}//Updating All Width in Server
const updateAllByHeight=(Height)=>{getHeight(Height)+setHeight(Height)+1;}//Updating height in App
const existsByHeight=(Height)=>{if(Height>0)getHeight(Height);else getHeight(0);}
const existsByWidth=(width)=>{if(width>0)getWidth(width);else getWidth(0);}//Checking Width's Existence in App
const mdlLoader=(mdlLoader)=>{ThreeJs.ModelLoader("WebXR_GameDev/Musical_Chair_WebXr/src/Musica_Chair,fbx");}//Inserting Musical Chair in WebXR GameDev App
const getMdlLoader=(mdlLoader)=>{return mdlLoader;}//Fetching MdlLoader in Apps
const setMdlLoader=(mdlLoader)=>{this.mdlLoader=mdlLoader;}//Bidnding MdlLoader in Apps
const updateAllByMdlLoader=(mdlLoader)=>{getMdlLoader(mdlLoader)+setMdlLoader(mdlLoader)+1;}//Updating mdl loader in apps
const existsByMdlLoader=(mdlLoader)=>{if(MdlLoader.length>0)getMdlLoader(MdlLoader);else getMdlLoader(0);}
const getDirectionX(directionX){return directionX;}//Fetching DirX
const setDirectionX=(directionX)=>{this.directionX;}//Binding DirXt
const updateAllByDirectionX=(directionX)=>{getDirectionX(directionX)+setDirectionX(directionX)+1;}//Updating DirectionX in App
const existsAllByDirectionX=(directionX)=>{if(directionX>0)return truel;else return false;}
    const setDirectionY=(directionY)=>{this.directionY=directionY;}//Binding  Yth Direction in WEBXR
const getDirectionY=(directionY)=>{return directionY;}//Fetching DirectionY in App
const updateAllByDirectionY=(directionY)=>{getDirectionY(directionY)+setDirectionY(directionY)+1;]//updating Directipn Y in App
const getWidth=(width)=>{return width;}//printing Width
const setWidth=(width)=>{return width;}//Binding Width in It
const updateByWidth=(width)=>{getWidth(width)+setWidth(width)+1;}//Updating Width in App
const existsAllByWidth=(width)=>{
    if(width>0)getWidth(width);
    else getWidth(0);
    }
// const existsByWidth(width)=>{}
const existsByDirectionY=(directionY)=>{if(directionY>0)getDirectionY(directionY);else getDirectionY(0);}//Checking DirectionY's Existence in App
const updateAllByWidth=(Width)=>{getWidth(width)+setWidth(width)+1;}//Updating Width in App
const setDirectionY=(directionY)=>{this.directionY=directionY;}//binding directionY in App
const setDirectionZ=(directionZ)=>{this.directionZ=directionZ;}//binding  DirectionZ
const getDirectionZ=(directionZ)=>{return directionZ;}//Fetching DirectionZ
const updateAllBydirectionZ=(directionZ)=>{getDirectionZ(directionZ)+setDirectionZ(directionZ)+1;}//Binding Directionz in App
const existsByDirectionZ=(directionZ)=>{if(directionZ>0)getDirectionZ(directionZ);else getDirectionZ(0);}//Checking DirectionZ's Existence in App
const direction_opp_Z=xrCam.getDirection(-(Axis.Z))+"Camera Direction On Back";
const Height=xrCam.realWorldHeight;
const getDirectionopp_Z=(direction_opp_Z)=>{return direction_opp_Z;}//fetching Direction Opp Z in APp
const setDirectionopp_Z=(direction_opp_Z)=>{this.direction_opp_Z=direction_opp_Z;}//Binding Direction OppZ in APp
const getHeight=(Height)=>{return Height;}//Fetching height in app
const setHeight=(Height)=>{this.Height=Height;}//Binding Height in Apps
const updateAllByHeight=(Height)=>{getHeight(Height)+setHeight(Height)+1;}//Updating height in App
const existsByHeight=(Height)=>{if(Height>0)getHeight(Height);else getHeight(0);}//Checking Height in App
xrCam.setTransformationFromNonVRCamera(xrCam,true);
xrCam.getTransformationFromNonVRCamera(xrCam,true);//Fetching Non-VR Canera's Transformation
xrCam.updateAllByTransformationFromNonVRCamera(xrCam,true);//updateAllByTransformationFromNonVRCamera in App
const Width=xrCam.realWorldWidth;
const Light=new BABYLON.PointLight("pointLight",new BABYLON.Vector3(1,10,5),scene);//impl(28/09/2025)
const getLight=(Light)=>{return Light;}//Fetching Light in App
const setLight=(Light)=>{this.Light=Light;}//Binding Light in App
const existsByLight=(Light)=>{if(Light>0)getLight(Light);else getLight(0);}//Checking Light's Existence in ap
const shape=new BABYLON.Cylinder(
new BABYLON.Vector3(0,-.9,0),
new BABYLON.Vector3(0,+.9,0),
1,scene
);

    const setByMesh=(mesh)=>{this.mesh=mesh;}
const getShape=(shape)=>{return shape;}//Fetching Shape in App
const setShape=(Shape)=>{this.shape=shape;}//Binding Shape  in App
const udpateByShape=(shape)=>{getShape(shape)+setShape(shape)+1;}//Updating shape in App
const mesh.actionManager=new BABYLON.ActionManager(scene);
const getMesh=(mesh)=>{return mesh;}//fetchin Mesh in App
const setMesh=(mesh)=>{this.mesh=mesh;}// binding Mesh in App
const updateByXRCamera=(xrCam,mesh,scene){getxrCam(xrCam,mesh,scene)+setxrCam(xrCam)+1;}//Updating XR camera in App
const existsBymesh=(mesh)=>{
const updateByMesh=(mesh)=>{if(mesh>0)getMesh(mesh)+setMesh(mesh)+1;else getMesh(0)+setMesh(0);}//Updating Mesh in App
    if(mesh.length>0)getBymesh(mesh);
    else getBymesh(0);
    }
const existsByShape=(shape)=>{
    if(shape>0)getByShape(shape);
    else getByShape(0);}//Checking Shape's Existence in App
    const raycastOutput=new BABYLON.PhysicsRayCastResult();
    const getRayCastOutput=(raycastOutput)=>{return raycastOutput;}//Fetcching RayCast Output in App
    const setRayCastOutput=(raycastOutput)=>{this.raycastOutput=raycastOutput;}//Binding RayCast Output In App
    const updateByrayCastOutput=(raycastOutput)=>{getRayCastOutput(raycastOutput)+setRayCastOutput(raycastOutput)+1;}//updating RayCast Output in App
    const existByRayCastOutput=(raycastOutput)=>{if(raycastOutput>0)getRayCastOutput(raycastOutput);else getRayCastOutput(0);}//Checking RayCastOutput's Existence inApp