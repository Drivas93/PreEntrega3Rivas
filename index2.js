
// SECCIÓN DE PRIMER PRE ENTREGA 
// Inicio preguntando ESTADO/PROVINCIA con un Condicional

const estado = prompt ("ingresa tu estado/provincia");

if(estado === "Cdmx"){
    alert ("Sí hay cobertura");
} else if (estado === "Jalisco"){
    alert ("Sí hay cobertura");
} else if (estado === "Edomex"){
    alert ("Sí hay cobertura");
} else if (estado === "Nuevo León"){
    alert ("Sí hay cobertura");
} else if (estado === "Chihuahua"){
    alert ("Sí hay cobertura");
} else {
    alert ("No hay cobertura");
}


// Integro una función que simula un cálculo de costo de envío basado en código postal y cantidad de productos

const cp = parseInt(prompt("Ingresa tu código postal"));
const cantidadProductos = parseInt(prompt("Ingresa cantidad de productos a comprar"));

function costoEnvio (cp,cantidadProductos){
    const resultado = cp - (cantidadProductos*10000);
    alert (`Costo de envío $ ${resultado}`);
}

costoEnvio (cp,cantidadProductos);

// Integro un CICLO con diferentes ciudades para calcular tiempo de entrega 


let ciudad = parseInt(prompt("Tiempo de entrega; escoge tu ciudad: 1-Cdmx 2-Guadalajara 3-Tequila 4-Naucalpan 5-Monterrey 6-Apodaca 7-Chihuahua 8-Ciudad Juarez"));
let estadoCubierto = true
let cobertura
let decision


while(estadoCubierto === true){
    if(ciudad  === 1){
        alert ("1 día hábil");
    } else if(ciudad === 2){
        alert ("1 día hábil");
    } else if(ciudad === 3){
        alert ("2 días hábiles");
    } else if(ciudad === 4){
        alert ("1 día hábil");
    } else if(ciudad === 5){
        alert ("2 días hábiles");
    } else if(ciudad === 6){
        alert ("2 días hábiles");
    } else if(ciudad === 7){
        alert ("3 días hábiles");
    } else if(ciudad === 8){
        alert ("3 días hábiles");
}

decision = parseInt(prompt("Revisa otra ciudad ¿Tu estado tiene cobertura?: 1-Sí 2-No"));
if(decision === 1){
    ciudad  = parseInt(prompt("Tiempo de entrega; escoge tu ciudad: 1-Cdmx 2-Guadalajara 3-Tequila 4-Naucalpan 5-Monterrey 6-Apodaca 7-Chihuahua 8-Ciudad Juarez"));
} else {
    estadoCubierto = false
    alert ("Seguiremos trabajando en llegar a tu localidad");
}
}

// *******Va con corrección de simulación de costo de envío haciendo una operación



// INICIA SECCIÓN DE SEGUNDA PRE ENTREGA

// Inicializo objeto con clase constructura para usuario

class NuevoUsuario{
    constructor (nombre,email,passsword){
        this.nombre=nombre;
        this.email=email;
        this.passsword=passsword;
    }
    bienvenida(){
   alert `Bienvenide ${this.nombre}, enviamos un email a ${this.email} para corroborar su identidad`;
//    No logré que esto funcionara automáticamente para cada objeto quizá no se usa así 
}
}

const nombreUsuario = prompt("Ingrese su nombre");
const emailUsuario = prompt("Ingrese su email");
const passswordUsuario = prompt("Ingrese su contraseña");

const usuarioSimulador= new NuevoUsuario (nombreUsuario, emailUsuario, passswordUsuario);
console.log (usuarioSimulador)


// Inicio Arreglo y método de arreglo para conocer stock de productos

const ArrayInventario = [
    {
    producto: "Silla Eames",
    stock: "25",
    },
    {
    producto: "Recamara",
    stock: "30",
    },
    {
    producto: "Repisa",
    stock: "45",
    },
    {
    producto: "Escritorio",
    stock: "12",
    },
    {
    producto: "Buró",
    stock: "15",
    },
    {
    producto: "Sofá",
    stock: "25",
    },
    {
    producto: "Sofá Cama",
    stock: "7",
    },
    {
    producto: "Comedor",
    stock: "10",
    },
    {
    producto: "Librero",
    stock: "31",
    },
]

const busqueda = prompt("Ingresa mueble que busca")
const elementoExistente = ArrayInventario.find(nombre=>nombre.producto === busqueda)
alert(`Aún tenemos ${elementoExistente.stock} piezas disponibles ¡Compra antes de que se acaben!`)