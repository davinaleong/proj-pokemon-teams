import React from 'react';

import SlotTitle from './SlotTitle';

class CellItem extends React.Component {
    constructor(props) {
        super(props);
    }

    renderItem = (item) => {
        const itemData = this.props.getItem(item);
        return this.props.renderItemImage(item);
    }

    render() {
        return (
            <div className="cell-item">
                <SlotTitle title={'Item'} />
                {this.renderItem(this.props.item)}
            </div>
        );
    }
}

export default CellItem;