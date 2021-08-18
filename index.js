const config = require('./config.json')

const discord = require('discord.js');

const Client = new discord.Client();

Client.once('ready',() => {
    console.log(`Client is ready! Logged in as ${Client.user.username}`);
    Client.user.setActivity("Coming soon...", { type:"WATCHING" });
});

Client.login(config.Token);
