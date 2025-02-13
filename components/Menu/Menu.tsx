import React from "react";
import styled from "@emotion/styled";
import Link from "next/link";
import { Icon } from "@mui/material";

const MenuContainer = styled.nav`
  display: flex;
  flex-direction: column;
  width: 100%;
  background-color: #242424;
  color: #fff;
  & > ul {
    width: 100%;
    margin: 0;
    padding: 0 0 0 2%;
    display: flex;
    flex-direction: column;
    height: 200px;
    overflow-y: auto;
    &::-webkit-scrollbar-thumb {
      background-color: #242424;
      outline: 1px solid #777;
      border-radius: 5px;
    }
    &::-webkit-scrollbar {
      width: 5px;
    }
    li {
      padding-left: 5%;
      font-weight: bold;
      font-size: 0.9rem;
      list-style: none;
      line-height: 30px;
      border: 4px solid transparent;
      border-top-right-radius: 3px;
      border-bottom-right-radius: 3px;
      &:hover {
        background-color: #2e788979;
        border-left-color: #1976d2;
        cursor: pointer;
      }
    }
  }
`;

export default function Menu() {
  return (
    <MenuContainer>
      <ul>
        <li>
          <Link href="/">
            <a>Início</a>
          </Link>
        </li>
        <li>Extrato</li>
        <li>Tranferências</li>
        <li>Pagamentos</li>
        <li>Cartões</li>
        <li>Crédito</li>
      </ul>
    </MenuContainer>
  );
}
