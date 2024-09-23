"use client";

import React from "react";

import { UseClientProvider } from "@sparcs-students/web/common/providers/UseClientProvider";
import MyPageMainFrame from "@sparcs-students/web/features/my/frames/MyPageMainFrame";

const My = () => (
  <UseClientProvider>
    <MyPageMainFrame />
  </UseClientProvider>
);

export default My;
