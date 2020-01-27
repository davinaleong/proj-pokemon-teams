import React from 'react';

import Title from './Title';
import Subcontent from './Subcontent';
import Slots from './Slots';

class Team extends React.Component {
    constructor(props) {
        super(props);
    }

    renderSlots = (team) => {
        if (team.slots && Array.isArray(team.slots)) {
            return <Slots
                slots={this.props.team.slots}
                imageTypes={this.props.imageTypes}
                getPokemon={this.props.getPokemon}
                renderPokemonImage={this.props.renderPokemonImage}
                getType={this.props.getType}
                getAbility={this.props.getAbility}
                renderItemImage={this.props.renderItemImage}
                getNature={this.props.getNature}
                getStat={this.props.getStat}
                getMove={this.props.getMove} />;
        } else {
            return null;
        }
    }

    render() {
        return (
            <section className="container-team">
                <Title text={this.props.team.name} />
                <Subcontent
                    site={this.props.site}
                    team={this.props.team} />
                {this.renderSlots(this.props.team)}
            </section>
        );
    }
}

export default Team;