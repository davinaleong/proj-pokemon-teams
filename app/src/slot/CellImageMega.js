import React from 'react';

import CellAbility from './CellAbility';
import CellTypes from './CellTypes';

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
                    this.props.imageTypes.ANIMATED),
                    this.props.slot.mega
                }
                <CellTypes
                    pokemon={this.props.slot.pokemon}
                    getPokemon={this.props.getPokemon}
                    getType={this.props.getType} />
                <CellAbility
                    ability={this.props.slot.mega.ability}
                    getAbility={this.props.getAbility} />
            </div>
        );
    }
}

export default CellImageMega;