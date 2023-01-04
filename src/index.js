import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import Search from "./Search";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <h1> Search Engine </h1>
    <Search />
  </StrictMode>
);
