import React from 'react';
import { Link } from 'react-router-dom';
import constants from './constants';

import Input from './Input.js';

export default class SignUpView extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
            confirm: '',
            username: '',
            // errorMsg: ''
        };
    }

    handleSubmit(evt) {
        evt.preventDefault();
        console.log('signing in user with: %s, %s, %s, %s', this.state.email, this.state.password, this.state.reenter, this.state.username);
    }

    render() {
        return (
            <div>
                <h1>Sign Up</h1>

                <form onSubmit={evt => this.handleSubmit(evt)}>
                    <Input for='email' title='Email' id='email' type='email' value={this.state.email} 
                    onInput={evt => this.setState({email: evt.target.value})} />

                    <Input for='password' title='Password' id='password' type='password' value={this.state.password} onInput={evt => this.setState({password: evt.target.value})} />

                    <Input for='confirm' title='Confirm Password' id='confirm' type='confirm' value={this.state.confirm} onInput={evt => this.setState({confirm: evt.target.value})} />

                    <Input for='username' title='Username' id='username' type='username' value={this.state.username} onInput={evt => this.setState({username: evt.target.value})} />

                    <div className='form-group'>
                        {/* button inside form submits the form */}
                        <button type='submit' className='btn btn-primary'>Sign In</button>
                    </div>
                </form>

                <p>Already have an account? <Link to={constants.routes.signin}>Sign In Here</Link></p>
            </div>
        );
    }
}