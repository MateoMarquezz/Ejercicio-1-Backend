class Usuario {
    constructor(nombre, apellido, libros, mascotas) {
        this.nombre = nombre;
        this.apellido = apellido
        this.libros = libros
        this.mascotas = mascotas
    }
    getNombreCompleto() {
        console.log(`Hola! me llamo ${this.nombre} y mi apellido es ${this.apellido}`);
    }
}
addMascotas(mascotas); {
    this.mascotas.push(mascotas)
}

countMascotas(); {
    console.log(this.nmascotas.length)
}

addBooks(libros); {
    this.libros.push({ title: title, autor: autor });
}

getBookNames(); {
    const bookNames = this.libros.map(book => {
        return book.title
    })
    console.log(bookNames);
}

const user = new User('Mateo Marquez, Carlos', [{ title: 'Ejemplo1', autor: 'Ejemplo2' }, { title: 'Ejemplo3', autor: 'Ejemplo4' }], ['Perro', 'Gata', 'Perra']);

user.getNombreCompleto();
user.addMascotas('Tortuga');
user.countMascotas();
user.addBooks('Ejemplo6', 'Ejemplo8');
user.getBookNames();