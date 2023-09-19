import { Bar, BarChart, ResponsiveContainer, XAxis, YAxis } from "recharts"
import IProfissonal from "../../servicos/DataType/IProfissional";
import IConsulta from "../../servicos/DataType/IConsulta";
import {geraDadosGrafico } from "./useDados";
import styled from "styled-components";

const SecaoEstilizada = styled.section`
  background-color: var(--branco);
  border-radius: 16px;


`;

interface Props{
  dadosProfissionais: IProfissonal[],
  dadosConsultas: IConsulta[]
};

interface IDados {
  nome: string,
  consultas: number
};


const Grafico = ({dadosProfissionais, dadosConsultas}: Props)=>{

    let dados: Array<IDados> | any = geraDadosGrafico(dadosProfissionais, dadosConsultas);

  
    return(
      <SecaoEstilizada>
         <ResponsiveContainer width="100%" height={350}>
          <BarChart layout="vertical" data={dados} margin={{top:25, right:40, left: 40, bottom: 20}}>
            <XAxis type="number"></XAxis>
            <YAxis type="category" dataKey="nome"></YAxis>
            <Bar dataKey="consultas" fill="#083860" barSize={30}></Bar>
          </BarChart>
        </ResponsiveContainer>
      </SecaoEstilizada>
        

    )
};

export default Grafico;

