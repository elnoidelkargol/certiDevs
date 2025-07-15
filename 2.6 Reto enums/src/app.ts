enum EstadoPedido{
    Recibido = 1,
    EnProceso = 2,
    Enviado = 3,
    Entregado = 4,
    Cancelado = 5
}

function obtenerDescripcionEstado(estado: EstadoPedido): string {
    switch (estado) {
        case EstadoPedido.Recibido:
            return "El pedido ha sido recibido y está pendiente de procesamiento";
        case EstadoPedido.EnProceso:
            return "El pedido está siendo preparado";
        case EstadoPedido.Enviado:
            return "El pedido ha sido enviado y está en camino";
        case EstadoPedido.Entregado:
            return "El pedido ha sido entregado con éxito";
        case EstadoPedido.Cancelado:
            return "El pedido ha sido cancelado";
        default:
            return "Estado desconocido";
    }
}

console.log(obtenerDescripcionEstado(EstadoPedido.Recibido));
console.log(obtenerDescripcionEstado(EstadoPedido.Enviado));