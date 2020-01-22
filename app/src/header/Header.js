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
                <Title title={this.props.site.title} />
                <Breadcrumbs
                    breadcrumbs={this.props.breadcrumbs}
                    gotoPage={this.props.gotoPage} />
                <Copyright copyright={this.props.site.copyright} />
            </header>
        );
    }
}

export default Header;