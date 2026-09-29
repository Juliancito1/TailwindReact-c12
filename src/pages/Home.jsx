import { Card } from "../components/Card";
import { Formulario } from "../components/Formulario";


export const Home = () => {
  return (
    <div className="flex flex-col items-center">
      <Formulario/>
      <Card/>
    </div>
  );
};
