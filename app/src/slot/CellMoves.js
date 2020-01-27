import React from 'react';

import SlotTitle from './SlotTitle';

class CellMoves extends React.Component {
    constructor(props) {
        super(props);
    }

    renderMoves = (moves) => {
        const lists = [];
        moves.forEach((list, i) => {
            const items = [];
            list.forEach((move, j) => {
                const moveData = this.props.getMove(move);
                if (moveData) {
                    items.push(
                        <li key={'m'+i+j} className={'text-'+moveData.type.toLowerCase()}>{moveData.name}</li>
                    );
                }
            });
            lists.push(
                <ul key={'ml'+i} className="moves">{items}</ul>
            );
        });
        return lists;
    }

    render() {
        return (
            <div className="cell-moves">
                <SlotTitle title={'Moves'} />
                {this.renderMoves(this.props.moves)}
            </div>
        );
    }
}

export default CellMoves;