import IConsulta from "./DataType/IConsulta";
import IProfissonal from "./DataType/IProfissional";


const urlConsultas: string = `http://localhost:8080/consultas`;
const urlProfissionais: string = `http://localhost:8080/profissionais`;

export const buscaDadosConsultas = async () => {
    const response:IConsulta | any = await fetch(urlConsultas).then(response => response.json());
    return response ;

}

export const buscaDadosProfissionais = async () => {
    const response:IProfissonal | any = await fetch(urlProfissionais).then(response => response.json());
    return response ;

}

