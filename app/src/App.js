import React from 'react';

import Header from './header/Header';
import PokemonIcon from './images/PokemonIcon';
import PokemonSprite from './images/PokemonSprite';
import ItemSprite from './images/ItemSprite';
import HomePage from './pages/HomePage';
import TeamPage from './pages/TeamPage';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      page: {
        current: this.props.states.HOME,
        previous: this.props.states.HOME
      },
      breadcrumbs: [{"name": "Home"}],
      team: null
    };
  }

  truncate = (string, length=14) => {
    const sub = string.substring(0, length);
    return sub + '\u2026';
  }

  setPage = (state) => {
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

  setTeam = (team) => {
    this.setState({
      team: team
    });
  }

  getObjectFromArray = (array, name) => {
    return array.filter(item => item.name === name)[0];
  }

  getPokemon = (name) => {
    return this.getObjectFromArray(this.props.pokemon, name);
  }

  renderPokemonImage = (name, type, key=null, mega=null) => {
    const pokemon = this.getPokemon(name);

    if (!pokemon || !pokemon.images) {
      switch(type) {
        case this.props.imageTypes.SPRITE:
          return <PokemonSprite
            key={key}
            folder={this.props.site.assets.defaults.pokemon.sprites}
            filename={''}
            alt={'Pokémon sprite'}
          />;
  
        case this.props.imageTypes.ANIMATED:
          return <PokemonSprite
            key={key}
            folder={this.props.site.assets.defaults.pokemon.sprites}
            filename={''}
            alt={'Pokémon sprite'}
          />;
  
        case this.props.imageTypes.ICON:
          return <PokemonIcon
            key={key}
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
        if (mega) {
          const megaPokemon = pokemon.megas[mega];

          return <PokemonSprite
            key={key}
            folder={this.props.site.assets.pokemon.sprites}
            filename={megaPokemon.sprite}
            alt={pokemon.name} />;
        }

        return <PokemonSprite
          key={key}
          folder={this.props.site.assets.pokemon.sprites}
          filename={pokemon.images.sprite}
          alt={pokemon.name} />;

      case this.props.imageTypes.ANIMATED:
        if (mega) {
          const megaPokemon = pokemon.megas[mega];

          return <PokemonSprite
            key={key}
            folder={this.props.site.assets.pokemon.sprites}
            filename={megaPokemon.animated}
            alt={pokemon.name} />;
        }

        return <PokemonSprite
          key={key}
          folder={this.props.site.assets.pokemon.sprites}
          filename={pokemon.images.animated}
          alt={pokemon.name} />;

      case this.props.imageTypes.ICON:
        return <PokemonIcon
          key={key}
          folder={this.props.site.assets.pokemon.icons}
          filename={pokemon.images.icon}
          alt={pokemon.name} />;

      default:
        return null;
    }
  }

  getItem = (name) => {
    return this.getObjectFromArray(this.props.items, name);
  }

  renderItemImage = (name, key=null) => {
    const item = this.getItem(name);

    if (!item) {
      return <ItemSprite
        key={key}
        folder={this.props.site.assets.defaults.item}
        filename={''}
        alt={'Item sprite'} />;
    }

    return <ItemSprite
      key={key}
      folder={this.props.site.assets.items}
      filename={item.image}
      alt={item.name} />;
  }

  renderPage = (page) => {
    switch(page) {
      case this.props.states.HOME:
        return <HomePage
          states={this.props.states}
          site={this.props.site}
          generations={this.props.generations}
          imageTypes={this.props.imageTypes}
          truncate={this.truncate}
          setPage={this.setPage}
          setBreadcrumbs={this.setBreadcrumbs}
          setTeam={this.setTeam}
          getPokemon={this.getPokemon}
          renderPokemonImage={this.renderPokemonImage} />;

      case this.props.states.TEAM:
        return <TeamPage
          site={this.props.site}
          team={this.state.team}
          imageTypes={this.props.imageTypes}
          getPokemon={this.getPokemon}
          renderPokemonImage={this.renderPokemonImage}
          getType={this.getType}
          getAbility={this.getAbility}
          renderItemImage={this.renderItemImage}
          getNature={this.getNature}
          getStat={this.getStat}
          getMove={this.getMove} />;

      default:
        return null;
    }
  }

  getType = (name) => {
    return this.getObjectFromArray(this.props.types, name);
  }

  getAbility = (name) => {
    return this.getObjectFromArray(this.props.abilities, name);
  }

  getNature = (name) => {
    return this.getObjectFromArray(this.props.natures, name);
  }

  getStat = (acronym) => {
    return this.props.stats.filter(stat => stat.acronym === acronym)[0];
  }

  getMove = (name) => {
    return this.getObjectFromArray(this.props.moves, name);
  }

  render() {
    return (
      <div>
        <Header
          states={this.props.states}
          site={this.props.site}
          breadcrumbs={this.state.breadcrumbs}
          setPage={this.setPage}
          setBreadcrumbs={this.setBreadcrumbs}
          setTeam={this.setTeam} />

        {this.renderPage(this.state.page.current)}
      </div>
    );
  }
}

export default App;
