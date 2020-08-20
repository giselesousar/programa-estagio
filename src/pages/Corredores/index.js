import React, { useState, useEffect } from 'react';
import Detail from '../../layouts/Detail';
import { Container, Card, Col, ListGroup, Form, FormControl } from 'react-bootstrap';
import api from '../../services/api';

export default function Corredores(props) {

    const codigo = props.location.state.codigo;

    const [filtro, setFiltro] = useState([]);
    const [paradas, setParadas] = useState([]);
    const [value, setValue] = useState('');

    function loadParadas(){
        api.get(`Parada/BuscarParadasPorCorredor?codigoCorredor=${codigo}`)
            .then(response => {
                setParadas(response.data);
                setFiltro(response.data);
            })
            .catch(function(error){
                alert(error.message)
            })
    }

    function onChange(e){
        setValue(e.target.value);
        if (e.target.value.length > 0) {
            setFiltro(paradas.filter(item => { return item.np.toLowerCase().match(e.target.value.toLowerCase()) || item.ed.toLowerCase().match(e.target.value.toLowerCase()) || String(item.cp).match(e.target.value) }))
        } else {
            setFiltro(paradas);
        }
    }

    useEffect(() => {
        loadParadas();
    },[])



    return (
        <Detail title="Paradas por corredor">
                <Container
                    style={{
                        display: "flex",
                        justifyContent: "center"
                    }}>
                    <Col>
                    <Card>
                        <Card.Header>
                            <Form inline >
                                <FormControl
                                style={{
                                    width:"100%"
                                }}
                                    type="text"
                                    placeholder="Filtrar"
                                    className="mr-sm-2"
                                    value={value}
                                    onChange={onChange}
                                />
                            </Form>
                        </Card.Header>
                    <ListGroup>
                        <div style={{
                            textAlign: "center"
                        }}>
                            <h5>Código do corredor: {codigo}</h5>
                        </div>
                        {filtro.map(parada => {
                            return(
                                <ListGroup.Item key={parada.cp}>
                                    <strong> {parada.np} </strong><br/>
                                    <strong>Endereço: </strong> {parada.ed}<br/>
                                    <strong>Código: </strong> {parada.cp}
                                </ListGroup.Item>
                            )
                        })}
                    </ListGroup>
                    </Card>
                </Col>
                </Container>
            </Detail>
    )
}