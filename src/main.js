import { Orb } from "./floater.js";
import { Food } from "./food.js";
import { getMag, limit } from "./utils.js";

import * as THREE from "three";
import "./style.css";
import { OrbitControls } from "three/addons/controls/OrbitControls";
import { DragControls } from "three/addons/controls/DragControls.js";

import { EffectComposer } from "three/examples/jsm/postprocessing/EffectComposer";
import { RenderPass } from "three/examples/jsm/postprocessing/RenderPass";
import { AfterimagePass } from "three/examples/jsm/postprocessing/AfterimagePass";

import { TrailRenderer } from "./TrailRenderer.js";
import { createNoise4D } from "simplex-noise";

import * as Tone from "tone";
import { gsap } from "gsap";
import GUI from "lil-gui";
import alea from "alea";

/* 
SETUP //////////////////////////////////////////////////////////////////////////////
*/

let objects = [];
let climit = 500;

// app
const app = document.querySelector("#app");

//renderer
const renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.setPixelRatio(window.devicePixelRatio);
renderer.setSize(window.innerWidth, window.innerHeight);
app.appendChild(renderer.domElement);
document.body.appendChild(renderer.domElement);

// scene
const scene = new THREE.Scene();
scene.background = new THREE.Color("#5BB2F0");

// perspective camera
const camera = new THREE.PerspectiveCamera(
  35,
  window.innerWidth / window.innerHeight,
  1,
  1000
);
camera.position.set(200, 150, 200);

// axis helper -> X: red, Y: green, Z: blue
// const axesHelper = new THREE.AxesHelper(5);
// axesHelper.position.y = 0.001;
// scene.add(axesHelper);

// light
const ambientLight = new THREE.AmbientLight("white", 0.2);
const hemisphereLight = new THREE.HemisphereLight("#ffffff", "#ff00ff", 0.8);
const directionalLight = new THREE.DirectionalLight("white", 0.8);
directionalLight.position.set(-1, 1, 1);
scene.add(ambientLight, hemisphereLight);

// control
const orbitControls = new OrbitControls(camera, renderer.domElement);
orbitControls.enableDamping = true;
orbitControls.dampingFactor = 0.05;
orbitControls.screenSpacePanning = false;
orbitControls.enableRotate = true;
orbitControls.rotateSpeed = 0.5;
orbitControls.enableZoom = true;
orbitControls.zoomSpeed = 0.5;
orbitControls.minDistance = 100;
orbitControls.maxDistance = 10000;
orbitControls.target = new THREE.Vector3(0, 0, 0);
orbitControls.autoRotate = true;
//const dragControls = new DragControls(objects, camera, renderer.domElement);

// //Disbale orbitControl when dragControl is activated
// dragControls.addEventListener("dragstart", function () {
//   orbitControls.enabled = false;
// });
// dragControls.addEventListener("dragend", function () {
//   orbitControls.enabled = true;
// });

// resize
const onResize = () => {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
};

window.addEventListener("resize", onResize);

/*
SOUND ////////////////////////////////////////////////////////////////////////////////////////////////////////
*/
window.addEventListener("keydown", async () => {
  await Tone.start();
  console.log("audio is ready");
});

const ampEnv = new Tone.AmplitudeEnvelope({
  attack: 0.1,
  decay: 0.1,
  sustain: 0.1,
  release: 0.2,
}).toDestination();

//const osc = new Tone.Oscillator().connect(ampEnv).start();

// const fatOsc = new Tone.OmniOscillator().connect(ampEnv).start();
// fatOsc.type = "fatsawtooth";
// fatOsc.detune.value = 20;

// const onmiOsc = new Tone.OmniOscillator().connect(ampEnv).start();
// onmiOsc.type = "sine";

// const synth = new Tone.Synth({
//   oscillator: {
//     type: "fatsawtooth",
//   },
//   envelope: {
//     attack: 0.1,
//     decay: 0.1,
//     sustain: 0.1,
//     release: 0.2,
//   },
// });

const polySynth = new Tone.PolySynth({
  oscillator: {
    type: "fatsawtooth",
  },
  envelope: {
    attack: 0.1,
    decay: 0.1,
    sustain: 0.1,
    release: 0.2,
  },
}).toDestination();
polySynth.volume.value = -6;

const polySynth2 = new Tone.PolySynth({
  oscillator: {
    type: "sine",
  },
  envelope: {
    attack: 0.1,
    decay: 0.1,
    sustain: 0.1,
    release: 0.2,
  },
});
polySynth2.volume.value = -6;

