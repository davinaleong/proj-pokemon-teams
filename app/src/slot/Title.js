import React from 'react';

class Title extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <h2 className="team-title">{this.props.text}</h2>
        );
    }
}

export default Title;