const EventEmitter = require('events');

class Server extends EventEmitter {
	constructor(client) {
		super();
		this.tasks = {};
		this.taskId = 1;
		client.on('command', (command, args) => {
			switch (command) {
				case 'help':
				case 'add':
				case 'ls':
				case 'remove':
					this[command](args);
					break;
				default:
					client.emit('response', 'Unknown Command');
					break;
			}
        });
        
		this.client = client;
	}

	help() {
		this.client.emit(
			'response',
			`The Available commands are: 
            ls
            add
            remove
            help`
		);
	}

	add(args) {
		this.tasks[this.taskId] = args;
        this.client.emit('response', `Created Task ${this.taskId}`);
        this.taskId++;
	}

	ls() {
		this.client.emit('response', this.taskString());
	}

	remove(args) {
        delete(this.tasks[args])
		this.client.emit('response', `Deleted Task ${args}`);
	}

    taskString () {
        return Object.keys(this.tasks).map(taskId => `${taskId}: ${this.tasks[taskId]}`).join('\n');
    }
	
}

module.exports = client => new Server(client);