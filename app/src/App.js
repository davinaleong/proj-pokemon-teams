import React from 'react';

import Header from './header/Header';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      breadcrumbs: [
        {"name": "Home", "state": this.props.HOME},
        {"name": "Kanto Region"}
      ]
    };
  }

  render() {
    return (
      <div>
        <Header site={this.props.site} breadcrumbs={this.state.breadcrumbs} />
      </div>
    );
  }
}

export default App;
