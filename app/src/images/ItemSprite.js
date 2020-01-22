import React from 'react';

class ItemSprite extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <img src={this.props.folder+this.props.filename} alt={this.props.name || 'Item sprite'} />
        );
    }
}

export default ItemSprite;