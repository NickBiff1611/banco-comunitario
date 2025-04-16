import { Conta } from './Conta';

export class ContaPoupanca implements Conta {
  constructor(
    numero: string,
    cliente: any,
    taxaJuros: number 
  ) {
    super(numero, cliente);
  }

  calcularTaxa(): void {
    const juros = this.saldo * this.taxaJuros;
    this.saldo += juros;
  }
}
