import { Fragment, useEffect, useState } from 'react';
import Cabecalho from './components/Cabecalho';
import Container  from './components/Container';
import Titulo from './components/Titulo';
import Rodape from './components/Rodape';
import Tabela from './components/Tabela';
import Grafico from './components/Grafico';
import { buscaDadosConsultas, buscaDadosProfissionais } from './servicos';
import IConsulta from './servicos/DataType/IConsulta';
import IProfissonal from './servicos/DataType/IProfissional';
import Avaliacao from './components/Avaliacao';
import { Botao } from './components/Botao';
import { Subtitulo } from './components/Subtitulo';
import calendario from './assets/image/consulta.png'

function App() {

  const [dadosConsulta, setDadosConsulta] = useState([]);
  const [dadosProfissionais, setDadosProfissionais] = useState([]);

    useEffect(()=>{
        requisitarDadosConsulta();
        requisitarDadosProfissionais();
    },[]);

    async function requisitarDadosConsulta(){
        const dados: IConsulta[] | any = await buscaDadosConsultas();
        setDadosConsulta(dados);
    };

    async function requisitarDadosProfissionais(){
      const dados: IProfissonal[] | any = await buscaDadosProfissionais();
      setDadosProfissionais(dados);
    }
  
  return (
    <Fragment>
      <Cabecalho/>
      <Container>
        <Titulo>Área Administrativa</Titulo>
        <Botao>Cadastrar Especialista</Botao>
        <Subtitulo><img src={calendario} alt='Imagem de um calendario'/>Consultas do Dia</Subtitulo>
        <Tabela dadosConsulta={dadosConsulta}/>
        <Grafico dadosConsultas={dadosConsulta} dadosProfissionais={dadosProfissionais}/>
        <Avaliacao dadosProfissionais={dadosProfissionais}/>
      </Container>
      <Rodape/>
    </Fragment>
  );
}

export default App;
