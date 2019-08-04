function setup() {
  // var dim = Math.min(window.innerWidth, window.innerHeight);
  createCanvas(window.innerWidth, window.innerHeight);
  background(255);

  cursor(CROSS);
}

function draw() {
  loadPixels();
  for (var y = 0; y < height; y++) {
    for (var x = 0; x < width; x++) {
      var index = (x + y * width) * 4;
      var rgba = [255 * (y - height / 2) * (x - width / 2) / (width * height),
      255 * (mouseX - width / 2) * (x - width / 2) / (width ** 2),
      255 * (mouseY - height / 2) * (y - height / 2) / (height ** 2), 255];

      for (var i = 0; i < 4; i++) {
        pixels[index + i] = rgba[i];
      }
    }
  }
  updatePixels();
}