import Header from "./components/Header";
import styled from "@emotion/styled";
import Formulario from "./components/Formulario";
import { useState } from "react";
import Resumen from "./components/Resumen";
import Spinner from "./components/Spinner";

import Resultado from "./components/Resultado";

const Contenedor = styled.div`
  max-width: 600px;
  margin: 0 auto;
`;

const ContenedorFormulario = styled.div`
  background-color: #fff;
  padding: 3rem;
`;

function App() {
  const [resumen, guardarResumen] = useState({
    cotizacion: 0,
    datos: {
      marca: "",
      year: "",
      plan: "",
    },
  });

  const [cargando, guardarCargando] = useState(false);

  const { cotizacion, datos } = resumen;

  return (
    <Contenedor>
      {/* Styled Component */}
      {/* Componente Header jsx*/}

      <Header titulo="Cotizador de Seguros" />

      <ContenedorFormulario>
        {/* Styled Component */}
        <Formulario
          guardarResumen={guardarResumen}
          guardarCargando={guardarCargando}
        />
        {/* se muestra el spinner si esta cargando */}
        {cargando ? <Spinner /> : null}
        <Resumen datos={datos} />
        {/* cargando diferente de true muestra mensaje elige plan, year, marca */}
        {!cargando ? <Resultado cotizacion={cotizacion} /> : null}
      </ContenedorFormulario>
    </Contenedor>
  );
}

export default App;
