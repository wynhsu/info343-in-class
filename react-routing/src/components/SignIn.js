import React from 'react';
import { Link } from 'react-router-dom';
import constants from './constants';

export default class SignInView extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        };
    }

    handleSubmit(evt) {
        evt.preventDefault();
        console.log('signing in user with: %s, %s', this.state.email, this.state.password);
    }

    render() {
        return (
            <div className='container'>
                <h1>Sign In</h1>

                <form onSubmit={evt => this.handleSubmit(evt)}>
                    <div className='form-group'>
                        <label htmlFor='email'>Email:</label>
                        <input id='email' type="email" className='form-control' placeholder='enter your email address' valie={this.state.email} 
                        onInput={evt => this.setState({email: evt.target.value})} />
                    </div>

                    <div>
                        <label htmlFor='password'>Password:</label>
                        <input id='password' type="password" className='form-control' placeholder='enter your password' value={this.state.password} onInput={evt => this.setState({password: evt.target.value})} />
                    </div>
                    <div className='form-group'>
                        {/* button inside form submits the form */}
                        <button type='submit' className='btn btn-primary'>Sign In</button>
                    </div>
                </form>

                <p>Don't yet have an account? <Link to={constants.routes.signup}>Sign Up!</Link></p>
            </div>
        );
    }
}