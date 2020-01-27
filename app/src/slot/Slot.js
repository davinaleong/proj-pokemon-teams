import React from 'react';

import SlotName from './SlotName';
import SlotRole from './SlotRole';
import PokemonImages from './PokemonImages';
import SlotNature from './SlotNature';
import SlotEffortValues from './SlotEffortValues';
import SlotIndividualValues from './SlotIndividualValues';
import SlotMovesItem from './SlotMovesItem';

class Slot extends React.Component {
    constructor(props) {
        super(props);
    }

    renderIndividualValues = (individualValues) => {
        if (!individualValues) {
            return null;
        }

        return (
            <SlotIndividualValues
                individualValues={this.props.slot.individualValues}
                getStat={this.props.getStat} />
        );
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
                <SlotEffortValues
                    effortValues={this.props.slot.effortValues}
                    getStat={this.props.getStat} />
                {this.renderIndividualValues(this.props.slot.individualValues)}
                <SlotMovesItem
                    moves={this.props.slot.moves}
                    item={this.props.slot.item}
                    getItem={this.props.getItem}
                    renderItemImage={this.props.renderItemImage} />
            </div>
        );
    }
}

export default Slot;