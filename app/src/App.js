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

  renderPokemonImage = (name, type) => {
    const pokemon = this.getPokemon(name);

    if (!pokemon) {
      return null;
    }

    switch(type) {
      case this.props.imageTypes.SPRITE:
        return <PokemonSprite
          folder={this.props.site.assets.pokemon.sprites}
          filename={pokemon.images.sprite}
          alt={pokemon.name}
        />;

      case this.props.imageTypes.ANIMATED:
        return <PokemonSprite
          folder={this.props.site.assets.pokemon.sprites}
          filename={pokemon.images.animated}
          alt={pokemon.name}
        />;

      case this.props.imageTypes.ICON:
        return <PokemonIcon
          folder={this.props.site.assets.pokemon.icons}
          filename={pokemon.images.icon}
          alt={pokemon.name}
        />;

      default:
        return null;
    }
  }

  getItem = (name) => {
    return this.getObjectFromArray(this.props.items, name);
  }

  renderItemImage = (name) => {
    const item = this.getItem(name);

    if (!item) {
      return null;
    }

    return <ItemSprite
      folder={this.props.site.assets.items}
      filename={item.image}
      alt={item.name}
    />
  }

  render() {
    return (
      <div>
        <Header
          site={this.props.site}
          breadcrumbs={this.state.breadcrumbs}
          gotoPage={this.gotoPage} />

        {this.renderPokemonImage('Pikachu', this.props.imageTypes.ANIMATED)}
        {this.renderPokemonImage('Pikachu', this.props.imageTypes.SPRITE)}
        {this.renderPokemonImage('Pikachu', this.props.imageTypes.ICON)}

        {this.renderItemImage('Choice Band')}
      </div>
    );
  }
}

export default App;
