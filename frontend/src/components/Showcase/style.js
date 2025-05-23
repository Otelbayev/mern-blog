import styled from "styled-components";
import bg from "../../assets/bg.jpg";

export const Container = styled.div`
  margin-top: 60px;
  position: relative;
  width: 100%;
  height: calc(100dvh - 40px);
  background-image: ${({ $bg }) => `url(${$bg || bg})`};
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  z-index: 0;
  color: #fff;
  overflow: hidden;
  display: flex;
  align-items: center;

  .showcase {
    display: flex;
    align-items: center;
    gap: 20px;
    &__left {
      width: 60%;
      &__title {
        font-size: 50px;
        font-weight: 700;
      }
      &__mintitle {
        font-size: 30px;
        margin-top: 10px;
        font-weight: 600;
      }
    }
    &__right {
      width: 40%;
    }
  }

  &::before {
    position: absolute;
    z-index: -1;
    content: "";
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.4);
  }

  @media (max-width: 1000px) {
    .showcase {
      flex-direction: column;
      &__left {
        width: 100%;
        text-align: center;
        &__title {
          font-size: 40px;
        }
        &__mintitle {
          font-size: 20px;
        }
      }
      &__right {
        width: 100%;
      }
    }
  }

  @media screen and (max-width: 700px) {
    margin-top: 55px;
    height: calc(100dvh - 55px);
    background-image: ${({ $bg }) => `url(${$bg || bg})`};
    .showcase {
      &__left {
        &__title {
          font-size: 30px;
        }
        &__mintitle {
          font-size: 16px;
        }
      }
    }
  }
  @media screen and (max-width: 450px) {
    .showcase {
      &__left {
        &__title {
          font-size: 30px;
        }
      }
    }
  }
`;
