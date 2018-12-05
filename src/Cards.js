import React from "react";
import flashCard from "./flashCard";
import { Card, } from 'semantic-ui-react';

const Cards = ({ varCards, }) => (
  // Semantic Card 
    <Card>
      <Card.Content>
        <Card.Header>
          Question
        </Card.Header>
        <Card.Description>
          {varCards.map ( flashcard => (
            <flashCard key={flashcard.id} {...flashcard} />
          ))
          }
        </Card.Description>
      </Card.Content>
      </Card>
)





export default Cards;