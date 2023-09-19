import styled from "styled-components";
import logo from '../../assets/image/logo.png';
import perfil from '../../assets/image/perfil.png';


const CabecalhoContainer = styled.header`
    display:flex;
    align-items: center;
    justify-content: space-between;
    padding: 2em 4em;


`;

const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-around;
    flex-grow: .1;

`;

const LinkEstilizado = styled.a`
    color: var(--azul-escuro);
    font-weight: 700;
    text-decoration: none;
    cursor: pointer

`;


const Cabecalho = ()=>{
    return(
      <CabecalhoContainer>
        <img src={logo} alt="Logo da empresa Voll"/>
        <Container>
            <img src={perfil} alt="Imagem perfil do usuario"/>
            <LinkEstilizado href="#">Sair</LinkEstilizado>
        </Container>
        
      </CabecalhoContainer>
    )
};

export default Cabecalho;