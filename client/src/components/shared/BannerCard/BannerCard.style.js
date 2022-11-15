import styled from 'styled-components';

export const BannerCardContianer = styled.div`
  max-width: 611px;
  height: 100%;
  padding: 1.5rem 0;
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
`;

export const BannerCardWrapper = styled.div``;
