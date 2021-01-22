import {useState} from 'react';
import Head from 'next/head';

function Home(){
    return (
        <div>
            <Head>Home</Head>
            
            
        <Contador />
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

            
            <button onClick={adicionarContador}>Adicionar</button>
        </div>
    )
}


export default Home