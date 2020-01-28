import React from 'react';

import CellImage from './CellImage';
import CellArrow from './CellArrow';
import CellImageMega from './CellImageMega';

class SlotPokemon extends React.Component {
    constructor(props) {
        super(props);
    }

    renderChevron = (mega) => {
        if (!mega) {
            return null;
        }

        return <CellArrow />;
    }

    renderMega = (mega) => {
        if (!mega) {
            return null;
        }

        return <CellImageMega
            slot={this.props.slot}
            imageTypes={this.props.imageTypes}
            getPokemon={this.props.getPokemon}
            renderPokemonImage={this.props.renderPokemonImage}
            getType={this.props.getType}
            getAbility={this.props.getAbility} />;
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
                {this.renderChevron(this.props.slot.mega)}
                {this.renderMega(this.props.slot.mega)}
            </div>
        );
    }
}

export default SlotPokemon;