import React from 'react';

import SlotTitle from './SlotTitle';

class SlotIndividualValues extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="slot-individual-values">
                <SlotTitle title={'Individual Values'} />
            </div>
        );
    }
}

export default SlotIndividualValues;