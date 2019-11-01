const taskController = require('../controllers/taskController');

module.exports = function(app) {
    
    app.route('/tasks')
            .get(taskController.get_all)
            .post(taskController.create_task);
    
    app.route('/tasks/:id')
            .get(taskController.read_task)
            .put(taskController.update_task)
            .delete(taskController.delete_task);

}

