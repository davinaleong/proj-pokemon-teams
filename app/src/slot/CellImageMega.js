import React from 'react';

import CellTypesMega from './CellTypesMega';
import CellAbilityMega from './CellAbilityMega';

class CellImageMega extends React.Component {
    constructor(props) {
        super(props);
    }

    renderImage = (pokemon, imageType, mega) => {
        return this.props.renderPokemonImage(pokemon, imageType, 'pi', mega);
    }

    render() {
        return (
            <div className="cell-image-mega">
                {this.renderImage(
                    this.props.slot.pokemon,
                    this.props.imageTypes.ANIMATED,
                    this.props.slot.mega)}
                <CellTypesMega
                    pokemon={this.props.slot.pokemon}
                    mega={this.props.slot.mega}
                    getPokemon={this.props.getPokemon}
                    getType={this.props.getType} />
                <CellAbilityMega
                    ability={this.props.slot.mega.ability}
                    getAbility={this.props.getAbility} />
            </div>
        );
    }
}

export default CellImageMega;