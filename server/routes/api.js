let express = require('express'),
apiConn = 'mongodb://izy:izy@ds145952.mlab.com:45952/mydb_izy',
router = express.Router(),
prods = ['products'],
users = ['users'],
db;
const mongojs = require('mongojs');

//Get all products
router.get('/allprods', (req, res) => {
    db = mongojs(apiConn, prods);
    db.products.find((err, products) => {
        if (err) res.send(err);
        res.json(products);
    })
});

//Get single product
router.get('/prod/:id', (req, res) => {
    db = mongojs(apiConn, prods);
    db.products.findOne({_id: mongojs.ObjectId(req.params.id)}, (err, prod) => {
        if (err) res.send(err);
        res.json(prod);
    });
});

//Save a product
router.post('/saveItem', (req, res) => {
    let item = req.body;
    if (!item.cost || !item.name || !item.category) {
        res.status(400);
        res.json(
            {'Error': 'Invalid Data'}
        );
    } else {
        let cat = item.category;
        db.cat.save(item, (err, item) => {
            if (err) res.send(err);
            res.json(item);
        })
    }
});

//Delete an product
router.delete('/prod/:id', (req, res) => {
    db = mongojs(apiConn, prods);
    db.products.remove({_id: mongojs.ObjectId(req.params.id)}, (err, prod) => {
        if (err) res.send(err);
        res.json(prod);
    });
});

//Update a product
router.put('/prod/:id', (req, res) => {
    let prod = req.body,
    updateProd = {};
    if (prod.name) {
        updateProd.name = prod.name;
    }
    if (prod.cost) {
        updateProd.cost = prod.cost;
    }
    if (prod.year) {
        updateProd.year = prod.year;
    }
    if (!updateProd) {
        res.send(400);
        res.json(
            {'Error': 'Bad data'}
        )
    } else {
        db = mongojs(apiConn, prods);
        db.products.update({_id: mongojs.ObjectId(req.params.id), updateProd}, {}, (err, prod) => {
            if (err) res.send(err);
            res.json(prod);
        });
    }
});

//Create a user account
router.post('/signup', (req, res) => {
    let user = req.body;
    if (!user.fName || !user.lName || !user.user || !user.pw) {
        res.status(400);
        res.json(
            {'Error': 'Invalid Data'}
        );
    } else {
        db = mongojs(apiConn, prods);
        db.users.save(user, (err, user) => {
            if (err) res.send(err);
            res.json(user);
        })
    }
});

module.exports = router;