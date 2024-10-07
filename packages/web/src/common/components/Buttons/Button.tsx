/*
사용법

IconButton으로 쓰고자 하면, iconType prop 전달
Button으로 쓰고자 하면, iconType prop 전달X
Custom Children을 넣고자 하면, iconType, buttonText 전달X

*/

"use client";

import React, { HTMLAttributes } from "react";
import styled from "styled-components";
import Icon from "@sparcs-students/web/common/components/Icon";
import Typography from "@sparcs-students/web/common/components/Typography";

type ButtonProps = {
  type?: keyof typeof ButtonTypeInner;
  children?: React.ReactNode;
  iconType?: string;
  buttonText?: string;
} & HTMLAttributes<HTMLDivElement>;

const ButtonInner = styled.div`
  display: inline-flex;
  padding: 8px 16px;
  justify-content: center;
  align-items: center;
  border-radius: 4px;
  font-family: ${({ theme }) => theme.fonts.FAMILY.PRETENDARD};
  font-size: 16px;
  line-height: 20px;
  font-weight: ${({ theme }) => theme.fonts.WEIGHT.MEDIUM};
`;

const ButtonDefaultInner = styled(ButtonInner)`
  color: ${({ theme }) => theme.colors.WHITE};
  background: ${({ theme }) => theme.colors.PRIMARY};
  cursor: pointer;
  &:hover {
    background: ${({ theme }) => theme.colors.MINT[800]};
  }
`;

const ButtonOutlinedInner = styled(ButtonInner)`
  border: 1px solid ${({ theme }) => theme.colors.GRAY[200]};
  background: ${({ theme }) => theme.colors.WHITE};
  cursor: pointer;
  &:hover {
    border: 1px solid ${({ theme }) => theme.colors.GRAY[300]};
  }
`;

const ButtonDisabledInner = styled(ButtonInner)`
  color: ${({ theme }) => theme.colors.GRAY[300]};
  border: 1px solid ${({ theme }) => theme.colors.GRAY[300]};
  background: ${({ theme }) => theme.colors.GRAY[100]};
  cursor: not-allowed;
`;

const ButtonTypeInner = {
  default: ButtonDefaultInner,
  outlined: ButtonOutlinedInner,
  disabled: ButtonDisabledInner,
};

const ButtonWithTextInner = styled.div`
  width: 100%;
  height: 100%;
  justify-content: center;
  align-items: center;
  gap: 4px;
  display: inline-flex;
`;

const ButtonWithIconAndText = (iconType: string, buttonText: string) => (
  <ButtonWithTextInner>
    <Icon type={iconType} size={16} color="white" />
    <Typography>{buttonText}</Typography>
  </ButtonWithTextInner>
);

const ButtonWithText = (buttonText: string) => (
  <ButtonWithTextInner>
    <Typography>{buttonText}</Typography>
  </ButtonWithTextInner>
);

const ButtonWithChildren = (children: React.ReactNode) => (
  <ButtonWithTextInner>{children}</ButtonWithTextInner>
);

const Button = ({
  type = "default",
  children = undefined,
  iconType = "",
  buttonText = "",
  ...divProps
}: ButtonProps) => {
  const ButtonChosenInner = ButtonTypeInner[type];

  const ButtonContent = () => {
    if (iconType !== "") return ButtonWithIconAndText(iconType, buttonText);
    if (buttonText !== "") return ButtonWithText(buttonText);
    return ButtonWithChildren(children);
  };

  return (
    <ButtonChosenInner
      {...divProps}
      onClick={type === "disabled" ? undefined : divProps.onClick}
    >
      <ButtonContent />
    </ButtonChosenInner>
  );
};

export default Button;
