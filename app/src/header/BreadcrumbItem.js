import React from 'react';

class BreadcrumbItem extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <li>{this.props.item.name}</li>
        );
    }
}

export default BreadcrumbItem;