import React, { Component } from 'react';
import firebase from 'firebase/app';
import Working from './Working';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentUser: undefined,
      email: 'test@test.com',
      password: 'password',
      displayName: 'Tester'
    };
  }

  componentDidMount() {
    this.authUnsub = firebase.auth().onAuthStateChanged(user => {
      this.setState({currentUser: user});
    });
  }

  componentWillUnmount() {
    this.authUnsub();
  }

  handleSignUp() {
    firebase.auth()
      .createUserWithEmailAndPassword(this.state.email, this.state.password)
      .then(user => {
        return user.updateProfile({
          displayName: this.state.displayName
        });
      })
      .catch(err => this.setState({errorMessage: err.message}));
  }

  handleSignIn() {
    this.setState({working: true});
    firebase.auth()
      .signInWithEmailAndPassword(this.state.email, this.state.password)
      .then(() => this.setState({errorMessage: undefined}))
      .catch(err => this.setState({errorMessage: err.message}))
      .then(() => this.setState({working: false}));
  }

  handleSignOut() {
    this.setState({working: true});
    firebase.auth().signOut()
      .catch(err => this.setState({errorMessage: err.message}))
      .then(() => this.setState({working: false}));      
  }

  render() {
    return (
      <div className="container">
        {this.state.errorMessage ? 
          <div className='alert alert-danger'>{this.state.errorMessage}</div>
          : undefined}
        <div>
          {this.state.working ? <Working /> : undefined}
          {this.state.currentUser ? 
          'Hello, ' + this.state.currentUser.displayName :
          'User is NOT authenticated'}
        </div>
        <p>
          <button disabled={this.state.working} onClick={() => this.handleSignUp()} className='btn btn-success'>Sign Up</button>
        </p>
        <p>
          <button disabled={this.state.working} onClick={() => this.handleSignIn()} className='btn btn-primary'>Sign In</button>
        </p>
        <p>
          <button disabled={this.state.working} onClick={() => this.handleSignOut()} className="btn btn-danger">Sign Out</button>
        </p>
      </div>
    );
  }
}

export default App;
