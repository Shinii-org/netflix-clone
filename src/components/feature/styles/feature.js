import styled from 'styled-components/macro';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;

  padding: 165px 20px;

  @media (max-width: 600px) {
    padding: 50px 10px;
  }
`;

export const Title = styled.h1`
  color: white;
  font-size: 50px;
  font-weight: 500;
  margin: auto;

  @media (max-width: 600px) {
    font-size: 35px;
  } ;
`;

export const Subtitle = styled.h2`
  color: white;
  font-size: 26px;
  font-weight: normal;
  margin: 16px auto;

  media (max-width: 600px) {
    font-size: 18px;
  }
`;
