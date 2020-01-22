import React from 'react';

class Copyright extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <p className="text-center text-muted">{this.props.copyright.name} &copy; {this.props.copyright.author}, {this.props.copyright.year}</p>
        );
    }
}

export default Copyright;