const env = new Tone.Envelope({
  attack: 0,
  decay: 0.2,
  decayCurve: "exponential",
  sustain: 0.1,
  release: 0.2,
}).toDestination();

const loopA = new Tone.Loop((time) => {
  polySynth.triggerAttackRelease(["D3", "F#3", "A3", "C#4", "E4"], "8n", time);
  polySynth2.triggerAttackRelease(
    ["D3", "F#3", "A3", "C#4", "E4"],
    "8t",
    time + 2
  );
}, "4n").start(0);

Tone.Transport.start();

// trigger the envelopes attack and release "8t" apart

/*
4 parameter - attack (how ling it takes to hear the note upon triger), 
decay - curve of quiet fade
sustain - how long the note stays played when hit
, release - what happens after you let go of the note
*/

//Chord ["D3", "F#3", "A3", "C#4", "E4"];

/*
GUI ////////////////////////////////////////////////////////////////////////////////////////
*/
// Create debug GUI.
const gui = new GUI();
let obj = { type: 3 };
gui.add(obj, "type", { Attract: 1, Repel: 2, Spawn: 3 });

/* 
DRAWING//////////////////////////////////////////////////////////////////////////////
*/

///Food Spawner information
const mouse = new THREE.Vector2();
const intersectionPoint = new THREE.Vector3();
const planeNormal = new THREE.Vector3();
const plane = new THREE.Plane();
const raycaster = new THREE.Raycaster();
let Foods = [];

window.addEventListener("click", function (e) {
  //Sound testing
  polySynth.triggerAttackRelease(["D4", "F#4", "A4", "C#5", "E5"], "8t");
  polySynth2.triggerAttackRelease(["D4", "F#4", "A4", "C#5", "E5"], "8t");

  //Actual code
  mouse.x = (e.clientX / window.innerWidth) * 2 - 1;
  mouse.y = -(e.clientY / window.innerHeight) * 2 + 1;
  planeNormal.copy(camera.position).normalize();
  plane.setFromNormalAndCoplanarPoint(planeNormal, scene.position);
  raycaster.setFromCamera(mouse, camera);
  raycaster.ray.intersectPlane(plane, intersectionPoint);
  const sphereMesh = new THREE.Mesh(
    new THREE.SphereGeometry(2, 30, 30),
    new THREE.MeshStandardMaterial({
      color: 0x64e986,
      metalness: 0,
      roughness: 0,
    })
  );
  objects.push(sphereMesh);
  scene.add(sphereMesh);
  let food = new Food(
    intersectionPoint.x,
    intersectionPoint.y,
    intersectionPoint.z,
    obj.type,
    500
  );
  Foods.push(food);

  sphereMesh.position.copy(intersectionPoint);
});

//Sphere rendering properties
const sphereMaterial = new THREE.MeshToonMaterial({ color: "#FF9843" });
// sphereMaterial.transparent = true;
// sphereMaterial.opacity = 0;
const sphereGeometry = new THREE.SphereGeometry(0.5, 64, 64);
//const sphereGeometry = new THREE.BoxGeometry(1, 1, 1);

let balls = [];
let fish = [];

//Trail Information
let trails = [];
const trailHeadGeometry = [];

//create spheres
function newOrb(i, x, y, z) {
  fish[i] = new Orb(
    gsap.utils.mapRange(0, 1, x - 10, x + 10, Math.random()),
    gsap.utils.mapRange(0, 1, y - 10, y + 10, Math.random()),
    gsap.utils.mapRange(0, 1, z - 10, z + 10, Math.random()),
    Math.random() * 5, //Mass
    1, //maxSpeed
    800 + gsap.utils.mapRange(0, 1, 50, 500, Math.random()) //lifetime
  );
  balls[i] = new THREE.Mesh(sphereGeometry, sphereMaterial);
  //scene.add(balls[i]);

  //////// Create Trail
  // specify points to create planar trail-head geometry
  trailHeadGeometry.push(
    new THREE.Vector3(-1.0, 0.0, 0.0),
    new THREE.Vector3(1.0, 0.0, 0.0),
    new THREE.Vector3(1.0, 0.0, 0.0)
  );

  newTrail(i);
}
function newTrail(i) {
  // create the trail renderer object
  trails[i] = new TrailRenderer(scene, false);

  // set how often a new trail node will be added and existing nodes will be updated
  trails[i].setAdvanceFrequency(200);

  // create material for the trail renderer
  const trailMaterial = TrailRenderer.createBaseMaterial();

  // specify length of trail
  const trailLength = 30;

  // initialize the trail
  trails[i].initialize(
    trailMaterial,
    trailLength,
    false,
    2,
    trailHeadGeometry,
    balls[i]
  );

  // activate the trail
  trailMaterial.uniforms.headColor.value.set(
    1,
    0.596078431372549,
    0.2627450980392157,
    1
  ); //FF9843
  trailMaterial.uniforms.tailColor.value.set(
    1,
    0.8666666666666667,
    0.5843137254901961,
    1
  ); //FF9843
  trails[i].activate();
}

