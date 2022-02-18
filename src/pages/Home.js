import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Logo from "../components/Logo";
import Search from "../components/Search";
import { Link } from "react-router-dom";
import Everything from "../components/Everything";
import { FontSizes } from "../components/FontSizes";
import Header from "../components/Header";
import Content from "../components/Content";
import Instructions from "../components/Instructions";
import Middle from "../components/Middle";
import { useAuthContext } from "../providers/auth-context";
import LogOut from "../components/LogOut";
import { useCollection, useFirebase } from "../firebase";
import ShortUniqueId from "short-unique-id";

const Button = styled.button`
  width: ${(props) => props.w}px;

  border-radius: 100px;
  background-color: #02b589;
  height: 44px;
  color: white;
  border: none;
  font-weight: 700;
`;

//darkmode: #212121;

const Logged = styled.div`
  font-size: 20px;
  font-style: normal;
  font-weight: 700;
  color: #000000;
  display: flex;
  flex-direction: row;
  gap: 10px;
`;

const History = styled.div`
  width: 75%;
  height: 20%;
  display: flex;
  flex-direction: column;
  gap: 10px;
  overflow: scroll;
  overflow-x: hidden;
  padding-right: 15px;
`;

const Part = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

const Shortened = styled.div`
  font-family: Ubuntu;
  font-size: 20px;
  font-style: normal;
  font-weight: 400;
  color: #000000;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 30%;
`;

const Original = styled.div`
  font-family: Ubuntu;
  font-style: normal;
  font-weight: 400;
  color: #000000;
`;

const Copy = styled.div`
  font-family: Ubuntu;
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  color: #02b589;
  text-decoration: underline;
  cursor: pointer;
`;

const Home = () => {
  const { user } = useAuthContext();
  const { data: urls, createDoc: addUrl } = useCollection(user && "allurls");
  const [data, setData] = useState([]);
  const [search, setSearch] = useState("");
  const Ruid = new ShortUniqueId({ length: 6 });
  const { dark, setNightMode } = useAuthContext();


  useEffect(() => {
    if (urls) {
      setData(urls);
    }
  }, [urls]);

  const send = () => {
    {
      user.email
        ? addUrl(Ruid(), { email: `${user.email}`, url: `${search}` })
        : addUrl(Ruid(), { url: `${search}` });
    }
  };

  return (
    <Everything style={{ backgroundColor: dark ? '#212121' : '#FFFFFF', transition: '2s'}}>
      <Header>

        <Content>
          <FontSizes md>
            <Instructions>ХЭРХЭН АЖИЛЛАДАГ ВЭ?</Instructions>
          </FontSizes>

          {user.email ? (
            <Logged style={{color: dark ? '#FFFFFF' : 'Black', transition: '2s'}}>
              {user.email} <LogOut />
            </Logged>
          ) : (
            <Link to="/login">
              <Button w={183}>
                <FontSizes md>НЭВТРЭХ</FontSizes>
              </Button>
            </Link>
          )}
        </Content>
      </Header>

      <Middle>
        <Logo />
        <Search search={search} setSearch={setSearch} send={send} />
      </Middle>

      <History>
        {user.email ? (
          data.map((el) =>
            el.email == user.email ? (
              <Part>
                <Shortened style={{color: dark ? '#FFFFFF' : 'Black', transition: '2s'}}>
                  {`localhost:3000/${el.id}`}
                  <Copy
                    onClick={() =>
                      navigator.clipboard.writeText(`localhost:3000/${el.id}`)
                    }
                  >
                    Copy Link
                  </Copy>
                </Shortened>
                <Original style={{color: dark ? '#FFFFFF' : 'Black', transition: '2s'}}>{el.url}</Original>
              </Part>
            ) : (
              <></>
            )
          )
        ) : (
          <></>
        )}
      </History>
    </Everything>
  );
};

export default Home;
