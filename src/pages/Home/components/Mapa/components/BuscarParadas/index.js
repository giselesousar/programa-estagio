import React, { useState } from 'react';
import TooltipComponent from '../../../components/Tooltip';
import {Col, Row, Card, Button, Form} from 'react-bootstrap';
import MapComponent from './components/Map';
import SearchParada from './components/SearchParada';
import ParadaDetails from './components/ParadaDetails';
import {FaEyeSlash, FaTrash} from 'react-icons/fa'


export default function BuscarParadas(props) {

    const {localizacao} = props;
    const [mostrarLocalizacao, setMostrarLocalizacao] = useState(true);


    const [paradas, setParadas] = useState([]);
    const [busca, setBusca] = useState({
        codigo: null,
        input: null
    })

    const [ocultar, setOcultar] = useState(false);

    return (
        <Col>
        <Row>
                <Card style={{
                    width: "100%"
                }} body>
                    <h4>Mostrar paradas no mapa <TooltipComponent content="Informe o nome ou endereço da parada (informações totais ou parciais). Ou clique no filtro para buscar paradas por linhas ou corredores." /></h4>
                    <SearchParada
                        setParadas={setParadas}
                        setBusca={setBusca}
                    />
                    {
                        paradas.length > 0 &&
                        <>
                        <ParadaDetails
                            busca={busca}
                        />
                        <Button
                        variant="outline-success"
                        style={{margin: 5}}
                        onClick={() => {
                            setOcultar(!ocultar)
                        }}
                        ><FaEyeSlash/> ocultar</Button>
                        <Button variant="outline-danger" onClick={() => {
                            setParadas([]);
                        }}><FaTrash/></Button>
                        </>
                    }
                    
                </Card>
        </Row>
            <Row style={{
                justifyContent: "center",
                display: "flex",
                marginTop: 20
            }}>
                <MapComponent
                    paradas={ocultar ? [] : paradas}
                    localizacao={localizacao}
                    mostrarLocalizacao={mostrarLocalizacao}
                />
                {localizacao.marker && 
                <Form>
                    <Form.Group>
                        <Form.Check onClick={() => setMostrarLocalizacao(!mostrarLocalizacao)} type="checkbox" label="Ocultar minha localização" />
                    </Form.Group>

                    </Form>
                }
            </Row>
        </Col>
    )
}