import React from "react";
import Header from "./components/Header";
import Image from "./components/Image";
import Button from "./components/Button";

class App extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      helpText: "Help text",
      userData: "",
      enterText: "Enter",
    }
  }

  componentDidUpdate (pervProps) {
    if (this.state.enterText === 'Enter') {
      console.log('some')
    }
  }

  render() {
    return (
      <div className="name">

        <Header title="Заглавный"/>

        <h1>{this.state.helpText}</h1>
        <h2>{this.state.userData}</h2>

        <input
          placeholder={this.state.helpText}
          onChange={event => this.setState({userData: event.target.value})}
          onClick={this.inputClick.bind(this)}
          onMouseEnter={this.mouseOver}
        />

        <Button text={this.state.enterText}/>

        <p>lorem lor lorem: {this.state.helpText === 'Help text!' ? 'Yes' : 'No'}</p>

        <Image />

      </div>
    )
  };

  inputClick() {
    this.setState({ helpText: "Help text!"})
    console.log('clicked');
  };

  mouseOver() {console.log('mouse over')};
}

export default App