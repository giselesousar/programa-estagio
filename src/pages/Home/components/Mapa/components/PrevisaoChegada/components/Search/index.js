import React, {useState, useEffect} from 'react';
import {Form, FormControl, Button} from 'react-bootstrap';
import {FaPlus, FaMinus} from 'react-icons/fa'
import api from '../../../../../../../../services/api'

export default function Search(props){
    const { resultados,setResultados, atualizar, setAtualizar }  = props;
    const [paradaValue, setParadaValue] = useState('');
    const [linhaValue, setLinhaValue] = useState('');
    const [selectValue, setSelectValue] = useState('');

    function loadResults(){
        if(selectValue === "1"){
           
            api.get(`Previsao/Parada?codigoParada=${resultados? resultados.p.cp : paradaValue}`)
            .then(response => {
                if(response.data.p === null){
                    setResultados(null)
                    alert("Nenhuma parada encontrada!");
                    return;
                }
                setResultados(response.data);
                console.log("entrou")
            }).catch(function(error){
                //error
            })
    

        }else if(selectValue === "2"){
            api.get(`Previsao?codigoParada=${paradaValue}&codigoLinha=${linhaValue}`)
            .then(response => {
                if(response.data.p === null){
                    setResultados(null)
                    alert("Nenhuma parada encontrada!")
                    return;
                }
                setResultados(response.data);
            }).catch(function(error){
                //error
            })
        }
    }
    
    function onSubmit(e){
        e.preventDefault();
        loadResults();
        setParadaValue('');
        setLinhaValue('');
    }

    useEffect(() => {
        loadResults();
        setAtualizar(false);
    }, [atualizar])

    return (
        <>
            <Form inline>
                <Form.Control 
                    as="select"  
                    value={selectValue}
                    onChange={(e) => {setSelectValue(e.target.value)}}
                >
                    <option hidden>Selecione uma opção</option>
                    <option value="1">Pesquisar por parada</option>
                    <option value="2">Pesquisar por parada e linha</option>
                </Form.Control>
            </Form> 
            <div style={{
                marginTop: 10
            }}>
            <Form inline onSubmit={onSubmit}>
                {
                    (selectValue === "1" || selectValue === "2") &&
                    <FormControl 
                    type="text" 
                    placeholder="Código da parada" 
                    value={paradaValue}
                    onChange={(e) => {setParadaValue(e.target.value)}}
                    className="mr-sm-2" 
                />
                }
                {
                    (selectValue === "2" || selectValue === "2") &&
                    <FormControl 
                    type="text" 
                    placeholder="Código da linha" 
                    value={linhaValue}
                    onChange={(e) => {setLinhaValue(e.target.value)}}
                    className="mr-sm-2" 
                />
                }
                
                { selectValue !== "" && <Button variant="outline-success" type="submit" disabled={(selectValue === "1" && paradaValue === "") || (selectValue === "2" && paradaValue === "" && linhaValue === "") } >Buscar</Button>}
            </Form>
            </div>
        </>
    )
}