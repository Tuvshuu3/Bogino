import React, {useState} from "react";
import Everything_N from "../components/Everything_N";
import { FontSizes } from "../components/FontSizes";
import Title from '../components/Title'
import Email from '../components/Email'
import EmailName from '../components/EmailName'
import EmailInput1 from '../components/EmailInput'
import Password from '../components/Password'
import PasswordName from '../components/PasswordName'
import PasswordInput1 from '../components/PasswordInput'
import LoginBtn from '../components/LoginBtn'
import { AuthContext, AuthProvider, useAuthContext } from '../providers/auth-context.js';

const Burtguuleh = () => {

  const { login, signUp, signOut, user, dark } = useAuthContext()

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <Everything_N>
      <Title>
        <FontSizes lg>Бүртгүүлэх</FontSizes>
      </Title>
      <Email>
        <EmailName style={{color: dark ? '#FFFFFF' : 'Black', transition: '2s'}}>
          <FontSizes sm>Цахим хаяг </FontSizes>
        </EmailName>
        <EmailInput1 value={email} onChange={(e) => setEmail(e.target.value)} placeholder="name@mail.domain"/>
      </Email>  

      <Password>
        <PasswordName style={{color: dark ? '#FFFFFF' : 'Black', transition: '2s'}}>
          <FontSizes sm>Нууц үг</FontSizes>
        </PasswordName>
        <PasswordInput1 value={password} onChange={(e) => setPassword(e.target.value)} placeholder="••••••••••"/>
      </Password>

      <Password>
        <PasswordName style={{color: dark ? '#FFFFFF' : 'Black', transition: '2s'}}>
          <FontSizes sm>Нууц үгээ давтна уу?</FontSizes>
        </PasswordName>
        <PasswordInput1 placeholder="••••••••••"/>
      </Password>

      <LoginBtn onClick={() => signUp(email, password)}>
        <FontSizes md>Бүртгүүлэх </FontSizes>
      </LoginBtn>
 
    </Everything_N>
  );
};

export default Burtguuleh;
