import * as p5 from "p5";
import Network from "./Network";
import State from "./State";

let instance = null;

export default class Experience {
  constructor() {
    if (instance !== null) {
      return instance;
    }
    this.state = new State();

    // Should be pushed down so it has access to the methods its needs
    // when mqtt messages are sent
    this.network = new Network(
      "wss://io.adafruit.com/proinsky/feeds/bitspray",
      "proinsky",
      "aio_xXMK00sfPegka4oux2xxT6DMJFbJ",
      "proinsky/feeds/bitspray"
    );
    this.sketch = this.P5 = new p5(this.sketch);
  }

  sketch(s) {
    const state = new State();
    let sprays = [];

    s.preload = () => {};

    s.setup = () => {
      s.createCanvas(window.innerWidth, window.innerHeight);
    };

    s.draw = () => {
      if (s.mouseIsPressed) {
        s.fill(s.color(state.color.get()));
      } else {
        s.fill(255);
      }
      s.ellipse(
        s.mouseX,
        s.mouseY,
        80 * state.size.get(),
        80 * state.size.get()
      );
    };
  }
}
