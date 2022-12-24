import styled from 'styled-components';

export const StatisticCard = styled.div`
  padding: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgb(198, 240, 224);
`;

export const StatisticList = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 30px;
  margin: 0;
  padding: 0;
`;

export const StatisticItem = styled.li`
  padding: 10px;
  list-style: none;
  border: 1px solid black;
`;

export const StatisticText = styled.p`
  font-size: 16px;
  font-weight: bold;
  margin: 0;
`;
