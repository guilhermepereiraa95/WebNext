import {useState} from 'react';
import styled from 'styled-components';
import 'bootstrap/dist/css/bootstrap.min.css';
import Menu from './menu';


const Title = styled.h1`
    font-size:90px;
    color: #000;
    text-shadow: 10px 10px 15px;
    font-family: Russo One, sans-serif;
    text-align:center;
    margin-top: 100px;
`;

function Home(){
    return (
        <div>
            <Menu />
            <div class="container text-center">
                <div class="col-12">
                <Title>Counter</Title>
                <Contador />
                </div>
            </div>
            
        </div>
    )
}

function Contador(){
    const [contador, setContador] = new useState(1);

    function adicionarContador(){
        setContador(contador + 1);
        
    }

    return(
        <div>
            <div class="jumbotron">{contador}</div>

            
            <button class="btn btn-primary"onClick={adicionarContador}>Click to add</button>
        </div>
    )
}


export default Home