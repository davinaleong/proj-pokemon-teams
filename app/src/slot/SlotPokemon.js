import React from 'react';

import CellImage from './CellImage';

class SlotPokemon extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="slot-pokemon">
                <CellImage
                    slot={this.props.slot}
                    imageTypes={this.props.imageTypes}
                    getPokemon={this.props.getPokemon}
                    renderPokemonImage={this.props.renderPokemonImage}
                    getType={this.props.getType}
                    getAbility={this.props.getAbility} />
            </div>
        );
    }
}

export default SlotPokemon;