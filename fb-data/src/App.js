import React, { Component } from 'react';
import firebase from 'firebase/app';
import NewTaskForm from './components/NewTaskForm';
import TaskList from './components/TaskList';
import PurgeTasks from './components/PurgeTasks';

class App extends Component {
  render() {
    let tasksRef = firebase.database().ref('tasks');
    return (
      <div className="container">
        <h1>Tasks</h1>
        <NewTaskForm tasksRef={tasksRef} />
        <TaskList tasksRef={tasksRef} />
        <PurgeTasks tasksRef={tasksRef} />
      </div>
    );
  }
}

export default App;
