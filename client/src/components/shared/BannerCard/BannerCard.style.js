import styled from 'styled-components';

export const BannerCardContianer = styled.div`
  width: 100%;
  max-width: 39.5rem;
  height: 100%;
  padding-top: 1.5rem;
  padding-bottom: 0.6rem;
  background: #fff;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;

  nav {
    display: flex;
    gap: 3rem;
    padding-left: 2rem;
    button {
      cursor: pointer;
      border: none;
      background-color: transparent;
      outline: none;
      position: relative;
    }

    .line {
      &::after {
        content: '';
        position: absolute;
        width: 106px;
        height: 4px;
        left: 0;
        top: 35px;
        background: #cfa348;
      }
    }
  }

  hr {
    border: 1px solid #dcdcdc;
  }

  /* Form */
  .card-option-container {
    display: flex;
    gap: 16px;
    align-items: flex-end;
    padding: 15px;

    .card-wrapper {
      display: flex;
      gap: 1rem;
      align-items: flex-end;
      justify-content: space-between;
      width: 80%;
      .item-container {
        display: flex;
        align-items: flex-end;
        justify-content: space-between;
        border-bottom: 1px solid #dcdcdc;
        width: 100%;
        .item-group {
          display: flex;
          gap: 16px;
          flex-direction: column;

          p {
            font-weight: 400;
            font-size: 1rem;
            line-height: 100%;
          }

          .input-field {
            border: none;
            outline: none;
            background-color: transparent;
            width: 100%;
            padding-bottom: 8px;
            &::placeholder {
              font-style: normal;
              font-weight: 400;
              font-size: 1rem;
              line-height: 100%;
              color: #c4c4c4;
            }
          }
        }

        svg {
          cursor: pointer;
          padding-bottom: 8px;
        }
      }
    }

    button {
      border: none;
      outline: none;
      background: #cfa348;
      border-radius: 10px;
      color: #fff;
      padding: 20px 21px;
      font-size: 0.8rem;
      width: 120px;
      height: 56px;
      cursor: pointer;
    }
  }
`;

export const BannerCardWrapper = styled.div``;
