import styled from 'styled-components';

export const FeedbackOptionList = styled.ul`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 30px;
  background-color: #eedada;
  margin: 0px;
  padding: 0px;
`;

export const FeedbackOptionItem = styled.li`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10px;
  list-style: none;
  border: 1px solid black;
`;

export const FeedbackButton = styled.button`
  background-color: #c0e8c0;
  padding: 10px 20px;
  border-radius: 5px;
  width: 100px;
  cursor: pointer;
`;
