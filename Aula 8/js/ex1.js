function main() {
    checkSpecialOrders(data);
}

function checkSpecialOrders(data) {
    var specialOrders = [];
    for (let index = 0; index < data.length; index++) {
        const order = data[index];
        for (let index = 0; index < order.pedido.length; index++) {
            const element = order.pedido[index];
            if (Object.keys(element).length > 1 && specialOrders.indexOf(order) == -1) {
                specialOrders.push(order);
            }
        }
    }
    return console.log(specialOrders);
}

