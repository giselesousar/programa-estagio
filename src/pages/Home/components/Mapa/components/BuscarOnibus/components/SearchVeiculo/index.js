import React, { useState } from 'react';
import { Button, Form, FormControl } from 'react-bootstrap';
import api from '../../../../../../../../services/api'

export default function SearchVeiculo(props) {
    const {setVeiculoBuscado} = props;
    const [value, setValue] = useState('');

    function onSubmit(e){
        e.preventDefault();
        if(value === ""){
            return;
        }
        api.get(`Posicao/Linha?codigoLinha=${value}`)
            .then(response => {
                if(response.data.vs.length > 0){
                    setVeiculoBuscado({
                        veiculos: response.data,
                        linha: value
                    })
                }else{
                    alert("Nenhum veículo encontrado!")
                }
            })
            .catch(function(error){
                alert(error.message)
            })
        setValue('');
    }

    return (
        <>
            <Form inline onSubmit={onSubmit}>
                <FormControl 
                    type="text" 
                    placeholder="Buscar ônibus" 
                    className="mr-sm-2" 
                    value={value}
                    onChange={(e) => {setValue(e.target.value)}}
                />
                <Button variant="outline-success" type="submit" disabled={value===""}>Buscar</Button>
            </Form>
        </>
    )
}
