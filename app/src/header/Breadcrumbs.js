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
                    <BreadcrumbLink key={'b'+index} item={breadcrumb} />
                );
            } else {
                items.push(
                    <BreadcrumbItem key={'b'+index} item={breadcrumb} />
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