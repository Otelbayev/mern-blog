import styled from "styled-components";

export const Root = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  background-color: #ffffff;
  z-index: 99;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

export const Container = styled.div`
  background-color: var(--dark);
  .top {
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-size: 20px;
    height: 40px;
    color: #fff;
    &__title {
      font-weight: 600;
    }

    &__phone {
      display: flex;
      align-items: center;
      gap: 10px;
      i {
        vertical-align: middle;
      }
      a {
        color: #fff;
        font-weight: 500;
      }
    }
  }
  @media screen and (max-width: 700px) {
    .top {
      justify-content: center;
      height: 35px;
      &__title {
        display: none;
      }
      &__phone {
        font-size: 16px;
      }
    }
  }
`;

export const Wrapper = styled.div`
  background: #fff;
  .header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 60px;
    .logo {
      a {
        display: flex;
        align-items: center;
        gap: 7px;
        text-decoration: none;
      }
      .logo-title {
        text-transform: uppercase;
        font-size: 20px;
        font-weight: 700;
        color: var(--dark);
        text-decoration: none;
      }

      img {
        width: 50px;
        height: 50px;
      }
    }
    .nav__list {
      list-style-type: none;
      display: flex;
      align-items: center;
      gap: 15px;

      &__item {
        width: 100%;
        a {
          padding: 5px 0;
          white-space: nowrap;
          cursor: pointer;
          display: block;
          width: 100%;
          color: var(--dark);
          font-size: 18px;
          font-weight: 500;
          text-decoration: none;
        }
      }
    }
    .bars {
      display: none;
    }
  }
  @media screen and (max-width: 700px) {
    .header {
      height: 55px;
      .bars {
        display: block;
        color: var(--dark);
        font-size: 30px;
        cursor: pointer;
      }
      .nav__list {
        position: fixed;
        border-top: 1px solid var(--dark);
        z-index: -1;
        top: 55px;
        left: 0;
        flex-direction: column;
        align-items: flex-start;
        width: 100%;
        height: 260px;
        background-color: #fff;
        padding: 20px;
        gap: 20px;
        transform: ${({ open }) =>
          open === false ? "translateY(-700px)" : "translateY(0)"};
        transition: all 0.5s ease;
        box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
        gap: 5px;
        &__item {
          border-bottom: 1px solid rgba(0, 0, 0, 0.1);
          padding: 5px 0;
        }
      }
    }
  }
`;
