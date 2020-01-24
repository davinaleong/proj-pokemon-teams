import React from 'react';

import imageTypes from './../data/imageTypes';

class Pokemon extends React.Component {
    constructor(props) {
        super(props);
    }

    getPokemonFromTeam = (team) => {
        if (!team.slots) {
            return null;
        }

        const pokemon = [];
        team.slots.forEach(slot => {
            pokemon.push(this.props.getPokemon(slot.pokemon));
        });
        return pokemon;
    }

    render() {
        const icons = [];
        const pokemon = this.getPokemonFromTeam(this.props.team);
        pokemon.forEach((creature, index) => {
            icons.push(
                this.props.renderPokemonImage(creature.name, imageTypes.ICON, 'pi'+index)
            );
        });

        return (
            <div className="card-pokemon">{icons}</div>
        );
    }
}

export default Pokemon;