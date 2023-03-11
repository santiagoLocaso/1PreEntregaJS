
alert('Bienvenido a Tecno-Lomas!')

const comprarProducto = () => {
    let producto = ''
    let cantidad = 0
    let precio = 0
    let subtotal = 0
    let volverALatienda = false

    do {
        producto = prompt('¿Qué quiere comprar: teclado, mouse, monitor, pc?')
        cantidad = parseInt(prompt('Ingrese la cantidad que desea comprar'))

        let cantidadValidada = validarCantidad (cantidad)
        
        switch (producto) {
            case 'teclado':
                precio = 4500;
                break;
            case 'mouse':
                precio = 3500; 
                break;
            case 'monitor':
                precio = 25000;
                break;
            case 'pc':
                precio = 60000;
                break;          
            default:
                alert('Alguno de los datos ingresados no es correcto!')
                precio = 0
                cantidadValidada = 0
                break;
        }

        subtotal += precio * cantidadValidada

        volverALatienda = confirm('¿Desea volver a la tienda?')
    } while (volverALatienda);

    return subtotal
}

const validarCantidad = (cantidad) => {
    while (Number.isNaN(cantidad) || cantidad === 0) {
        alert('Debe ingresar una cantidad valida!')
        cantidad = parseInt(prompt('Ingrese la cantidad que desea comprar'))
    } 

    return cantidad
}

const calcularEnvio = (subtotal) => {
    const envioCompra = confirm('¿Quiere envio a domicilio?')

    if (envioCompra && subtotal >= 8000) {
        alert('Con su compra superior a $8000 tiene envio gratis')
    } else if (envioCompra && subtotal < 8000) {
        subtotal += 4000
        alert('El envio a domicilio tiene un costo de $4000')
    } else {
        alert('El total de su compra es: $'+subtotal)
    }

    return subtotal
}

const calcularCuotas = (subtotal) => {
    let cuotas = prompt('¿En cuantas cuotas quiere pagar: 1, 3, 6 o 12?')
    
    switch (cuotas) {
        case '1':
            (subtotal)
            alert('el precio total en cuotas es de: $'+subtotal+' en un pago')
            break;
        case '3':
            (subtotal /= 3)
            alert('el precio total en cuotas es de: $'+subtotal+' en 3 cuotas')
            break;
        case '6':
            (subtotal /= 6)
            alert('el precio total en cuotas es de: $'+subtotal+' en 6 cuotas')
            break;
        case '12':
            (subtotal /= 12)
            alert('el precio total en cuotas es de: $'+subtotal+' en 12 cuotas')
            break;
        default:
            alert('el numero de cuotas ingresado no es correcto')
            subtotal = 0
            cuotas = 0
            break;
    }

    return subtotal
}


const detalleDeCompra = (precioFinal) => {
    alert('El total a pagar es de: $'+precioFinal+'. Gracias por su compra!')
}

const subtotal = comprarProducto()

const subtotalConEnvio = calcularEnvio(subtotal)

const subtotalConCuotas = calcularCuotas(subtotalConEnvio)

detalleDeCompra(subtotalConCuotas)