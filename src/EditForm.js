import React from "react";
import { Form, } from "semantic-ui-react";

class EditForm extends React.Component {
  state = { frontQuestion: '', backAnswer: '' };

  componentDidMount() {
    if (this.props.id)
      this.setState({ frontQuestion: this.props.frontQuestion, backAnswer: this.props.backAnswer, });
  }


  handleSubmit = (e) => {
    e.preventDefault();
    if (this.props.id) {
      this.props.edit({ id: this.props.id, ...this.state});
      this.props.toggleEdit()
    } else {
      this.props.add(this.state);
    }
    this.setState({ frontQuestion: '', backAnswer: '', });
  }

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value, });
  };


  render() {
    return (
      <Form onSubmit={this.handleSubmit}>
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
export default EditForm;