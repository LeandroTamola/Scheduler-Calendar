import styled from "styled-components";
import { colors } from "../../constants/colors";

export const HomeContainer = styled.div`
  display: flex;
  width: 100%;
  height: 100vh;
  background-color: ${colors.background.darker};
`;

export const EventListContainer = styled.div`
  width: 30%;
`;

export const CalendarContainer = styled.div`
  flex-grow: 1;
  height: 100vh;
  background-color: ${colors.background.lighter};
`;

export const Container = styled.div`
  height: 100vh;
  width: 100vw;
  background-color: ${colors.background.lighter};
  display: flex;
  justify-content: center;
  align-items: center;
`;
