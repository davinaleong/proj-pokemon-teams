import React from 'react';

class SlotRole extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <h4 className="slot-role">{this.props.role}</h4>
        );
    }
}

export default SlotRole;