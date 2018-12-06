import React from "react";
import { Card, } from 'semantic-ui-react';

const Cards = ({ varCards, }) => (
  // Semantic Card 
  <Card.Group>
    {
      varCards.map(v => (
          <Card key={v.id}>
            {v.frontQuestion}
          </Card>
      ))
    }
  </Card.Group>
);





export default Cards;