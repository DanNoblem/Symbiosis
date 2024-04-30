import * as THREE from "three";
import { gsap } from "gsap";
import { createNoise4D } from "simplex-noise";
import alea from "alea";
import { getMag, limit } from "./utils";
import { Sensor } from "./sensor";

export class Orb {
  constructor(x, y, z, m, s, l, brain) {
    this.pos = new THREE.Vector3(x, y, z);
    this.vel = new THREE.Vector3();
    this.acc = new THREE.Vector3();
    this.mass = m;
    this.maxSpeed = s;
    this.maxForce = 3;
    this.sensors = [];
    this.fitness = 0;
    this.life = l;

    let totalSensors = 15;
    for (let i = 0; i < totalSensors; i++) {
      let a = gsap.utils.mapRange(0, totalSensors, 0, Math.TWO_PI, i);
      //fake sensors that follow the shape
      //find a way to wrap sensors around shape
      // let v = p5.Vector.fromAngle(a);
      // v.mult(this.fullSize * 1.5);
      // this.sensors[i] = new Sensor(v);
    }
    //Make 6 sensors for each direction
    this.sensors.push(
      new Sensor(new THREE.Vector3(this.pos.x + 10, this.pos.y, this.pos.z))
    );
    this.sensors.push(
      new Sensor(new THREE.Vector3(this.pos.x - 10, this.pos.y, this.pos.z))
    );
    this.sensors.push(
      new Sensor(new THREE.Vector3(this.pos.x, this.pos.y + 10, this.pos.z))
    );
    this.sensors.push(
      new Sensor(new THREE.Vector3(this.pos.x, this.pos.y - 10, this.pos.z))
    );
    this.sensors.push(
      new Sensor(new THREE.Vector3(this.pos.x, this.pos.y, this.pos.z + 10))
    );
    this.sensors.push(
      new Sensor(new THREE.Vector3(this.pos.x, this.pos.y, this.pos.z - 10))
    );

    if (brain) {
      this.brain = brain;
    }
  }
  // Evolution code
  reproduce() {
    //Also implemented in main
    let brain = this.brain.copy();
    brain.mutate(0.1);
    return new Orb(
      this.pos.x,
      this.pos.y,
      this.pos.z,
      this.mass,
      this.maxSpeed,
      this.life,
      brain
    );
  }

  //Eat code is in main.js can't call Arrays outside of file
  eat() {
    for (let i = 0; i < Foods.length; i++) {
      let d = this.pos.distanceTo(Foods[i].pos);
      if (d < 50) {
        this.life += 0.5;
        Foods[i].life -= 0.05;
        if (Foods[i].life < 0) {
          let r = Foods.splice(i, 1);
          scene.remove(objects[i]);
          let s = objects.splice(i, 1);
        }
      }
    }
  }

  think(food, climit) {
    // SENSOR SYSTEM
    // for (let i = 0; i < this.sensors.length; i++) {
    //   this.sensors[i].value = 0;
    //   for (let j = 0; j < food.length; j++) {
    //     this.sensors[i].sense(this.pos, food[j]);
    //   }
    // }
    // let inputs = [];
    // for (let i = 0; i < this.sensors.length; i++) {
    //   inputs[i] = this.sensors[i].value;
    // }

    // SEEK SYSTEM
    let v = new THREE.Vector3().subVectors(food.pos, this.pos);
    // Save the distance in a variable and normalize according to width (one input)
    let mag = getMag(v);
    let distance = mag / climit;
    // Normalize the vector pointing from position to target (two inputs)
    v.normalize();
    let inputs = [
      v.x,
      v.y,
      v.z,
      distance,
      this.vel.x / this.maxSpeed,
      this.vel.y / this.maxSpeed,
    ];

    const outputs = this.brain.predictSync(inputs);
    // console.log(outputs);
    let direction = new THREE.Vector3(
      outputs[0].value * 2 - 1,
      outputs[1].value * 2 - 1,
      outputs[2].value * 2 - 1
    );
    direction.multiplyScalar(outputs[3].value);

    let d = this.pos.distanceTo(food);
    if (d < 100) {
      this.fitness++;
    }
    this.steer(direction);
  }

  //Steering code

