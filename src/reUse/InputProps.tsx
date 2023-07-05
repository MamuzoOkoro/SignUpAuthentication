import React from 'react'
import styled from 'styled-components'

interface Iinput {
  mt?: string
  place?: string,
  col?: string,
  name?: string,
  type?: string,
  icon?: any
}
const InputProps: React.FC<Iinput> = ({mt, col, place, name, type, icon}) => {
  return (
    <div>
     <Container mt={mt!}>
        <Name>{name}</Name>
      <Main>
        <Input placeholder={place} type={type}/>
        <Icon col={`${col!}`}>{icon}</Icon>
      </Main>
     </Container>
    </div>
  )
}

export default InputProps
const Name = styled.div`
font-size: 10px;
`;

const Input = styled.input`
width: 200px;
height: 25px;
border: none;
outline: none;
border-radius: 3px;
  padding-left: 5px;
::placeholder{
  padding-left: 5px;
  font-size: 11px;
}
`;

 const Icon = styled.div<{col?: string}>`
 width: 20px;
 height: 20px;
 color: #484747;
 `;

 const Main = styled.div`
 width: 100%;
 display: flex;
align-items: center;
border: 1px solid grey;
margin:5px 0;
border-radius: 3px;
justify-content: space-between;
 `;

const Container = styled.div`
width: 270px;
background-color: white;
`;