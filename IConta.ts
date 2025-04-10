import { ICliente } from './ICliente';

export interface IConta {
  numero: string;
  cliente: ICliente;
  saldo: number;

  depositar(valor: number): void;
  sacar(valor: number): void;
  transferir(valor: number, destino: IConta): void;
  verificarSaldo(): number;
}

