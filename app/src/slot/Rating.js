import React from 'react';

import Star from './../rating/Star';
import StarUnchecked from './../rating/StarChecked';
import Unrated from './../rating/Unrated';

class Rating extends React.Component {
    constructor(props) {
        super(props);
    }

    renderRating = (rating, max) => {
        let render = <Unrated />
        if (rating && !isNaN(rating)) {
            if (rating > max) {
                rating = max;
            }

            render = [];
            for (let i = 0; i < rating; ++i) {
                render.push(
                    <StarUnchecked key={'su'+i} />
                );
            }

            const checked = max - rating;
            for (let j = 0; j < checked; ++j) {
                render.push(
                    <Star key={'s'+j} />
                );
            }
        }
        return render;
    }

    render() {
        return (
            <div className="slot-rating">
                {this.renderRating(this.props.rating, this.props.max)}
            </div>
        );
    }
}

export default Rating;