/*
SHADER CODE ///////////////////////////
*/

// Create effect composer.
const effectComposer = new EffectComposer(renderer);
effectComposer.setSize(window.innerWidth, window.innerHeight);

// Add render passes.
const renderPass = new RenderPass(scene, camera);
effectComposer.addPass(renderPass);

// const afterimagePass = new AfterimagePass();
// effectComposer.addPass(afterimagePass);

//animation

//Reposition self if position is too high and move somewhere else

let noise4D = createNoise4D();

let center = new THREE.Vector3(climit, climit, climit);

//testing
// for (let i = 0; i < 100; i++) {
//   newOrb(i, Math.random(), Math.random(), Math.random());
// }

const animate = () => {
  requestAnimationFrame(animate);

  for (let h = 0; h < Foods.length; h++) {
    Foods[h].life--;
  }
  //Spawner
  for (let i = 0; i < Foods.length; i++) {
    if (Foods[i].type == 3) {
      let c = fish.length;
      for (let h = 0; h < 20; h++) {
        newOrb(c + h, Foods[i].pos.x, Foods[i].pos.y, Foods[i].pos.z);
      }
      let r = Foods.splice(i, 1);
      scene.remove(objects[i]);
      let s = objects.splice(i, 1);
    }
  }

  for (let i = 0; i < fish.length; i++) {
    if (Foods.length > 0) {
      for (let h = 0; h < Foods.length; h++) {
        //Attractor
        if (Foods[h].type == 1) {
          fish[i].attract(Foods[h].pos.x, Foods[h].pos.y, Foods[h].pos.z);
          Foods[h].pos = objects[h].position;
        }
        if (Foods[h].type == 2) {
          fish[i].repel(Foods[h].pos.x, Foods[h].pos.y, Foods[h].pos.z);
          Foods[h].pos = objects[h].position;
        }
        if (Foods[h].life < 0) {
          let r = Foods.splice(h, 1);
          scene.remove(objects[h]);
          let s = objects.splice(h, 1);
        }
      }
    } else {
      fish[i].follow(noise4D);
    }
    // fish[i].applyBehaviors(Foods, noise4D);

    //Create boundary
    //fish[i].boundaries(climit);

    if (fish[i].pos.x > climit / 2) {
      fish[i].pos.x = -climit / 2;
      trails[i].deactivate();
      newTrail(i);
    }
    if (fish[i].pos.y > climit / 2) {
      fish[i].pos.y = -climit / 2;
      trails[i].deactivate();
      newTrail(i);
    }
    if (fish[i].pos.z > climit / 2) {
      fish[i].pos.z = -climit / 2;
      trails[i].deactivate();
      newTrail(i);
    }

    if (fish[i].pos.x < -climit / 2) {
      fish[i].pos.x = climit / 2;
      trails[i].deactivate();
      newTrail(i);
    }
    if (fish[i].pos.y < -climit / 2) {
      fish[i].pos.y = climit / 2;
      trails[i].deactivate();
      newTrail(i);
    }
    if (fish[i].pos.z < -climit / 2) {
      fish[i].pos.z = climit / 2;
      trails[i].deactivate();
      newTrail(i);
    }

    //force field around the area
    //caculate surface of the circle and redirect if moving towards the edge
    // if (fish[i].pos.distanceTo(center) > climit) {
    // }

    //Limit velocity
    fish[i].vel = limit(fish[i].vel, fish[i].maxSpeed);
    fish[i].update();

    balls[i].position.set(fish[i].pos.x, fish[i].pos.y, fish[i].pos.z);
    trails[i].update();

    fish[i].life--;
    if (fish[i].life <= 0) {
      scene.remove(balls[i]);
      let s = fish.splice(i, 1);
      let q = balls.splice(i, 1);
      trails[i].deactivate();
      let r = trails.splice(i, 1);
    }
  }
  effectComposer.render();
  orbitControls.update();
};

animate();

function onWindowResize() {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();

  renderer.setSize(window.innerWidth, window.innerHeight);
  composer.setSize(window.innerWidth, window.innerHeight);
}
//Instance rendering
//Instanced geometry

//GUI
// const gui = new GUI();
// gui.add(document, "title");
