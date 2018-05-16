import React from 'react';
import { Link } from 'react-router-dom';

const UpcomingTripsComponent = props =>
  <div>
    <div>{props.trip.location}</div>
    <div>Departure: {props.trip.departure_date}</div>
    <div>Return: {props.trip.return_date}</div>
    <Link to={`/suitcase/${props.trip.trip_id}`}>
    <button>PACK!</button>
    </Link>
    <br/>
    <h1 style={{display: 'inline', float: 'left'}}></h1>
  </div>


export default UpcomingTripsComponent;