import React from 'react';

import SlotTitle from './SlotTitle';
import IndividualValues from './IndividualValues';

class SlotIndividualValues extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="slot-individual-values">
                <SlotTitle title={'Individual Values'} />
                <IndividualValues
                    individualValues={this.props.individualValues}
                    getStat={this.props.getStat} />
            </div>
        );
    }
}

export default SlotIndividualValues;