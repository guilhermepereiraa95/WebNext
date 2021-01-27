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
                <Calculadora />
                </div>
            </div>
            
        </div>
    )
}

function Calculadora(){
   

       function add(){

        
        alert(Number(n1.value) - Number(n2.value));
           
       }
        function sub(){

            alert(Number(n1.value) - Number(n2.value));
            
        }
        function div(){
            
            
            alert(Number(n1.value) / Number(n2.value));

        }
        function mul(){
            
            alert(Number(n1.value) * Number(n2.value));
        }

    return(

        <div>
           
        <div class="form-group">

            <input id="n1"  placeholder="Número 1"></input>
            
            <input id="n2"  placeholder="Número 2"></input>

        </div>
        <div class="form-group">
            <button class="btn btn-primary" onClick={add}>+</button>
            <button class="btn btn-secondary" onClick={sub}>-</button>
            <button class="btn btn-warning" onClick={div}>/</button>
            <button class="btn btn-success" onClick={mul}>x</button>
            
        </div>

          
        </div>
    )
}


export default Calculator;