import React from 'react';

import Title from './Title';
import Breadcrumbs from './Breadcrumbs';
import Copyright from './Copyright';

class Header extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return(
            <header>
                <Title text={this.props.site.title} />
                <Breadcrumbs
                    states={this.props.states}
                    breadcrumbs={this.props.breadcrumbs}
                    setPage={this.props.setPage}
                    setBreadcrumbs={this.props.setBreadcrumbs}
                    setTeam={this.props.setTeam} />
                <Copyright copyright={this.props.site.copyright} />
            </header>
        );
    }
}

export default Header;