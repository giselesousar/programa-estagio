import React, {useState} from 'react';
import {Form, FormControl, Button} from 'react-bootstrap';
import {FaPlus, FaMinus} from 'react-icons/fa'
import api from '../../../../../../../../services/api'

export default function SearchParada(props){
    const { setParadas, setBusca} = props;
    const [value, setValue] = useState('');
    const [selectValue, setSelectValue] = useState('linha');

    const [exibirFiltros, setExibirFiltros] = useState(false);

    function onSubmit(e){
        e.preventDefault();
        if(exibirFiltros){
        let rota = "";

        if(selectValue === "linha"){
            rota = `Parada/BuscarParadasPorLinha?codigoLinha=${value}`;
            setBusca({
                codigo: 2,
                input: value
            })
        }else{
            rota = `Parada/BuscarParadasPorCorredor?codigoCorredor=${value}`
            setBusca({
                codigo: 3,
                input: value
            })
        }

        api.get(rota).then(response => {
            if(response.data.length > 0 ){
                setParadas(response.data);

            }else{
                setParadas([]);
                alert("Nenhuma informação encontrada!");
                return;
            }
        }).catch(function(error){
            //error
        })

    }else{
        api.get(`Parada/Buscar?termosBusca=${value}`)
            .then(response => {
                if(response.data.length > 0 ){
                    setParadas(response.data);
                    setBusca({
                        codigo: 1,
                        input: value
                    })
                }else{
                    setParadas([]);
                    alert("Nenhuma informação encontrada!");
                    return;
                }
            })
            .catch(function(error){
                //error
            })
        }
        setValue('');
    }

    return (
        <>
            <Form inline onSubmit={onSubmit}>
                <FormControl 
                    type="text" 
                    placeholder="Buscar parada" 
                    className="mr-sm-2" 
                    value={value}
                    onChange={(e) => {setValue(e.target.value)}}
                />
                 {
                    exibirFiltros && 
                    <Form.Control
                        as="select"
                        onChange={(e) => {
                        setSelectValue(e.target.value);
                    }}>
                    <option value="linha">Linhas</option>
                    <option value="corredor">Corredores</option>
                    </Form.Control>
                }
                <Button variant="outline-success" type="submit" disabled={value===""}>Buscar</Button>
               
                <Button variant="outline-success" onClick={() => {
                    setExibirFiltros(!exibirFiltros);
                }} >{exibirFiltros ?<FaMinus/> : <FaPlus/> } Filtrar</Button>
            </Form> 
        </>
    )
}