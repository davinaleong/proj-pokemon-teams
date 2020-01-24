import React from 'react';

import Title from './Title';
import Cards from './Cards';

class Generation extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <section className="container-gens">
                <Title text={this.props.generation.name} />
                <Cards
                    states={this.props.states}
                    site={this.props.site}
                    teams={this.props.generation.teams}
                    imageTypes={this.props.imageTypes}
                    truncate={this.props.truncate}
                    setPage={this.props.setPage}
                    setBreadcrumbs={this.props.setBreadcrumbs}
                    setTeam={this.props.setTeam}
                    getPokemon={this.props.getPokemon}
                    renderPokemonImage={this.props.renderPokemonImage} />
            </section>
        );
    }
}

export default Generation;