import React from 'react';

import BreadcrumbItem from './BreadcrumbItem';
import BreadcrumbLink from './BreadcrumbLink';

class Breadcrumbs extends React.Component {
    constructor(props) {
        super(props);
    }

    renderItems = (breadcrumbs) => {
        const items = [];
        breadcrumbs.forEach((breadcrumb, index) => {
            if (breadcrumb.state) {
                items.push(
                    <BreadcrumbLink
                        key={'b'+index}
                        states={this.props.states}
                        item={breadcrumb}
                        setPage={this.props.setPage}
                        setBreadcrumbs={this.props.setBreadcrumbs}
                        setTeam={this.props.setTeam} />
                );
            } else {
                items.push(
                    <BreadcrumbItem
                        key={'b'+index}
                        item={breadcrumb} />
                );
            }
        });
        return items;
    }

    render() {
        return (
            <ul className="breadcrumb">
                {this.renderItems(this.props.breadcrumbs)}
            </ul>
        );
    }
}

export default Breadcrumbs;