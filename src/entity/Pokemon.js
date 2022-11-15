class Pokemon {
    constructor(data) {
        this.id = data.id;
        this.name = data.name;
        this.weight = data.weight;
        this.height = data.height
        this.types = data.types
    }

    identificador() {
        return this.name.toUpperCase() + "   " + "°" + this.id
    }

    peso() {
        return `Peso: ${this.weight /10 }Kg`
    }

    altura() {
        return `Altura: ${this.height / 10} metros`
    }

    tipos() {
        let tipos = " "
        this.types.forEach(tipo => tipos += (" " + tipo.type["name"]).toUpperCase())
        return `Tipos: ${tipos}`;
    }
}

export default Pokemon;