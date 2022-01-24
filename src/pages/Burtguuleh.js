import styled from "styled-components";
import React from "react";
import Everything_N from "../components/Everything_N";
import { FontSizes } from "../components/FontSizes";
import Title from '../components/Title'
import Email from '../components/Email'
import EmailName from '../components/EmailName'
import EmailInput from '../components/EmailInput'
import Password from '../components/Password'
import PasswordName from '../components/PasswordName'
import PasswordInput from '../components/PasswordInput'
import LoginBtn from '../components/LoginBtn'

const Burtguuleh = () => {
  return (
    <Everything_N>
      <Title>
        <FontSizes lg>Бүртгүүлэх</FontSizes>
      </Title>
      <Email>
        <EmailName>
          <FontSizes sm>Цахим хаяг </FontSizes>
        </EmailName>
        <EmailInput placeholder="name@mail.domain"></EmailInput>
      </Email>

      <Password>
        <PasswordName>
          <FontSizes sm>Нууц үг</FontSizes>
        </PasswordName>
        <PasswordInput placeholder="••••••••••"></PasswordInput>
      </Password>

      <Password>
        <PasswordName>
          <FontSizes sm>Нууц үгээ давтна уу?</FontSizes>
        </PasswordName>
        <PasswordInput placeholder="••••••••••"></PasswordInput>
      </Password>

      <LoginBtn>
        <FontSizes md>Бүртгүүлэх </FontSizes>
      </LoginBtn>
 
    </Everything_N>
  );
};

export default Burtguuleh;
