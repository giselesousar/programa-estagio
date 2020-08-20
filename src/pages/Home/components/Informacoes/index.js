import React from 'react';
import {Container, Col, Row} from 'react-bootstrap';
import JumbotronComponent from './components/Jumbotron';
import CardSearch from './components/CardSearch';
import CardDropdown from './components/CardDropdown';
import './styles.css'

export default function Informacoes() {
    return(
        
            <Container style={{
                marginTop: 30,
            }}>
                <JumbotronComponent/>
         
                <Row style={{
                    width:"100%"
                }}>
                <Col
                    xl={4}
                    lg={12}
                    md={12}
                    sm={12}
                >
                <CardSearch
                    title="Buscar por linhas"
                    placeholder="Buscar linha"
                    path="/linhas"
                    tooltipContent="Informe o número da linha ou o nome do terminal principal ou secundário (informações totais ou parciais)"
                    linhas={true}
                />
                </Col>
                <Col
                    xl={4}
                    lg={12}
                    md={12}
                    sm={12}
                >
                <CardSearch
                    title="Buscar por paradas"
                    placeholder="Buscar parada"
                    path="/paradas"
                    tooltipContent="Informe o nome da parada ou endereço (informações totais ou parciais)"
                    paradas={true}
                />
                </Col>
                <Col
                    xl={4}
                    lg={12}
                    md={12}
                    sm={12}
                >
                <CardDropdown
                    title="Buscar por corredores"
                    path="/corredores"
                />
                </Col>
                </Row>
            </Container>
    )
}