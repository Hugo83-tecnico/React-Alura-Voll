import { Rating } from "@mui/material";
import IProfissonal from "../../../servicos/DataType/IProfissional";
import styled from "styled-components";

const ContainerEstilizado = styled.div`
    flex: 40%;
    max-width: 100%;
    background-color: #ffffff;
    padding: 1em;
    box-shadow: 2px 2px 8px rgba(0,0,0,0.15);
    border-radius: 8px;
    color: var(--cinza);
    margin: 1em 2em 1em;
`;

const ImgEstilizado = styled.img`
    width: 100px;
    height: 100px;
   


`;

const ListaEstilizada = styled.ul`
    display: flex;
    gap: 15px;
    align-items: center;



`;


const Card = ({profissional}:{profissional:IProfissonal})=>{
    return(
        <ContainerEstilizado>
            <ListaEstilizada>
                <div>
                    <li>
                        <ImgEstilizado src={profissional.imagem} alt={`Foto do perfil do profissional ${profissional.nome}`}/>
                    </li>
                </div>
               <div>
                <li>
                        <p>{profissional.nome}</p>
                        <p>{profissional.especialidade}</p>
                    </li>
                    <li>
                        <Rating name="simple-controlled"
                                value={profissional.nota}
                                readOnly={true}
                        
                        />
                    </li>
               </div>
               
            </ListaEstilizada>

        </ContainerEstilizado>

    )
};

export default Card;