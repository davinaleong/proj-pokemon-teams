import React from 'react';

class SlotTitle extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <h5 className="slot-title">{this.props.title}</h5>
        );
    }
}

export default SlotTitle;