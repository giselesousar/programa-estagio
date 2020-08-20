import React from 'react';
import { Marker, Popup } from 'react-leaflet';
import {busIcon} from '../Icons';
import { FaWheelchair } from 'react-icons/fa'


export default function Veiculos(props){
    const { veiculos } = props;

    return(
        <>{veiculos.map(veiculo => {
                return (
                    <Marker key={veiculo.p} position={[veiculo.py, veiculo.px]} icon={busIcon}>
                        
                        <Popup>
                            {veiculo.a ?
                            <p style={{textAlign: "center"}}>
                             <FaWheelchair size={15} color="blue"/>
                             </p>
                             :
                             <p>Não acessível para pessoas com deficiência.</p>
                            }
                        </Popup>
                        
                    </Marker>
                )
        })}
        </>
    )
}