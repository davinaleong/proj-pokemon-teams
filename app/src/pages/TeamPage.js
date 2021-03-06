import React from 'react';

import Team from './../slot/Team';

class TeamPage extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <main>
                <Team
                    site={this.props.site}
                    team={this.props.team}
                    imageTypes={this.props.imageTypes}
                    getPokemon={this.props.getPokemon}
                    renderPokemonImage={this.props.renderPokemonImage}
                    getType={this.props.getType}
                    getAbility={this.props.getAbility}
                    renderItemImage={this.props.renderItemImage}
                    getNature={this.props.getNature}
                    getStat={this.props.getStat}
                    getMove={this.props.getMove} />
            </main>
        );
    }
}

export default TeamPage;