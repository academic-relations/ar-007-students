"use client";

import React from "react";
// import Link from "next/link";
import styled from "styled-components";

import NavList from "@sparcs-students/web/common/components/NavTools/NavList";

import navPaths from "@sparcs-students/web/constants/nav";

import SPARCSLogo from "./_atomic/SPARCSLogo";

const FooterInner = styled.div`
  display: flex;
  height: 50px;
  padding: 0px 24px;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;

  @media (max-width: 720px) {
    justify-content: center;
  }
`;

const StyledNavList = styled(NavList)`
  display: inline-flex;
  padding: 0px 30px;
  align-items: flex-start;

  width: ${({ theme }) => theme.responsive.CONTENT.xxl};

  @media (max-width: ${({ theme }) => theme.responsive.BREAKPOINT.xl}) {
    width: ${({ theme }) => theme.responsive.CONTENT.xl};
  }
  @media (max-width: ${({ theme }) => theme.responsive.BREAKPOINT.lg}) {
    width: ${({ theme }) => theme.responsive.CONTENT.lg};
  }
  @media (max-width: ${({ theme }) => theme.responsive.BREAKPOINT.md}) {
    display: none;
  }
`;

// const MailToOuter = styled.div`
//   @media (max-width: 720px) {
//     display: none;
//   }
// `;

// const MailTo = styled(Link)`
//   font-family: ${({ theme }) => theme.fonts.FAMILY.PRETENDARD};
//   font-size: 14px;
//   line-height: 20px;
//   font-weight: ${({ theme }) => theme.fonts.WEIGHT.MEDIUM};
//   color: ${({ theme }) => theme.colors.BLACK};
// `;

const Footer = () => (
  <FooterInner>
    <SPARCSLogo />
    <StyledNavList keys={navPaths.footer} />
    {/* <MailToOuter>
      <MailTo href="mailto:studentsunion2019@gmail.com">
        문의: studentsunion2019@gmail.com
      </MailTo>
    </MailToOuter> */}
  </FooterInner>
);

export default Footer;
