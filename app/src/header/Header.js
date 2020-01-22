import React from 'react';

import Title from './Title';
import Copyright from './Copyright';

class Header extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return(
            <header>
                <Title title={this.props.site.title} />
                <Copyright copyright={this.props.site.copyright} />
            </header>
        );
    }
}

export default Header;