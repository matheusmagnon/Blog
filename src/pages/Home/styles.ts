import styled from "styled-components";

export const HomeContainer = styled.div`
  max-width: 60rem;
  margin: 2rem auto;
  padding: 0 1rem;

  /* display: grid; */
  /* grid-template-columns: 256px 1fr; */
  /*tamanho das colunas 1fr flexivel*/
  /* gap: 2rem; */
  /*espaço entre colunas*/
  /* align-items: flex-start; */
  /*alinhar para o topo*/

  @media (max-width: 768px) {
    html {
      font-size: 87.5%;
    }
  }
`;
