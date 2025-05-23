import styled from "styled-components";

export const Container = styled.div`
  padding: 20px 0;
  .content {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    padding: 20px 0;
    gap: 20px;
    .cart {
      cursor: pointer;
      border: 1px solid var(--dark);
      border-radius: 3px;
      overflow: hidden;
      min-height: 300px;
      &__bottom {
        height: 30%;
        transform: translateY(-5px);
        background-color: #fff;
        padding: 20px;
      }
      &__top {
        display: flex;
        justify-content: space-between;
        align-items: center;
      }
      &__title {
        background: #fff;
        font-size: 18px;
        font-weight: 700;
        color: var(--dark);
        margin: 15px 0;
        display: -webkit-box;
        -webkit-line-clamp: 2; /* faqat 2 qatorga cheklaydi */
        -webkit-box-orient: vertical;
        overflow: hidden;
        text-overflow: ellipsis;
      }
      img {
        width: 100%;
        height: 70%;
        border-radius: 3px 3px 0 0;
        transition: transform 0.3s;
        &:hover {
          transform: scale(1.05);
        }
      }
      &:hover {
        box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
      }
    }
  }
  @media (max-width: 1200px) {
    .content {
      grid-template-columns: repeat(3, 1fr);
    }
  }
  @media (max-width: 900px) {
    .content {
      grid-template-columns: repeat(2, 1fr);
    }
  }
  @media (max-width: 600px) {
    .content {
      grid-template-columns: 1fr;
      padding: 10px 20px;
    }
  }
`;

export const Sale = styled.div`
  padding: 50px 0;
  background: rgb(242, 242, 242);

  .content {
    display: flex;
    align-items: center;
    gap: 150px;
    &__left {
      width: 50%;
      &__title {
        font-size: 40px;
        font-weight: 700;
      }
      &__line {
        background: var(--dark);
        width: 150px;
        height: 3px;
        margin: 20px 0;
      }
      &__desc {
        font-weight: 400;
        font-size: 16px;
        .per {
          color: #fff;
          background: var(--dark);
          padding: 5px;
          border-radius: 3px;
          font-size: 18px;
          font-weight: 600;
        }
      }
    }
    &__right {
      width: 50%;
    }
  }

  @media (max-width: 900px) {
    .content {
      flex-direction: column;
      gap: 50px;
      &__left {
        width: 100%;
        &__desc {
          line-height: 30px;
        }
      }
      &__right {
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
      }
    }
  }
  @media (max-width: 600px) {
    .content {
      &__left {
        &__title {
          font-size: 28px;
        }
      }
      &__right {
        &__box {
          &__title {
            font-size: 25px;
          }
        }
      }
    }
  }
`;
