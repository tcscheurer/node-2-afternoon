const products_controller = require('../controllers/products_controller');

module.exports = app => {

    app.get('/api/products',products_controller.getAll);
    app.get('/api/product/:id',products_controller.getOne);
    app.put('/api/product/:id',products_controller.update);
    app.post('/api/product',products_controller.create);
    app.delete('/api/product/:id',products_controller.delete);

}