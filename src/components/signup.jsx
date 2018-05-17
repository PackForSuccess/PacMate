import React, { Component } from 'react';
import { connect } from 'react-redux';
// import from child components...

const SignUp = props => {
    console.log(props, 'props in signup')
    return (
        <div className='signUp' style={{ textAlign: 'center' }}>
            <span>Sign up</span>
            <br /><form onSubmit={props.onSubmit}>
                <br /><input name="username" type="text" placeholder="username" onChange={(e) => this.setState({ username: e.target.value })} />
                <br /><input name="email" type="email" placeholder="email" onChange={(e) => this.setState({ email: e.target.value })} />
                <br /><input name="password" type="password" placeholder="password" onChange={(e) => this.setState({ password: e.target.value })} />
                <br /><input type='submit' value="Submit" />
            </form>
        </div>
    )
}

export default SignUp;