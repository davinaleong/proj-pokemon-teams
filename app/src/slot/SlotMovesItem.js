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
                <CellMoves />
                <CellItem
                    item={this.props.item}
                    getItem={this.props.getItem}
                    renderItemImage={this.props.renderItemImage} />
            </div>
        );
    }
}

export default SlotMovesItem;