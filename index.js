// Incorporación de datos desde HTML

const inputNombre = document.getElementById("nombre")
const inputApellido = document.getElementById("apellido")
const botonIngresar = document.getElementById("ingresar")
const divDatosUsuario = document.getElementById("datosUsuario")
const divBienvenida = document.getElementById("bienvenida")
const divStockProductos = document.getElementById("stockProductos")
const divCobertura = document.getElementById("cobertura")

// Arreglo de stock
const arrayStock = [
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

// arreglo de ciudades
const ciudades = [
    {
        nombre: "Guadalajara",
        cobertura: true
    },
    {
        nombre: "CDMX",
        cobertura: true
    },
    {
        nombre: "Montevideo",
        cobertura: false
    },
    {
        nombre: "Santiago de Chile",
        cobertura: true
    },
    {
        nombre: "Buenos Aires",
        cobertura: true
    },
    {
        nombre: "Curitiba",
        cobertura: false
    },
    {
        nombre: "Lima",
        cobertura: false
    },
    {
        nombre: "Bogotá",
        cobertura: true
    },

]


// Agrego evento 
botonIngresar.onclick = () => {
    if(inputNombre.value || inputApellido.value){
        const usuario = {
            nombre: inputNombre.value,
            apellido: inputApellido.value
        }
        // Guardo arreglo de usuario en localStorage junto con JSON para que sea usable
        localStorage.setItem("infoUsuario", JSON.stringify(usuario))
        // Quito información de bienvenida para movernos a siguiente segmento
        divDatosUsuario.remove()

        // Agrego saludo con DOM en bienvenida
        const saludoH2= document.createElement("h2")
        saludoH2.innerText= `¡Binvenide ${usuario.nombre} ${usuario.apellido} a nuestro simulador de e-coomerce!`
        divBienvenida.append(saludoH2)

        consultaStock()

        const botonConsultar = document.getElementById("botonConsulta")
        botonConsultar.onclick = () => {
            const productoSeleccionado = document.getElementById("selectorStock").value
            const stockConsultado = arrayStock.find(producto => producto.producto === productoSeleccionado).stock
            const resultadoConsulta = document.createElement("p")
            resultadoConsulta.innerText = `El stock disponible para ${productoSeleccionado} es de ${stockConsultado}, ¡apúrate que se acaban!`
            divStockProductos.append(resultadoConsulta)

    
        }

        // const botonContinuar = document.getElementById("botonContinuar")
        // botonContinuar.onclick = () => {
        //     const textoCiudad= document.createElement("h2")
        //     textoCiudad.innerText= `Bien hecho ${usuario.nombre}, ahora ingresa tu ciudad para saber si tenemos cobertura`
        //     divCobertura.append(textoCiudad)
        //}

        cobertura()

        const botonCobertura = document.getElementById("botonCobertura")
        botonCobertura.onclick = () => {
            const ciudadSeleccionada = document.getElementById("selectorCiudad").value
            const coberturaSeleccionada = ciudades.find(nombre => nombre.nombre === ciudadSeleccionada).cobertura
            
            if(coberturaSeleccionada===false){
            const resultadoCobertura = document.createElement("p")    
            resultadoCobertura.innerText = `La ciudad de ${ciudadSeleccionada} no tiene cobertura de envío, espéranos próximamente`
            divCobertura.append(resultadoCobertura)
            } else {
                const resultadoCobertura = document.createElement("p")
                resultadoCobertura.innerText = `La ciudad de ${ciudadSeleccionada} sí tiene cobertura de envío`
                divCobertura.append(resultadoCobertura)
            }

        }

    }

}

 // funcion consultar stock
 function consultaStock() {
    const copyInicial = document.createElement("p")
    copyInicial.innerText=("Seleccione el producto para consultar su existencia")

    const selectorStock = document.createElement("select")
    selectorStock.setAttribute("id","selectorStock")
    // opciones de selector desde array
        arrayStock.forEach(producto=>{
        const productoStock = document.createElement("option")
        productoStock.innerText = `${producto.producto}`
        selectorStock.append(productoStock)
        })
    // Boton de consulta
    const botonCalcular=document.createElement("button")
    botonCalcular.setAttribute("id","botonConsulta")
    botonCalcular.innerText = "CONSULTA INVENTARIO"


    divStockProductos.append(copyInicial,selectorStock,botonCalcular)
    }

    // funcion saber cobertura
    function cobertura() {
        const copyCiudad= document.createElement("h2")
        // Aquí intenté meter un nombre desde local storage pero no lo logré
        copyCiudad.innerText= `Bien hecho! ahora ingresa tu ciudad para saber si tenemos cobertura`

     const selectorCiudad = document.createElement("select")
     selectorCiudad.setAttribute("id","selectorCiudad")
        //Opciones desde array de ciudades
        ciudades.forEach(nombre =>{
            const ciudadOpcion = document.createElement("option")
            ciudadOpcion.innerText=`${nombre.nombre}`
            selectorCiudad.append(ciudadOpcion)
        }) 

        const botonCobertura = document.createElement("button")
        botonCobertura.setAttribute("id","botonCobertura")
        botonCobertura.innerText="CONSULTAR DISPONIBILIDAD DE ENVIO"





    divCobertura.append(copyCiudad,selectorCiudad,botonCobertura) 
    }