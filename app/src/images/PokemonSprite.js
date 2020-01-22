import React from 'react';

class PokemonSprite extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <img src={this.props.folder+this.props.filename} alt={this.props.name || 'Pokemon sprite'} height="120px" />
        );
    }
}

export default PokemonSprite;