import readlinesync = require("readline-sync");
import { colors } from './src/util/Colors';
import { Conta } from "./src/model/Conta";
import { ContaCorrente } from "./src/model/ContaCorrente";
import { ContaPoupanca } from "./src/model/ContaPoupanca";
import { ContaController } from "./src/controller/ContaController";

export function main() {

    let opcao, numero, agencia, tipo, limite, aniversario, saldo: number;
    let titular: string;
    const tipoContas =['Conta Corrente', 'Conta Poupança'];

    //Instancia da classe Conta Controller
    const contas : ContaController = new ContaController();

    // let cc1: ContaCorrente = new ContaCorrente(1, 456, 1, "Thais S.", 15000, 1000);
    // contas.cadastrar(cc1)

    // let c1: Conta = new Conta(1, 123, 1, "Thais", 1000000000)
    // c1.visualizar(); 
    // c1.sacar(10500);
    // c1.visualizar();
    // c1.depositar(5000);
    // c1.visualizar();

    const cc: ContaCorrente = new ContaCorrente(contas.gerarNumero(), 1456, 1, "Thais", 15000, 1000);
    cc.visualizar();
    cc.sacar(200);
    cc.visualizar();
    cc.depositar(1000);
    cc.visualizar();

    const cp: ContaPoupanca = new ContaPoupanca(contas.gerarNumero(), 789, 2, "Thais", 1000, 10);
    cp.visualizar();
    cp.sacar(200);
    cp.visualizar();
    cp.depositar(1000);
    cp.visualizar();

    //set altera

    while(true){

        console.log(colors.bg.black, colors.fg.yellow)
        
        console.log("**********************************************************");
        console.log("                                                          ");
        console.log("                        BANCO DO BRAZIL COM Z             ");
        console.log("                                                          ");
        console.log("**********************************************************");
        console.log("                                                          ");
        console.log("                    1 - Criar Conta                       ");
        console.log("                    2 - Listar todas as Contas            ");
        console.log("                    3 - Buscar Conta por Numero           ");
        console.log("                    4 - Atualizar Dados da Conta          ");
        console.log("                    5 - Apagar Conta                      ");
        console.log("                    6 - Sacar                             ");
        console.log("                    7 - Depositar                         ");
        console.log("                    8 - Transferir valores entre Contas   ");
        console.log("                    9 - Sair                              ");
        console.log("**********************************************************");
        console.log("                                                          ",
        colors.reset);

        console.log("Entre com a opção desejada: ");
        opcao = readlinesync.questionInt("");

        if (opcao == 9){
            console.log("\nBanco do Brazil com Z - O seu futuro começa aqui!");
            sobre();
            process.exit(0);
        }

        switch(opcao){
            case 1:
                console.log("\n\nCriar Conta\n\n");

                console.log('Digite o numero da agencia: ')
                agencia = readlinesync.questionInt("")

                console.log('Digite o nome do titular: ')
                titular = readlinesync.question("")

                console.log('Informe o tipo da conta: ')
                tipo = readlinesync.keyInSelect(tipoContas, "", {cancel: false}) + 1

                console.log('Digite o saldo da conta: ')
                saldo = readlinesync.questionFloat("")

                switch(tipo){
                    case 1:
                console.log('Digite o saldo da conta: ')
                limite = readlinesync.questionFloat("")
                contas.cadastrar(
                    new ContaCorrente(contas.gerarNumero(), agencia, tipo, titular, saldo, limite)
                )
                break;
                case 2:
                console.log('Digite a data de aniversario: ')
                aniversario = readlinesync.questionInt("")
                contas.cadastrar(
                    new ContaCorrente(contas.gerarNumero(), agencia, tipo, titular, saldo, aniversario)
                )
                break;
                        
                }

                keyPress()
                break;

            case 2:
                console.log("\n\nListar todas as Contas\n\n");
                contas.listarTodas();
                keyPress()
                break;    
            
            case 3:
                console.log("\n\nConsultar dados da Conta - por numero\n\n");

                console.log('Digite o numero da conta: ')
                numero = readlinesync.questionInt("")

                contas.procurarPorNumero(numero);
                
                keyPress()
                break;    

            case 4:
                console.log("\n\nAtualizar dados da Conta\n\n");


                console.log('Digite o numero da conta: ')
                numero = readlinesync.questionInt("")

                let conta = contas.buscarNoArray(numero)
                if (conta !== null){
                    
                console.log('Digite o numero da agencia: ')
                agencia = readlinesync.questionInt("")

                console.log('Digite o nome do titular: ')
                titular = readlinesync.question("")

                tipo = conta.tipo

                console.log('Digite o saldo da conta: ')
                saldo = readlinesync.questionFloat("")

                switch(tipo){
                    case 1:
                console.log('Digite o saldo da conta: ')
                limite = readlinesync.questionFloat("")
                contas.atualizar(
                    new ContaCorrente(numero, agencia, tipo, titular, saldo, limite)
                )
                break;
                case 2:
                console.log('Digite a data de aniversario: ')
                aniversario = readlinesync.questionInt("")
                contas.atualizar(
                    new ContaCorrente(numero, agencia, tipo, titular, saldo, aniversario)
                )

                break;
                }

                } else{
                    console.log("Conta não encontrada!")
                }
                keyPress()
                break;  

            case 5:
                console.log("\n\nApagar uma conta\n\n");

                console.log("Digite o numero da conta: ")
                numero = readlinesync.questionInt("")

                contas.deletar(numero)

                keyPress()
                break;
    
            case 6:
                console.log("\n\nSaque\n\n");
                keyPress()
                break;    
                
            case 7:
                console.log("\n\nDepósito\n\n");
                keyPress()
                break;    
    
            case 8:
                console.log("\n\nTransferencia entre Contas\n\n");
                keyPress()
                break;   
                
            default:
                console.log("\nOpcao Invalida\n")
                keyPress()
                break
        }
    }
}

function sobre(): void{
    console.log("\n***********************************************************************************");
    console.log("Projeto Desenvolvido por: Thais Santos");
    console.log("Projeito feito para atividade do curso Generation Brasil - generation@genaration.org:");
    console.log("github.com/thaissan");                           
    console.log("\n***********************************************************************************");
}

function keyPress(): void {
    console.log(colors.reset, "");
    console.log("\nPressione enter para continuar...");
    readlinesync.prompt();
}

main();
 
                                                              