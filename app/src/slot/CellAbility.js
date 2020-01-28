import React from 'react';

import abilities from '../data/abilities';

class CellAbility extends React.Component {
    constructor(props) {
        super(props);
    }

    renderAbility = (ability) => {
        const abilityData = this.props.getAbility(ability);
        console.log(ability, abilityData);
        if (!abilityData) {
            return null;
        }

        return abilityData.name;
    }

    render() {
        return (
            <p className="cell-ability">
                {this.renderAbility(this.props.ability)}
            </p>
        );
    }
}

export default CellAbility;