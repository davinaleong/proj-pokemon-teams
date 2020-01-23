import React from 'react';

class Title extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <h3 className="card-title" title={this.props.text}>
                <button className="link" type="button">{this.props.truncate(this.props.text)}</button>
            </h3>
        );
    }
}

export default Title;