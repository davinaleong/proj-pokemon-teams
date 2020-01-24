import React from 'react';

import BreadcrumbItem from './BreadcrumbItem';
import BreadcrumbLink from './BreadcrumbLink';

class Breadcrumbs extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const items = [];
        this.props.breadcrumbs.forEach((breadcrumb, index) => {
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

        return (
            <ul className="breadcrumb">
                {items}
            </ul>
        );
    }
}

export default Breadcrumbs;