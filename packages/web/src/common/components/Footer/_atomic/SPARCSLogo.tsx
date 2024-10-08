"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";

import sparcsSvg from "@sparcs-students/web/assets/sparcs-black.svg";
import paths from "@sparcs-students/web/constants/paths";

const SPARCSLogo = () => (
  <Link href={paths.HOME.path}>
    <Image src={sparcsSvg} alt="SPARCS" height={24} />
  </Link>
);

export default SPARCSLogo;
