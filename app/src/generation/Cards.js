import React from 'react';

import Card from '../card/Card';

class Cards extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const teams = [];
        this.props.teams.forEach((team, index) => {
            teams.push(
                <Card
                    key={'c'+index}
                    team={team}
                    pokemon={this.props.getPokemonFromTeam(team)}
                    truncate={this.props.truncate}
                    renderPokemonImage={this.props.renderPokemonImage} />
            );
        });

        return (
            <div className="container-gens-cards">{teams}</div>
        );
    }
}

export default Cards;