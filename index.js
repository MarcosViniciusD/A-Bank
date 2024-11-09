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
        message: 'Bem-vindo ao A-bank.', // Corrigido 'menssage' para 'message'
        choices: [
            'Criar conta', 'Consultar Saldo', 'Depositar', 'Sacar', 'Sair'
        ]
    }]).then((answer) => {
        const action = answer['action'];
        if (action === "Criar conta") {
            criarConta();
        }
    }).catch((err) => console.log(err));
}

// Criar conta
function criarConta() {
    console.log(chalk.bgGreen.black('Parabéns por escolher o A-Bank'));
    console.log(chalk.green('Defina as opções da sua conta a seguir'));
    construindoConta();
}

function construindoConta() {
    inquirer.prompt([
        {
            name: 'nomeConta',
            message: 'Digite um nome para sua conta', // Corrigido 'menssage' para 'message'
        }
    ]).then((answer) => {
        const nomeConta = answer['nomeConta'];
        console.info(nomeConta);

        // Verificar se a pasta 'Contas' existe, caso contrário, cria
        if (!fs.existsSync('Contas')) {
            fs.mkdirSync('Contas');
        }

        // Verificar se o arquivo já existe
        if (fs.existsSync(`Contas/${nomeConta}.json`)) {
            console.log(chalk.bgRed.black('Já existe um usuário com esse nome.'));
            criarConta(); // Chama novamente a função para criar conta
        } else {
            // Criar o arquivo com o conteúdo JSON
            fs.writeFileSync(
                `Contas/${nomeConta}.json`,
                '{"balance": 0}', // Contenido inicial da conta
                'utf8' // Especifica a codificação
            );
            console.log(chalk.green('Conta criada com sucesso!'));
            operacao(); // Chama a função principal após criar a conta
        }
    }).catch((err) => console.log(err));
}
