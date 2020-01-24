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
                    states={this.props.states}
                    site={this.props.site}
                    team={team}
                    pokemon={this.props.getPokemonFromTeam(team)}
                    truncate={this.props.truncate}
                    setPage={this.props.setPage}
                    setBreadcrumbs={this.props.setBreadcrumbs}
                    setTeam={this.props.setTeam}
                    renderPokemonImage={this.props.renderPokemonImage} />
            );
        });

        return (
            <div className="container-gens-cards">{teams}</div>
        );
    }
}

export default Cards;