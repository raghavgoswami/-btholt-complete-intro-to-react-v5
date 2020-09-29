import { createContext } from "react";

const ThemeContext = createContext(["green", () => {}]); // putting hook inside

export default ThemeContext;
