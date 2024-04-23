import * as THREE from "three";
import { createNoise4D } from "simplex-noise";
import alea from "alea";
import { limit } from "./utils";

export class Orb {
  constructor(x, y, z, m, s, l) {
    this.pos = new THREE.Vector3(x, y, z);
    this.vel = new THREE.Vector3();
    this.acc = new THREE.Vector3();
    this.mass = m;
    this.maxSpeed = s;
    this.maxForce = 3;
    this.life = l;

    // if (brain) {
    //   this.brain = brain;
    // } else {
    //   this.brain = ml5.neuralNetwork({
    //     inputs: this.sensors.length,
    //     outputs: 2,
    //     task: "regression",
    //     noTraining: true,
    //     //  neuroEvolution: true,
    //   });
    // }
  }
  // Evolution code
  reproduce() {
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

  eat() {
    for (let i = 0; i < food.length; i++) {
      let d = p5.Vector.dist(this.position, food[i].position);
      if (d < this.r + food[i].r) {
        this.health += 0.5;
        food[i].r -= 0.05;
        if (food[i].r < 20) {
          food[i] = new Food();
        }
      }
    }
  }

  think() {
    for (let i = 0; i < this.sensors.length; i++) {
      this.sensors[i].value = 0;
      for (let j = 0; j < food.length; j++) {
        this.sensors[i].sense(this.position, food[j]);
      }
    }
    let inputs = [];
    for (let i = 0; i < this.sensors.length; i++) {
      inputs[i] = this.sensors[i].value;
    }

    // Predicting the force to apply
    const outputs = this.brain.predictSync(inputs);
    let angle = outputs[0].value * TWO_PI;
    let magnitude = outputs[1].value;
    let force = p5.Vector.fromAngle(angle).setMag(magnitude);
    this.applyForce(force);
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
