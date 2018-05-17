import React, { Component } from 'react';
import PublicContainer from './publicContainer.jsx';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actions from '../action/actions'

const mapStateToProps = (store) => {
  return {
    syncData: store.firstReducer.syncData,
    asyncData: store.firstReducer.asyncData,
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    syncAction: actions.syncAction,
    asyncAction: actions.asyncAction
  }, dispatch)
};


class ExampleContainer extends Component {

  componentDidMount() {
    console.log('exampleContainer did mount');
  }

  render() {
    return (
      <div>
        <h1 style={{textAlign: 'center'}}>PacMate</h1>
        <PublicContainer/>
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ExampleContainer);