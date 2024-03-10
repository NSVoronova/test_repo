import styled from "styled-components";

export const GroupContainer = styled.div`
background-color: lavender;
display: flex;
flex-direction: column;
gap: 10px;
width: 50%;
padding: 10px;
margin: 20px auto;
`;

export const GroupContent = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
`;

export const GroupAvatar = styled.p<{ $color?: string }>`
  background-color: ${props => props.$color};
  width: 100px;
  height: 100px;
  border-radius: 50%;
`;
