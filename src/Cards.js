import React from "react";
import { Card, Button } from 'semantic-ui-react';

const Cards = ({ varCards, }) => (
  // Semantic Card 
  <Card.Group>
    {
      varCards.map(v => (
        <Card key={v.id}>
          <Card.Content>
            <Card.Header>
              Question
            </Card.Header>
            <Card.Description>
              {v.frontQuestion}
            </Card.Description>
          </Card.Content>
          <Card.Content extra>
            <div className='ui two buttons'>
              <Button basic color='blue'>
                Edit
          </Button>
              <Button basic color='red'>
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