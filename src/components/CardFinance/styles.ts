import styled from "styled-components";


export const DivContainer = styled.div`
  background-color: ${({ theme }) => theme.colors.tertiary};

  color: ${({ theme }) => theme.colors.white};

  height: 45px;
  margin: 20px 10px;
  padding: 10px;
  border-radius: 5px;
  position: relative;

  cursor: pointer;
  transition: all 0.3s;

  &:hover {
    opacity: 0.8;
    transform: translateX(10px);
  }

  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const DivTag = styled.div`
  position: absolute;
  border-radius: 2px;
  width: 10px;
  height: 70%;
  left: 3px;
  background-color: ${({ theme }) => theme.colors.info};
`;

export const DivTitle = styled.div`
  margin-left: 6px;
  display: flex;
  flex-direction: column;
`;
