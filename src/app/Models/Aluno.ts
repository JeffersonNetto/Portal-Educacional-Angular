import { Pessoa } from './Pessoa';

export class Aluno extends Pessoa {
    
    Matricula:number;
    
    constructor() {
        super();
        this.Tipo = 'A';
    }
}