  steer(target) {
    let desired = new THREE.Vector3().subVectors(target, this.pos);
    desired.normalize();
    desired.multiplyScalar(this.maxSpeed / 2);
    let steer = new THREE.Vector3().subVectors(desired, this.vel);
    //limit(steer, this.maxForce);
    //console.log(force);

    this.applyForce(target);
  }

  applyForce(iF) {
    iF.divideScalar(this.mass);
    //console.log(iF);
    this.acc.add(iF);
  }

  update() {
    this.vel.add(this.acc);
    this.pos.add(this.vel);
    this.acc = new THREE.Vector3(0, 0, 0);
  }

  // applyBehaviors(noise3D, orb) {
  //   let followBehavior = follow(noise3D);
  //   let attractBehavior = attract(orb);

  //   followBehavior.mult(0);
  //   attractBehavior.mult(0);

  //   this.applyForce(followBehavior);
  //   this.applyForce(attractBehavior);

  // }

  follow(noise3D) {
    var x = this.pos.x * 10;
    var y = this.pos.y * 10;
    var z = this.pos.z * 10;

    //Use 2nd noise for two different angles
    // Angle 1 & Angle 2

    var angle = noise3D(x, y, z, 1);
    var angle2 = noise3D(x, y, z, 2);
    let noiseDirection = new THREE.Vector3(
      Math.cos(angle * Math.PI) * Math.sin(angle2 * Math.PI),
      Math.sin(angle * Math.PI) * Math.cos(angle2 * Math.PI),
      Math.cos(angle * Math.PI)
    );
    noiseDirection.normalize();

    // instead of applyForce
    // return noiseDirection;

    noiseDirection.divideScalar(20);
    //noiseDirection.sub(this.vel);
    this.applyForce(noiseDirection);
    //this.seek(noiseDirection);
  }

  attract(x, y, z) {
    let thing = new THREE.Vector3(x, y, z);
    let force = new THREE.Vector3().subVectors(thing, this.pos);
    let dist = this.pos.distanceTo(thing);
    //constrain
    if (dist < 100) {
      dist = 100;
    }
    if (dist > 1000) {
      dist = 500;
    }
    let g = 10;
    let power = (g * (this.mass * 20)) / (dist * dist);
    //apply force to vector
    force.normalize();
    force.multiplyScalar(power);

    // return force;
    this.steer(force);
  }

  repel(x, y, z) {
    let thing = new THREE.Vector3(x, y, z);
    let force = new THREE.Vector3().subVectors(this.pos, thing);
    let dist = this.pos.distanceTo(thing);
    //constrain
    if (dist < 100) {
      dist = 100;
    }
    if (dist > 1000) {
      dist = 500;
    }
    let g = 10;
    let power = (g * (this.mass * 20)) / (dist * dist);
    //apply force to vector
    force.normalize();
    force.multiplyScalar(power);

    // return force;
    this.steer(force);
  }

  /*
ML system: 
  Inputs: Target vector, distance, 

Inheritance:
Small probrility to reproduce - overtime it should lean more towards creatures who live longer

Increase population to speed up evolution rate

ml5.setBackend("")
ML5.predictSync()
*/

  boundaries(offset) {
    let desired = new THREE.Vector3();

    if (this.pos.x > offset) {
      desired.set(-this.maxSpeed, this.vel.y, this.vel.z);
    }
    if (this.pos.y > offset) {
      desired.set(this.vel.x, -this.maxSpeed, this.vel.z);
    }
    if (this.pos.z > offset) {
      desired.set(this.vel.x, this.vel.y, -this.maxSpeed);
    }

    if (this.pos.x < 0) {
      desired.set(this.maxSpeed, this.vel.y, this.vel.z);
    }
    if (this.pos.y < 0) {
      desired.set(this.vel.x, this.maxSpeed, this.vel.z);
    }
    if (this.pos.z < 0) {
      desired.set(this.vel.x, this.vel.y, this.maxSpeed);
    }

    this.applyForce(desired);

    // if (desired !== null) {
    //   desired.normalize();
    //   desired.multiplyScalar(this.maxSpeed);
    //   let force = new THREE.Vector3().subVectors(desired, this.vel);
    //   this.applyForce(force);
    // }
  }
}
