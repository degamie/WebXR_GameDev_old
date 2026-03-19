//WID;//Impl(19/03/2026)(By Sarthak Mittal(DegamieSign))#1.1.1.1.1.1.1.1
existsBymdlrot=(mdlRot)=>{if(mdlRot!=null)getmdlrot(mdlRot);else getmdlrot(null);}//Chekcing MdlRot's Existence in App
updateBymdlrot=(mdlRot)=>{getmdlrot(mdlRot)+setMdlrot(mdlRot)+1;}//Updating Mdlrot in App
getmdlrot=(mdlRot)=>{return mdlRot;}//Fethcing mdlROt in App
setMdlrot=(mdlRot)=>{this.mdlRot=mdlRot;}//Binding MdlRot in App
const existsByLight=(Light)=>{if(Light!==null)getLight(Light);else getLight(null);}//Checking Light in App
const setScene(scene){this.scene;}//Binding Scene
const scene=new BABYLON.scene(engine);
const getScene(scene){return scene;}
const setScene(scene){this.scene=scene;}
const updateByLight=(Light)=>{getLight(light)+setLight(light)+1;}//updating Light in App

const getLight=(Light)=>{return Lightl;}
const setLight=(Light)=>{this.Light=Light;}//Binding  Light

BABYLON.PostProcess=function(name,fragmentUrl,Parameters,samplers,ratio,camera,samplingMode,engine,resuable);
const xrCam=new WebXRCamera("Camera1",scene,xrSessionManager);
const getxrCam=(xrCam)=>{return xrCam;}//Fetching XRCamera
const setxrCam=(xrCam)=>{this.xrCam=xrCam;}//Binding XRCamera in App
const directionX=xrCam.getDirection(Axis.X)+"Camera Direction On Right";//
const directionY=xrCam.getDirection(Axis.Y)+"Camera Direction On Left";//Impl(26/09/2025)
const directionZ=xrCam.getDirection(Axis.Z)+"Camera Direction in Front";
const getWidth=(width)=>{return width;}//printing Width
const setWidth=(width)=>{return width;}//Binding Width in It
const updateAllByWidth=(width)=>{getWidth+setWidth+1;}//Updating All Width in Server

const mdlLoader=(mdlLoader)=>{ThreeJs.ModelLoader("WebXR_GameDev/Musical_Chair_WebXr/src/Musica_Chair,fbx");}//Inserting Musical Chair in WebXR GameDev App
const getMdlLoader=(mdlLoader)=>{return mdlLoader;}//Fetching MdlLoader in Apps

const getDirectionX(directionX){return directionX;}//Fetching DirX
const setDirectionX=(directionX)=>{this.directionX;}//Binding DirXt
const setDirectionY=(directionY)=>{this.directionY=directionY;}//Binding  Yth Direction in WEBXR
const getDirectionY=(directionY)=>{return directionY;}//Fetching DirectionY in App
const setDirectionZ=(directionZ)=>{this.directionZ=directionZ;}//binding  DirectionZ
const getDirectionZ=(directionZ)=>{return directionZ;}//Fetching DirectionZ
const direction_opp_Z=xrCam.getDirection(-(Axis.Z))+"Camera Direction On Back";
const Height=xrCam.realWorldHeight;
const getHeight=(Height)=>{return Height;}//Fetching height in app
const setHeight=(Height)=>{this.Height=Height;}//Binding Height in Apps
xrCam.setTransformationFromNonVRCamera(xrCam,true);
xrCam.getTransformationFromNonVRCamera(xrCam,true);//Fetching Non-VR Canera's Transformation
const Width=xrCam.realWorldWidth;

const Light=new BABYLON.PointLight("pointLight",new BABYLON.Vector3(1,10,5),scene);//impl(28/09/2025)

const shape=new BABYLON.Cylinder(
new BABYLON.Vector3(0,-.9,0),
new BABYLON.Vector3(0,+.9,0),
1,scene
);
const mesh.actionManager=new BABYLON.ActionManager(scene);
const raycastOutput=new BABYLON.PhysicsRayCastResult();
const headNode=new BABYLON.TransformNode("headNode");
