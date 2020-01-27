import React from 'react';

import Slot from './Slot';

class Slots extends React.Component {
    constructor(props) {
        super(props);
    }

    renderSlots = (slots) => {
        const slts = [];
        slots.forEach((slot, index) => {
            slts.push(
                <Slot
                    key={'sl'+index}
                    slot={slot}
                    imageTypes={this.props.imageTypes}
                    getPokemon={this.props.getPokemon}
                    renderPokemonImage={this.props.renderPokemonImage}
                    getType={this.props.getType}
                    getAbility={this.props.getAbility}
                    getItem={this.props.getItem}
                    renderItemImage={this.props.renderItemImage}
                    getNature={this.props.getNature}
                    getStat={this.props.getStat} />
            );
        });

        return slts;
    }

    render() {
        return (
            <section className="container-team-slots">
                {this.renderSlots(this.props.slots)}
            </section>
        );
    }
}

export default Slots;