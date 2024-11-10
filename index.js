// Módulos externos
import inquirer from 'inquirer';
import chalk from 'chalk';
// Módulos internos
import fs from 'fs';

// Chamando função
operacao();

function operacao() {
    inquirer.prompt([{
        type: 'list',
        name: 'action',
        message: 'Bem-vindo ao A-bank.',
        choices: [
            'Criar conta', 'Consultar Saldo', 'Depositar', 'Sacar', 'Sair'
        ]
    }]).then((answer) => {
        const action = answer['action'];
        if (action === "Criar conta") {
            criarConta();
        }
        else if (action === "Consultar Saldo"){

        }
        else if(action === "Depositar"){
            depositar()
        }
        else if(action === "Sacar"){

        }
        else if (action === "Sai"){
            console.log(chalk.bgBlue.black('Obrigado por usar o A-Bank'))
            //encerra a execução do nosso sistema.
            process.exit();
        }
    }).catch((err) => console.log(err));
}

// Criar conta
function criarConta() {
    console.log(chalk.bgGreen.black('obrigado por escolher a A-Bank'));
    console.log(chalk.green('Defina as opções da sua conta a seguir'));
    construindoConta();
}

function construindoConta() {
    inquirer.prompt([
        {
            name: 'nomeConta',
            message: 'Digite um nome para sua conta',
        }
    ]).then((answer) => {
        const nomeConta = answer['nomeConta'];
        console.info(nomeConta);

        if (!fs.existsSync('Contas')) {
            fs.mkdirSync('Contas');
        }

        // Verificar se o arquivo já existe
        if (fs.existsSync(`Contas/${nomeConta}.json`)) {
            console.log(chalk.bgRed.black('Já existe um usuário com esse nome.'));
            criarConta();
            return
        } else {
            // Criar o arquivo com o conteúdo JSON
            fs.writeFileSync(
                `Contas/${nomeConta}.json`,
                '{"balance": 0}',
                'utf8'
            );
            console.log(chalk.green('Conta criada com sucesso!'));
            operacao();
        }
    }).catch((err) => console.log(err));
}

//Depositar dinheiro para o usuario do banco
function depositar(){
    inquirer.prompt([
        {
            name: 'nomeConta',
            message: 'Qual o nome da sua conta?'
        }
    ]).then((answer)=>{
        const nomeConta = answer['nomeConta']
        if (!checarNomeConta(nomeConta)){
            return depositar()
        }
    })
    .catch(err =>console.log(err))
}



//FUNCAO PARA VERIFICAR SE A CONTA EXISTE

function checarNomeConta(nomeConta){
    if(!fs.existsSync(`Contas/${nomeConta}.json`)){
        console.log(chalk.bgRed.black("Esta conta nao existe"))
        return false
    }
    return true
}
