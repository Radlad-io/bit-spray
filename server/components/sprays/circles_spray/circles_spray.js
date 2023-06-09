export default class Circles {
  constructor(s) {
    this.s = s;
    this.name = "Circles";
    this.sizeOffset = 200;
    this.layer;
  }
  preload() {}
  setup(layerIndex) {
    this.setLayer(layerIndex);
  }
  setLayer(layer) {
    this.layer = layer;
    console.log(layer);
    console.log(this.layer);
  }
  draw(size, color) {
    this.layer.noStroke();
    this.layer.fill(color);
    if (this.s.touches.length > 0) {
      this.s.touches.map((touch) => {
        this.layer.ellipse(
          touch.x,
          touch.y,
          size * this.sizeOffset,
          size * this.sizeOffset
        );
      });
    } else if (this.s.mouseIsPressed) {
      this.layer.ellipse(
        this.s.mouseX,
        this.s.mouseY,
        size * this.sizeOffset,
        size * this.sizeOffset
      );
    }
    this.s.image(this.layer, 0, 0);
  }

  clear() {
    this.layer.clear();
  }
}
