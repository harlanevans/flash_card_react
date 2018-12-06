import React from "react";
import { Card, Button } from 'semantic-ui-react';

const Cards = ({ varCards, remove, update, edit}) => (
  // Semantic Card 
  <Card.Group>
    {
      varCards.map(card => (
        <Card raised  key={card.id}
          {...card}
          >
          <Card.Content>
            <Card.Header>
              Question
            </Card.Header>
            <Card.Description>
              {card.frontQuestion}
            </Card.Description>
          </Card.Content>
          <Card.Content extra>
            <div className="ui two buttons">
              <Button basic color='blue' onClick={() => edit(card.id)}>
                Edit
          </Button>
              <Button basic color="red" onClick={() => remove(card.id)}>
                Delete
          </Button>
          </div>
          </Card.Content>
        </Card>
      ))
    }
  </Card.Group>
);





export default Cards;