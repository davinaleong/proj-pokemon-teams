import React from 'react';

class Pokemon extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const icons = [];
        this.props.pokemon.forEach((creature, index) => {
            icons.push(
                this.props.renderPokemonImage(creature.name, this.props.imageTypes.ICON, 'pi'+index)
            );
        });

        return (
            <div className="card-pokemon">{icons}</div>
        );
    }
}

export default Pokemon;