import React from 'react'
import styled from 'styled-components'

export interface iSign {
 text?: string,
 icon?: any,
}
const SignProps: React.FC<iSign> = ({icon, text}) => {
  return (
    <div>
      <Holder>
        <Main>
          <Icon>{icon}</Icon>
          <IconText>{text}</IconText>
        </Main>
      </Holder>
    </div>
  )
}

export default SignProps
const Icon = styled.div`
width: 25px;
height: 25px;
display: flex;
justify-content: center;
align-items: center;
`;

const IconText = styled.div``;

const Main = styled.div`
display: flex;
justify-content: space-between;
align-items: center;
width: 85%;
height: 30px;
`;

const Holder = styled.button`
width: 130px;
height: 30px;
background-color: white;
border-radius: 5px;
border: 1px solid black;
font-weight: 500;
font-size: 11px;
display: flex;
justify-content: center;
align-items: center;
transition: all 350ms;
:hover{
  cursor: pointer;
}
`;