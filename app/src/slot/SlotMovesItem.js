import React from 'react';

import CellMoves from './CellMoves';
import CellItem from './CellItem';

class SlotMovesItem extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="slot-moves-item">
                <CellMoves
                    moves={this.props.moves}
                    getMove={this.props.getMove} />
                <CellItem
                    item={this.props.item}
                    renderItemImage={this.props.renderItemImage} />
            </div>
        );
    }
}

export default SlotMovesItem;