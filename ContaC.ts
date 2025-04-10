import { Conta } from './Conta';

export class ContaCorrente extends Conta {
  private readonly limiteChequeEspecial: number = 100;

  sacar(valor: number): void {
    if (valor <= 0) throw new Error('Valor inválido para saque');
    if (valor > this.saldo + this.limiteChequeEspecial) {
      throw new Error('Saldo insuficiente + limite do cheque especial excedido');
    }
    this.saldo -= valor;
  }
}