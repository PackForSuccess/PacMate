import React from 'react';
import { Field, reduxForm } from 'redux-form'

let TripForm = props => {
    console.log(props, "props in tc")
   // this.state = {};
   const { handleSubmit } = {props}
    return <form onSubmit={handleSubmit}>
        <h1>Add a Trip</h1>
        <div>
            <label htmlFor='dest'>Destination: </label>
            <Field name='destination' placeholder='Where to?' component='input' type='text' />
        </div>
        <div className='departOn'>
        <h3>Departing on:</h3>
        <div>
            <label htmlFor='month'>Month: </label>
            <Field name='month' component='select' type='text'> 
                <option />
                <option value='Jan'>Jan</option>
                <option value='Feb'>Feb</option>
                <option value='Mar'>Mar</option>
                <option value='April'>April</option>
                <option value='May'>May</option>
                <option value='June'>June</option>
                <option value='July'>July</option>
                <option value='Aug'>Aug</option>
                <option value='Sept'>Sept</option>
                <option value='Oct'>Oct</option>
                <option value='Nov'>Nov</option>
                <option value='Dec'>Dec</option>
            </Field>
        </div>
        <div>
            <label htmlFor='day'>Day: </label>
            <Field name='day' component='select' type='text'> 
                <option />
                <option value='1'>1</option>
                <option value='2'>2</option>
                <option value='3'>3</option>
                <option value='4'>4</option>
                <option value='5'>5</option>
                <option value='6'>6</option>
                <option value='7'>7</option>
                <option value='8'>8</option>
                <option value='9'>9</option>
                <option value='10'>10</option>
                <option value='11'>11</option>
                <option value='12'>12</option>
                <option value='13'>13</option>
                <option value='14'>14</option>
                <option value='15'>15</option>
                <option value='16'>16</option>
                <option value='17'>17</option>
                <option value='18'>18</option>
                <option value='19'>19</option>
                <option value='20'>20</option>
                <option value='21'>21</option>
                <option value='22'>22</option>
                <option value='23'>23</option>
                <option value='24'>24</option>
                <option value='25'>25</option>
                <option value='26'>26</option>
                <option value='27'>27</option>
                <option value='28'>28</option>
                <option value='29'>29</option>
                <option value='30'>30</option>
                <option value='31'>31</option>
            </Field>
        </div>
            <label htmlFor='year'>Year: </label>
            <Field name='year' component='select' type='text'> 
                <option />
                <option value='2018'>2018</option>
                <option value='2019'>2019</option>
                <option value='2020'>2020</option>
            </Field>
        </div>
        <div>
            <label htmlFor='home'>Length of stay: </label>
            <Field name='duration' placeholder='How many nights?' component='input' type='text' />
        </div>
        <button type="submit" id="newTripButton" >Submit</button>
    </form>
}

TripForm = reduxForm({
    form: 'addTrip',
})(TripForm)




export default TripForm;

