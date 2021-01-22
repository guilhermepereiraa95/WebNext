import {useState} from 'react';
import styled from 'styled-components';
import 'bootstrap/dist/css/bootstrap.min.css';

const Title = styled.h1`
    font-size:30px;
    color: red;
`;



function Home(){
    return (
        <div>
            <div class="container">
                <Title>Home</Title>
                <Contador />
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
            <div>{contador}</div>

            
            <button class="btn btn-primary"onClick={adicionarContador}>Adicionar</button>
        </div>
    )
}


export default Home