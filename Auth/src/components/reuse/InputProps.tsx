import React, { useState } from 'react'
import styled from 'styled-components'
import { MdOutlineVisibility, MdOutlineVisibilityOff } from 'react-icons/md'

interface iInput {
    name?: boolean,
    email?: boolean,
    password?: boolean,
    confirm?: boolean,

    name2?: string,
    email2?: string,
    password2?: string,
    confirm2?: string,

    nameplaceholder?: string,
    emailplaceholder?: string,
    passwordplaceholder?: string,
    confirmplaceholder?: string,
}

const InputProps: React.FC<iInput> = ({
    name, email, password, confirm,
    name2, email2, password2, confirm2,
    nameplaceholder, emailplaceholder, passwordplaceholder, confirmplaceholder,
}) => {

    const [show, setShow] = useState<boolean>(false);
    const [show2, setShow2] = useState<boolean>(false);

    const onShow = () => {
        setShow(!show)
    }
    const onShow2 = () => {
        setShow2(!show2)
    }

    return (
        <Container>
            {name ? <InputHolder>
                <Text>{name2} <p>*</p></Text>
                <Input placeholder={nameplaceholder} />
            </InputHolder> : null}

            {email ? <InputHolder>
                <Text>{email2} <p>*</p></Text>
                <Input placeholder={emailplaceholder}/>
            </InputHolder> : null}
            {password ?
                show ? (
                    <InputHolder>
                        <Text>{password2} <p>*</p></Text>
                        <Input placeholder={passwordplaceholder} type='' />
                        <Icon2 onClick={onShow} />
                    </InputHolder>
                ) : (<InputHolder>
                    <Text>{password2} <p>*</p></Text>
                    <Input placeholder={passwordplaceholder} type='password' />
                    <Icon onClick={onShow} />
                </InputHolder>)
                : null}
            {
                confirm ?
                    show2 ? (
                        <InputHolder>
                            <Text>{confirm2} <p>*</p></Text>
                            <Input placeholder={confirmplaceholder} type='' />
                            <Icon2 onClick={onShow2} />
                        </InputHolder>
                    ) : (<InputHolder>
                        <Text>{confirm2} <p>*</p></Text>
                        <Input placeholder={confirmplaceholder} type='password' />
                        <Icon onClick={onShow2} />
                    </InputHolder>) : null

            }
        </Container>
    )
}

export default InputProps



const Icon2 = styled(MdOutlineVisibility)`
position: absolute;
font-size: 20px;
right: 8px;
margin-top: 15px;
opacity: 0.5;
cursor: pointer;
`
const Icon = styled(MdOutlineVisibilityOff)`
position: absolute;
font-size: 20px;
right: 8px;
margin-top: 15px;
opacity: 0.5;
cursor: pointer;
`
// const Container = styled.div``
const Container = styled.div`
padding: 20px 30px;
border-radius: 5px;
box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
`

const InputHolder = styled.div`
margin: 10px 0px;
position: relative
`
const Input = styled.input`
outline: none;
border: 1px solid silver;
border-radius: 8px;
width: 300px;
height: 35px;
padding-left: 10px;
margin-top: 5px;;

:focus{
    outline: 1px solid #2288E6;
    border: 1px solid transparent
}
::placeholder{
    color: silver
}

`
const Text = styled.div`
display: flex;
font-weight: 700;
color: rgba(0, 0, 0, 0.6);

p{
    margin-left: 5px;
    margin-top: 0px;
    margin-bottom: 0px;
    color: red;
}
`
