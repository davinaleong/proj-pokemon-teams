import React from 'react';

class EffortValues extends React.Component {
    constructor(props) {
        super(props);
    }

    renderItems = (values) => {
        const items = [];

        values.forEach((value, index) => {
            items.push(
                <li key={'ev'+index}>{value}</li>
            );
        });

        return items;
    }

    render() {
        return (
            <ul className="effort-values">
                {this.renderItems(this.props.effortValues)}
            </ul>
        );
    }
}

export default EffortValues;