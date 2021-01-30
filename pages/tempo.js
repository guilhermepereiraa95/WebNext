function Tempo(props){

    const dynamicDate = new Date();
    const dynamicDateString = dynamicDate.toGMTString();

    return(

        <div>
            <div>
                {dynamicDateString} <p>(Dinâmico)</p>
            </div>   
            <div>
                {props.staticDateString} <p>(Estático)</p>
            </div>
     </div>
        
    )

}

export function getStaticProps(){

    const staticDate = new Date();
    const staticDateString = staticDate.toGMTString();

    return {
        props:{
            staticDateString
        }

    }
 

}

export default Tempo;