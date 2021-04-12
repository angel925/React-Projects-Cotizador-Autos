import styled from "@emotion/styled";
import PropType from "prop-types";
const Indicativo = styled.p`
  display: grid;
  margin-left: 25%;
  background: #c12cdf;
  margin-top: 1rem;
  text-align: center;
  height: 2rem;
  width: 50%;
  align-items: center;
  text-transform: uppercase;
  border-radius: 2rem;
  color: #fff;
`;

const ResultadoCotizacion = styled.div`
  text-align: center;
  border: 1px solid #26c6da;
  background: #44cf67;
  margin-top: 1rem;
`;

const Total = styled.p`
  display: grid;
  color: #000;
  width: 50%;
  height: 2rem;
  align-items: center;
  margin-left: 25%;
  text-transform: uppercase;
  font-size: 16px;
`;

const Resultado = ({ cotizacion }) => {
  return cotizacion === 0 ? (
    <Indicativo>Elige: Marca - Año - Plan</Indicativo>
  ) : (
    <ResultadoCotizacion>
      <Total>El total a pagar es: $ {cotizacion}</Total>
    </ResultadoCotizacion>
  );
};

Resultado.propTypes = {
  cotizacion: PropType.number.isRequired
};

export default Resultado;
