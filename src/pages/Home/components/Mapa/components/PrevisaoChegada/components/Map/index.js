import React, {useRef, useEffect} from 'react';
import { Map, TileLayer, Marker, Popup  } from 'react-leaflet';
import {pointerBusIcon, busIcon} from './components/Icons';
import {FaWheelchair} from 'react-icons/fa'

export default function MapComponent(props) {
    const { resultados, localizacao, mostrarLocalizacao } = props;

    const mapRef = useRef();
    const didMountRef = useRef(false) 
    useEffect(() => {
        if (didMountRef.current) { 
        if (mapRef.current) {
            mapRef.current.leafletElement.invalidateSize(false);
        }
        } 
        else didMountRef.current = true
    })

    return (
        <Map center={localizacao.position} zoom={12} ref={mapRef} >
            <TileLayer
                attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            {localizacao.marker && mostrarLocalizacao && 
                <Marker position={localizacao.position}>
                    <Popup>
                        Você está aqui!
                    </Popup>
                </Marker>}
            {resultados &&
            <>
            <Marker position={[resultados.p.py, resultados.p.px]} icon={pointerBusIcon}>
                {resultados.p.np !== "" && <Popup>
                    {resultados.p.np}
                </Popup> }
                
            </Marker>
            {resultados.p.l && 
            resultados.p.l.map(linha => {
                return(
                    linha.vs.map(veiculo => {
                        return (
                            <Marker position={[veiculo.py, veiculo.px]} icon={busIcon}>
                                <Popup>
                                    {linha.c}<br/>
                                    Sentido: {linha.sl == "1" ? 
                                        "Terminal Principal para Terminal Secundário":
                                        "Terminal Secundário para Terminal Principal"
                                    }<br/>
                                    Origem: {linha.lt1}<br/>
                                    Destino: {linha.lt0}<br/>
                                    Previsão de chegada: {veiculo.t}<br/>
                                    {veiculo.a ?
                                    <FaWheelchair size={10} color="blue"/>
                                    :
                                    <p>Não acessível para pessoas com deficiência</p>
                            }
                                </Popup>
                            </Marker>
                        )
                    })

                    
                )
            })
        }
            </>
            }
        </Map>
    )
}
