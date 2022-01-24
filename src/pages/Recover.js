import styled from "styled-components";
import React from "react";
import Everything_N from "../components/Everything_N";
import { FontSizes } from "../components/FontSizes";
import Title from '../components/Title'
import Email from "../components/Email";
import EmailName from '../components/EmailName'
import EmailInput from '../components/EmailInput'

const Text = styled.div`
  width: 100%;
  height: 111px;
  display: flex;
  justify-content: center;
  flex-direction: column;
  gap: 24px
`;

const SmallText = styled.div`
width: 100%;
height: 50px;
text-align: center;
display: flex;
align-items: center;
`

const LoginBtn = styled.button`
  width: 100%;
  height: 44px;
  border-radius: 100px;
  background-color: #02b589;
  color: white;
  border: none;
  font-weight: 700;
`;

const Recover = () => {
  return (
    <Everything_N>
      <Text>
        <Title>
          <FontSizes lg>Нууц үг сэргээх</FontSizes>
        </Title>
        <SmallText>
          <FontSizes sm>
            Бид таны цахим хаяг руу нууц үг сэргээх хаяг явуулах болно.
          </FontSizes>
        </SmallText>
      </Text>
      <Email>
        <EmailName>
          <FontSizes sm>Цахим хаяг </FontSizes>
        </EmailName>
        <EmailInput placeholder="name@mail.domain"></EmailInput>
      </Email>

      <LoginBtn>
        <FontSizes md>Илгээх</FontSizes>
      </LoginBtn>
    </Everything_N>
  );
};

export default Recover;
