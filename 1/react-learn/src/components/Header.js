import React from "react";
import Button from "./Button";

class Header extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      text: "preview",
    }
  }

  render() {
    return (
      <header className="header">
        <h1>{this.props.title}</h1>
        <Button text={this.state.text} />
      </header>
    )
  }
}

export default Header