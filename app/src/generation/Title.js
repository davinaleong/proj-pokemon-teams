import React from 'react';

class Title extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <h2 className="gens-title">Gen {this.props.text}</h2>
        );
    }
}

export default Title;