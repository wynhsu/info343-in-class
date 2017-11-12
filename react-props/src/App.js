import React, { Component } from 'react';
import './App.css';
import Alert from './components/Alert.js';
import Card from './components/Card.js';
import Button from './components/Button.js';

class App extends Component {
  handleButtonClick() {
    console.log('button added to App was clicked!');
  }
  render() {
    
    let alerts = [
      {
        id: 1,
        message: 'Alert Ont',
        type: 'success'
      },
      {
        id: 2,
        message: 'Zombies Approaching!',
        type: 'danger'
      }
    ];

    return (
      <div className='container'>
        {alerts.map(a => <Alert key={a.id} message={a.message} type={a.type} />)}

        <Card title='My Card' imgsrc='elephant.jpg' imgalt='elephant' width={300}>
          <p>This is my <strong>Card Text</strong></p>
          <p>This is another paragraph</p>
          <Alert message='alert in card' />
        </Card>

        <Button caption='Click Me!' onClick={() => this.handleButtonClick()} />
      </div>
    );
  }
}

export default App;
