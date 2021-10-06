import styled from "styled-components";
export const LoginWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  img {
    display: block;
    width: 100px;
    height: 100px;
    margin: 0 auto;
  }
  div {
    padding: 20px 20px;
    background-color: #fff;
    border-radius: 0.3rem;
    border: 1px solid transparent;
  }
  h1 {
    text-align: center;
    font-size: 1rem;
    margin-bottom: 40spx;
  }
`;

export const BtnSign = styled.button`
  display: flex;
  align-items: center;
  padding: 8px 18px;
  border-radius: 0.3rem;
  border: 1px solid transparent;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  img {
    width: 40px;
    height: 40px;
    margin-right: 10px;
  }
`;
