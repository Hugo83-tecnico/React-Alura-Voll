import Card from './Card';
import IProfissonal from "../../servicos/DataType/IProfissional";
import styled from 'styled-components';

const SecaoCard = styled.section`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    width: 100%;
`;

const Avaliacao = ({dadosProfissionais}:{dadosProfissionais: IProfissonal[] | null})=>{
    return(
        <SecaoCard>
            {dadosProfissionais?.map((profissional)=> {
                return <Card profissional={profissional}/>
            })}
              
        </SecaoCard>
    )
};

export default Avaliacao;