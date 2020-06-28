import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Cookies from 'js-cookie';
import './App.css';
import { setAccessToken, login } from './actions/authAction';

// const App = () => (
//   <MusicAnimator />
// );

class App extends Component {

  componentDidMount() {
    const accessToken = Cookies.get('SPOTIFY_ACCESS_TOKEN')
    console.log("ACCESS_TOKEN", accessToken)
    if(accessToken) {
      this.props.setAccessToken(accessToken)
    }
    else {
      this.props.login()
    }
  }

  render() {
    return (
      this.props.loginUrl ?
      <button onClick={() => window.location.assign(this.props.loginUrl)}>Login</button> :
      <div></div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    token: state.authReducer.token,
    loginUrl: state.authReducer.loginUrl
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(
    {
      setAccessToken,
      login
    },
    dispatch
  )
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
