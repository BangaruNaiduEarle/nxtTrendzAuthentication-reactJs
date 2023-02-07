import {Component} from 'react'

import './index.css'

class LoginForm extends Component {
  state = {username: '', password: '', isFailure: false, errorMsg: ''}

  onSubmitFailure = errorMsg => {
    this.setState({isFailure: true, errorMsg})
  }

  onSubmitSuccess = () => {
    const {history} = this.props
    history.replace('/')
  }

  onSubmitForm = async event => {
    event.preventDefault()

    const {username, password} = this.state
    const userDetails = {username, password}

    const url = 'https://apis.ccbp.in/login'

    const options = {
      method: 'POST',
      body: JSON.stringify(userDetails),
    }

    const response = await fetch(url, options)
    const data = await response.json()
    console.log(response)
    console.log(data)

    if (response.ok === true) {
      this.onSubmitSuccess()
    } else {
      this.onSubmitFailure(data.error_msg)
    }
  }

  onchangeUsername = event => {
    this.setState({username: event.target.value})
  }

  onchangePassword = event => {
    this.setState({password: event.target.value})
  }

  render() {
    const {username, password, isFailure, errorMsg} = this.state

    return (
      <div>
        <div className="main-bg-container">
          <img
            src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-login-img.png"
            alt="website login"
            className="websiteLogin"
          />

          <form className="form-container" onSubmit={this.onSubmitForm}>
            <img
              src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-logo-img.png"
              alt="website logo"
              className="website-logo"
            />
            <div className="input-container">
              <label htmlFor="username" className="input-label">
                USERNAME
              </label>
              <input
                type="text"
                id="username"
                value={username}
                className="input-ele"
                placeholder="Username"
                onChange={this.onchangeUsername}
              />
            </div>

            <div className="input-container">
              <label htmlFor="password" className="input-label">
                PASSWORD
              </label>
              <input
                type="password"
                id="password"
                value={password}
                className="input-ele"
                placeholder="Password"
                onChange={this.onchangePassword}
              />
            </div>
            {isFailure && <p className="err-msg">{errorMsg}</p>}
            <button type="submit" className="login-btn">
              Login
            </button>
          </form>
        </div>
      </div>
    )
  }
}

export default LoginForm
