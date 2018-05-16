import React, { Component } from 'react';
import { connect } from 'react-redux';
// import from child components...

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isUser: false,
            username: '',
            password: '',
            email: '',
            userId: ''
        };
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit = e => {
        e.preventDefault();
        let userInfo = {
            username: this.state.username,
            password: this.state.password,
            email: this.state.email
        };
        fetch('/api/login', {
            method: "POST",
            body: JSON.stringify(userInfo),
            credentials: true,
            headers: { 'content-type': 'application/json' }
        }).then(res => res.json())
            .then(body => {
                console.log('body in second then', body)
                this.setState({ isUser: true });
            }).catch(err => {
                console.log('error signing up')
            })
    }

    render() {
        return (
            <div className='login' style={{textAlign: 'center'}}>
                <span>Login</span>
                <br /><form onSubmit={this.handleSubmit}>
                    <input refs="username" name="username" type="text" placeholder="username" onChange={(e) => this.setState({ username: e.target.value })} />
                    <br /><input name="password" type="password" placeholder="password" onChange={(e) => this.setState({ password: e.target.value })} />
                    <br /><input type='submit' value="Login" />
                </form>
            </div>
        )
    }
}

export default connect(null, null)(Login);