import React from 'react';

import SlotTitle from './SlotTitle';
import EffortValues from './EffiortValues';

class SlotEffortValues extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="slot-effort-values">
                <SlotTitle title={'Effort Values'} />
                <EffortValues
                    effortValues={this.props.effortValues}
                    getStat={this.props.getStat} />
            </div>
        );
    }
}

export default SlotEffortValues;