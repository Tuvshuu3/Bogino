import styled from "styled-components";
import React from "react";
import { Link } from "react-router-dom";

const FontSizes = styled.div`
    font-size: ${(props) => {
      if (props.md) {
        return "20";
      } else if (props.lg) {
        return "32";
      } else if (props.sm) {
        return "16";
      }
    }}px
  }
`;

const Everything = styled.div`
  display: flex;
  flex-direction: column;
  width: 381px;
  height: 420px;
  gap: 32px;
`;

const Title = styled.div`
  width: 100%;
  color: #02b589;
  font-weight: 700;
  display: flex;
  justify-content: center;
`;

const Email = styled.div`
  width: 100%;
  height: 70px;
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

const EmailName = styled.div`
  font-weight: 400;
  padding-left: 15px;
`;

const EmailInput = styled.input`
  width: 100%;
  height: 44px;
  border: 1px solid #f0f0f0;
  border-radius: 100px;
  text-align: left;
  padding-left: 10px;
  box-shadow: 0px 1px 5px 0px #00000029;
  padding-left: 16px;
`;

const Password = styled.div`
  width: 100%;
  height: 70px;
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

const PasswordName = styled.div`
  font-weight: 400;
  padding-left: 15px;
`;

const PasswordInput = styled.input`
  width: 100%;
  height: 44px;
  border: 1px solid #f0f0f0;
  border-radius: 100px;
  text-align: left;
  padding-left: 10px;
  box-shadow: 0px 1px 5px 0px #00000029;
  padding-left: 16px;
`;

const Remember = styled.div`
  width: 100%;
  height: 20px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

const RememberMe = styled.div`
  color: #02b589;
  display: flex;
  flex-direction: row;
  gap: 8px;
  align-items: center;
`;

const CheckMark = styled.div`
  width: 20px;
  height: 20px;
  border: 1px solid #02b589;
  border-radius: 4px;
`;

const ForgotPass = styled.div`
  text-decoration: underline;
`;

const LoginBtn = styled.button`
  width: 100%;
  height: 44px;
  border-radius: 100px;
  background-color: #02b589;
  color: white;
  border: none;
  font-weight: 700;
`;

const NewAcc = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  color: #02b589;
  text-decoration: underline;
  font-weight: 400;
`;

const Nevtreh = () => {
  return (
    <Everything>
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
 
    </Everything>
  );
};

export default Nevtreh;
