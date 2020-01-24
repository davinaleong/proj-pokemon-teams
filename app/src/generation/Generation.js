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
                    teams={this.props.generation.teams}
                    truncate={this.props.truncate}
                    setPage={this.props.setPage}
                    setBreadcrumbs={this.props.setBreadcrumbs}
                    setTeam={this.props.setTeam}
                    getPokemonFromTeam={this.props.getPokemonFromTeam}
                    renderPokemonImage={this.props.renderPokemonImage} />
            </section>
        );
    }
}

export default Generation;