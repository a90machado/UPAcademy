function main() {

    var data = [
        {
            id: 1,
            nomePedido: "Ze Maria",
            pedido: [{
                nome: "Menu Tasty",
                extra: "Cola sem gelo"
            },
            {
                nome: "Menu BigMac"
            },
            {
                nome: "Menu Bacon",
                extra: "Cola sem gelo"
            }]
        },
        {
            id: 2,
            nomePedido: "Nuno Louco",
            pedido: [{
                nome: "Menu Tasty",
                extra: "Cola sem gelo"
            },
            {
                nome: "Menu BigMac"
            },
            {
                nome: "Menu Bacon",
                extra: "Cola sem gelo"
            }]
        },
        {
            id: 3,
            nomePedido: "Joao Trapalhao",
            pedido: [{
                nome: "Menu Tasty",
                extra: "Cola sem gelo"
            },
            {
                nome: "Menu BigMac"
            },
            {
                nome: "Menu Bacon",
                extra: "Cola sem gelo"
            }]
        },
        {
            id: 4,
            nomePedido: "Andre Barnabé",
            pedido: [{
                nome: "Menu Tasty",
                extra: "Cola sem gelo"
            },
            {
                nome: "Menu BigMac"
            }]
        },
        {
            id: 5,
            nomePedido: "David Golias",
            pedido: [{
                nome: "Menu Tasty",
                extra: "Cola sem gelo"
            }]
        }
    ]
    checkSpecialOrders(data);
}



function checkSpecialOrders(hamburger) {
    var specialOrders = [];

    for (let index = 0; index < hamburger.length; index++) {
        const order = hamburger[index];

        for (let index = 0; index < order.pedido.length; index++) {
            const element = order.pedido[index];
            if (Object.keys(element).length > 1 && specialOrders.indexOf(order) == -1) {
                specialOrders.push(order);
            }
        }
    }
    return console.log(specialOrders);
}

