import styled from 'styled-components';
import BgImg from '../../images/landing_page_img.svg';

export const LandingPageContianer = styled.div`
  position: relative;
  width: 100vw;
  height: 80vh;
  background: linear-gradient(
      90.65deg,
      #10143b 2.13%,
      rgba(16, 20, 59, 0.579917) 34.9%,
      rgba(16, 20, 59, 0) 99.44%
    ),
    url(${BgImg});
  background-repeat: no-repeat;
  background-position: center center;
  background-size: contain;
  image-rendering: crisp-edges;
`;

export const LandingPageWrapper = styled.div``;
