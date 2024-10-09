import React, { Component } from "react";

const TITLES = [
  "Iam a Full-Stack Engineer and a Cloud Architect ",
  "Iam a nature lover and a Gardener ",
  "Iam a fitness lover ",
  "Iam an early riser ",
];
class Title extends Component {
  state = { titleIndex: 0, fadeIn: true };

  componentDidMount() {
    this.intervalId1 = setInterval(() => {
      const titleIndex = (this.state.titleIndex + 1) % TITLES.length;
      this.setState({ titleIndex, fadeIn: !this.state.fadeIn });
    }, 6000);
    this.intervalId2 = setInterval(() => {
      this.setState({ fadeIn: !this.state.fadeIn });
    }, 3000);
  }

  componentWillUnmount() {
    clearInterval(this.intervalId1);
    clearInterval(this.intervalId2);
  }

  render() {
    const { fadeIn, titleIndex } = this.state;
    return (
      <span className={fadeIn ? "title-fade-in" : "title-fade-out"}>
        {TITLES[titleIndex]}
      </span>
    );
  }
}

export default Title;
