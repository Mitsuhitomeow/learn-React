import React from "react";
import Header from "./components/Header";
import Users from "./components/Users";
import FormAddUser from "./components/FormAddUser";
import "./style/app.css"

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      users: [
        {
          id: 1,
          firstname: 'Bob',
          lastname: 'Marley',
          bio: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio, voluptas.',
          age: 40,
          isHappy: true
        },
        {
          id: 2,
          firstname: 'John',
          lastname: 'Doe',
          bio: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio, voluptas.',
          age: 22,
          isHappy: false
        }
      ]
    }
  }


  render() {
    return (
      <div className="name">
        <Header title="Список пользователей" />
        <main>
          <Users users={this.state.users} onEdit={this.editUser.bind(this)} onDelete={this.deleteUser.bind(this)}/>
        </main>
        <aside>
          <FormAddUser onAdd={this.addUser.bind(this)} />
        </aside>
      </div>
    )
  }

  addUser(user) {
    const id = this.state.users.length + 1;
    this.setState({ users: [...this.state.users, {id, ...user}]})
  }

  deleteUser(id) {
    this.setState({ users: this.state.users.filter( el => el.id !== id)})
  }

  editUser(user) {
    const allUsers = this.state.users
    allUsers[user.id - 1] = user

    this.setState({ users: []}, () => {
      this.setState({ users: [...allUsers] })
    })
  }

}

export default App