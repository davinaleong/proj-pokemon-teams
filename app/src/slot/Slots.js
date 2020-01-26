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

        return (
            <section className="container-team-slots">
                {slots}
            </section>
        );
    }
}

export default Slots;