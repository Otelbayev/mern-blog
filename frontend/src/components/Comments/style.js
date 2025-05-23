import styled from "styled-components";
import bg from "../../assets/21.jpg";

export const Container = styled.div`
  padding: 20px 0;
  background-image: url("${bg}");
  background-repeat: no-repeat;
  background-position: center;
  background-attachment: fixed;
  background-size: cover;
  position: relative;
  z-index: 1;
  color: #fff;

  &::before {
    position: absolute;
    z-index: -1;
    content: "";
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.3);
  }
  .title {
    color: #fff;
  }

  .slider {
    margin-top: 30px;
    &__item {
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: column;
      text-align: center;
      &__name {
        font-weight: 700;
        padding: 10px 0;
        font-size: 20px;
      }
      &__desc {
        font-weight: 400;
        font-size: 14px;
        width: 80%;
      }
      img {
        border-radius: 50%;
        width: 100px;
      }
    }
  }
`;
