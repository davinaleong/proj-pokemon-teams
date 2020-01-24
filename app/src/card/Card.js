import React from 'react';

import Title from './Title';
import Gen from './Gen';
import Pokemon from './Pokemon';
import Rating from './Rating';

class Card extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        let pokemon = null;
        if (this.props.team.slots) {
            pokemon = <Pokemon
                pokemon={this.props.pokemon}
                renderPokemonImage={this.props.renderPokemonImage} />
        }
        
        return (
            <div className="team-card">
                <Title
                    states={this.props.states}
                    team={this.props.team}
                    truncate={this.props.truncate}
                    setPage={this.props.setPage}
                    setBreadcrumbs={this.props.setBreadcrumbs}
                    setTeam={this.props.setTeam} />
                <Gen gen={this.props.team.gen} />
                {pokemon}
                <Rating rating={this.props.team.rating} max={this.props.site.rating.max} />
            </div>
        );
    }
}

export default Card;