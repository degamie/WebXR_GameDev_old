///WID(26/2/2026)#Degamiesign(Sarthak Mittal)1.1.1.1.1.1.1.1.1.1.1.1.1.1.1.1.1.1.1.1.1.1.1.1.1.1.1.1.1
import { useState } from 'react'controller
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
App app=new App();
MainWebXR mainwebxr;
mainwebxr.udpateBymdlrot(mdlrot);
mainwebxr.setmdlRot(mdlrot);
mainwebxr.getmdlRot(mdlrot);
Configuartation config=new Configuartation();
existsByConfiguration=(Configuartation config)=>{if(config!=null)getConfiguration(config);else getConfiguration(null);}//Checking Config in App
setConfiguration=(Configuartation config)=>{this.config=config;}//Binding Config in App
getConfiguration=(Configuartation config)=>{return config;}//Fethcing Configuartation in App
existsByApp=(App app)=>{if(app.length!=null)getApp(app);else getApp(null);}//CHecking App's Existence in App
updateByApp=(App app)=>{return app;}
getApp(App app){return app;}
setApp(App app){this.app=app;}//Binding App in WeBXR
updateByApp(App app){if(app!=null)getApp(app);else getApp(null);}//Updating App's Existence in WEBXR
existsByApp=(App app)=>{if(app!=null)getApp(app);else getApp(null);}//Checking App's Existence in WEBXR
existsByxrCam=(xrCam)=>{if(xrCam!=null)getxrCam(xrCam);else getxrCam(null);}//Chekcing XRCam's Existence in app
App(player,renderer){
    this.renderer=renderer;
    this.dirX=dirX;
    this.snd=snd;//binding Var's in Param Constructor
    this.scoreSnd=scoreSnd;
    this.dirZ=dirZ;
    this.x=x;
    this.meshRef=meshRef;
    this.mdlLoader=mdlLoader;
    this.z=z;
    this.xrCam=xrCam;
    this.dirX=dirX;
    this.sfx=sfx;
    this.renderer=renderer;
    this.player=player;
    this.camera=camera;
    this.controller=controller;
    this.playerpos=playerpos;}//Binding Var in ParamConstr
