import { Cliente } from './Cliente';
import { ContaCorrente } from './ContaC';
import { ContaPoupanca } from './ContaP';


const cliente1 = new Cliente('001', 'Nicolas Biff', 'Rua A, 123', '99999-9999', 1000);
const cliente2 = new Cliente('002', 'João Marlon', 'Rua B, 456', '88888-8888', 400);


let contaCorrente1: ContaCorrente;
try {
  if (cliente1.renda >= 500) {
    contaCorrente1 = new ContaCorrente('cc001', cliente1);
    console.log('Conta corrente criada com sucesso!');
  }
} 

try {
  if (cliente2.renda >= 500) {
    const contaCorrente2 = new ContaCorrente('cc002', cliente2);
  } else {
    throw new Error('Renda insuficiente para abrir conta corrente');
  }
} 

const contaPoupanca1 = new ContaPoupanca('cp001', cliente2, 0.02);


contaCorrente1.depositar(200);
console.log('Saldo CC após depósito:', contaCorrente1.verificarSaldo());

contaCorrente1.sacar(50);
console.log('Saldo CC após saque:', contaCorrente1.verificarSaldo());

ContaCorrente1.transferir(50, contaPoupanca1);
console.log('Saldo CC após transferência:', contaC.verificarSaldo());
console.log('Saldo CP após receber transferência:', contaPoupanca1.verificarSaldo());

contaPoupanca1.calcularTaxa();
console.log('Saldo CP após aplicar juros:', contaPoupanca1.verificarSaldo());

