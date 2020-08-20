import React from 'react';
import { Marker, Popup } from 'react-leaflet';
import {pointerBusIcon} from '../Icons';


export default function Paradas(props){
    const { paradas } = props;

    return(
        <>{paradas.map(parada => {
                return (
                    <Marker key={parada.cp} position={[parada.py, parada.px]} icon={pointerBusIcon}>
                        {parada.np !== "" &&
                        <Popup>
                        {parada.np}
                     </Popup>
                        }
                        
                    </Marker>
                )
        })}
        </>
    )
}