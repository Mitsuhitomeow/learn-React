import React from "react";
import { MdHighlightOff, MdSettings } from "react-icons/md"
import FormAddUser from "./FormAddUser";

class User extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      editForm: false,
    }
  }
  user = this.props.user

  render() {
    return (
      <div className="item">
        <MdHighlightOff onClick={() => this.props.onDelete(this.user.id)} className="item__icons-delete item__btn" />
        <MdSettings onClick={() =>
          this.setState({
            editForm: !this.state.editForm
          })
        } className="item__icons-settings item__btn" />
        <h3>{this.user.firstname} {this.user.lastname}</h3>
        <p>{this.user.bio}</p>
        <b>{this.user.isHappy ? "Счастлив :)" : "Не счастлив :("}</b>

        {this.state.editForm && <FormAddUser user={this.user} onAdd={this.props.onEdit} />}
      </div>
    )
  }
}

export default User