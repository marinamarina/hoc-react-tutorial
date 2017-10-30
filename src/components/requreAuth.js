import React, {Component} from 'react'
import {connect} from 'react-redux'

export default function (EnhancedComponent) {
  class Authentication extends Component {
    static contextTypes = {
      router: React.PropTypes.object
    }

    render() {
      return <EnhancedComponent {...this.props} />
    }
  }
  function mapStateToProps(state){
    return {
      authStatus: state.authenticationStatus
    }
  }

  return connect(mapStateToProps)(Authentication)
}
