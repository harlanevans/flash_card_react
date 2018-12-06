import React from "react";
import { Form, } from "semantic-ui-react";

class CardForm extends React.Component {
  state = { frontQuestion: '', backAnswer: '' };


  handleSubmit = (e) => {
    e.preventDefault();
    this.props.add(this.state);
    this.setState({ frontQuestion: '', backAnswer: '', });
  }

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value, });
  };


  render() {
    return (
      <Form>
        <Form.Group widths="equal">
          <Form.Input
            fluid
            label="Question"
            placeholder='Question'
            name="frontQuestion"
            value={this.state.frontQuestion}
            onChange={this.handleChange}
          />
          <Form.Input
            fluid
            label="Answer"
            placeholder='Answer'
            name="backAnswer"
            value={this.state.backAnswer}
            onChange={this.handleChange}
          />
          <Form.Button>Submit</Form.Button>
        </Form.Group>
      </Form>
    )
  }
}
export default CardForm;