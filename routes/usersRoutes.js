const UsersController = require('../controllers/usersController');
const { app } = require('../server');

module.exports = (app) => {
    
    // TRAER DATOS
    app.get('/api/users/getAll', UsersController.getAll);
    
    // GUARDAR DATOS
    app.post('/api/users/create', UsersController.register);
}