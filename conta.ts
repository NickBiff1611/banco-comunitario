import { IConta } from './IConta';
import { ICliente } from './ICliente';

export abstract class Conta implements IConta {
  public saldo: number = 0;

  constructor(
    public numero: string,
    public cliente: ICliente
  ) {}

  depositar(valor: number): void {
    if (valor <= 0) throw new Error('Valor inválido para depósito');
    this.saldo += valor;
  }

  sacar(valor: number): void {
    if (valor <= 0) throw new Error('Valor inválido para saque');
    if (valor > this.saldo) throw new Error('Saldo insuficiente');
    this.saldo -= valor;
  }

  transferir(valor: number, destino: IConta): void {
    this.sacar(valor);
    destino.depositar(valor);
  }

  verificarSaldo(): number {
    return this.saldo;
  }
}