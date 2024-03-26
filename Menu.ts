import readlinesync = require("readline-sync");
import { colors } from './src/util/Colors';
import { Conta } from "./src/util/model/Conta";

export function main() {

    let opcao: number;

    let c1: Conta = new Conta(1, 123, 1, "Thais", 1000000)
    c1.visualizar();

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
                break;

            case 2:
                console.log("\n\nListar todas as Contas\n\n");
                break;    
            
            case 3:
                console.log("\n\nConsultar dados da Conta - por numero\n\n");
                break;    

            case 4:
                console.log("\n\nAtualizar dados da Conta\n\n");
                break;  

            case 5:
                console.log("\n\nApagar uma conta\n\n");
                break;
    
            case 6:
                console.log("\n\nSaque\n\n");
                break;    
                
            case 7:
                console.log("\n\nDepósito\n\n");
                break;    
    
            case 8:
                console.log("\n\nTransferencia entre Contas\n\n");
                break;   
                
            default:
                console.log("\nOpcao Invalida\n")
                break
        }
    }
}

export function sobre(): void{
    console.log("\n**********************************************************");
    console.log("Projeto Desenvolvido por: Thais Santos");
    console.log("Generation Brasil - generation@genaration.org:");
    console.log("github.com/thaissan");
    console.log("\n**********************************************************");
}

main()

