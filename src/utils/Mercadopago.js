const mercadopago = require('mercadopago');
mercadopago.configurations.setAccessToken(config.access_token);

const payment_data = {
    transaction_amount: 100,
    token: 'ff8080814c11e237014c1ff593b57b4d',
    installments: 1,
    payer: {
        type: "customer",
    id: "123456789-jxOV430go9fx2e"
    }
};

mercadopago.payment.create(payment_data).then(function (data) {
    console.log(data);
});

// SDK de Mercado Pago

mercadopago.configure({
    access_token: 'PROD_ACCESS_TOKEN'
});
// Crea un objeto de preferencia
let preference = {
    items: [
        {
            title: 'Mi producto',
            unit_price: 100,
            quantity: 1,
        }
    ]
};
mercadopago.preferences.create(preference)
    .then(function (response) {
        // Este valor reemplazará el string "<%= global.id %>" en tu HTML
        global.id = response.body.id;
    }).catch(function (error) {
        console.log(error);
    });
