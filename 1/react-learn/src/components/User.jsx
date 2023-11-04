import React from "react";
import { MdHighlightOff, MdSettings } from "react-icons/md"

class User extends React.Component {
  user = this.props.user

  render() {
    return (
      <div className="item">
        <MdHighlightOff onClick={ () => this.props.onDelete(this.user.id)} className="item__icons-delete item__btn" />
        <MdSettings className="item__icons-settings item__btn" />
        <h3>{this.user.firstname} {this.user.lastname}</h3>
        <p>{this.user.bio}</p>
        <b>{this.user.isHappy ? "Счастлив :)" : "Не счастлив :("}</b>
      </div>
    )
  }
}

export default User