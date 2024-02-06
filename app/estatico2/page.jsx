function obterRandomNumber(){
    return Math.random()
}

export default function Estatico2(){
    const numero = obterRandomNumber()
    return (<div>
        <h1>Estático #02</h1>
        <h2>{numero}</h2>
    </div>)   
}