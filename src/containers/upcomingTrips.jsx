import React, { Component } from 'react';
import UpcomingTripsComponent from '../components/upcomingTripsComponent.jsx';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actions from '../action/actions'


const mapStateToProps = (store) => {
  return {
    upcomingTrips: store.firstReducer.upcomingTrips
  }
}

const mapDispatchToProps = (dispatch) => {

};


class UpcomingTripsContainer extends Component {

  render() {
    let tripsArr = [];
    for (let i = 0; i < this.props.upcomingTrips.length; i++) {
      tripsArr.push(<UpcomingTripsComponent
        trip={this.props.upcomingTrips[i]} 
        key={i}
      />)
    }
    return (
      <div>
        <h2>Upcoming Trips</h2>
        {tripsArr}
      </div>
    );
  }
}

export default connect(mapStateToProps, null)(UpcomingTripsContainer);