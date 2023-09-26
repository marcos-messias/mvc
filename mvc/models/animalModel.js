class Animal{

    tamanho
    cor
    raca
    grupo


    constructor(cor, raca, grupo){
        this.cor = cor
        this.raca = raca
        this.grupo = grupo

    }

    andar(){
        console.log("Andou!")
    }
}

let gato = new Animal("Marrom", "Siamés", "Mamifero")
let cachorro = new Animal("Preto", "Viralata", "Mamifero")

console.log(gato.cor)
console.log(cachorro.cor+" "+cachorro.grupo+" "+cachorro.raca)