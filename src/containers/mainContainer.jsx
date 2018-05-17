import React, { Component } from 'react';
import ProfileContainer from './profileContainer.jsx';
import PublicContainer from './publicContainer.jsx';
import SuitcaseContainer from './suitcaseContainer.jsx';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actions from '../action/actions'
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Redirect } from 'react-router-dom';

const mapStateToProps = (store) => {
  return {
    userInfo: store.firstReducer.userInfo
  }
}

class MainContainer extends Component {

  render() {
    console.log(this.props.userInfo, '<----changing userInfo')
    return (
      <Router>
        <div>
          <h1 style={{ textAlign: 'center' }}>PacMate</h1>
          <Route path='/suitcase/:location' render={({ match }) => <SuitcaseContainer location={match.params.location} />} />
          <Route exact={true} path='/public' component={PublicContainer} />
          <Route exact={true} path='/profile' component={ProfileContainer} />
          <Route exact path="/" render={() => (
            this.props.userInfo ? (
              <Redirect to="/profile" />
            ) : (
              <PublicContainer />
              )
          )} />
        </div>
      </Router>
    );
  }
}

export default connect(mapStateToProps, null)(MainContainer);


