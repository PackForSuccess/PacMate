import React, { Component } from 'react';
import SignUp from '../components/signup.jsx';
import Login from '../components/login.jsx';
import FacebookButton from '../components/facebookButton.jsx';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actions from '../action/actions';

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    submitLoginInfo: actions.submitLoginInfo
  }, dispatch)
};

class PublicContainer extends Component {

  render() {
    return (
      <div className = 'publicContainer'>
        {/* <SignUp /> */}
        <br /><Login submitLoginInfo={this.props.submitLoginInfo}/>
        <br /><FacebookButton />
      </div>
    );
  }
}

export default connect(null, mapDispatchToProps)(PublicContainer);