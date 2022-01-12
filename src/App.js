import React from 'react';
import NavBar from './NavBar';
import Cover from './Cover';
import Posts from './Posts';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Container,Row} from 'react-bootstrap';
function App() {
  return (
    <Container responsive>
     <Row><NavBar/></Row> 
    <Row><Cover/></Row>
    <Row><Posts/></Row>
 </Container>
  );
}

export default App;
