require('dotenv').config();
const Discord = require('discord.js');
const client = new Discord.Client();
const token = process.env.TOKEN;

client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', message => {
    if (message.content === '!verify') {
        // Add your verification logic here
        message.reply('Please verify your BlossomSocial account.');
    }
});

client.login(token);
