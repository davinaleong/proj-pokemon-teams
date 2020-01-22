import React from 'react';

import Generation from './../generation/Generation';

class GenerationsPage extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const generations = [];
        this.props.generations.forEach((generation, index) => {
            generations.push(
                <Generation key={'g'+index} generation={generation} />
            );
        });

        return (
            <main>
                {generations}
            </main>
        );
    }
}

export default GenerationsPage;