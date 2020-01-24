import React from 'react';

class BreadcrumbLink extends React.Component {
    constructor(props) {
        super(props);
    }

    onClickLink = () => {
        this.props.setPage(this.props.states.HOME);
        this.props.setBreadcrumbs('Home');
        this.props.setTeam(null);
    }

    render() {
        return (
            <li>
                <button className="link" link="button" onClick={() => {this.onClickLink()}}>
                    {this.props.item.name}
                </button>
            </li>
        );
    }
}

export default BreadcrumbLink;