import styled from "styled-components";

export const Content = styled.div`
  padding: 20px 0;

  .card {
    display: flex;
    gap: 40px;
    margin: 50px 0;
    &__item {
      display: flex;
      flex-direction: column;
      align-items: center;
      padding: 20px;
      gap: 20px;
      border: 1px solid var(--dark);
      text-align: center;
      &__title {
        font-size: 20px;
        font-weight: 700;
        color: var(--dark);
      }
      &__desc {
        font-size: 16px;
        font-weight: 400;
        color: var(--dark);
      }
      img {
        width: 150px;
      }
    }
  }

  .video {
    display: flex;
    gap: 40px;
    margin: 50px 0;
    &__item {
      display: flex;
      width: 100%;
      flex-direction: column;
      align-items: center;
      gap: 20px;
      border: 1px solid var(--dark);
      text-align: center;
      iframe {
        width: 100%;
        height: 260px;
        border-radius: 3px;
      }
      &__title{
        font-size: 18px;
        padding-bottom: 10px;
        font-weight: 600;
      }
    }
  }

  @media (max-width: 1000px) {
    .card {
      flex-direction: column;
      margin: 20px 0;
      &__item {
        img {
          width: 100px;
        }
      }
    }
    .video {
      flex-direction: column;
      margin: 20px 0;
    }
  }
`;
