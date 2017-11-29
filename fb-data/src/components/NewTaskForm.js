import React from 'react';

export default class NewTaskForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            newTaskTitle: ''
        };
    }
    
    handleSubmit(evt) {
        evt.preventDefault();
        let task= {
            title: this.state.newTaskTitle
        };
        this.props.tasksRef.push(task)
            .then(() => this.setState({newTaskTitle: ''}))
            .catch(err => this.setState({errorMessage: err.message}));
    }

    render() {
        return (
            <form onSubmit={evt => this.handleSubmit(evt)}> 
                { this.state.errorMessage ?
                <div className='alert alert-danger'>
                    {this.state.errorMessage}
                </div> : undefined}
                <input type='text' 
                    className='form-control' 
                    placeholder='what do you need to do?' 
                    value={this.state.newTaskTitle} 
                    onInput={evt => this.setState({newTaskTitle: evt.target.value})} />
            </form>
        )
    }
}