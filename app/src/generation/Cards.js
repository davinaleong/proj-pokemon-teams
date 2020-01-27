import React from 'react';

import Card from '../card/Card';

class Cards extends React.Component {
    constructor(props) {
        super(props);
    }

    renderCards = (teams) => {
        const cards = [];
        teams.forEach((team, index) => {
            cards.push(
                <Card
                    key={'c'+index}
                    states={this.props.states}
                    site={this.props.site}
                    team={team}
                    imageTypes={this.props.imageTypes}
                    truncate={this.props.truncate}
                    setPage={this.props.setPage}
                    setBreadcrumbs={this.props.setBreadcrumbs}
                    setTeam={this.props.setTeam}
                    getPokemon={this.props.getPokemon}
                    renderPokemonImage={this.props.renderPokemonImage} />
            );
        });
        return cards;
    }

    render() {
        return (
            <div className="container-gens-cards">
                {this.renderCards(this.props.teams)}
            </div>
        );
    }
}

export default Cards;