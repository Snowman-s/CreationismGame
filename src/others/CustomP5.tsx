import p5 from "p5";
import React from "react";

export class CustomP5Props {
  [key: string]: any;
  sketch: (p5: CustomP5) => void = (p5) => {};
}

export class CustomP5 extends p5 {}
