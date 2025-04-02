
// insertOne
db.customer.insertOne
    ({
        _id: "amirul",
        name: "amirul mirdas"
    });




// inserMany
db.products.insertMany
    ([
        {
            _id: 1,
            name: "Indomie Ayam Bawang",
            price: new NumberLong(2000)
        },
        {
            _id: 2,
            name: "Mie Sedap",
            price: new NumberLong(2000)
        }
    ]);

// insert documents orders
db.orders.insertOne
    ({
        _id: new ObjectId(),
        total: new NumberLong(8000),
        items: [
            {
                product_id: 1,
                price: new NumberLong(2000),
                quantity: new NumberInt(2)
            },
            {
                product_id: 2,
                price: new NumberLong(2000),
                quantity: new NumberInt(2)
            }
        ]
    });