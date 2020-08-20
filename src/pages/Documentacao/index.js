import React from 'react';
import Detail from '../../layouts/Detail';
import {Container, Image, Col} from 'react-bootstrap';

export default function Documentacao(){

    const buscarLinhas = require("./assets/images/buscarlinhas-info.png");
    const buscarParadas = require("./assets/images/buscarparadas-info.png");
    const buscarCorredores = require("./assets/images/buscarcorredores-info.png");
    const buscaronibus = require("./assets/images/buscaronibus.png");
    const buscarparada = require("./assets/images/buscarparadas.png");
    const buscarprevisao = require("./assets/images/buscarprevisao.png");
    const comp1 = require("./assets/images/comp1.png");
    const comp2 = require("./assets/images/comp2.png");

    return(
        <Detail title="Documentação">
            <Container>
                <h3>Introdução</h3>
                <p> 
                    Esta aplicação foi desenvolvida para o desafio técnico do programa de estágio Aiko. O objetivo desta aplicação é prover para o usuário informações sobre os ônibus da cidade de São Paulo, como a posição dos veículos, paradas e outros. Para isso, as informações mostradas são obtidas a partir da <a href="http://www.sptrans.com.br/desenvolvedores/api-do-olho-vivo-guia-de-referencia/">API Olho Vivo</a>.
                </p>
                <h3>Funcionalidades</h3>
                    <p>As funcionalidades da aplicação estão divididas em dois tópicos para melhor compreensão.</p>
                    <h4>Informações</h4>
                    <ul style={{
                        margin: 10
                    }}>
                        <li>Buscar por linhas: informando o número da linha ou o nome do terminal principal ou secundário neste campo, o usuário é direcionado para /linhas. Nessa rota, as linhas serão listadas e, ao clicar em uma delas, todas as paradas atendidas por ela são informadas.</li>
                        <Image style={{
                            marginTop: 20,
                            marginBottom: 20,
                        }} fluid src={buscarLinhas}/>
                        <li>Buscar por paradas: informando o nome ou endereço da parada, o usuário é direcionado para /paradas, onde terá acesso a uma lista de paradas filtradas pela informação pela qual ele buscou. O usuária ainda será capaz de fazer um filtro na lista gerada digitando o nome ou edereço da parada no campo localizado acima da lista.</li>
                        <Image style={{
                            marginTop: 20,
                            marginBottom: 20 
                        }} fluid src={buscarParadas}/>
                        <li>Buscar por corredores: selecionando o corredor, o usuário é direcionado para /corredores, onde onde terá acesso à lista de todas as paradas compõem aquele corredor. O usuária ainda será capaz de fazer um filtro na lista gerada digitando o nome ou edereço da parada no campo localizado acima da lista.</li>
                        <Image style={{
                            marginTop: 20,
                            marginBottom: 20 
                        }} fluid src={buscarCorredores}/>
                    </ul>
                    <h4>Mapa</h4>
                    <ul style={{
                        margin: 10
                    }}>
                        <li>Buscar por ônibus: como mostrado na imagem abaixo, ao informar um valor válido do código de uma linha, todos os ônibus encontrados serão exibidos no mapa. O contador é iniciado e a cada 30 segundos a posição dos veículos é atualizada no mapa. O usuário também tem a opção de clicar no botão de atualizar para fazer a atualização antes dos 30 segundos ou clicar no botão de deletar para limpar a pesquisa. Clicando no ícone do ônibus no mapa, o ícone de acessibilidade estará presente se o ônibus for acessível para pessoas com deficiência. Algumas informações sobre a linha procurada e veículos encontrados é exibida logo acima do mapa.</li>
                        <Image style={{
                            marginTop: 20,
                            marginBottom: 20 
                        }} fluid src={buscaronibus}/>
                        <li>Buscar por paradas: ao buscar pelo nome ou endereço da parada, as paradas correspondentes a esse filtro serão exibidas no mapa. Clicando no ícone da parada no mapa, será mostrado o nome da parada, se houver. O usuário também pode buscar paradas por linha ou corredor, clicando no botão "filtrar". Ao clicar em ocultar, as paradas serão ocultadas do mapa e clicando novamente serão exibidas. O botão deletar exclui a busca.</li>
                        <Image style={{
                            marginTop: 20,
                            marginBottom: 20 
                        }} fluid src={buscarparada}/>
                        <li>Calcular previsão de chegada: aqui, há duas possibilidades: buscar a previsão de chegada de todos os ônibus em uma determinada parada (Selecionar por parada) ou buscar apenas os ônibus de uma determinada linha (Selecionar por parada e linha). Selecionando uma das opções e fornecendo corretamente os dados de busca, o usuário verá no mapa a posição da parada e de cada ônibus no horário da atualização. As posições atualizam a cada 30 segundos ou quando o botão de atualizar é acionado. O botão deletar limpa as informações da busca. Clicando no ícone do ônibus no mapa, serão mostradas as informações daquele ônibus e linha e o horário previsto para chegar na parada.</li>
                        <Image style={{
                            marginTop: 20,
                            marginBottom: 20 
                        }} fluid src={buscarprevisao}/>
                    </ul>
                <p></p>
                <h3>Componentização</h3>                
                <p>A seguir são detalhados os principais componentes da aplicação.</p>
                <h4>Base</h4>
                <p>
                    No diretório raiz do projeto, encontra-se o diretporio SCR. Dentro dele, está toda a base da aplicação. O componente "routes.js", renderizado em "app.js" é responsável, com o auxílio da biblioteca react-router-dom, por renderizar o componente correspondente a rota buscada.
                </p>
                <p>
                    Os componentes que compõem as seis rotas da aplicação estão dentro do diretório "pages". 
                    A imagem abaixo mostra a árvore de componentes básica.
                </p>
                <Image style={{
                            marginTop: 20,
                            marginBottom: 20 
                        }} fluid src={comp1}/>
                <h4>Pages</h4>
                <p>
                    Em cada um dos diretórios dentro de "pages" existe o arquivo "index.js", que exporta o componente correspondente àquela página.
                </p>
                <p>
                    Para fins de organização, o componente "Home" é divido em outros dois: "Informacoes" e "Mapa". O primeiro é composto por um componente "Jumbotron", dois "CardSearch" (responsáveis pela renderização do Card e formulários de busca) e um "CardDropdown" (responsável por renderizar o Card e o formulário com select). O segundo renderiza um conjunto de NavItems e dentro deles os três componentes: BuscarOnibus, BuscarParadas e PrevisaoChegada.
                </p>
                <Image style={{
                            marginTop: 20,
                            marginBottom: 20 
                        }} fluid src={comp2}/>
                <h4>Layouts</h4>
                <p>
                    A layout "Main" é usada apenas em "Home" e acrescenda o "Footer" a esse componente. Já a layout "Detail" é usada nas demais páginas e é composta por uma estrutura com um Card e o Footer. O Card contém um botão de voltar à página anterior, um título e a informação vinda de "props.children".
                </p>
                <h4>Services</h4>
                <p>Dentro desse diretório existe um arquivo "api.js" que exporta uma instancia de "axios" com uma configuração de URL básica, correspondente à API. </p>
                <h4>Providers</h4>
                <p>
                    Na pasta "Providers", há um componete que exporta o contexto usado para deixar a opção de localização e as coordenadas escolhidas pelo usuário no topo da árvore de componentes. É usado para que todos os componentes que renderizam um mapa tenham acesso à essa informação.
                </p>
                <h3>Tecnologias</h3>
                <p>Framework utilizado: <a href="https://reactjs.org/">React</a>.</p>
                <strong>Bibliotecas: </strong>
                <ul style={{
                    marginLeft: 30
                }}>
                    <li>react-bootstrap</li>
                    <li>react-icons</li>
                    <li>react-leaflet</li>
                    <li>react-router-dom</li>
                    <li>axios</li>
                </ul>
            </Container>
        </Detail>
    )
}