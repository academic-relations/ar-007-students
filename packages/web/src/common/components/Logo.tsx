"use client";

import Image from "next/image";
import React from "react";
import styled from "styled-components";

import logoSvg from "@sparcs-students/web/assets/logo.svg";

const LogoInner = styled.div`
  position: relative;
  display: flex;
  flex-direction: row;
  gap: 8px;
  align-items: center;
  width: fit-content;
`;

const Text = styled.p`
  font-family: ${({ theme }) => theme.fonts.FAMILY.RALEWAY};
  font-size: 20px;
  line-height: 24px;
  font-weight: ${({ theme }) => theme.fonts.WEIGHT.BOLD};
  color: ${({ theme }) => theme.colors.PRIMARY};
`;

const LogoIcon: React.FC = () => (
  <Image src={logoSvg} alt="Students Logo" height={24} />
);

const Logo: React.FC = () => (
  <LogoInner>
    <LogoIcon />
    <Text>Students</Text>
  </LogoInner>
);

export default Logo;
