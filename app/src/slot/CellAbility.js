import React from 'react';

import SlotTitle from './SlotTitle';

class CellAbility extends React.Component {
    constructor(props) {
        super(props);
    }

    renderAbility = (ability) => {
        const abilityData = this.props.getAbility(ability);
        if (!abilityData) {
            return null;
        }

        return abilityData.name;
    }

    render() {
        return (
            <div className="cell-ability">
                <SlotTitle title={'Ability'} />
                {this.renderAbility(this.props.ability)}
            </div>
        );
    }
}

export default CellAbility;