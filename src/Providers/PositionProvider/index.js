import { createContext } from "react";

const PositionContext = createContext({ localizacao :{
    marker: false,
    position: [] }});
export const PositionProvider = PositionContext.Provider;
export const PositionConsumer = PositionContext.Consumer;
export default PositionContext;