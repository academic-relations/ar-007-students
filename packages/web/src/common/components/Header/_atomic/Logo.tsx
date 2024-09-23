"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";

import logoSvg from "@sparcs-students/web/assets/logo.svg";
import paths from "@sparcs-students/web/constants/paths";

const Logo: React.FC = () => (
  <Link href={paths.HOME.path}>
    <Image src={logoSvg} alt="Students" height={24} />
  </Link>
);

export default Logo;
