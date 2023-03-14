import { createContext, useState } from "react";

type Theme = "light" | "beige";

interface Context {
  theme: Theme;
  toggleTheme: () => void;
}

interface Props {
  children: React.ReactNode;
}

export const ThemeContext = createContext<Context>({
  theme: "light",
  toggleTheme: () => {},
});

export const ThemeProvider = ({ children }: Props) => {
  const [theme, setTheme] = useState<Theme>("light");

  function toggleTheme() {
    setTheme(theme === "light" ? "beige" : "light");
  }

  const backgroundColor = theme === "light" ? "#fff" : "#ffeada";
  document.body.style.backgroundColor = backgroundColor;

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
