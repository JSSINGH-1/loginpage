import {Component} from 'react'

import './index.css'

class Login extends Component {
  state = {userName: '', Password: ''}

  onUsernameInput = event => {
    this.setState({userName: event.target.value})
  }

  onUsernamePassword = event => {
    this.setState({Password: event.target.value})
  }

  onSubmitForm = async event => {
    event.preventDefault()
    const {userName, Password} = this.state
    const userDetails = {userName, Password}

    const url = 'https://apis.ccbp.in/login'

    const options = {
      method: 'POST',
      body: JSON.stringify(userDetails),
    }

    const response = await fetch(url, options)
    const data = await response.json()
    console.log(data)
  }

  render() {
    return (
      <div className="mainContainer">
        <img
          className="logo"
          src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-logo-img.png"
          alt="website logo"
        />
        <img
          className="imageLogo"
          src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-login-img.png"
          alt="website login"
        />
        <form className="cardOne" onSubmit={this.onSubmitForm}>
          <img
            className="logo2"
            src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-logo-img.png"
            alt="website logo"
          />
          <div className="formInput">
            <label className="labelEl" htmlFor="UserId">
              USERNAME
            </label>
            <input
              className="inputs"
              id="UserId"
              placeholder="Username"
              type="text"
              onChange={this.onUsernameInput}
            />
          </div>
          <div className="formInput">
            <label className="labelEl" htmlFor="UserPasswords">
              PASSWORD
            </label>
            <input
              className="inputs"
              placeholder="Passwords"
              id="UserPasswords"
              type="password"
              onChange={this.onUsernamePassword}
            />
          </div>
          <button className="button" type="submit">
            Login
          </button>
        </form>
      </div>
    )
  }
}

export default Login
