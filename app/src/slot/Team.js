import React from 'react';

import Title from './Title';
import Subcontent from './Subcontent';

class Team extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <section className="container-team">
                <Title text={this.props.team.name} />
                <Subcontent
                    site={this.props.site}
                    team={this.props.team} />
            </section>
        );
    }
}

export default Team;