import React, { Component } from 'react';
import './App.css';
import Cards from "./Cards";
import CardForm from './CardForm';
import { Container, Header,  } from "semantic-ui-react";

class App extends Component {
  state = {
    cards: [
      { id: 1, frontQuestion: "What color is the sky?", backAnswer: "The Sky is Blue", },
      { id: 2, frontQuestion: "What year was the US discoverd?", backAnswer: "The year was 1492", },
      { id: 3, frontQuestion: "Who discovered Electricity?", backAnswer: "Thomas Edison discovered the lightning thing", },
    ],
  };

  getId = () => {
    // NOTE We are just using this as a helper function for id's since we aren't using a db yet
    return Math.floor((1 + Math.random()) * 0x10000)
      .toString(16)
      .substring(1);
  };

  addCard = (cardData) => {
    const { cards, } = this.state;
    const card = { id: this.getId(), ...cardData, };
    this.setState({ cards: [card, ...cards], });
  };

  removeCard = (id) => {
    const cards = this.state.cards.filter( card => {
      if (card.id !== id)
      return card; 
    })
    this.setState({ cards, });
  };


  render() {
    return (
      <Container style={{ paddingTop: "25px" }}>
        <Header as="h1">React Flash Cards</Header>
        <br />
        <CardForm add={this.addCard}/>
        <br />
        <Cards 
        varCards={this.state.cards} 
        remove={this.removeCard}
        />
      </Container>
    );
  }
}

export default App;
