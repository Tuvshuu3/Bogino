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
  height: 302px;
  gap: 38px;
`;

const Text = styled.div`
  width: 100%;
  height: 111px;
  display: flex;
  justify-content: center;
  flex-direction: column;
  gap: 24px
`;

const Title = styled.div`
display: flex;
justify-content: center;
font-weight: 700;
color: #02b589;
`

const SmallText = styled.div`
width: 100%;
height: 50px;
text-align: center;
display: flex;
align-items: center;
`

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
    <Everything>
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
    </Everything>
  );
};

export default Recover;
