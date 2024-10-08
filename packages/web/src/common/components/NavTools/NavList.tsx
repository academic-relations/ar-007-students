"use client";

import React from "react";
import styled from "styled-components";

import type { Paths } from "@sparcs-students/web/constants/paths";
import paths from "@sparcs-students/web/constants/paths";

import NavItem from "./NavItem";

interface NavListProps {
  keys: (keyof Paths)[];
  className?: string;
  highlight?: boolean;
}

const NavListInner = styled.div`
  display: inline-flex;
  align-items: flex-start;
  gap: 24px;
`;

const StyledNavItem = styled(NavItem)`
  font-size: 16px;
  line-height: 20px;
`;

const NavList: React.FC<NavListProps> = ({
  keys,
  className = "",
  highlight = false,
}) => (
  <NavListInner className={className}>
    {keys.map(key => (
      <StyledNavItem highlight={highlight} key={key} {...paths[key]} />
    ))}
  </NavListInner>
);
export default NavList;
