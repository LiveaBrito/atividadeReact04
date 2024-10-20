function Idade(props){

    let idade = props.numeroIdade

    if(idade >= 18){
        return <p>Você é adulto!</p>
    }else{
        return <p>Você é menor de idade</p>
    }

}

export default Idade