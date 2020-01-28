import React from 'react';

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
            <p className="cell-types">
                {this.renderTypes(this.props.pokemon)}
            </p>
        );
    }
}

export default CellTypes;