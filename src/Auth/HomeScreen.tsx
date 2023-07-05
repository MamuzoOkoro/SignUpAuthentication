import styled from "styled-components";
import SignProps from "../reUse/SignProps";
import {FcGoogle} from "react-icons/fc"
import {BsFacebook} from "react-icons/bs"
import InputProps from "../reUse/InputProps";
import {FiMail} from "react-icons/fi"
import  {FiKey} from "react-icons/fi"


const HomeScreen = () => {
  return (
    <div>
      <Container>
        <Main>
          <LogoHold>
            <Logo></Logo>
            <LogoText>Sign Up!</LogoText>
          </LogoHold>
          <SignHold>
            <SignProps icon={<FcGoogle size={20}/>} text="Use Google"/>
            <SignProps icon={<BsFacebook size={20} color="
            blue"/>} text="Use Facebook"/>
          </SignHold>
          <Hold>
            <Line/>
          <OR>OR</OR>
            <Line/>
          </Hold>
          <Holder>
            <InputProps place="text@gmail.com" icon={<FiMail/>} col="blue" name="Email:" type="text" mt="15px"/>
            <InputProps place="Your New Password" icon={<FiKey/>}  name="Password:" mt="15px"/>
            <InputProps place="Repeat Your New Password" icon={<FiKey/>}  name="Reapeat Password:" mt="15px"/>
          </Holder>
          <Button>Sign-Up</Button>
          <Txt>By registering you agree to our <span>Terms</span> and <span>Privacy</span></Txt>
          <Take>Sign-In</Take>
        </Main>
      </Container>
    </div>
  );
};

export default HomeScreen;

const Line = styled.div`
width: 120px;
height: 1px;
background-color: silver;
`;

const Hold = styled.div`
display: flex;
width: 90%;
align-items: center;
justify-content: space-between;
margin: 10px 0;
`;

const Take = styled.div`
font-size: 14px;
margin-top: 10px;
font-weight: bolder;
color: blue;
transition: all 350ms;

:hover{
  cursor: pointer;
}
`;

const Txt = styled.div`
font-size: 12px;
margin-top: 10px;

span{
  font-weight: bolder;
  text-decoration: underline;
  
}
`;


const Button = styled.button`
width: 90%;
height: 35px;
border: none;
border-radius: 5px;
background-color: blue;
color: white;
margin-top: 10px;
`;

const OR = styled.div`
font-size: 15px;
color: silver;
`;

const Holder = styled.div``;

const Logo = styled.div`
  width: 50px;
  height: 50px;
  background-color: blue;
  border-radius: 10px;
`;

const LogoText = styled.div`
  letter-spacing: 1px;
  font-weight: 700;
  margin-top: 3px;
  font-size: 20px;
`;

const LogoHold = styled.div`
  width: 100%;
  height: 100px;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`;

const SignHold = styled.div`
  height: 35px;
  width: 90%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Main = styled.div`
  width: 300px;
  height: 450px;
  background-color: white;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  /* justify-content: center; */
`;

const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: skyblue;
`;
