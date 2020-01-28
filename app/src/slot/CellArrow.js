import React from 'react';

class CellArrow extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="cell-arrow text-secondary">
                <i className="fas fa-chevron-right fa-2x"></i>
            </div>
        );
    }
}

export default CellArrow;