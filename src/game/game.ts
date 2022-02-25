import p5 from "p5";

export default function mysketch(p: p5) {
  p.setup = () => {
    p.createCanvas(500, 500);
  };
  p.draw = () => {
    p.background(0);

    p.circle(
      250 + 200 * p.cos(p.frameCount / 30),
      250 + 200 * p.sin(p.frameCount / 30),
      50
    );
  };
}
