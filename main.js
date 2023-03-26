const carrito = []

alert('Bienvenido a Tecno-Lomas!')

const mostrarProductos = () => {
    const listaProductos = productos.map(producto => {
        return '- '+producto.nombre+' $'+producto.precio
    })

    alert('Lista de productos'+'\n\n'+listaProductos.join('\n'))
    comprarProducto(listaProductos)
}

const comprarProducto = (listaProductos) => {
    let nombreProducto = ''
    let cantidad = 0
    let precio = 0
    let subtotal = 0
    let volverALatienda = false

    do {
        nombreProducto = prompt('¿Qué quiere comprar?'+'\n\n'+listaProductos.join('\n'))
        cantidad = parseInt(prompt('Ingrese la cantidad que desea comprar'))

        const producto = productos.find(producto => producto.nombre.toLowerCase() === nombreProducto.toLowerCase())
        
        let cantidadValidada = validarCantidad (cantidad)

        if (producto) {
            agregarAlCarrito(producto, producto.id, cantidad, precio)
            subtotal += precio * cantidadValidada
        } else {
            alert('Producto sin stock!')
            cantidadValidada = 0
        }
        
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

const agregarAlCarrito = (producto, productoId, cantidad, precio) => {
    const productoRepetido = carrito.find(producto => producto.id == productoId)
    if (productoRepetido) {
        productoRepetido.cantidad += cantidad
        productoRepetido.subtotal += producto.precio * cantidad
    } else {
        producto.cantidad = cantidad
        producto.subtotal = producto.precio * cantidad
        carrito.push(producto)
    }

    console.log(carrito)
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
            subtotal
            alert('el precio total en cuotas es de: $'+subtotal+' en un pago')
            break;
        case '3':
            subtotal /= 3
            alert('el precio total en cuotas es de: $'+subtotal+' en 3 cuotas')
            break;
        case '6':
            subtotal /= 6
            alert('el precio total en cuotas es de: $'+subtotal+' en 6 cuotas')
            break;
        case '12':
            subtotal /= 12
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

const mostrarCarrito = () => {
    let mensaje = "Carrito de compras:\n\n";
    let total = 0;
  
    carrito.forEach((producto) => {
      mensaje += `- ${producto.nombre}: $${producto.precio} x ${producto.cantidad} = $${producto.precio * producto.cantidad}\n`;
      total += producto.precio * producto.cantidad;
    });
  
    mensaje += `\nTotal: $${total}`;
  
    alert(mensaje);
  };

const desgloceProductos = mostrarProductos()

mostrarCarrito()

const obtenerSubtotal = () => {
    return carrito.reduce((a,b) => a + b.subtotal, 0)
}

const subtotal = obtenerSubtotal()

const subtotalConEnvio = calcularEnvio(subtotal)

const subtotalConCuotas = calcularCuotas(subtotalConEnvio)

detalleDeCompra(subtotalConCuotas)