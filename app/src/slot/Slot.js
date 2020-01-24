import React from 'react';

import SlotName from './SlotName';
import SlotRole from './SlotRole';

class Slot extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="team-slot">
                <SlotName
                    name={this.props.slot.pokemon}/>
                <SlotRole
                    role={this.props.slot.name} />
            </div>
        );
    }
}

export default Slot;