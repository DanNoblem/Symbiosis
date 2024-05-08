import p5 from "p5";

export let LightX, LightY;

let webcam;

// we need a p5 instance in order to use createGraphics, but we don't need any default display canvas
let p5Inst = new p5((p) => {
  p.setup = () => {
    p.createCanvas(640, 480);
    webcam = p.createCapture(p.VIDEO);
    webcam.hide();
    p.pixelDensity(1);
  };

  p.draw = () => {
    let worldRecord = 0;
    let trackingX = [];
    let trackingY = [];

    webcam.loadPixels();

    for (let y = 0; y < p.height; y++) {
      for (let x = 0; x < p.width; x++) {
        let loc = (y * p.width + x) * 4;
        let r = webcam.pixels[loc + 0];
        let g = webcam.pixels[loc + 1];
        let b = webcam.pixels[loc + 2];
        let a = webcam.pixels[loc + 3];
        let br = (r + g + b) / 3;
        if (br > 250) {
          worldRecord = br;
          trackingX.push(x);
          trackingY.push(y);
        }
      }
    }

    let prevX = [];
    let prevY = [];
    prevX.push(trackingX[0]);
    prevY.push(trackingY[0]);

    for (let i = 0; i < trackingX.length; i++) {
      if (trackingX[i] > prevX[prevX.length - 1] + 10) {
        prevX.push(trackingX[i]);
        prevY.push(trackingY[i]);
      }
      if (trackingY[i] > prevY[prevY.length - 1] + 10) {
        prevY.push(trackingY[i]);
        prevX.push(trackingX[i]);
      }
    }
    LightX = prevX;
    LightY = prevY;
  };
});
