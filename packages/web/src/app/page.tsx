"use client";

import Typography from "../common/components/Typography";
import Button from "../common/components/Button";

const Home = () => (
  <>
    <Typography color="PINK.600" fs={32}>
      Welcome to SPARCS Students!
    </Typography>
    <Button iconType="check" />
    <Button iconType="check" buttonText="Check" />
    <Button buttonText="Check" />
    <Button>Children!</Button>
    <Button />
  </>
);
export default Home;
