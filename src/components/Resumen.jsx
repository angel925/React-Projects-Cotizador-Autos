import styled from '@emotion/styled'
import {primeraMayuscula}  from '../helper'

const Contenedor = styled.div`
  max-width: 600px;
  margin: 0 auto;
`;

const ContenedorResumen = styled.div`
    padding: 1rem;
    text-align: center;
    background-color: #00838F;
    color: #ffff;
    margin-top: 1rem;    
`;

const Resumen = ({ datos }) => {
  const { marca, year, plan } = datos;

  if (marca === "" || year === "" || plan === "") return null;
 
  return (
    <Contenedor>
    <ContenedorResumen>
      <h2>Resumen de la cotizacón</h2>
      <ul>
        <li>Marca:{primeraMayuscula(marca)}</li>
        <li>Plan:{primeraMayuscula(plan) }</li>
        <li>Año del Auto: {primeraMayuscula(year) }</li>
      </ul>
    </ContenedorResumen>
    </Contenedor>
  );
};

export default Resumen;
