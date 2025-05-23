import React, { useRef } from "react";
import Header from "./Header";
import Footer from "./Footer";
import { Outlet } from "react-router-dom";
import styled, { keyframes } from "styled-components";

const scaleAnimation = keyframes`
  0%, 100% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.1);
  }
`;

export const Root = styled.div`
  overflow: hidden;
  position: relative;
  .slide-in {
    position: fixed;
    z-index: 99;
    bottom: 10px;
    right: 50%;
    transform: translateX(50%);
    display: flex;
    align-items: center;
    gap: 10px;
    background-color: #fff;
    padding: 10px;
    border-radius: 5px;
    box-shadow: 0 0 5px #fff;
    /* animation: ${scaleAnimation} 0.5 ease-in-out infinite; */
    button {
      padding: 10px;
      width: 220px;
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
    .slide-in {
      button {
        width: auto;
        padding: 8px 25px;
      }
    }
  }
`;

const Universal = () => {
  return (
    <Root>
      <Header />
      <Outlet />
      <Footer />
      <div className="slide-in">
        <button className="phone">
          <a href="tel:+999999999">
            <i className="fa-solid fa-phone"></i> <span>Qo'ng'iroq</span>
          </a>
        </button>
        <button className="tel">
          <a href="https://t.me/asadbek5577">
            <i className="fa-brands fa-telegram"></i> <span>Telegram</span>
          </a>
        </button>
      </div>
    </Root>
  );
};

export default Universal;
