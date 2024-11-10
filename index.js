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
        } else if (action === "Consultar Saldo") {
            // Código para consultar saldo
        } else if (action === "Depositar") {
            depositar();
        } else if (action === "Sacar") {
            // Código para sacar
        } else if (action === "Sair") { // Corrigi o "Sai" para "Sair"
            console.log(chalk.bgBlue.black('Obrigado por usar o A-Bank'));
            process.exit();
        }
    }).catch((err) => console.log(err));
}

// Criar conta
function criarConta() {
    console.log(chalk.bgGreen.black('obrigado por escolher o A-Bank'));
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

        if (!fs.existsSync('Contas')) {
            fs.mkdirSync('Contas');
        }

        if (fs.existsSync(`Contas/${nomeConta}.json`)) {
            console.log(chalk.bgRed.black('Já existe um usuário com esse nome.'));
            criarConta();
            return;
        } else {
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

// Depositar dinheiro para o usuário
function depositar() {
    inquirer.prompt([
        {
            name: 'nomeConta',
            message: 'Qual o nome da sua conta?'
        }
    ]).then((answer) => {
        const nomeConta = answer['nomeConta'];
        if (!checarNomeConta(nomeConta)) {
            return depositar();
        }
        inquirer.prompt([
            {
                name: 'quantidade',
                message: 'Quanto você gostaria de depositar?'
            }
        ]).then((answer) => {
            const quantidade = answer['quantidade'];
            adicionarQuantidade(nomeConta, quantidade);
            operacao();
        }).catch(err => console.log(err));
    }).catch(err => console.log(err));
}

// Verificar se a conta existe
function checarNomeConta(nomeConta) {
    if (!fs.existsSync(`Contas/${nomeConta}.json`)) {
        console.log(chalk.bgRed.black("Esta conta não existe"));
        return false;
    }
    return true;
}

// Função para adicionar dinheiro à conta
function adicionarQuantidade(nomeConta, quantidade) {
    const conta = lerArquivo(nomeConta);

    if (!quantidade) {
        console.log(chalk.bgRed.black('Ocorreu um erro, tente novamente.'));
        return depositar();
    }

    conta.balance = parseFloat(conta.balance) + parseFloat(quantidade);

    fs.writeFileSync(`Contas/${nomeConta}.json`, JSON.stringify(conta), 'utf8');
    console.log(chalk.bgGreen(`Foi depositado um valor de R$: ${quantidade} na sua conta`));
}

// Função para ler o arquivo da conta
function lerArquivo(nomeConta) {
    const contaJson = fs.readFileSync(`Contas/${nomeConta}.json`, {
        encoding: 'utf-8',
        flag: 'r'
    });
    return JSON.parse(contaJson);
}
