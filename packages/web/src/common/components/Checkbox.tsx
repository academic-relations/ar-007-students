import React from "react";
import styled from "styled-components";
import colors from "@sparcs-students/web/styles/themes/colors";
import Icon from "./Icon";

type CheckboxProps = {
  checked: boolean;
  onClick?: () => void;
  disabled?: boolean;
};

const CheckboxInner = styled.div<{ disabled: boolean }>`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 16px;
  height: 16px;
  border-radius: 4px;
  border: 1px solid
    ${({ disabled, theme }) =>
      disabled ? theme.colors.GRAY[100] : theme.colors.BLACK};
  cursor: ${({ disabled }) => (disabled ? "not-allowed" : "pointer")};
  background-color: ${({ disabled, theme }) =>
    disabled ? theme.colors.GRAY[50] : "transparent"};
`;

const Checkbox: React.FC<CheckboxProps> = ({
  checked,
  onClick = () => {},
  disabled = false,
}) => (
  <CheckboxInner onClick={!disabled ? onClick : undefined} disabled={disabled}>
    {checked && (
      <Icon
        type="check"
        size={16}
        color={disabled ? colors.GRAY[100] : colors.BLACK}
      />
    )}
  </CheckboxInner>
);

export default Checkbox;
