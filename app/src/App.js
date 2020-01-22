import React from 'react';

import Header from './header/Header';
import PokemonIcon from './images/PokemonIcon';
import PokemonSprite from './images/PokemonSprite';
import ItemSprite from './images/ItemSprite';

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

  getObjectFromArray = (array, name) => {
    return array.filter(item => item.name === name)[0];
  }

  getPokemon = (name) => {
    return this.getObjectFromArray(this.props.pokemon, name);
  }

  render() {
    return (
      <div>
        <Header
          site={this.props.site}
          breadcrumbs={this.state.breadcrumbs}
          gotoPage={this.gotoPage} />

        <PokemonIcon folder={this.props.site.assets.pokemon.icons} filename={'pikachu-icon.png'} alt={'Pikachu icon'} />
        <PokemonSprite folder={this.props.site.assets.pokemon.sprites} filename={'pikachu.gif'} alt={'Pikachu'} />
        <ItemSprite folder={this.props.site.assets.pokemon.items} filename={'life-orb.png'} alt={'Life Orb'}/>
      </div>
    );
  }
}

export default App;
