import React, { Component } from 'react';
import UpcomingTripsComponent from '../components/upcomingTripsComponent.jsx';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actions from '../action/actions'


const mapStateToProps = (store) => {

}

const mapDispatchToProps = (dispatch) => {

};


class SuitcaseContainer extends Component {

  render() {

    return (
      <div>
        <h2>Suitcase!</h2>
        {this.props.location}
      </div>
    );
  }
}

export default connect(null, null)(SuitcaseContainer);