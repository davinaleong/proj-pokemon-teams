import React from 'react';

class IndividualValues extends React.Component {
    constructor(props) {
        super(props);
    }

    renderItems = (individualValues) => {
        const items = [];

        individualValues.forEach((individualValue, index) => {
            const value = individualValue.substring(0, individualValue.indexOf(' '));
            const acronym = individualValue.substring(individualValue.indexOf(' ') + 1, individualValue.length);
            const stat = this.props.getStat(acronym).name;

            items.push(
                <li key={'iv'+index}>{value} <span title={stat}>{acronym}</span></li>
            );
        });

        return items;
    }

    render() {
        return (
            <ul className="individual-values">
                {this.renderItems(this.props.individualValues)}
            </ul>
        );
    }
}

export default IndividualValues;