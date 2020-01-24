import React from 'react';

class Gen extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <p className="slot-gen text-secondary">Gen {this.props.gen}</p>
        );
    }
}

export default Gen;