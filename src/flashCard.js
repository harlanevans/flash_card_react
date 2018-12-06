import React from 'react';
import { Card, Button, } from 'semantic-ui-react';

const flashCard = ({ frontQuestion, }) => (
   <Card.Description>
   <ul>
     {frontQuestion}
   </ul>
   </Card.Description>
      // <Card.Description>{frontQuestion}</Card.Description>
      // <Card.Content extra>
      //   <div className='ui two buttons'>
      //     <Button basic color='green'>
      //       Flip Card
      // </Button>
      //     <Button basic color='red'>
      //       Delete Card
      // </Button>
      //   </div>
      // </Card.Content>
);

export default flashCard;