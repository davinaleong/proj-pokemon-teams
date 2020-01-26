import React from 'react';

class EffortValues extends React.Component {
    constructor(props) {
        super(props);
    }

    renderItems = (effortValues) => {
        const items = [];

        effortValues.forEach((effortValue, index) => {
            const value = effortValue.substring(0, effortValue.indexOf(' '));
            const acronym = effortValue.substring(effortValue.indexOf(' ') + 1, effortValue.length);
            const stat = this.props.getStat(acronym).name;

            items.push(
                <li key={'ev'+index}>{value} <span title={stat}>{acronym}</span></li>
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