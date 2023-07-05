import React from 'react'
import styled from 'styled-components'
import InputProps from '../components/reuse/InputProps'

const View = () => {
  return (
    <div>
        <Container>
            <Main>
                <InputProps 
                name 
                name2='Name' 
                nameplaceholder='Name'
                email 
                email2='Email' 
                emailplaceholder='Email'
                password 
                password2='Password' 
                passwordplaceholder='Password'
                confirm 
                confirm2='Confirm Password' 
                confirmplaceholder='Confirm Password'
                />
            </Main>
        </Container>
    </div>
  )
}

export default View

const Main = styled.div`
display: flex;
justify-content: center;
align-items: center;
`
const Container = styled.div`
display: flex;
height: 100vh;
width: 100%;
justify-content: center;
align-items: center;
box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
`