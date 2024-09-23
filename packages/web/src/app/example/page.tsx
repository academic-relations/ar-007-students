"use client";

import { env } from "@sparcs-students/web/env";
import DemoComponent from "@sparcs-students/web/features/_example/components/DemoComponent";

const Home = () => (
  <div>
    <h1>Home</h1>
    <p>Welcome to SPARCS Students! This is an example api call!</p>
    <p>
      Currently, the mock mode is {env.NEXT_PUBLIC_API_MOCK_MODE ? "on" : "off"}
    </p>
    <DemoComponent />
  </div>
);

export default Home;
