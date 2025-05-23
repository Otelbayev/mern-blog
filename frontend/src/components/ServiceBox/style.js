import styled from "styled-components";
import img from "../../assets/img1.jpeg";

export const Container = styled.div`
  height: 320px;
  .service-title {
    transition: 0.3s;
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: gray;
    font-size: 18px;
    font-weight: 600;
    color: #fff;
    height: 15%;
  }
  .service-content {
    height: 85%;
    position: relative;
    z-index: 1;
    text-align: center;
    display: flex;
    justify-content: center;
    align-items: center;
    background-image: ${({ $bg }) => `url(${$bg || img})`};
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    color: #fff;
    .service-desc {
      padding: 20px;
      font-size: 18px;
    }
    button {
      position: absolute;
      bottom: 20px;
      left: 50%;
      transform: translateX(-50%);
      font-size: 16px;
      color: #fff;
      padding: 10px 15px;
      border: none;
      border-radius: 5px;
      background-color: var(--dark);
      cursor: pointer;
      box-shadow: 0 0 5px 1px #fff;
    }
    &::before {
      content: "";
      position: absolute;
      z-index: -1;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: rgba(0, 0, 0, 0.4);
    }
  }

  &:hover {
    .service-title {
      background: var(--dark);
    }
  }
`;
