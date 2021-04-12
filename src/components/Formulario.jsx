import { useState } from "react";
import styled from "@emotion/styled";
import {obtenerDiferenciaYear} from '../helper'

const Campo = styled.div`
  display: flex;
  margin-bottom: 1rem;
  align-items: center;
`;

const Label = styled.label`
  flex: 0 0 100px;
`;

const Select = styled.select`
  display: block;
  width: 100%;
  padding: 1rem;
  border: 1px solid #e1e1e1;
  -webkit-appearance: none;
`;

const InputRadio = styled.input`
  margin: 0 10px;
`;

const Boton = styled.button`
  background-color: #00838f;
  font-size: 16px;
  width: 100%;
  padding: 1rem;
  color: #fff;
  text-transform: uppercase;
  font-weight: bold;
  border: none;
  transition: background-color 0.3s ease;
  margin-top: 1rem;

  &:hover {
    cursor: pointer;
    background-color: #26c6da;
  }
`;

const Error = styled.div`
  width: 100%;
  color: #fff;
  cursor: pointer;
  padding: 1rem;
  font-size: 18px;
  text-align: center;
  font-weight: 1px;
  border-radius: 9px;
  margin-bottom: 2rem;
  text-transform: uppercase;
  background-color: #e00b0b;
`;

const Formulario = () => {
  /* aqui va codigo js */

  const [datos, guardarDatos] = useState({
    marca: "",
    year: "",
    plan: "",
  });

  const [error, guardarError] = useState(false);

  /* Extraemos los valores de usestate para poder utilizarlos meojor */
  const { marca, year, plan } = datos;

  // Leer datos del formulario y colocarlos en el state guardarDatos

  const obtenerInformacion = (e) => {
    /* tomamos una copia del state y asi seguir guardando datos */
    guardarDatos({
      ...datos,
      [e.target.name]: e.target.value,
    });
  };

  //cuando el usuario presiona el boton
  const cotizarSeguro = (e) => {
    e.preventDefault();

    if (marca.trim() === "" || year.trim() === "" || plan.trim() === "") {
      guardarError(true);
      return;
    }

    guardarError(false);

    //obtener la diferencia en años 

    const diferencia = obtenerDiferenciaYear(year);
    console.log(diferencia)


    //por cada año que hay restar el 3%






  };

  return (
    <form onSubmit={cotizarSeguro}>

        {error ? <Error>Todos los campos son obligatorios</Error>: null}
      <Campo>
        <Label htmlFor="">Marca</Label>

        <Select 
        name="marca" 
        value={marca} 
        onChange={obtenerInformacion}>
          <option value="">--Seleccione--</option>
          <option value="americano">Americano</option>
          <option value="europeo">Europeo</option>
          <option value="asiatico">Asiatico</option>
        </Select>
      </Campo>

      <Campo>
        <Label htmlFor="">Año</Label>

        <Select 
        name="year" 
        value={year} 
        onChange={obtenerInformacion}>
          <option value="">-- Seleccione --</option>
          <option value="2021">2021</option>
          <option value="2020">2020</option>
          <option value="2019">2019</option>
          <option value="2018">2018</option>
          <option value="2017">2017</option>
          <option value="2016">2016</option>
          <option value="2015">2015</option>
          <option value="2014">2014</option>
          <option value="2013">2013</option>
          <option value="2012">2012</option>
        </Select>
      </Campo>
      <Campo>
        <Label>Plan</Label>
        <InputRadio
          type="radio"
          name="plan"
          value="basico"
          checked={plan === "basico"}
          onChange={obtenerInformacion}
        />
        Basico
        <InputRadio
          type="radio"
          name="plan"
          value="completo"
          checked={plan === "completo"}
          onChange={obtenerInformacion}
        />
        Completo
      </Campo>

      <Boton value="Cotizar" type="submit">
        Cotizar
      </Boton>
    </form>
  );
};

export default Formulario;
