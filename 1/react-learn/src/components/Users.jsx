import React from "react";
import User from "./User";

class Users extends React.Component {

  render() {
    if (this.props.users.length !== 0)
      return (
        <div className="users__list">
          {
            this.props.users.map((el) => (
              <User onEdit={this.props.onEdit} onDelete={this.props.onDelete} key={el.id} user={el} />
            ))
          }
        </div>
      )
    else
      return (
        <div className="users__list">
          <div className="item">
            <h3>Пользователей нет</h3>
          </div>
        </div>
      )
  }
}

export default Users