// Primeiro Passo: Criaremos uma classe genérica para representar um herói definindo as propriedades

class Heroi {
    constructor(nome, idade, tipo) {
        this.nome = nome;
        this.idade = idade;
        this.tipo = tipo;
    }

/* Segundo Passo: Implementamos o método 'atacar' no qual irá verificar o tipo do herói e exibir a mensagem de acordo com seu ataque
utilizando a estrutura 'switch' para determinar o tipo de ataque com base no tipo de heói */

    atacar() {
        let ataque;
        switch(this.tipo) {
            case 'mago':
                ataque = 'usou magia';
                break;

            case 'guerreiro':
                ataque = 'usou espada';
                break;
        
            case 'monge':
                ataque = 'artes marciais';
                break;

            case 'ninja':
                ataque = 'usou shuriken';
                break;
        }

        console.log(`O ${this.tipo} chamado ${this.nome}, atacou usando ${ataque}.`);
    }
}

// Terceiro Passo: Testando a classe através da instância criada chamando o método 'atacar'

let heroi = new Heroi('Arthur', 30, 'ninja');
heroi.atacar();