import styled from 'styled-components';
import facebook from '../../assets/image/facebook.png';
import google from '../../assets/image/google.png';
import instagram from '../../assets/image/instagram.png';
import whatssapp from '../../assets/image/whatsapp.png';

const RodapeContainer = styled.div` 
    background-color: var(--azul-escuro);
    width: 100%;
    height: 80px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    position:fixed;
    bottom: 0;

`;

const IconesContainer = styled.ul`
    display: flex;
    align-items: center;
    margin: 10px 0 0 0;
    gap: 20px;
    padding: 0;


`;
  

const Rodape =()=>{

    const icones: string[] = [facebook, google, instagram, whatssapp]
        
    return(

        <RodapeContainer>
            <IconesContainer>
                {icones.map((item, index)=> (
                    <li key={index}>
                        <a href="#">
                            <img src={item} alt={`Logo do ${item}`}/>
                        </a>
                    </li>
                   
                ))}
               
            </IconesContainer>
            <p>2023<span>&#174;</span>Desenvolvido com Alura | Projeto fictício sem fins comerciais</p>
        </RodapeContainer>


    )
};

export default Rodape;