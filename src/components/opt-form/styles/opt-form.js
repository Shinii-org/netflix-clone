import styled from 'styled-components/macro';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  height: 100%;
  margin-left: auto;
  margin-right: auto;
  margin-top: 20px;
  flex-wrap: wrap;
  max-width: 670px;
  @media (max-width: 1000px) {
    flex-direction: column;
    align-items: stretch;
    margin-top: 10px;
  } ;
`;

export const Input = styled.input`
  max-width: 450px;
  flex-grow: 1;
  border: 0;
  padding: 10px;
  height: 70px;
  box-sizing: border-box;
  outline: none;
  @media (max-width: 1000px) {
    max-width: 670px;
    height: 50px;
  }
`;

export const Button = styled.button`
  display: flex;
  align-items: center;
  height: 70px;
  background: #e50914;
  color: white;
  text-transform: uppercase;
  padding: 0 32px;
  font-size: 26px;
  border: 0;
  cursor: pointer;


  &:hover {
    background: #f40612;
  }
  @media (max-width: 1000px) {
      height 50px;
      font-size: 16px;
      margin-top: 20px;
      font-weight: bold;
      width: 100%;
      justify-content: center;
  }

  img {
    margin-left: 10px;
    filter: brightness(0) invert(1);
    width: 24px;
    @media (max-width: 1000px) {
      width: 16px;
    }
  }
`;

export const Text = styled.p`
  font-size: 19.2px;
  color: white;
  text-align: center;

  @media (max-width: 600px) {
    font-size: 16px;
    line-height: 22px;
  } ;
`;

export const Break = styled.div`
  flex-basis: 100%;
  height: 0;
`;
