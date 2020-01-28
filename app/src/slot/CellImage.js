import React from 'react';

import CellAbility from './CellAbility';
import CellTypes from './CellTypes';

class CellImage extends React.Component {
    constructor(props) {
        super(props);
    }

    renderImage = (pokemon, imageType) => {
        return this.props.renderPokemonImage(pokemon, imageType, 'pi');
    }

    render() {
        return (
            <div className="cell-image">
                {this.renderImage(this.props.slot.pokemon, this.props.imageTypes.ANIMATED)}
                <CellTypes
                    pokemon={this.props.slot.pokemon}
                    getPokemon={this.props.getPokemon}
                    getType={this.props.getType} />
                <CellAbility
                    ability={this.props.slot.ability}
                    getAbility={this.props.getAbility} />
            </div>
        );
    }
}

export default CellImage;