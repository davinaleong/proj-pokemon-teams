import React from 'react';

import Header from './header/Header';
import PokemonIcon from './images/PokemonIcon';
import PokemonSprite from './images/PokemonSprite';
import ItemSprite from './images/ItemSprite';
import GenerationsPage from './pages/GenerationsPage';

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

    if (!pokemon || !pokemon.images) {
      switch(type) {
        case this.props.imageTypes.SPRITE:
          return <PokemonSprite
            folder={this.props.site.assets.defaults.pokemon.sprites}
            filename={''}
            alt={'Pokémon sprite'}
          />;
  
        case this.props.imageTypes.ANIMATED:
          return <PokemonSprite
            folder={this.props.site.assets.defaults.pokemon.sprites}
            filename={''}
            alt={'Pokémon sprite'}
          />;
  
        case this.props.imageTypes.ICON:
          return <PokemonIcon
            folder={this.props.site.assets.defaults.pokemon.icons}
            filename={''}
            alt={'Pokémon icon'}
          />;
  
        default:
          return null;
      }
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
      return <ItemSprite
        folder={this.props.site.assets.defaults.item}
        filename={''}
        alt={'Item sprite'}
      />;
    }

    return <ItemSprite
      folder={this.props.site.assets.items}
      filename={item.image}
      alt={item.name}
    />;
  }

  renderPage = (page) => {
    switch(page) {
      case this.props.states.HOME:
        return <GenerationsPage generations={this.props.generations} />;

      case this.props.states.TEAMS:
        // return <TeamsPage />;
        return null;

      default:
        return null;
    }
  }

  render() {
    return (
      <div>
        <Header
          site={this.props.site}
          breadcrumbs={this.state.breadcrumbs}
          gotoPage={this.gotoPage} />

        {this.renderPage(this.state.page.current)}
      </div>
    );
  }
}

export default App;
