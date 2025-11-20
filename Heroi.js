class Heroi {
   
    constructor(nome, idade, tipo) {
        this.nome = nome;
        this.idade = idade;
        this.tipo = tipo;
    }
  
    atacar() {
        let ataque = "";

        // estrutura de decisão para definir o ataque com base no tipo, vale lembrar que neste caso o if/else funcionam também
        switch (this.tipo) {
            case "mago":
                ataque = "usou magia";
                break;
            case "guerreiro":
                ataque = "usou espada";
                break;
            case "monge":
                ataque = "usou artes marciais";
                break;
            case "ninja":
                ataque = "usou shuriken";
                break;
            default:
                ataque = "usou um ataque desconhecido";
        }
      
        console.log(`o ${this.tipo} atacou usando ${ataque}`);
    }
}

// instanciando os heróis
let heroi1 = new Heroi("Aragorn", 87, "guerreiro");
let heroi2 = new Heroi("Gandalf", 2000, "mago");
let heroi3 = new Heroi("Bruce Lee", 32, "monge");
let heroi4 = new Heroi("Hanzo", 25, "ninja");

// lista para laço de repetição 
let grupoDeHerois = [heroi1, heroi2, heroi3, heroi4];

// percorrendo a lista e chamando o método atacar para cada um
for (let i = 0; i < grupoDeHerois.length; i++) {
    grupoDeHerois[i].atacar();
}
