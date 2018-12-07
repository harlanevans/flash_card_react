import React, { Fragment} from 'react';
import { Route, Switch } from 'react-router-dom';
import App from './Components/App';
import About from './Components/About';
import Navbar from "./Components/NavBar";
import EditForm from './Components/EditForm';
import { Container } from 'semantic-ui-react';

const Mainapp = () => (
  <Fragment>
    <Navbar />
    <Container style={{ paddingTop: "25px" }}>
    <Switch>
      <Route exact path="/" component={App} />
      <Route exact path="/about" component={About} />
      <Route exact path="/edit" component={EditForm} />
    </Switch>
    </Container>
  </Fragment>
);
export default Mainapp;