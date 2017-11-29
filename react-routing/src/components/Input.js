import React from 'react';

export default class Input extends React.Component {
    render() {
        return (
            <div className='form-group'>
                <label htmlFor={this.props.for}>{this.props.title}:</label>
                <input id={this.props.id} type={this.props.type} className='form-control' placeholder='enter your information' value={this.props.email}
                    onInput={evt => this.setState({ email: evt.target.value })} />
            </div>
        );
    }
}