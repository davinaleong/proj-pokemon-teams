import React from 'react';

class BackToTopButton extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <button type="button" className="top" onClick={() => {window.location.href = './#top'}}>
                <i className="fas fa-chevron-up"></i>
            </button>
        );
    }
}

export default BackToTopButton;