import React from 'react';
import { Field } from 'redux-form'
import { reduxForm } from 'redux-form'

let TripForm = props => {
    const { handleSubmit } = props
    return <form onSubmit={handleSubmit(() => console.log('submitting New Trip'))}>
        <div>
        <label htmlFor='dest'>Destination: </label>
        <textarea name='destination' placeholder='Where to?' type='text' />
        </div>
        <div>
        <label htmlFor='depart'>Leaving on: </label>
        <textarea name='departing' component='React.DOM.input' type='text' />
        </div>
        <div>
        <label htmlFor='home'>Returning: </label>
        <textarea name='returnHome' component='React.DOM.input' type='text' />
        </div>
      <button type="submit" id="newTripButton" >Submit</button>
    </form>
}

TripForm = reduxForm({
    form: 'addTrip',
    onSubmit: () => { console.log('reduxForm accepted!') },
    enableReinitialize: true,
})(TripForm)




export default TripForm;