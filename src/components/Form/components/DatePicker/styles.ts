import DatePicker from "react-datepicker";
import styled from "styled-components";
import { colors } from "../../../../constants/colors";

const StyledDatePicker = styled(DatePicker)`
  border-width: 0.1rem;
  border-radius: 5px;
  padding: 0.4rem;
  border-color: ${colors.text.lighter};
  width: 100%;
`;

export { StyledDatePicker as DatePicker };
