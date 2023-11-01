import React from "react";
import Header from "./components/Header";
import "./style/App.css";

class App extends React.Component {
  helpText = "Help text!";

  render() {
    return (
      <div className="name">
        <Header title="Заглавный сайт"/>
        <h1>Hello</h1>
        <input placeholder={this.helpText} className="text" onClick={this.click} onMouseEnter={this.mouseOver} />
        <button className="btn">Enter</button>
        <p>lorem lor lorem: {this.helpText === 'Help text!' ? 'Yes' : 'No'}</p>
      </div>
    )
  };

  click() {console.log('clicked')};
  mouseOver() {console.log('mouse over')};
}

export default App