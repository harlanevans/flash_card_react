import React, { Component } from 'react';
import './App.css';
import Cards from "./Cards";
import { Container, Header, } from "semantic-ui-react";

class App extends Component {
  state = {
    cards: [
      { id: 1, frontQuestion: "What color is the sky?", backAnswer: "The Sky is Blue", },
      { id: 2, frontQuestion: "What year was the US discoverd?", backAnswer: "The year was 1492", },
      { id: 3, frontQuestion: "Who discovered Electricity?", backAnswer: "Thomas Edison discovered the lightning thing", },
    ],
  };



  render() {
    return (
      <Container>
        <Header as="h1">React Flash Cards</Header>
        <Card.Group>
          <Card>
            <Card.Content>
              <Card.Header>
                Question
              </Card.Header>
              <Card.Description>
                {
                  varCards.map(flashcard => (
                  <flashCard key={flashcard.id} {...flashcard} />
                ))
                }
              </Card.Description>
            </Card.Content>
          </Card>
        </Card.Group>
      </Container>
    );
  }
}

export default App;
