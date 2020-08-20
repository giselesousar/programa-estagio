import React from 'react';
import { Container } from 'react-bootstrap';

export default function Footer(){
    return(
        <Container fluid
        style={{
          textAlign: "center"
        }}
      >
        <footer style={{
          marginTop: 30,
          marginBottom: 10,
          textDecoration: "none"
        }}
        > Copyright &copy; 2020 <a style={{
          textDecoration: "none"
        }} href="https://github.com/giselesousar">Gisele Ribeiro</a></footer>
      </Container>
    )
}
