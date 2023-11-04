import React from "react";

class FormAddUser extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      firstname: "",
      lastname: "",
      bio: "",
      age: 1,
      isHappy: false
    }
  }

  render() {
    return (
      <form ref={el => this.formReset = el} className="user__discription">
        <div className="user__discription-inputs">
          <input
            placeholder="Имя"
            onChange={e => this.setState({ firstname: e.target.value })} />
          <input placeholder="Фамилия" onChange={e => this.setState({ lastname: e.target.value })} />
          <textarea placeholder="Описание" onChange={e => this.setState({ bio: e.target.value })} ></textarea>
          <input placeholder="Возраст" onChange={e => this.setState({ age: e.target.value })} />
        </div>
        <div className="user__discription-label">
          <label htmlFor="isHappy">Он счастлив?</label>
          <input type="checkbox" id="isHappy" onChange={e => this.setState({ isHappy: e.target.value })} />
        </div>
        <button type="button" onClick={() => {
          this.formReset.reset(0);
          this.props.onAdd({
            firstname: this.state.firstname,
            lastname: this.state.lastname,
            bio: this.state.bio,
            age: this.state.age,
            isHappy: this.state.isHappy,
          })
        }}>Добавить</button>
      </form>
    )
  }
}

export default FormAddUser