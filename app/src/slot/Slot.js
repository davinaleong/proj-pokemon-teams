import React from 'react';

import SlotName from './SlotName';
import SlotRole from './SlotRole';
import PokemonImages from './PokemonImages';
import SlotNature from './SlotNature';

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
                <PokemonImages />
                <SlotNature
                    nature={this.props.slot.nature}
                    getNature={this.props.getNature}
                    getStat={this.props.getStat} />
            </div>
        );
    }
}

export default Slot;