import { useEffect, useState } from "react";
import { TemaContext } from "./TemaContext";



export function TemaProvider ({children}) {
  const [tema, setTema] = useState(() => {
    return localStorage.getItem("tema") || "light";
  });

  useEffect(() => {
    document.documentElement.classList.toggle(
      "dark",
      tema === "dark"
    );

    localStorage.setItem("tema", tema);
  }, [tema]);

  const toggleTheme = () => {
    setTema((currentTheme) =>
      currentTheme === "light" ? "dark" : "light"
    );
  };

  return (
    <TemaContext.Provider value={{tema, toggleTheme}}>
      {children}
    </TemaContext.Provider>
  )


};