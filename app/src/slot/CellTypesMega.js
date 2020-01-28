import React from 'react';

class CellTypesMega extends React.Component {
    constructor(props) {
        super(props);
    }

    renderTypes = (pokemon, mega) => {
        const pokemonData = this.props.getPokemon(pokemon);
        const megaData = pokemonData.megas.filter(mega => mega.name === mega.name)[0];

        const types = [];
        megaData.types.forEach(type => {
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
                {this.renderTypes(this.props.pokemon, this.props.mega)}
            </p>
        );
    }
}

export default CellTypesMega;