import React from 'react';

import Gen from './Gen';
import Rating from './Rating';

class Subcontent extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="team-subcontent">
                <Gen gen={this.props.team.generation} />
                <Rating
                    rating={this.props.team.rating}
                    max={this.props.site.rating.max} />
            </div>
        );
    }
}

export default Subcontent;