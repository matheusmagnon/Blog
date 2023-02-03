import styled from "styled-components";

export const SearchFormContainer = styled.form`
  /* position: sticky; */
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin-top: 3rem;
  span {
    color: ${(props) => props.theme["base-text"]};
  }
  input {
    flex: 1;
    border-radius: 6px;
    border: 1px solid ${(props) => props.theme["base-border"]};
    background: ${(props) => props.theme["base-background"]};
    color: ${(props) => props.theme.white};
    padding: 1rem;

    &::placeholder {
      color: ${(props) => props.theme["base-text"]};
    }
  }

  @media (max-width: 635px) {
    width: 80vw;
    input {
      flex: auto;
      padding: 0.1rem;
    }
    button {
      /* padding: 0rem; */
      /* width: 5rem; */
    }
  }

  @media (max-width: 375px) {
    /* width: 200%; */
    gap: 0.3rem;
    input {
      flex: auto;
      padding: 0.1rem;
    }
    button {
      gap: 0rem;
      padding: 0.2rem;
      /* width: 5rem; */
    }
  }
`;

export const SearchFormHeader = styled.div`
  display: flex;
  justify-content: space-between;
`;
