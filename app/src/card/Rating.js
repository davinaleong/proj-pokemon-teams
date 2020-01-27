import React from 'react';

import Star from './../rating/Star';
import StarUnchecked from './../rating/StarChecked';
import Unrated from './../rating/Unrated';

class Rating extends React.Component {
    constructor(props) {
        super(props);
    }

    renderRating = (rating) => {
        let render = <Unrated />;
        if (rating && !isNaN(rating)) {
            if (rating > this.props.max) {
                rating = this.props.max;
            }

            render = [];
            for (let i = 0; i < rating; ++i) {
                render.push(
                    <StarUnchecked key={'su'+i} />
                );
            }

            const checked = this.props.max - rating;
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
            <div className="card-rating">
                {this.renderRating(this.props.rating)}
            </div>
        );
    }
}

export default Rating;