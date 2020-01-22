import React from 'react';

import Header from './header/Header';
import Star from './rating/Star';
import StarChecked from './rating/StarChecked';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      page: {
        current: this.props.states.HOME,
        previous: this.props.states.HOME
      },
      breadcrumbs: [{"name": "Home"}]
    };
  }

  gotoPage = (state) => {
    const previous = this.state.page.current;
    this.setState({
      page: {
        current: state,
        previous: previous
      }
    });
  }

  setBreadcrumbs = (name) => {
    if (name === 'Home') {
      this.setState({
        breadcrumbs: [{"name": "Home"}]
      });
    } else {
      this.setState({
        breadcrumbs: [
          {"name": "Home", "state": this.props.states.HOME},
          {"name": "Kanto Region"}
        ]
      });
    }
  }

  render() {
    return (
      <div>
        <Header
          site={this.props.site}
          breadcrumbs={this.state.breadcrumbs}
          gotoPage={this.gotoPage} />

        <Star />
        <StarChecked />
      </div>
    );
  }
}

export default App;
