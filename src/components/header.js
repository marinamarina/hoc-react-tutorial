import React, {Component} from 'react'
import { Link } from 'react-router'
import * as actions from '../actions/'
import {connect} from 'react-redux'

class Header extends Component {
  authButton(authStatus) {
    const msg = authStatus ? 'Sign Out' : 'Sign In'

    return (<button onClick={() => this.props.setAuthenticationStatus(!authStatus)} >
                {msg}
            </button>)  
  }

  render() {
    const { authStatus, } = this.props
    //console.log(this.props)

    return (
      <nav className="navbar navbar-light">
        <ul className="nav navbar-nav">
          <li className="nav-item">
            <Link to="/">Home</Link>
          </li>
          <li className="nav-item">
            <Link to="/resources">Auth Resources</Link>
          </li>
          <li className="nav-item">
            <Link to="/about-us">About Us</Link>
          </li>
          <li className="nav-item">
            {this.authButton(authStatus)}
          </li>
        </ul>
      </nav>
    )
  }
}

function mapStateToProps(state) {
  return {
    authStatus: state.authenticationStatus
  }
}

export default connect(mapStateToProps, actions)(Header)
