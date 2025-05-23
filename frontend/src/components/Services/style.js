import styled from "styled-components";

export const Container = styled.div`
  margin: 40px 0;
  .content-s {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    padding: 20px 0;
    gap: 20px;
  }
  @media (max-width: 1000px) {
    .content-s {
      grid-template-columns: repeat(2, 1fr);
    }
  }
  @media (max-width: 676px) {
    .content-s {
      grid-template-columns: 1fr;
    }
  }
`;
