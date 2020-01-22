import React from 'react';

class Title extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <h3 className="card-title">{this.props.text}</h3>
        );
    }
}

export default Title;