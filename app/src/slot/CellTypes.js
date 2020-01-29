import React from 'react';

import SlotTitle from './SlotTitle';

class CellTypes extends React.Component {
    constructor(props) {
        super(props);
    }

    renderTypes = (pokemon) => {
        const pokemonData = this.props.getPokemon(pokemon);
        const types = [];
        pokemonData.types.forEach(type => {
            types.push(this.props.getType(type));
        });
        
        if (types.length > 1) {
            return (
                <strong>
                    <span className={'text-'+types[0].name.toLowerCase()}>{types[0].name}</span>/<span className={'text-'+types[1].name.toLowerCase()}>{types[1].name}</span>
                </strong>
            );
        }

        return (
            <strong>
                <span className={'text-'+types[0].name.toLowerCase()}>{types[0].name}</span>
            </strong>
        );
    }

    render() {
        return (
            <div className="cell-types">
                <SlotTitle title={'Types'} />
                {this.renderTypes(this.props.pokemon)}
            </div>
        );
    }
}

export default CellTypes;