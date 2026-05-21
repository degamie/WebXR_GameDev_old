import WebXRManager from "./MainWebXR_Fixed.jsx";
const engine = new BABYLON.Engine(canvas, true);
const manager = new WebXRManager(engine);
await manager.initWebXR();
manager.loadMusicalChair();
manager.createCylinder();
manager.updateByluminicity(1.5);
engine.update();
