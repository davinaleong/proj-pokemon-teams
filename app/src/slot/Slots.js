import React from 'react';

class Slots extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const slots = [];

        return (
            <section className="container-team-slots">
                {slots}
            </section>
        );
    }
}

export default Slots;