import React, { Component } from 'react';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      greeting: 'Hello, React!',
      currTime: new Date(),
      tasks: [
        { key: 0, title: 'Learn Stateful React Components' },
        { key: 1, title: 'Buy the iSchool a Building' }
      ],
      newTaskTitle: ""
    };
    this.nextKey = this.state.tasks.length;
  }

  componentDidMount() {
    this.clockTimer = setInterval(() => {
      //this.setState is NOT a synchronous call!!
      this.setState({ greeting: 'Hello, React! ' + new Date().toLocaleTimeString() })
      // React will trigger a re-render without you calling it
      this.setState({ currTime: new Date() })
      //DON'T DO THIS: this.state.currTime = new Date();
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.clockTimer);
  }

  handleSubmit(evt) {
    evt.preventDefault();
    let task = {
      title: this.state.newTaskTitle,
      key: this.nextKey++
    };
    this.setState({
      tasks: this.state.tasks.concat(task),
      newTaskTitle: ''
    });
  }

  toggleDone(taskToToggle) {
    let newTasks = this.state.tasks.map(task => {
      if (task === taskToToggle) {
        task.done = !task.done;
      }
      return task;
    })
    this.setState({ tasks: newTasks });
  }

  handlePurge() {
    let filteredTask = this.state.tasks.filter(task => !task.done);
    this.setState({ tasks: filteredTask });
  }

  render() {
    let doneTaskStyles = {
      color: '#AAA',
      textDecoration: 'line-through'
    }
    return (
      <div className="container">
        <h2>Clock</h2>
        <p>{this.state.greeting}</p>
        <p>{this.state.currTime.toLocaleTimeString()}</p>

        <h2>Tasks</h2>
        <form onSubmit={evt => this.handleSubmit(evt)}>
          <input type='text' className='form-control' value={this.state.newTaskTitle}
            onInput={(evt) => this.setState({
              newTaskTitle: evt.target.value
            })} />
        </form>
        <ul>
          {this.state.tasks.map(task =>
            <li key={task.key}
              onClick={() => this.toggleDone(task)}
              style={task.done ? doneTaskStyles : undefined}>
              {task.title}
            </li>)}
        </ul>

        <button className='btn btn-primary'
          onClick={() => this.handlePurge()}>
          Purge Completed
        </button>
      </div>
    );
  }
}

export default App;
