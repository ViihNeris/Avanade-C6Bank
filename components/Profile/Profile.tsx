import React from "react";
import styled from "@emotion/styled";
import { Avatar } from "@mui/material";
import Image from "next/image";

const ProfileContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 400px;
  background-color: #242424;
  color: #fff;
  h2,
  h3 {
    margin: 0;
  }
  h3 {
    font-size: 1em;
    font-style: italic;
    color: #a9a2a2;
    font-weight: normal;
  }
`;

const Account = styled.div`
  display: flex;
  width: 80%;
  border: 0.5px solid #888;
  border-radius: 2px;
  margin-bottom: 5%;
  margin-top: 5%;
  div:first-child {
    width: 80%;
    padding-left: 20px;
    & > div {
      width: 100%;
    }
  }
`;

type ProfileProps = {
  name: string;
  role: string;
  agency: string;
  accountNumber: string;
};

export default function Profile(props: ProfileProps) {
  return (
    // Author Photo (ViihNeris): https://avatars.githubusercontent.com/u/93789218?v=4
    <ProfileContainer>
      <Avatar
        alt="Viih Neris"
        src="https://avatars.githubusercontent.com/u/93789218?v=4"
        sx={{ mb: 1, mt: 3, width: 120, height: 120 }}
      ></Avatar>
      <h2>{props.name}</h2>
      <h3>{props.role}</h3>
      <Account>
        <div style={{ width: "62%" }}>
          <p>234 - Banco GitBank S.A.</p>
          <p>Ag: 001 C/C: 123456</p>
        </div>
        <Image
          src={require("../../src/gitbank-logo.png")}
          style={{ maxWidth: "85%" }}
          height={1}
        />
      </Account>
    </ProfileContainer>
  );
}
