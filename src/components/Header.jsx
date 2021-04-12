import React from "react"; // lo importo auque no sea necesario
import ProTypes from "prop-types";
import styled from '@emotion/styled'

const ContenedorHeader = styled.header`

background-color : #26c6da;
padding: 10px;
font-weight: bold;
color: #FFFFFF;
margin-top: 2rem;


`; 
const TextoHeader = styled.h1`
font-size: 2rem;
text-align: center;
font-family: 'Ubuntu';
margin : 0;


`


const Header = ({ titulo }) => {
  return (

    
    <ContenedorHeader>
      <TextoHeader>{titulo}</TextoHeader>
    </ContenedorHeader>
  );
};

Header.propTypes = {
  titulo: ProTypes.string.isRequired,
};

export default Header;
