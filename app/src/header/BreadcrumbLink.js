import React from 'react';

class BreadcrumbLink extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <li>
                <button className="link" link="button" onClick={() => {this.props.gotoPage(this.props.item.state)}}>{this.props.item.name}</button>
            </li>
        );
    }
}

export default BreadcrumbLink;