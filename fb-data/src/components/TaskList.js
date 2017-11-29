import React from 'react';
import Task from './Task';

export default class TaskList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            tasksSnapshot: undefined
        }
    }
    componentDidMount() {
        this.unlisten = this.props.tasksRef.on('value', snapshot => 
            this.setState({tasksSnapshot: snapshot}));
    }
    componentWillUnmount() {
        this.props.tasksRef.off('value', this.unlisten);
    }

    render() {
        if (this.state.tasksSnapshot === undefined) {
            return <div>loading...</div>;
        }
        let tasks = [];
        this.state.tasksSnapshot.forEach(taskSnapshot => {
            tasks.push(<Task key={taskSnapshot.key} taskSnapshot={taskSnapshot} />)
        });
        return (
            <ul>{tasks}</ul>
        );
    }
}