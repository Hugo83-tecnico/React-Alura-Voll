import IConsulta from "../../servicos/DataType/IConsulta";
import IProfissonal from "../../servicos/DataType/IProfissional";

interface IDados {
    nome: string,
    consultas: number
};


export const geraDadosGrafico = (profissionais:IProfissonal[], consultas:IConsulta[])=>{
    let dados: IDados[] = [];
    
    if(profissionais && consultas){
        dados = profissionais.map((profissional)=> ({
           nome: profissional.nome,
           consultas: consultas.filter((consulta)=> 
                consulta.profissional.some((prof)=> prof.nome === profissional.nome)).length
        }))
       
        return dados;
    }
};





