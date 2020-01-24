import React from 'react';

class Title extends React.Component {
    constructor(props) {
        super(props);
    }

    onClickTitle = (team) => {
        this.props.setPage(this.props.states.TEAM);
        this.props.setBreadcrumbs(team.name);
        this.props.setTeam(team);
    }

    render() {
        return (
            <h3 className="card-title" title={this.props.team.name}>
                <button className="link" type="button" onClick={() => this.onClickTitle(this.props.team)}>{this.props.truncate(this.props.team.name)}</button>
            </h3>
        );
    }
}

export default Title;