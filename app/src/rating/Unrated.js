import React from 'react';

class Unrated extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <span className="text-muted">Unrated</span>
        );
    }
}

export default Unrated;