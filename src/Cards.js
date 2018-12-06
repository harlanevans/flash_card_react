import React from "react";
import { Card, Button } from 'semantic-ui-react';

const Cards = ({ id, varCards, remove }) => (
  // Semantic Card 
  <Card.Group>
    {
      varCards.map(card => (
        <Card key={card.id}
          {...card} remove={remove}>
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
              <Button basic color='blue'>
                Edit
          </Button>
              <Button basic color="red" onClick={() => remove(id)}>
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