import styled from "styled-components";

export const CardContainer = styled.div`
  /* margin: 10px; */
  border: 1px transparent solid;
  max-width: 28rem;
  background: ${(props) => props.theme["base-post"]};
  border-radius: 10px;
  padding: 2rem;
  cursor: pointer;

  &:hover {
    border: 1px ${(props) => props.theme["base-border"]} solid;
  }
`;

export const CardContente = styled.div``;

export const CardHeader = styled.div`
  display: flex;
  /* gap: 3rem; */
  span {
    white-space: nowrap;
    color: ${(props) => props.theme["base-text"]};
  }
  margin-bottom: 1rem;
`;

export const CardText = styled.p`
  color: ${(props) => props.theme["base-text"]};
`;
