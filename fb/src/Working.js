import React from 'react';
import './Working.css';

export default class Working extends React.Component {
    render() {
        let styles = {
            backgroundColor: this.props.backgroundColor || '#333'
        };
        return (
            <div style={styles} className='working'></div>
        );
    }
}