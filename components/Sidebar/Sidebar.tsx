import React from "react";
import styled from "@emotion/styled";
import Profile from "../Profile";
import Balance from "../Balance";
import Menu from "../Menu";

const SideBarContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 350px;
  height: 100vh;
  background: #242424;
  position: fixed;
`;

export default function Sidebar() {
  return (
    <SideBarContainer>
      <Profile
        name="Viih Neris"
        role="Anls, Full Stack Dev"
        agency="0o1"
        accountNumber="123456789"
      />
      <Balance amount={10000000} />
      <Menu />
    </SideBarContainer>
  );
}
