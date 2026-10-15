import { useEffect, useState } from "react";
import { createContext } from "react";

export const TemaContext = createContext(null);

export function TemaProvider({ children }) {
  const [tema, setTema] = useState(() => {
    return localStorage.getItem("tema") || "light";
  });

  useEffect(() => {
    document.documentElement.classList.toggle("dark", tema === "dark");

    localStorage.setItem("tema", tema);
  }, [tema]);

  const toggleTheme = () => {
    setTema((currentTheme) => (currentTheme === "light" ? "dark" : "light"));
  };

  return (
    <TemaContext.Provider value={{ tema, toggleTheme }}>
      {children}
    </TemaContext.Provider>
  );
}
