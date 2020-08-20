import React, {useRef, useEffect, useContext} from 'react';
import { Map, TileLayer, Marker, Popup } from 'react-leaflet';
import Paradas from './components/Paradas';
import PositionContext from '../../../../../../../../Providers/PositionProvider';

export default function MapComponent(props) {
    const { paradas, mostrarLocalizacao } = props;

    const { localizacao } = useContext(PositionContext);

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
            {paradas.length > 0 && <Paradas paradas={paradas}/>}
        </Map>
    )
}
