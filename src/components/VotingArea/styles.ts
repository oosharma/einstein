import styled from "@emotion/styled";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { colors } from "../../shared/colors";
import { Flex } from "rebass";

export const Arrow = styled(FontAwesomeIcon)`
  font-size: 20px;
  color: ${colors.darkBlue};
`;

export const ArrowContainer = styled(Flex)`
  flex: 1;
  width: 100%;
  justify-content: center;
  align-items: center;

  &:hover {
    background-color: black;
  }
`;
