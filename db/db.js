const mongoose = require('mongoose');
const chalk = require('chalk');

var dbURL;
const connect = (database) => {
    dbURL = database;
    mongoose.connect(dbURL)
    return mongoose;
}

mongoose.connection.on('connected', () =>{
    console.log();
    console.log(chalk.green('Mongoose connected')+chalk.grey(` to ${dbURL}`));
});

mongoose.connection.on('error', (err) =>{
    console.log();
    console.error(chalk.red('Mongoose could not connect to database:')+chalk.yellow(`${dbURL}`));
    console.error(chalk.red(err));
});

mongoose.connection.on(`disconnected`, () =>{
    console.log();
    console.warn(chalk.yellow('Mongoose disconnected')+chalk.grey(` from ${dbURL}`));
});

module.exports=connect;