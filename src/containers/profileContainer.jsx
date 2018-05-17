import React, { Component } from 'react';
import UpcomingTripsContainer from './upcomingTrips.jsx';
import TripDisplay from '../components/TripDisplay.jsx'
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actions from '../action/actions'


const mapStateToProps = (store) => {

}

const mapDispatchToProps = (dispatch) => {

};


class ProfileContainer extends Component {

  render() {
    return (
      <div className="profileContainer">
        <TripDisplay/>
        <UpcomingTripsContainer/>
      </div>
    );
  }
}

export default connect(null, null)(ProfileContainer);