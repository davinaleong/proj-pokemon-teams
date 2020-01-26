import React from 'react';

import Title from './Title';
import Subcontent from './Subcontent';
import Slots from './Slots';

class Team extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        let slots = null;
        if (this.props.team.slots && Array.isArray(this.props.team.slots)) {
            slots = <Slots
                slots={this.props.team.slots}
                imageTypes={this.props.imageTypes}
                getPokemon={this.props.getPokemon}
                renderPokemonImage={this.props.renderPokemonImage}
                getType={this.props.getType}
                getAbility={this.props.getAbility}
                getItem={this.props.getItem}
                renderItemImage={this.props.renderItemImage}
                getNature={this.props.getNature}
                getStat={this.props.getStat} />;
        }

        return (
            <section className="container-team">
                <Title text={this.props.team.name} />
                <Subcontent
                    site={this.props.site}
                    team={this.props.team} />
                {slots}
            </section>
        );
    }
}

export default Team;