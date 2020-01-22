import React from 'react';

import Title from './Title';

class Generation extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <section className="container-gens">
                <Title text={this.props.generation.name} />
            </section>
        );
    }
}

export default Generation;