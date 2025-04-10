import { Conta } from './Conta';

export class ContaPoupanca extends Conta {
  constructor(
    numero: string,
    cliente: any,
    public taxaJuros: number 
  ) {
    super(numero, cliente);
  }

  calcularTaxa(): void {
    const juros = this.saldo * this.taxaJuros;
    this.saldo += juros;
  }
}