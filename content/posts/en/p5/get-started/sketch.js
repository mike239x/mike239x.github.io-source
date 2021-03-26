let sketch = function(p) {
    let WIDTH = 600;
    let HEIGHT = 400;
    p.setup = () => {
      let canvas = p.createCanvas(WIDTH, HEIGHT);
      p.background(220);
      p.fill(255);
    }
    p.draw = () => {
      if (p.mouseIsPressed) {
        p.ellipse(p.mouseX, p.mouseY, 80, 80);
      }
    }
};
new p5(sketch, 'container');
