import React from 'react';

class PokemonIcon extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <img className="pokemon-icon" src={this.props.folder + this.props.filename} alt={this.props.name + ' icon' || 'Pokémon icon'} />
        );
    }
}

export default PokemonIcon;