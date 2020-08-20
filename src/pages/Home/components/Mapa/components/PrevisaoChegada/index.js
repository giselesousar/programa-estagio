import React, {useState, useContext} from 'react';
import {Col, Row, Card, Button, Form} from 'react-bootstrap';
import MapComponent from './components/Map';
import Search from './components/Search';
import TooltipComponent from '../../../components/Tooltip';
import Details from './components/Details';
import { FaTrash } from 'react-icons/fa';
import Contador from './components/Contador';
import PositionContext from '../../../../../../Providers/PositionProvider';

export default function PrevisaoChegada(props){

    const {localizacao} = useContext(PositionContext);
    const [mostrarLocalizacao, setMostrarLocalizacao] = useState(true);

    const [resultados, setResultados] = useState(null);
    const [atualizar, setAtualizar] = useState(false);

    function handleDelete() {
        setResultados(null)
        setAtualizar(false);
    }

    function atualizarDados(){

    }

    return(
        <Col>
        <Row>
                <Card style={{
                    width: "100%"
                }} body>
                    <h4>Calcular previsão de chegada <TooltipComponent content="Para pesquisar por parada, informe o código da parada procurada e todos os ônibus de todas as linhas serão exibidos no mapa. Selecionando buscar por parada e linha, você poderá filtrar apenas os ônibus da linha buscada. Clicando no ícone do ônibus no mapa, é possivel ver as informações sobre ele e a previsão de chegada na parada informada." /></h4>
                    <Search
                        resultados={resultados}
                        setResultados={setResultados}
                        atualizar={atualizar}
                        setAtualizar={setAtualizar}
                    />{resultados &&
                    <Details
                        resultados={resultados}
                        options={<div style={{
                            display: "flex",
                            direction: "row"
                        }}>
                            <Contador
                                atualizarDados={atualizarDados}
                                atualizar={atualizar}
                                setAtualizar={setAtualizar}
                            /> {' '}
                            <Button style={{
                                margin: 5
                            }} variant="outline-danger" onClick={handleDelete} size="sm"><FaTrash /></Button>
                        </div>
                        }
                    />
                    }
                </Card>
        </Row>
            <Row style={{
                justifyContent: "center",
                display: "flex",
                marginTop: 20
            }}>
                <MapComponent
                    resultados={resultados}
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