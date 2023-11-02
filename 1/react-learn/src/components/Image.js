import React from "react";
import logoImage from "./../img/logo.jpg"


class Image extends React.Component {
  render() {
    return (
      <img src={logoImage} width="350px"/>
    )
  }
}

export default Image