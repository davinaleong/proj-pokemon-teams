import React from 'react';

class CellImage extends React.Component {
    constructor(props) {
        super(props);
    }

    renderImage = (pokemon, imageType) => {
        return this.props.renderPokemonImage(pokemon, imageType, 'pi');
    }

    render() {
        return (
            <div className="cell-image">
                {this.renderImage(this.props.pokemon, this.props.imageTypes.ANIMATED)}
            </div>
        );
    }
}

export default CellImage;