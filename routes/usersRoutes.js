const UsersController = require('../controllers/usersController');
const { app } = require('../server');

module.exports = (app) => {

    app.get('/api/users/getAll', UsersController.getAll);
}