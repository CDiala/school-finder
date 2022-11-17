import styled from 'styled-components';

export const CardArrowContaier = styled.div`
  width: 90%;
  max-width: 1240px;
  margin: 0 auto;
  background: #fff;
  height: 100%;
  padding: 3rem 0;
  display: flex;
  flex-direction: column;
  gap: 2rem;

  .find-best-heading {
    display: flex;
    flex-direction: column;
    gap: 1rem;

    h2 {
      font-style: normal;
      font-weight: 500;
      font-size: 2.5rem;
      line-height: 60px;
      color: #10143b;
    }

    p {
      font-style: normal;
      font-weight: 400;
      font-size: 1rem;
      line-height: 24px;
      /* identical to box height */

      /* Blue color */

      color: #10143b;
    }
  }

  .card-container {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(210px, 1fr));
    grid-gap: 3rem;
    justify-content: space-between;

    .card-item {
      background: #ffffff;
      box-shadow: 0px 1px 16px rgba(0, 0, 0, 0.08);
      border-radius: 10px;
      display: flex;
      flex-direction: column;
      gap: 1.5rem;
      padding-bottom: 1.3rem;
      img {
        width: 100%;
      }

      .card-content {
        display: flex;
        justify-content: space-between;
        padding: 0 1rem;
        align-items: center;

        p {
          font-style: normal;
          font-weight: 500;
          font-size: 1rem;
          line-height: 24px;
        }

        svg {
          color: #10143b;
          width: 15.55px;
          height: 18.5px;
        }
      }
    }
  }
`;
