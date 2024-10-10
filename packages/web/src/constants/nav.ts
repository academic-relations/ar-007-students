import type { Paths } from "./paths";

const headerPaths: (keyof Paths)[] = [
  "STUDENTS0",
  "STUDENTS1",
  "STUDENTS2",
  "STUDENTS3",
  "STUDENTS4",
];
const footerPaths: (keyof Paths)[] = ["MADE_BY", "LICENSE", "TERMS_OF_SERVICE"];

const navPaths = {
  header: headerPaths,
  footer: footerPaths,
};

export default navPaths;
