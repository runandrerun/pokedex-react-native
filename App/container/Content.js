import React, { Component } from 'react'
import {
  View,
  Text,
  TouchableHighlight,
  TouchableOpacity,
  TouchableNativeFeedback,
  TouchableWithoutFeedback
} from 'react-native'
import Pokemon from '../components/Pokemon';
import PokemonEntry from './PokemonEntry';

export default class Content extends Component {
  
  state = {
    details: false,
    pokeStats: ''
  }

  showFilteredPokes = () => {
   

    const { filteredPokemons } = this.props
    if(filteredPokemons) {
      return filteredPokemons.map((pokemon, index )=> {
        return <TouchableHighlight onPress={this.showDetails} key={index}>
          <Pokemon name={pokemon.name} />
        </TouchableHighlight>
      })
    }
  }

   showDetails = (e) => {
     console.log(this)
    //  this.setState({
      //  details: true,
    //  })
   }


  // showDetails = () => {
  //   console.log('pressing helloooo')
  // }

  render() {
    return (
      <View>
          {this.state.details ? <PokemonEntry pokemon={this.pokeStats}/> : this.showFilteredPokes()}
      </View>
    )
  }
}

/**
 * WHen I click on a pokemon 
 * Show me that pokemon details/stats
 * I want to be able to press the back button at the top
 * to go back to main screen
 */