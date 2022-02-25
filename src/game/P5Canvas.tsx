import { CustomP5, CustomP5Props } from "../others/CustomP5";
import p5 from "p5";
import React from "react";

export default class P5Canvas extends React.Component<
  CustomP5Props,
  { p5obj: CustomP5 }
> {
  myRef: React.RefObject<HTMLDivElement>;
  canvasRef: React.RefObject<HTMLDivElement>;

  constructor(props: CustomP5Props) {
    super(props);

    this.myRef = React.createRef();
    this.canvasRef = React.createRef();
  }

  async componentDidMount() {
    const p5obj = new p5(
      this.props.sketch,
      this.canvasRef.current!
    ) as CustomP5;
    this.setState({ p5obj: p5obj });
  }

  async componentDidUpdate(prevProps: any) {
    if (prevProps.sketch !== this.props.sketch) {
      this.state.p5obj.remove();
      const p5obj = new p5(
        this.props.sketch,
        this.canvasRef.current!
      ) as CustomP5;
      this.setState({ p5obj: p5obj });
    }
  }

  render() {
    return <div ref={this.canvasRef}></div>;
  }
}
