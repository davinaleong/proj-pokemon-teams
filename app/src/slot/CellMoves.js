import React from 'react';

import SlotTitle from './SlotTitle';

class CellMoves extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="cell-moves">
                <SlotTitle title={'Moves'} />
            </div>
        );
    }
}

export default CellMoves;