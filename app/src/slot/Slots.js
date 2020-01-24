import React from 'react';

import Slot from './Slot';

class Slots extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const slots = [];
        this.props.slots.forEach((slot, index) => {
            slots.push(
                <Slot
                    key={'sl'+index}
                    slot={slot} />
            );
        });

        return (
            <section className="container-team-slots">
                {slots}
            </section>
        );
    }
}

export default Slots;