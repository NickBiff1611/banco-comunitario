import { ICliente } from './ICliente';

export class Cliente implements ICliente {
  constructor(
    public id: string,
    public nome: string,
    public endereco: string,
    public telefone: string,
    public renda: number
  ) {}
}