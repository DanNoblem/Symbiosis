import * as THREE from "three";

export class Food {
  constructor(x, y, z, t, l) {
    this.pos = new THREE.Vector3(x, y, z);
    this.type = t;
    this.life = l;
  }
}
