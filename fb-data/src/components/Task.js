import React from 'react';

export default class Task extends React.Component {
    render() {
        let taskStyles ={
            cursor: 'pointer'
        }
        let doneTaskStyles = {
            ...taskStyles,
            color: '#AAA',
            textDecoration: 'line-through'
        }
        let task = this.props.taskSnapshot.val();        
        return (
            <li onClick={() => this.props.taskSnapshot.ref.update({done: !task.done})} 
                style={task.done ? doneTaskStyles : taskStyles}>{task.title}
            </li>
        );
    }
}