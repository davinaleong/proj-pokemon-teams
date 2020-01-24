import React from 'react';

import Generation from './../generation/Generation';

class GenerationsPage extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const generations = [];
        this.props.generations.forEach((generation, index) => {
            generations.push(
                <Generation
                    key={'g'+index}
                    states={this.props.states}
                    site={this.props.site}
                    generation={generation}
                    imageTypes={this.props.imageTypes}
                    truncate={this.props.truncate}
                    setPage={this.props.setPage}
                    setBreadcrumbs={this.props.setBreadcrumbs}
                    setTeam={this.props.setTeam}
                    getPokemon={this.props.getPokemon}
                    renderPokemonImage={this.props.renderPokemonImage} />
            );
        });

        return (
            <main>
                {generations}
            </main>
        );
    }
}

export default GenerationsPage;