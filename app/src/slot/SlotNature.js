import React from 'react';

import SlotTitle from './SlotTitle';

class SlotNature extends React.Component {
    constructor(props) {
        super(props);
    }

    renderNature = (name) => {
        const nature = this.props.getNature(name);

        if (nature.stats.positive === '' && nature.stats.negative === '') {
            return (
                <p>{nature.name}</p>
            );
        } else {
            const stat = {
                positive: this.props.getStat(nature.stats.positive).name,
                negative: this.props.getStat(nature.stats.negative).name
            };
            return <p>
                {nature.name} (+<span title={stat.positive}>{nature.stats.positive}</span>, -<span title={stat.negative}>{nature.stats.negative}</span>)
            </p>;
        }
    }

    render() {
        return (
            <div className="slot-nature">
                <SlotTitle title={'Nature'} />
                {this.renderNature(this.props.nature)}
            </div>
        );
    }
}

export default SlotNature;