import React from 'react';

class SlotName extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <h3 className="slot-name">{this.props.name}</h3>
        );
    }
}

export default SlotName;