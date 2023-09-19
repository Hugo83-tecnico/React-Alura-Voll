import IProfissonal from "./IProfissional";

export default interface IConsulta {
    
        "id": number,
        "data": string,
        "horario": string,
        "profissional": Array<IProfissonal>,
        "paciente": string,
        "modalidade":string
        
}