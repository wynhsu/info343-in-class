import React from 'react';

export default class ChannelView extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        };
    }

    render() {
        return (
            <div>
                <h1>#{this.props.match.params.chanName}</h1>
            </div>
        );
    }
}