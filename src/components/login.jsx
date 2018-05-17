import React, { Component } from 'react';
import { connect } from 'react-redux';
// import from child components...

const Login = props => {
    console.log(props.loginSubmit, 'props in login')
    let userLoginInfo = {};
    return (
        <div className='login' style={{ textAlign: 'center' }}>
            <span>Login</span>
            <br /><input type="text" placeholder="username" onChange={(e) => { userLoginInfo.username = e.target.value }} />
            <br /><input type="password" placeholder="password" onChange={(e) => { userLoginInfo.password = e.target.value }}  />
            <br /><button onClick={()=>{props.loginSubmit(userLoginInfo)}}>Login</button>
        </div >
    )
}

export default Login;