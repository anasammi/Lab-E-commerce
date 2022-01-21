
import React from 'react';
import styled from 'styled-components';



const Input = styled.input`
margin: 0 0  20px 10px;
width:60%;
font-size:1.1rem;
border: 1px solid white;
box-shadow: 0 0 4px  rgba(187, 236, 225, 1); 
`

const InputLabel = styled.label`
margin: 20px 0  6px 10px;
width:60%;
font-size:1.1rem;
font-weight: 700;
`

const FiltrosH2 = styled.h2`
  margin: 10px 10px;
`;




class Filter extends React.Component {





    valorData = (e) => {
        this.props.valorDataApp(e)
    }

    render() {


        return (

            <>
                <FiltrosH2>Filtros</FiltrosH2>
                <InputLabel>Valor mínimo:</InputLabel>

                <Input placeholder="Valor minimo"
                    id={1}
                    type={"number"} onChange={this.valorData} />

                <InputLabel>Valor máximo:</InputLabel>

                <Input placeholder="Valor maximo"
                    id={2}
                    type={"number"} onChange={this.valorData} />

                <InputLabel>Busca por nome</InputLabel>

                <Input placeholder="Busca por nome"
                    id={3}
                    type={"text"} onChange={this.valorData} />
            </>
        )
    }
}

export default Filter;