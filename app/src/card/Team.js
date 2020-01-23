import React from 'react';

import Title from './Title';
import Gen from './Gen';
import Pokemon from './Pokemon';
import Rating from './Rating';

class Team extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="team-card">
                <Title text={this.props.team.name} />
                <Gen gen={this.props.team.gen} />
                <Pokemon pokemon={this.props.pokemon} renderPokemonImage={this.renderPokemonImage} />
                <Rating rating={this.props.team.rating} />
            </div>
        );
    }
}

export default Team;