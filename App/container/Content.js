import React from 'react'
import { View, Text } from 'react-native'
import Pokemon from '../components/Pokemon';

const Content = (props) => {
  
  const showFilteredPokes = () => {
    if(props.filteredPokemons) {
      return props.filteredPokemons.map(pokemon => {
        // console.log(pokemon);
        return <Pokemon key={pokemon.name} name={pokemon.name} />
      })
    }
  }

  return (
    <View>
      {showFilteredPokes()}
    </View>
  )
}

export default Content
