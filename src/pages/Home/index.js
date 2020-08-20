import React from 'react';

import Informacoes from './components/Informacoes';
import Mapa from './components/Mapa';
import './styles.css';
import Main from '../../layouts/Main';

export default function Home() {

    return (
        <Main>
            <div style={{
            width: "100%",
            margin: 0,
        }}>
                <Informacoes />
                <Mapa/>
                </div>
        </Main>
    )
}