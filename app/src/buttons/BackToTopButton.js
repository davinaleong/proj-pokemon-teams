import React from 'react';

class BackToTopButton extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <button type="button" class="top" onClick={() => {window.location.href = './#top'}}>
                <i class="fas fa-chevron-up"></i>
            </button>
        );
    }
}

export default BackToTopButton;