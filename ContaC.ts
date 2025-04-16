import { Conta } from './Conta';

export class ContaCorrente implements Conta {

  sacar(valor: number): void {
    if (valor > this.saldo + this.limiteChequeEspecial) {
    }
    this.saldo -= valor;
  }
}
