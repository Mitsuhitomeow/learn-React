import React from "react";

class Header extends React.Component {

  render() {
    return (
      <header className="header">
        <div className="header__container">
          <h1>{this.props.title}</h1>
        </div>
      </header>
    )
  }
}

export default Header