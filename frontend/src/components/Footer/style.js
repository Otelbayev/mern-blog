import styled from "styled-components";
import bg from "../../assets/22.jpg";

export const Container = styled.div`
  position: relative;
  background: url("${bg}");
  width: 100%;
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  background-attachment: fixed;
  z-index: 1;
  color: #fff;
  overflow: hidden;

  padding-bottom: 40px;
  .content {
    padding: 20px 0;
    .lists {
      margin-top: 20px;
      display: flex;
      justify-content: space-evenly;
      &__title {
        border-bottom: 2px solid var(--dark);
        font-weight: 600;
        font-size: 20px;
        margin-bottom: 10px;
        padding-bottom: 10px;
      }
      li {
        color: #fff;
        font-size: 16px;
        font-weight: 400;
        padding: 3px 0;
      }
    }
    .contact {
      margin: 50px 0;
      display: flex;
      justify-content: space-around;
      &__item {
        border: 1px solid var(--dark);
        padding: 20px;
        display: flex;
        align-items: center;
        & > div {
          border-left: 1px solid var(--dark);
          padding-left: 20px;
          margin-left: 20px;
        }
        i {
          font-size: 30px;
        }
        &__label {
          font-size: 16px;
          color: lightgrey;
          padding-bottom: 5px;
        }
        &__tel {
          cursor: pointer;
          font-weight: 700;
          color: #fff;
          font-size: 20px;
        }
      }
    }
  }

  .copy {
    text-align: center;
    font-size: 14px;
    padding-top: 10px;
  }

  &::before {
    position: absolute;
    z-index: -1;
    content: "";
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.6);
  }

  @media (max-width: 1000px) {
    .content {
      .contact {
        flex-direction: column;
        gap: 20px;
        &__item {
          i {
            font-size: 25px;
          }
          &__label {
            font-size: 14px;
          }
          &__tel {
            font-size: 18px;
          }
        }
      }
      .lists {
        flex-direction: column;
        gap: 30px;
      }
    }
  }

  @media (max-width: 600px) {
    .content {
      .lists {
        li {
          font-size: 14px;
          padding: 2px 0;
        }
      }
    }
  }
`;
