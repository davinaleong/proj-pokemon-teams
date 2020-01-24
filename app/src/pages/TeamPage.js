import React from 'react';

import Team from './../slot/Team';

class TeamPage extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <main>
                <Team
                    site={this.props.site}
                    team={this.props.team}/>
            </main>
        );
    }
}

export default TeamPage;