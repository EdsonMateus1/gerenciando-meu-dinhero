import styled from "styled-components";
import Switch, { ReactSwitchProps } from "react-switch";

export const DivContainer = styled.div`
  display: flex;
  align-items: center;
  font-size: .9rem
`;

export const SpanToggleLabel = styled.span`
  margin: 0px 5px;
`;

export const SwitchToggleSelector = styled(Switch).attrs<ReactSwitchProps>(
  ({ theme }) => {
    return {
      onColor: theme.colors.info,
      offColor: theme.colors.warning,
    };
  }
)<ReactSwitchProps>``;
