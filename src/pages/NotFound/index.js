import React from 'react';
import {Container} from 'react-bootstrap';
import {useHistory} from 'react-router-dom';

export default function NotFound(){
    const history = useHistory();

    function onClick(){
        history.push("/");
    }

    return(
        <Container style={{
            height: "100vh",
            display: "flex",
            justifyContent: "center",
            alignItems: "center"
        }}>
            <div style={{display:"inline", textAlign: "center"}}>
                <h1>Página não encontrada!</h1>
                <h3 onClick={onClick} style={{
                    cursor: "pointer",
                    color: "blue",
                }}>Ir para página inicial</h3>
            </div>
        </Container>
    )
}