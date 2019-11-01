const { Task } = require('../models/task');

const todo = [
    new Task('Groceries', new Date(2019, 0, 1)), 
    new Task('Study', new Date(2019, 1, 1)),
    new Task('Laundry', new Date(2018, 12, 31))
];


exports.get_all = (req, res) => {
    res.send(todo);
};

exports.create_task = (req, res) => {
    let newTask = req.body;
    todo.push(newTask);

    res.send(newTask);
};

exports.read_task = (req, res) => {
    const id = req.params.id;
    if (id < 0 || id > todo.lenght)
        res.send('Error');

    res.send(todo[id]);
}

exports.update_task = (req, res) => {
    let body = req.body;
    const id = req.params.id;
    
    if (id < 0 || id >= todo.lenght || !body)
        res.send('Error');

    todo[id] = body;
    console.log(todo);

    res.send(true);
}

exports.delete_task = (req, res) => {
    const id = req.params.id;
    if (id < 0 || id > todo.lenght)
        res.send('Error');

    todo.splice(id, 1);
    console.log(todo);
    res.send(true);
}

