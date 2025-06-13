import { Queue } from "./src/controller/FilaController"
import leia from 'readline-sync'
const fila = new Queue<string>();

let opcao;
let nome: string;

do { 
    console.log
    ("\n==================================" + 
    "\n1 - Adicionar Cliente na Fila" + 
    "\n2 - Listar todos os Clientes" + 
    "\n3 - Retirar Cliente da Fila" + 
    "\n0 - Sair" + 
    "\n==================================")

    opcao = leia.questionInt(`\nDigite a opcao que deseja: `)

switch (opcao) {
    case 0:
        console.log("\nPrograma Finalizado!")
        break;
    case 1:
        nome = leia.question("\nDigite o nome: ");
        fila.enqueue(nome);
        console.log(`\nCliente "${nome}" Adicionado com Sucesso!`);
        break;
    case 2:
    if(fila.isEmpty()) {
        console.log("\nA fila está vazia!");
    } else {
        console.log(`\nClientes na fila:`);
        fila.printQueue();
    }
    break;
    case 3:
        const remover = fila.dequeue();
        console.log("\nCliente foi Chamado!")
        break;
    default:
        console.log("\nOpção invalida")
}
} while (opcao != 0);