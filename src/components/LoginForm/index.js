import {Component} from 'react'

import './index.css'

class LoginForm extends Component {
  state = {usernameInput: '', userPasswordInputs: '', errorMessage: ''}

  onSubmitSuccess = () => {
    const {history} = this.props
    history.replace('/')
  }

  onUsernameInput = event => {
    this.setState({usernameInput: event.target.value})
  }

  onUsernamePassword = event => {
    this.setState({userPasswordInputs: event.target.value})
  }

  onSubmitForm = async event => {
    event.preventDefault()

    const {usernameInput, userPasswordInputs} = this.state
    const userDetails = {
      username: usernameInput,
      password: userPasswordInputs,
    }
    if (userPasswordInputs === '') {
      this.setState({errorMessage: 'Please enter the password'})
    }
    if (usernameInput === '') {
      this.setState({errorMessage: 'Please enter valid the Details'})
    } else {
      const url = 'https://apis.ccbp.in/login'

      const options = {
        method: 'POST',
        body: JSON.stringify(userDetails),
      }

      const response = await fetch(url, options)
      const data = await response.json()
      console.log(data)
      if (response.ok === true) {
        this.onSubmitSuccess()
      } else {
        this.setState({errorMessage: 'Please enter correct the Details'})
      }
    }
  }

  render() {
    const {errorMessage} = this.state
    return (
      <div className="mainContainer">
        <img
          className="logo"
          src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-logo-img.png"
          alt="website logo"
        />
        <img
          src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-login-img.png"
          alt="website login"
          className="loginLogoImage"
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
            <p className="error">{errorMessage}</p>
          </div>
          <button className="button" type="submit">
            Login
          </button>
        </form>
      </div>
    )
  }
}

export default LoginForm
