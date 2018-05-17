import React, { Component } from 'react';
import ProfileContainer from './profileContainer.jsx';
import SuitcaseContainer from './suitcaseContainer.jsx';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actions from '../action/actions'
import { BrowserRouter as Router, Route } from 'react-router-dom';


const mapStateToProps = (store) => {

}

const mapDispatchToProps = (dispatch) => {

};


class MainContainer extends Component {

  render() {
    return (
      <Router>
      <div>
      <h1 style={{textAlign: 'center'}}>PacMate</h1>
    <Route path = '/suitcase/:location' render = {({match}) => <SuitcaseContainer location = {match.params.location} />} />
        <Route exact={true} path = '/' component = {ProfileContainer}/>
      </div>
      </Router>
    );
  }
}

export default connect(null, null)(MainContainer);