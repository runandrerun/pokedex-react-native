/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import { _ } from 'lodash'
import {Platform, StyleSheet, Text, View, ScrollView, TextInput, SafeAreaView} from 'react-native';
import Pokemon from './App/components/Pokemon'

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

const baseURL = 'http://pokeapi.co/api/v2/'


type Props = {};
export default class App extends Component<Props> {
  constructor(props){
    super(props)
    this.state = {
       pokemons: [],
       searchTerm: 'Pokemon Name'
     }
    
    //  this.search = _.debounce(this.search, 3000)

  }
 
  componentDidMount() {
    this.getPokemon()
  }

  getPokemon = () => {
    fetch(`${baseURL}pokemon/?limit=811`)
    .then(res => res.json())
    .then(data => {
      this.setState({pokemons: data})
    })
  }

  getPokes = () => {
    if(this.state.pokemons.length !== 0) {
      console.log(this.state)
      return this.state.pokemons.results.map(pokemon => {
        // console.log(pokemon);
        // return <Pokemon name={pokemon}/>
        return <Pokemon key={pokemon.name} name={pokemon.name} />
      })
    }
  }
  
// It works but if someone spams or types insanely fast it'll pop a warning
  search = (searchTerm) => {
    this.setState({searchTerm})
  }
  


  render() {
    // console.log(this.state)
    return (
      <SafeAreaView>
        <ScrollView showsVerticalScrollIndicator={false} showsHorizontalScrollIndicator={false}>
          <TextInput 
          style={{height: 40, borderColor: 'gray', borderWidth: 1}}
          // onChangeText={(searchTerm) =>  _.debounce(this.setState({searchTerm}), 3000)}
          onChangeText={this.search}
          value={this.state.searchTerm} />
          {this.getPokes()} 
        </ScrollView>
      </SafeAreaView>
     
    );
  }
}

  

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
