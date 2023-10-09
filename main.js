let envio = `Su artículo será enviado a: `;
let costo = 0;
let graciasCompra = `Muchas gracias por su compra`;
let gracias = `Muchas gracias por su visita`;
let articulo = ``;
let nombre = prompt("Ingrese su nombre");
alert(`Bienvenido a nuestro ecommerce ` + nombre);
let producto = prompt(
  `¿Qué desea comprar? Escriba "1" si quiere comprar remeras, o "2" si quiere pantalones`
);

if (producto == 1) {
  articulo = `remera`;
  costo = 2;
} else if (producto == 2) {
  articulo = `pantalones`;
  costo = 5;
} else {
  alert(gracias);
}

if (articulo) {
  let confirmacion = confirm(
    `Usted eligió ${articulo}. Su coste es de ${costo}. Desea comprar este articulo?`
  );
  if (confirmacion) {
    for (var i = 0; i < 1; i++) {
      let dirección = prompt(
        "Ingrese su dirección para poder realizar el envío del pedido"
      );
      alert(envio + dirección);
      alert(graciasCompra);
    }
  }
} else {
  alert(gracias);
}
