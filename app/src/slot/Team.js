import React from 'react';

import Title from './Title';

class Team extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <section className="container-team">
                <Title text={this.props.team.name} />
            </section>
        );
    }
}

export default Team;