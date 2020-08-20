import React from 'react';
import {Jumbotron, Button} from 'react-bootstrap';
import {useHistory} from 'react-router-dom';

export default function JumbotronComponent(){
    const history = useHistory();
    return(
        <Jumbotron>
            <h1>
                    Monitoramento do transporte público - SPTrans
                    </h1>
                <p>
                    Encontre dados sobre o transporte público da cidade de São Paulo em tempo real!
                    </p>
            <p>
                <Button variant="outline-success" onClick={() => {
                    history.push("/documentacao")
                }}>Ver documentação</Button>
            </p>
        </Jumbotron>
    )
}