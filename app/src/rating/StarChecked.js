import React from 'react';

class StarChecked extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <i className="fas fa-star text-amber"></i>
        );
    }
}

export default StarChecked;