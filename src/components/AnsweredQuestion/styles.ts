import styled from "@emotion/styled";
import { Flex } from "rebass";
import { colors } from "../../shared/colors";

export const Question = styled.div<{ hasAnswer?: boolean }>`
  font-size: 26px;
  font-weight: bold;
  ${({ hasAnswer }) => (hasAnswer ? "padding-bottom: 7px;" : "")}
`;

export const StyledFlex = styled(Flex)<{ clickable?: boolean }>`
  padding: 10px;
  border-radius: 0px 50px 50px 0px;
  width: 100%;
  ${({ clickable }) =>
    clickable
      ? `
      justify-content: center;
    &:hover {
      background-color: ${colors.blueShade};
      cursor: pointer;
    }
  `
      : ""}
`;
