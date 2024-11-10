# A-bank

O **A-bank** é um sistema bancário de linha de comando simples, desenvolvido com **Node.js**. Ele permite criar contas, consultar saldos, realizar depósitos e saques. O sistema armazena os dados de cada conta em arquivos JSON, proporcionando uma maneira prática e interativa de gerenciar dinheiro virtual.

## Funcionalidades

- **Criar Conta**: Permite criar uma nova conta com um saldo inicial de R$ 0,00.
- **Consultar Saldo**: Exibe o saldo atual da conta.
- **Depositar**: Permite realizar depósitos em uma conta existente.
- **Sacar**: Permite realizar saques de uma conta, desde que o saldo seja suficiente.
- **Sair**: Encerra a aplicação.

## Tecnologias Utilizadas

- **Node.js**: Ambiente de execução para JavaScript no lado do servidor.
- **Inquirer.js**: Biblioteca para interações via linha de comando.
- **Chalk**: Biblioteca para estilizar a saída no terminal.
- **File System (fs)**: Usado para manipular arquivos no sistema.

## Pré-requisitos

Antes de rodar o projeto, é necessário ter o **Node.js** instalado em sua máquina. Você pode fazer o download e a instalação do Node.js [aqui](https://nodejs.org/).

## Instalação

1. Clone o repositório para sua máquina local:

   ```bash
   git clone https://github.com/MarcosViniciusD/ProjetosEstudos-90days.git
   cd ProjetosEstudos-90days
2. Instale as depencias do projeto

   `npm install`


Como Usar

Para rodar o projeto, execute o seguinte comando no terminal:

node nome_do_arquivo.js

Esse comando irá iniciar a aplicação no terminal e você poderá interagir com o sistema bancário por meio das opções de menu.
Funcionalidades Detalhadas

    Criar Conta: Ao selecionar essa opção, você poderá definir um nome para sua conta. O sistema cria um arquivo JSON com o nome da conta e o saldo inicial como 0.

    Consultar Saldo: O sistema solicita o nome da sua conta e exibe o saldo atual da conta selecionada.

    Depositar: Escolha essa opção para adicionar um valor à sua conta. O sistema solicitará o nome da conta e o valor do depósito.

    Sacar: Permite sacar um valor da conta, desde que o saldo seja suficiente. O sistema verifica se o saldo é suficiente para o saque e realiza a operação.

    Sair: Encerra a aplicação e exibe uma mensagem de agradecimento.

Estrutura do Projeto

O projeto armazena os dados das contas em arquivos JSON dentro de uma pasta chamada Contas. Cada conta é salva com um nome de arquivo baseado no nome da conta e contém o saldo atual em formato JSON.
Exemplo de Execução

    Ao iniciar o programa, você verá um menu com as opções:
        Criar conta
        Consultar Saldo
        Depositar
        Sacar
        Sair

    Ao escolher "Criar conta", será solicitado o nome da conta e um arquivo JSON será criado para armazenar o saldo.

    Você pode realizar depósitos e saques conforme necessário, e consultar o saldo sempre que quiser.

Contribuindo

Sinta-se à vontade para contribuir com o projeto! Você pode:

    Fazer fork deste repositório
    Criar uma branch para sua nova funcionalidade
    Enviar um pull request com suas modificações

Licença

Este projeto está licenciado sob a MIT License.
