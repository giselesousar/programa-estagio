import React, { useState } from 'react';
import {Form, FormControl, Button, Card} from 'react-bootstrap';
import {useHistory} from 'react-router-dom';
import api from '../../../../../../services/api';
import TooltipComponent from '../../../components/Tooltip';

export default function CardSearch(props) {

    const { title, placeholder, path, linhas, paradas, tooltipContent } = props;

    const history = useHistory();

    const [value, setValue] = useState('');

    function buscar(){
        api.get(
            linhas ?
            `Linha/Buscar?termosBusca=${value}`
            : paradas ? 
            `Parada/Buscar?termosBusca=${value}`
            : ''
            )
            .then(response => {
                if(response.data.length > 0 ){
                    history.push({
                        pathname: path,
                        state : {
                            busca: response.data
                        }
                    });
                }else{
                    alert("Nenhuma informação encontrada!");
                    return;
                }
            })
            .catch(function(error) {

            })
    }
    

    function onSubmit(e){
        e.preventDefault()
        buscar();
        setValue('');

    }

    return (
        <Card body className="card-container">
            <Card.Title>
                {title}
                <TooltipComponent content={tooltipContent}/>
            </Card.Title>
            <Form inline onSubmit={onSubmit}>
                <FormControl
                    type="text"
                    placeholder={placeholder}
                    value={value}
                    onChange={(e) => {
                        setValue(e.target.value)
                    }}
                />
                <Button variant="outline-success" type="submit" disabled={value===""}>Buscar</Button>
            </Form>
        </Card>
    )
}