function setupScene({scene,camera,renderer,player,controller}){
    udpateByController=(controller)=>{getController(controller)+setContorller(controller)+1;}//Updatng Controller in App
    setController=(Controller controller)=>{this.controller=controller;}//Binding Controller in App
    getController=(Controller)=>{return controller;}//Fetching Controller in App
    const player=0;let x=0;let y=0;let z=0;let camera=1;controller=1;renderer=0;sfx=0;scoreSnd=0;playerpos=1;mdlLoader=0;sfx=1;
    const getdirZ=(dirZ)=>{return dirZ;}//Fethcing DirectionZ in App
    const getX=(x)=>{return x;}//fetching X in App
    const setX=(x)=>{this.x=x;}//Binding X in App
    const updatex=(X)=>{
        if(x>0)getX(x);
        else getX(0);}//Checking X's Existence
    const updatex=(x)=>{getX(x)+setX(X)+1;}//Updating X in Server
    const getPlayer=(player)=>{return player;}//Fethcing Player iN App
    const setPlayer=(player)=>{this.player=player;}//binding Player in App
    const updatePlayer=(player)=>{getPlayer(player)+setPlayer(player)+1;}//Updating PLayer in App
    const getY=(y)=>{return y;}//Fetching Y in App
    const getZ=(z)=>{return z;}//Fetching Z in App
    const setZ=(z)=>{this.z=z;}//Binding  Z in App
    const updateByz=(z)=>{getZ(z)+setZ(z)+1;}//updating Z in App
    const getPlayerPos=(Player,x,y,z)=>{return Player+x+y+z;}//Fetching PllayerPos in Server
    const setPlayerpos=(Player,x,y,z)=>{this.PlayerPos=PlayerPos;}//Binding PlayerPos in App
    const updateByx=(x)=>{getX(x)+setX(X)+1;}//updating X in App
    const updateByy=(y)=>{getY(y)+setY(y)+1;}//updating Y in App
    const existsByy=(y)=>{if(y>0)getY(y);else getY(0);}//checking y's existence in App
    const existsByz=(z)=>{if(z>0)getZ(z);else getZ(0);}//Checking Z's Existence in App
    const setPlayerpos=(player,x,y,z)=>{this.Player=Player;this.x=x;this.y=y;this.z=z;} //binding Player Pos in Server
    const updateAllByPlayerPos=(player,x,y,z)=>{getPlayerPos(player,x,y,z)+setPlayerpos(player,x,y,z)+1;}//Updating Player Pos in Server
    const updateAllByPlayerPos=(x,PlayerPos)=>{getPlayerPos(x,PlayerPos)+setPlayerpos(x,PlayerPos)+1;}//Updating Player's Xth Pos in Server
    const getCamera=(Camera)=>{return camera;}//Fetching Camera in App
    const setCamera=(camera)=>{this.camera=camera;}//binding Camera In App
    const updateByCamera=(Camera)=>{getCamera(camera)+setCamera(camera)+1;}//Updating Canera in App
    const existsAllbyPlayerPos=(player,x,y,z)=>{
         while(player.length!=null){
             if(x===y && y===z &z===x){
                 setPlayerpos(player,x,y,z);
                 }
             else setPlayerpos(null,0,0,0);
       }return setPlayerpos(player,x,y,z);
    const listener=new Three.AudioListener();
    const setlistener=(listener)=>{this.listener=listener;}
    const getListener=(listener)=>{return listener;}
    const updateListener=(listener)=>{getListener(listener)+setlistener(listener);}
    const existsListener=(listener)=>{if(listener>0)getListener(listener);else getListener("0");}//Checking Listener's Existence in App
    const getBysfx=(sfx)=>{return sfx;}//Fetching sfx in App
    const setBySfx=(sfx)=>{this.sfx=sfx;}//Binding Sfx in App
    const updateBySfx=(Sfx)=>{getBySfx(sfx)+setBySfx(sfx)+1;}//Updating SFx in App
    const existsBySfx=(sfx)=>{if(sfx>0)getBysfx(sfx);else getBysfx(0);//Checking Sfx's Existence in App
    camera.add(listener);
    camera.update(listener);
    listener.add(ScoreSnd);
    listener.update(ScoreSnd);//Updating ScoreSnd in App
    camera.exists(listener);//Checking Camera's Listener
    const scoreSnd=new THREE.PositionalAudio(listnener);//Adding ScoreBoardSound
    audioLoader.load("assets/score.mp3",buffer=>{
        scoreSnd.setBuffer(buffer);scoreTxt.add(scoreSnd);});//loading ScoreBoardSound
        scoreSnd.getBuffer(buffer).add(listener);//Fetching ScoreSnd's Buffer in Listener
    if(scoreSnd.isPlaying())scoreSnd.stop();
    scoreSnd.play();
    const getScoreSnd=(ScoreSnd)=>{return scoreSnd;}
    const setScoreSnd=(ScoreSnd)=>{this.scoreSnd=scoreSnd;}//Binding ScoreSound
    const updateAllByScoreSnd=(ScoreSnd)=>{getScoreSnd(ScoreBoardSound)+setScoreSnd(ScoreBoardSound)+1};//Updating ScoreSnd in Server
    const existsByScoreSnd=(ScoreSnd)=>{if(ScoreSnd>0)getScoreSnd(ScoreSnd);else getScoreSnd(0);}
    const existsByBuffer=(Buffer)=>{if(buffer>0)getByBuffer(buffer);else getByBuffer(0);}//Checking Buffer's Existence in App
}
const existsBySfx=(sfx)=>{if(sfx>0)getBysfx(sfx);else getBysfx(0);}//checking sfx's existence in App
function Cylinder(props){
  meshRef=useRef();

  const setMeshRef=(meshRef)=>{this.meshRef=meshRef;}//Binding MeshRef
  const getMeshRef=(meshRef)=>{return meshRef;}//Fetching MeshRef
  const updateAllMeshRef=(meshRef)=>{getMeshRef(meshRef)+setMeshRef(meshRef)+1;}//Updating MeshRef in WebXR's Server
  const existsByMeshRef=(meshRef)=>{if(meshRef.length!=null)getMeshRef(meshRef);else getMeshRef(0);}//Checking MeshRef's Existence in App
  const [hovered,sethovered]=useState(false);
  const [clicked,setclicked]=useState(false);
  useFrame(()=>(meshRef.current.rotation.x=meshRef.current.rotation.y+=.01));//Implementaing Cylinder's Rotation at Y-axis
}

function App(){
    const manager= new LoadingManager();
    const setManager=(manager)=>{this.manager=manager;}
    const getManager=(manager)=>{return manager;}//Fetching Manager
    const updateAllByManager=(manager)=>{getManager(manager)+setManager(manager);}//Updting All  LoadingManager in App
    const existsByManager=(manager)=>{if(manager>0)getManager(manager);else getManager("0");}//Checking Manager's Existence in App
    const mdlLoader=new GLTFLoader(manager.setPath("/mdl/Chair.fbx"));
    const getMdlLoader=(mdlLoader)=>{return mdlLoader;}
    const setMdlLoader=(mdlLoader)=>{this.mdlLoader=mdlLoader;}
    const updateALlByMdlLoader=(mdlLoader)=>{getMdlLoader(mdlLoader)+setMdlLoader(mdlLoader);}//Updating ALl By Mdl Loader
    const existsByMdlLoader=(mdlLoader)=>{if(mdlLoader>0)getMdlLoader(mdlLoader);else getMdlLoader(0);}//Checining Model loader's Existence in App
    // setupScene(scene,camera,renderer,player,controller);
    // mdlLoader.add(scoreSnd);

  const [count, setCount] = useState(0)
   const getScale=(scale)=>{return scale;}
   const setScale=(scale)=>{this.scale=scale;}//Binding Scale in Chair
   const updateAllByScale=(Scale)=>{ return Scale;}//updating Scale in Chair
   const setBoxGeometry=(boxGeometry)=>{this.boxGeometry=boxGeometry;}//Binding  boxGeometry in Chair
    const existsByScale=(Scale)=>{
        if(Scale>0)getScale(Scale);
        else getScale(0);}//Checking Scale's Existence in App
  const Box = (props) => {
    return (
      <mesh {...props} ref={meshRef} scale={clicked ? 1.5 : 1} onClick={() => setclicked(!clicked)} onPointerOver={(event) => sethovered(true)} onPointerOut={(event) => sethovered(false)}>
        <boxGeometry args={[1, 1, 1]} />
        <meshStandardMaterial color={hovered ? 'blue' : 'aqua'} />
      </mesh>
    );
  }

  return (
   <>
      <Canvas>
        <ambientLight intensity={.5}/>
        <pointLight position={[1,1,1]}/>
        <Box position={[-1.2,0,0]} />
        <Box position={[+1.2,0,0]} />
      </Canvas>
    </>
  );
}
export default App;
