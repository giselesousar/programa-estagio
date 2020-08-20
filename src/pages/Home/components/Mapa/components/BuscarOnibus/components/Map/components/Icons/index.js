import leaflet from 'leaflet';
import pointerBus from '../../../../../../../../../../assets/images/pointerBus.svg';
import bus from '../../../../../../../../../../assets/images/bus.svg';

export const pointerBusIcon = new leaflet.Icon({
    iconUrl: pointerBus,
    iconRetinaUrl: pointerBus,
    iconAnchor: [5, 55],
    popupAnchor: [10, -44],
    iconSize: [55, 55],
    shadowSize: [68, 95],
    shadowAnchor: [20, 92],
})

export const busIcon = new leaflet.Icon({
    iconUrl: bus,
    iconRetinaUrl: bus,
    iconAnchor: [5, 55],
    popupAnchor: [20, -44],
    iconSize: [25, 55],
})