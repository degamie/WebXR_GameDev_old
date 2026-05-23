//WID(23/5/2026)(Sarthak Mittal)(DegamieSign)
import WebXRManager from "./MainWebXR_Fixed.jsx";
const engine = new BABYLON.Engine(canvas, true);
setManager(manager){this.manager=manager;}//binding Manaeger in APP
const manager = new WebXRManager(engine);
await manager.initWebXR();
manager.loadMusicalChair();
manager.createCylinder();
manager.updateByluminicity(1.5);
engine.update();
