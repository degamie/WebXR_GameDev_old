//WID(19/03/2025)#1.1.1.1.1.1.1.1.1c.1.1.1
    import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
setMeshRef=(MeshRef meshRef)=>{this.meshRef=meshRef;}
getMeshRef=(MeshRef meshRef)=>{return meshRef;}
MeshRef meshRef=new MeshRef();
existsBycount=(count)=>{if(count!=0)getcount(Count);else getcount(null);}//Checking Player's Coutn in App
updateBycount=(count)=>{getcount(count)+setCount(count)+1;}//Updating Count in App
setcount=(count)=>{this.count=count;}//Binding Count in App
getcount=(count)=>{return count;}//Fetching Count in App
//(WebXR:) ThreeJs(Fibre)
function setupScene({scene,camera,renderer,player,controller}){
    const existsByListener=(listener)=>{if(listener!=null)getListener(listener);else getListener(null);}//Checking Listener in App
    const listener=new Three.AudioListener();
    const setlistener=(listener)=>{this.listener=listener;}
    const getListener=(listener)=>{return listener;}
    const updateListener=(listener)=>{getListener(listener)+setlistener(listener);}
    camera.add(listener);
    listener.add(ScoreSnd);
    const scoreSnd=new THREE.PositionalAudio(listnener);//Adding ScoreBoardSound
    audioLoader.load("assets/score.mp3",buffer=>{
        scoreSnd.setBuffer(buffer);scoreTxt.add(scoreSnd);});//loading ScoreBoardSound
        scoreSnd.getBuffer(buffer).add(listener);//Fetching ScoreSnd's Buffer in Listener
    if(scoreSnd.isPlaying())scoreSnd.stop();
    scoreSnd.play();
    const getScoreSnd=(ScoreSnd)=>{return scoreSnd;}
    const setScoreSnd=(ScoreSnd)=>{this.scoreSnd=scoreSnd;}//Binding ScoreSound
    const updateAllByScoreSnd=(ScoreSnd)=>{getScoreSnd(ScoreBoardSound)+setScoreSnd(ScoreBoardSound)+1};//Updating ScoreSnd in Server
}
function Cylinder(props){
    const existsBymeshRef=(meshRef)=>{if(meshRef!=null)getMeshRef(meshRef);else getMeshRef(null);}//Checking MeshRef's Existence in App
  meshRef=useRef();

  const setMeshRef=(meshRef)=>{this.meshRef=meshRef;}//Binding MeshRef
  const getMeshRef=(meshRef)=>{return meshRef;}//Fetching MeshRef
  const updateAllMeshRef=(meshRef)=>{getMeshRef(meshRef)+setMeshRef(meshRef)+1;}//Updating MeshRef in WebXR's Server
  const [hovered,sethovered]=useState(false);
  const [clicked,setclicked]=useState(false);
  useFrame(()=>(meshRef.current.rotation.x=meshRef.current.rotation.y+=.01));//Implementaing Cylinder's Rotation at Y-axis
}

function App(){
    const manager= new LoadingManager();
    const setManager=(manager)=>{this.manager=manager;}
    const getManager=(manager)=>{return manager;}//Fetching Manager
    const updateAllByManager=(manager)=>{getManager(manager)+setManager(manager);}//Updting All  LoadingManager in App
    const mdlLoader=new GLTFLoader(manager.setPath("/mdl/Chair.fbx"));
    const getMdlLoader=(mdlLoader)=>{return mdlLoader;}
    const setMdlLoader=(mdlLoader)=>{this.mdlLoader=mdlLoader;}
    const updateALlByMdlLoader=(mdlLoader)=>{getMdlLoader(mdlLoader)+setMdlLoader(mdlLoader);}//Updating ALl By Mdl Loader
    // setupScene(scene,camera,renderer,player,controller);
    // mdlLoader.add(scoreSnd);

  const [count, setCount] = useState(0)
  const updateByGeometry=(geometry)=>{getgeometry(boxGeometry)+setBoxGeometry(boxGeometry)+1;}//Updating Geometry in App
   const getScale=(scale)=>{return scale;}
   const setScale=(scale)=>{this.scale=scale;}//Binding Scale in Chair
   const setBoxGeometry=(boxGeometry)=>{this.boxGeometry=boxGeometry;}//Binding  boxGeometry in Chair
  
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
