import { Stack } from "./src/controller/PilhaController";
import leia from 'readline-sync';

const pilha = new Stack<string>();
let opcao;
let livro: string;

do { 
    console.log
    ("===============================" + 
    "\n1 - Adicionar Livro na pilha" + 
    "\n2 - Listar todos os Livros" + 
    "\n3 - Retirar Livro da pilha" +
    "\n0 - Sair" + 
    "\n===============================");

    opcao = leia.questionInt(`Digite a opcao que deseja: `)

switch (opcao) {
    case 0:
        console.log("\nPrograma Finalizado!")
        break;
    case 1:
        livro = leia.question("\nDigite o nome do livro: ");
        pilha.push (livro);
        console.log(`\nLivro "${livro}" foi adicionado à pilha!`)
        break;
    case 2:
    if (pilha.isEmpty()) {
        console.log("\nA pilha está vazia!");
    } else {
        console.log(`\nLivros na pilha:`);
        pilha.printStack();
    }
    break;
    case 3:
        const remover = pilha.pop();
        if (remover) {
                console.log(`\nLivro "${remover}" foi removido da pilha.`);
            } else {
                console.log("\nA pilha está vazia. Nenhum livro para remover.");
            }
        break;

    default:
        console.log("\nOpção invalida");
    }
}while (opcao != 0);