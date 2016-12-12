var a = 20;
var sat = 0;
var traccia = 0;
var lum;
var lumdue;
var lumtre;
var lumquat;


function setup() {
  createCanvas(windowWidth, windowHeight);
  colorMode(HSB, 100);
  frameRate(5);


}

function () {

if (sat == 0) {
    sat = 70;
  } else if (sat == 70){
    sat = 0;
  };
}

function deviceTurned() {
    if (traccia == 0){
        traccia = 2;
    }else if(traccia == 2){
        traccia = 0;
    }
    
    if (lum != 0 ) {
        lum = 0;
    } else if (lum == 0) {
        lum = random() * 100 + 30;
    }
    
    if (lumdue != 0 ) {
        lumdue = 0;
    } else if (lumdue == 0) {
        lumdue = random() * 100 + 30;
    }
    
    if (lumtre != 0 ) {
        lumtre = 0;
    } else if (lumtre == 0) {
        lumtre = random() * 100 + 30;
    }
    
    if (lumquat != 0 ) {
        lumquattro = 0;
    } else if (lumquat == 0) {
        lumquat = random() * 100 + 30;
    }
    
}
    
function draw() {

    // ciclo griglia triangoli a testa in giù
  for (var x = 0; x < windowWidth; x += 20) {
    for (var y = 0; y < windowHeight; y += 40) {

        strokeWeight(traccia);


      // triangoli testa in giù - 1
      var hue = 100 * random() + 25;

      fill(hue, sat, lum);
        
      beginShape();
      vertex(x, y);
      vertex(x + a, y);
      vertex(x + a / 2, y + a);
      endShape(CLOSE);

      // triangoli testa in giù - 2
      var huedue = 100 * random() + 15;

      fill(huedue, sat, lumdue);

      beginShape();
      vertex(x - a / 2, y + a);
      vertex(x + a / 2, y + a);
      vertex(x, y + 2 * a);
      endShape(CLOSE);
    };
  };

  // ciclo griglia triangoli a testa in su
  for (var x2 = -20; x2 < windowWidth; x2 += 20) {
    for (var y2 = 0; y2 < windowHeight; y2 += (20) * 2) {



      // triangoli testa in su - 1
      var huetre = 100 * random() + 35;

      fill(huetre, sat, lumtre);

      beginShape();
      vertex(x2, y2);
      vertex(x2 + a / 2, y2 + a);
      vertex(x2 - a / 2, y2 + a);
      endShape(CLOSE);

      // triangoli testa in su - 2
      var huequat = 100 * random() + 15;

      fill(huequat, sat, lumquat);


      beginShape();
      vertex(x2, y2);
      vertex(x2 + a / 2, y2 - a);
      vertex(x2 + a, y2);
      endShape(CLOSE);
    };
  };
  
}