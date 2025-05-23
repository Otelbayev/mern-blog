import styled from "styled-components";

export const Container = styled.div`
  .box {
    background: ${({ $mode }) =>
      $mode === "dark" ? "rgba(0,0,0,0.5)" : "#fff"};
    border-radius: 5px;
    padding: 30px 50px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    width: ${({ $width }) => $width || "350px"};
    &__title {
      text-align: center;
      font-size: 30px;
      font-weight: 600;
      margin: 10px;
      color: ${({ $mode }) => ($mode === "dark" ? "#fff" : "#000000")};
    }
    &__desc {
      color: ${({ $mode }) => ($mode === "dark" ? "#fff" : "#000000")};
      font-size: 16px;
      font-weight: 400;
      text-align: center;
      margin-bottom: 10px;
    }
    form {
      display: flex;
      flex-direction: column;
      width: 100%;
      gap: 5px;
      input {
        border: 1px solid var(--dark);
        padding: 8px 10px;
        border-radius: 3px;
        outline: none;
        font-size: 16px;
      }
    }
    button {
      padding: 10px;
      cursor: pointer;
      width: 100%;
      border-radius: 5px;
      border: none;
      i {
        font-size: 23px;
        color: #fff;
      }
      a {
        display: flex;
        color: #fff;
        align-items: center;
        justify-content: center;
        gap: 8px;
        text-decoration: none;
        span {
          font-size: 16px;
          font-weight: 700;
        }
      }
    }
    .phone {
      background-color: #00ff26cf;
    }
    .tel {
      background-color: #00a2ffcf;
    }
  }
  @media (max-width: 600px) {
    .box {
      width: ${({ $width }) => $width || "350px"};
      &__title {
        font-size: 25px;
      }
      padding: 20px;
      form {
      }
    }
  }
`;
