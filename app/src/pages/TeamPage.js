import React from 'react';

import Team from './../slot/Team';
import Rating from './../card/Rating';

class TeamPage extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <main>
                <Team team={this.props.team}/>
                <Rating rating={this.props.team.rating} max={this.props.site.rating.max} />
            </main>
        );
    }
}

export default TeamPage;