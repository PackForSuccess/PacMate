import React from 'react';
import TripForm from '../components/TripCreator.jsx'

class TripDisplay extends React.Component {
    submit = values => {
        console.log(values)
    }
    render() {
        return <TripForm onSubmit={this.submit} />
    }
}

export default TripDisplay;
