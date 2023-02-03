import styled from "styled-components";

export const SummaryContainer = styled.div`
  background-color: ${(props) => props.theme["base-profile"]};
  /* height: 212px; */
  width: 100%;
  /* max-width: 864px; */
  margin: 0 auto;
  margin-top: -6rem;
  position: relative;
  padding: 1.5rem;
  border-radius: 10px;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
`;

export const SummaryContent = styled.div`
  display: flex;
  flex-direction: row;
  gap: 2rem;
  img {
    width: 10rem;
    border-radius: 8px;
  }
  > div {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    /* justify-content: flex-end; */
    /* display: flex; */
    /* flex-direction: column; */
  }
`;

export const BaseText = styled.p`
  color: ${(props) => props.theme["base-text"]};
  font-size: 16px;
  padding-right: 24px;
  /* white-space: nowrap; */
`;

export const AboutProfile = styled.div`
  display: flex;
  flex-direction: row;
  white-space: nowrap;

  img {
    width: 1.6rem;
    padding-right: 8px;
  }
  /* svg {
    margin-left: 8px;
  } */
`;
