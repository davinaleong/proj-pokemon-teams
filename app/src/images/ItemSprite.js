import React from 'react';

class ItemSprite extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <img src={this.props.folder+this.props.filename} alt={this.props.alt || 'Item sprite'} />
        );
    }
}

export default ItemSprite;