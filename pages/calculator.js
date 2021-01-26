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



function Calculator(){
    return (
        <div>
            <Menu />
            <div class="container text-center">
                <div class="col-12">
                <Title>Calculator</Title>
              
                </div>
            </div>
            
        </div>
    )
}

function Calculadora(){
   

    return(
        <div>
            <input id="n1" placeholder="Número 1"></input>
            
            <input id="n2" placeholder="Número 2"></input>

            <button value="+"></button>

            
            <button class="btn btn-primary"onClick={adicionarContador}>Click to add</button>
        </div>
    )
}


export default Calculator;