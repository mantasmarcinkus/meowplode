import { LocationDescriptorObject } from "history";
import * as React from "react";
const Logo = require("../assets/meowplode.png");

interface Props {
  router: LocationDescriptorObject[];
}
export default class Home extends React.Component<Props, { name: string }> {
  constructor() {
    super();
    this.state = {
      name: "",
    };
    this.handleKeyPress = this.handleKeyPress.bind(this);
    this.onButtonClick = this.onButtonClick.bind(this);
    this.onInputChange = this.onInputChange.bind(this);
  }
  public render() {
    return (
      <div>
        <img alt="Meowplode" src={Logo} className="homeImage" />
        <div style={{ fontSize: 18, marginTop: 10, marginBottom: 10 }}>
          Help a kitten! Answer questions, quick!
        </div>
        <input
          type="text"
          autoFocus={true}
          onKeyPress={this.handleKeyPress}
          placeholder="Your name is required!"
          required={true}
          value={this.state.name}
          onChange={this.onInputChange}
        />
        <br />
        <button onClick={this.onButtonClick} className="border" style={{ width: 250 }}>Let's go save a kitten!</button>
        <div className="disclaimer">
          Disclaimer: This quiz is suppose to be hard. Not showing answers? Not enough time?
          Life is hard and kittens will not be spared if you are unable to answer all the questions.
          We have 1:1 ratio of explosives to kittens and we sure do love watching explosions.
        </div>
      </div>
    );
  }
  private handleKeyPress({ key }: { key: string }) {
    if (key === "Enter") {
      this.props.router.push({
        pathname: "/game",
        search: `?name=${this.state.name}`,
      });
    }
  }
  private onInputChange({ target: { value: name } }: { target: { value: string } }) {
    this.setState({ name });
  }
  private onButtonClick() {
    if (this.state.name) {
      this.props.router.push({
        pathname: "/game",
        search: `?name=${this.state.name}`,
      });
    }
  }
}
