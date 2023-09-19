import { Fragment } from "react";
import { Paper, TableBody, TableCell, TableRow, tableCellClasses } from '@mui/material';
import  TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import Table from '@mui/material/Table';
import IConsulta from "../../servicos/DataType/IConsulta";

import styled from "@emotion/styled";

const CelulaEstilizada = styled(TableCell)(()=>({
    [`&.${tableCellClasses.head}`]:{
        color: "var(--azul-escuro)",
        fontSize: 18,
        fontWeight: 700,
        fontFamily: "var(--fonte-principal)"
    },
    [`&.${tableCellClasses.body}`]:{
        fontSize: 16,
        fontFamily: "var(--fonte-principal)"
    }

}));

const LinhaEstilizada = styled(TableRow)(()=>({
    [`&:nth-of-type(odd)`]:{
        backgroundColor: "var(--cinza-claro)",
        align: "right"
    }
}));

interface Props{
    dadosConsulta?: IConsulta[] | any;
}

const Tabela = ({dadosConsulta}:Props)=> {

    const descricaoCabecalho: string[] = ['Data','Horário','Profissional','Especilidade','Paciente','Modalidade'];

   
    return (
        <Fragment>
            <TableContainer component={Paper}>
                <Table sx={{minWidth: 700}} aria-label="tabela customizada">
                    <TableHead>
                        <TableRow>
                            {descricaoCabecalho.map((item:string, index:number)=> <CelulaEstilizada key={index}>{item}</CelulaEstilizada>)}
                        </TableRow>
                    </TableHead>
                    <TableBody>

                                {dadosConsulta.map((item:IConsulta, index:number)=>
                                    <LinhaEstilizada key={index}>
                                        <CelulaEstilizada component='th' scope='row'>{new Date(item.data).toLocaleDateString()}</CelulaEstilizada>
                                        <CelulaEstilizada>{item.horario}</CelulaEstilizada>
                                        <CelulaEstilizada>{item.profissional[0].nome}</CelulaEstilizada>
                                        <CelulaEstilizada>{item.profissional[0].especialidade}</CelulaEstilizada>
                                        <CelulaEstilizada>{item.paciente}</CelulaEstilizada>
                                        <CelulaEstilizada>{item.modalidade}</CelulaEstilizada>
                                    </LinhaEstilizada>
                                     
                                )}
                                
                    </TableBody>
                </Table>
            </TableContainer>
        </Fragment>
    )
}

export default Tabela;