import React, { Component } from "react";
import './App.css'

class App extends Component {
  constructor() {
    super();
    this.state = {
      users: [
        { name: "Cristiano", surname: "Ronaldo", age: 38, id: 1 },
        { name: "Elon", surname: "Musk", age: 52, id: 2 },
        { name: "Mark", surname: "Zuckerberg", age: 39, id: 3 },
        { name: "Jeff", surname: "Bezos", age: 59, id: 4 },
        { name: "Bill", surname: "Gates", age: 68, id: 5 },
      ],
      searchName: "",
      searchSurname: "",
    }
    this.userRef = React.createRef('')
    this.userRefSur = React.createRef('')
  }

  changeName = (event) => {
    this.setState({
      searchName: event.target.value
    })
  }
  changeSurname = (ev) => {
    this.setState({
      searchSurname: ev.target.value
    })
  }

  filterUsers = (item) => {
    return item.name.toLowerCase().includes(this.state.searchName.toLowerCase())
  }
  filterUserS = (item) => {
    return item.surname.toLowerCase().includes(this.state.searchSurname.toLowerCase())
  }

  deleteUser = (id) => {
    let filteredArray = this.state.users.filter(el => el.id !== id)
    this.setState({
      users: filteredArray
    })
  }

  addUser = () => {
    let newUsers = {
      name: this.userRef.current.value,
      surname: this.userRefSur.current.value,
      id: this.state.newUserID
    }
    this.setState({
      users: [...this.state.users, ...[newUsers]],
      newUserId: this.state.newUserId + 1
    })
    this.userRef.current.value = ''
    this.userRefSur.current.value = ''
  }

  render() {
    return (
      <section>
        <div className="input-box">

          <div className="search-box">
            <span>Search Users</span>
            <input placeholder="Search Name" onChange={this.changeName} /> <br />
            <input placeholder="Search Surname" onChange={this.changeSurname} />

          </div>

          <br />

          <div className="create-box">
            <span>Create New Users</span>

            <input placeholder="New user name" ref={this.userRef} /> <br />
            <input placeholder="New user surname" ref={this.userRefSur} />
            <button onClick={this.addUser} >Add User</button>

          </div>



        </div>


        <div className="list-box">
          <ol>
            {this.state.users.filter(this.filterUsers).filter(this.filterUserS).map(user => {
              return (
                <li>

                  <span>Name:{user.name}</span>
                  <br />
                  <span>Surname:{user.surname}</span>
                  <br />
                  <button onClick={() => this.deleteUser(user.id)}>Delete user</button>

                </li>
              )
            })}
          </ol>
        </div>
      </section>
    )
  }
}

export default App




