import React, { useState } from 'react';
import styled from "styled-components";
import { Link, useNavigate } from "react-router-dom";
import Everything_N from "../components/Everything_N";
import { FontSizes } from "../components/FontSizes";
import Title from '../components/Title'
import Email from "../components/Email";
import EmailName from '../components/EmailName'
import EmailInput1 from '../components/EmailInput'
import Password from '../components/Password'
import PasswordName from '../components/PasswordName'
import PasswordInput1 from '../components/PasswordInput'
import LoginBtn from '../components/LoginBtn'
import { AuthContext, AuthProvider, useAuthContext } from '../providers/auth-context.js';


const Remember = styled.div`
width:100%;
height: 20px;
display: flex;
flex-direction: row;
justify-content: space-between;
`;

// const RememberMe = styled.div`
// color: #02b589;
// display: flex;
// flex-direction: row;
// gap: 8px;
// align-items: center;
// `; 

// const CheckMark = styled.div`
//   width: 20px;
//   height: 20px;
//   border: 1px solid #02b589;
//   border-radius: 4px
// `;

const ForgotPass = styled.div`
text-decoration: underline
`;

const NewAcc = styled.div`
width: 100%;
display: flex;
justify-content: center;
color: #02b589;
text-decoration: underline;
font-weight: 400
`;

const Nevtreh = () => {
  const { login, signUp, signOut, user, dark, eng } = useAuthContext()
  const log = useNavigate()

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");


  if(user.email){
    log('/')
  }
  
  return ( 
    
    <Everything_N>
      
      <Title>
        <FontSizes lg>{eng ? 'Login' : 'Нэвтрэх'}</FontSizes>
      </Title>
      <Email>
        <EmailName style={{color: dark ? '#FFFFFF' : 'Black', transition: '2s'}}><FontSizes sm>{eng ? 'Email' : 'Цахим хаяг'}</FontSizes></EmailName>
        <EmailInput1 value={email} onChange={(e) => setEmail(e.target.value)} placeholder='name@mail.domain'/>
      </Email>

      <Password>
        <PasswordName style={{color: dark ? '#FFFFFF' : 'Black', transition: '2s'}}><FontSizes sm>{eng ? 'Password' : 'Нууц үг'}</FontSizes></PasswordName>
        <PasswordInput1 value={password} onChange={(e) => setPassword(e.target.value)} placeholder='••••••••••'/>
      </Password>

      <Remember>
        <Link to='/forgotPass'><ForgotPass>{eng ? 'Forgot Password?' : 'Нууц үгээ мартсан?'}</ForgotPass></Link>
      </Remember>

        <LoginBtn onClick={() => login(email, password)}><FontSizes md>{eng ? 'Login' : 'НЭВТРЭХ'}</FontSizes></LoginBtn>
        <Link to="/signup">
        <NewAcc>{eng ? "if you're new, click here!" : 'Шинэ хэрэглэгч бол энд дарна уу?'}</NewAcc>
      </Link>
        
    </Everything_N>
  );
};

export default Nevtreh;
