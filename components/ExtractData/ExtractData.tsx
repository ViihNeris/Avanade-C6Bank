import React from "react";
import styled from "@emotion/styled";
import TypeDb from "../../types/TypeDb";

const ExtractDataContainer = styled.table`
  width: 100%;
  text-align: center;
  background-color: #fff;
  padding: 20px;
  border-collapse: collapse;

  thead th {
    padding: 5px;
    font-size: 1.3em;
    color: #042b53;
  }

  td {
    font-size: 1.2;
    padding: 18px 0;
    & span {
      font-weight: 600;
      color: #042b53;
      text-transform: uppercase;
    }
  }

  tr {
    line-height: 2.5em;
  }
  tbody tr:nth-child(odd) {
    background-color: #f2f2f2;
  }

  tbody tr:hover {
    background-color: #e2f4f6;
  }
`;

type ExtractDataProps = {
  db: Array<TypeDb>;
};

export default function ExtractData(props: ExtractDataProps) {
  return (
    <ExtractDataContainer>
      <thead>
        <tr>
          <th>Descrição</th>
          <th>Data</th>
          <th>Valor</th>
        </tr>
      </thead>
      <tbody>
        {props.db.map((item, index) => {
          return (
            <tr key={item.id}>
              <td>
                <span>{item.type}</span> – {item.description}
              </td>
              <td>{new Date(item.date).toLocaleDateString("pt-br")}</td>
              <td>
                {new Intl.NumberFormat("pt-br", {
                  style: "currency",
                  currency: "BRL",
                }).format(item.amount)}{" "}
              </td>
            </tr>
          );
        })}
      </tbody>
    </ExtractDataContainer>
  );
}
