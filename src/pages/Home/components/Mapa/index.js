import React, {useContext} from 'react';
import { Row, Col, Tab, ListGroup, Container, Button } from 'react-bootstrap';

import BuscarOnibus from './components/BuscarOnibus';
import BuscarParadas from './components/BuscarParadas';
import PrevisaoChegada from './components/PrevisaoChegada';

import PositionContext from '../../../../Providers/PositionProvider';


export default function Mapa(props) {
    
    const { localizacao, setLocalizacao } = useContext(PositionContext);

    function handleLocalizacao(){
        if (!navigator.geolocation){
            alert("Não foi possível obter sua localização atual!");
                setLocalizacao({
                    marker: false,
                    position: [-23.5489, -46.6388]
                })
            return;
          }
        navigator.geolocation.getCurrentPosition(position => {
            const { latitude, longitude } = position.coords;
            if(latitude && longitude){
                setLocalizacao({
                    marker: true,
                    position: [latitude, longitude]
                });
            }else{
                alert("Não foi possível obter sua localização atual!");
                setLocalizacao({
                    marker: false,
                    position: [-23.5489, -46.6388]
                })
            }
            
        }, () => {
            alert("Não foi possível obter sua localização atual!");
                setLocalizacao({
                    marker: false,
                    position: [-23.5489, -46.6388]
                })
        }, {timeout:10000})
        
    }

    return (
        <Container style={{ marginTop: 50 }}>
                    <Row style={{
                        display: "flex",
                        justifyContent: "center"
                    }}>
                        <h1>Ver no mapa</h1>
                    </Row>
                    <Row style={{
                        marginTop: 30,
                        display: "flex",
                        justifyContent: "center"
                    }}>
                        <Col md={12} xs={12} style={{
                            alignItems: "center",
                            marginTop: 5
                        }}>
                            {localizacao.position.length > 0 ? 
        <Tab.Container id="list-group-tabs-example" defaultActiveKey="#onibus">
            <Row>
                <Col sm={4}>
                    <ListGroup>
                        <ListGroup.Item variant="success" action href="#onibus">
                            Buscar ônibus
        </ListGroup.Item>
                        <ListGroup.Item variant="success" action href="#paradas">
                            Buscar paradas
        </ListGroup.Item>
                        <ListGroup.Item variant="success" action href="#previsao">
                            Previsão de chegada
        </ListGroup.Item>
                    </ListGroup>
                </Col>
                <Col sm={8}>
                    <Tab.Content>
                        <Tab.Pane eventKey="#onibus">
                            <BuscarOnibus
                                localizacao={localizacao}
                            />
                        </Tab.Pane>
                        <Tab.Pane eventKey="#paradas">
                            <BuscarParadas
                                localizacao={localizacao}
                            />
                        </Tab.Pane>
                        <Tab.Pane eventKey="#previsao">
                            <PrevisaoChegada 
                                localizacao={localizacao}
                            />
                        </Tab.Pane>
                    </Tab.Content>
                </Col>
            </Row>
        </Tab.Container>
        : <Container style={{
            minHeight: "70vh",
            display: "flex",
            justifyContent: "center",
            alignItems: "center"
        }}>
            <div style={{display: "inline", textAlign:"center", fontSize: "20px"}}>
            <Button onClick={handleLocalizacao} size="lg" variant="success">Usar minha localização atual</Button> 
            <p>ou</p>
            <p onClick={() => setLocalizacao({
                marker: false,
                position: [-23.5489, -46.6388]
            })} style={{cursor: "pointer"}}>Não informar localização</p>
            </div>
        </Container>
        }
        </Col>
    </Row>
    </Container>
    )
}