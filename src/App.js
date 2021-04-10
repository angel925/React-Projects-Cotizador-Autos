import Header from "./components/Header";
import styled from "@emotion/styled";
import Formulario from "./components/Formulario";
const Contenedor = styled.div`
  max-width: 600px;
  margin: 0 auto;
`;

const ContenedorFormulario = styled.div`
  background-color: #fff;
  padding: 3rem;
`;

function App() {
  return (
    
    <Contenedor>{/* Styled Component */}
      {/* Componente Header jsx*/}
      
      <Header 

      titulo="Cotizador de Seguros" 
      
      />

      
      <ContenedorFormulario>{/* Styled Component */}
        <Formulario
         
        
        />
      </ContenedorFormulario>
    </Contenedor>
  );
}

export default App;
