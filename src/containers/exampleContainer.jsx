import React, { Component } from 'react';
import PublicContainer from './publicContainer.jsx';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actions from '../action/actions'
import TripForm from '../components/TripCreator.jsx'

const mapStateToProps = (store) => {
  return {
    syncData: store.firstReducer.syncData
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    syncAction: actions.syncAction
  }, dispatch)
};


class ExampleContainer extends Component {

  componentDidMount() {
    console.log('exampleContainer did mount');
  }

  render() {
    return (
      <div>
        <h1 style={{textAlign: 'center'}}>Example Container Header</h1>
        <ExampleComponent
          syncAction={this.props.syncAction}
          syncData={this.props.syncData}
        />
        <TripForm class="trip-form" />
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ExampleContainer);