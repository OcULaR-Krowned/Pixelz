const Discord = require('discord.js');
const client = new Discord.Client();
const chalk = require('chalk');
const db = require('rethinkdb');
const config = require('./config.json');
const os = require('os-utils');


//GAME COMMANDS


//GENERAL COMMANDS
const help = require('./commands/general/help.js');
const invite = require('./commands/general/invite.js');


//INFO COMMANDS
const status = require('./commands/info/status.js');
const ping = require('./commands/info/ping.js');
const info = require('./commands/info/info.js');

//EVENTS
const setPresence = require('./ready/setPresence.js');


client.on('ready', () => {
    setInterval(() => {
        setPresence(client, config);
    }, 5000);
    console.log(chalk.grey('[' + chalk.green('LOGIN') + ']Logged in as: ' + chalk.green(`${client.user.tag}!`)));
    db.connect({ 
        host: 'localhost', 
        port: '28015', 
        db: 'Pixelz', 
        table: 'Users'}
    , function(err, conn) {
        global.conn = conn;
        console.log(chalk.grey('[' + chalk.cyan('DB') + ']Logged in to Database: ' + chalk.cyan(conn.db) + ' Address: ' + chalk.cyan(conn.host + ':' + conn.port)));
    });
});

client.on('message', msg => {
    const args = msg.content.slice(config.prefix.length).trim().split(/ +/g);
    const command = args.shift().toLowerCase();
  
    if(msg.author != client.user){
      if(!(msg.channel instanceof Discord.DMChannel)){
        switch(msg.content.toLocaleLowerCase().split(' ')[0]) {



            //GENERAL COMMANDS
            case config.prefix + 'help':
              help(msg, Discord, client, config);
            break;

            case config.prefix + 'invite':
              invite(msg, Discord, client, config);
            break;


            //INFO COMMANDS
            case config.prefix + 'info':
              info(msg, Discord, client, config);
            break;

            case config.prefix + 'ping':
              ping(msg, Discord, client);
            break;

            case config.prefix + 'status':
              status(msg, Discord, client, os);
            break;
      }
      } 
    }
  });

client.login(config.token);