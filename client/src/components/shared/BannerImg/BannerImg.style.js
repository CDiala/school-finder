import styled from 'styled-components';

export const BannerContianer = styled.div`
  position: relative;
  width: 100vw;
  height: 70vh;
  background: ${({ bgGradient }) => bgGradient ?? ''},
    url(${({ bgImg }) => bgImg ?? ''});
  background-repeat: no-repeat;
  background-position: center center;
  background-size: contain;
  image-rendering: crisp-edges;
`;

export const BannerWrapper = styled.div`
  width: 80%;
  max-width: 1240px;
  margin: 0 auto;
  padding-top: 4.5rem;
  .main-content {
    .banner-text {
      display: flex;
      flex-direction: column;
      gap: 1rem;

      h1 {
        font-style: normal;
        font-weight: 500;
        font-size: 2.7rem;
        line-height: 3.5rem;
        max-width: 494px;
      }

      p {
        font-style: normal;
        font-weight: 500;
        font-size: 1rem;
        max-width: 394px;
        line-height: 24px;
      }

      /* General Text */
      h1,
      p {
        color: #ffffff;
      }
    }
  }
`;
