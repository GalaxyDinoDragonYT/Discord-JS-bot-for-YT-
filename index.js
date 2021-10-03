const token = process.env['TOKEN'] 
const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => res.send('Booted'));

app.listen(port, () => console.log(`Bot listening at http://localhost:${port}`));

const Discord = require("discord.js"); 
const client = new Discord.Client({
  disableEveryone: true 
});

const dbs = require("discord-buttons");

dbs(client);

client.commands = new Discord.Collection();
client.aliases = new Discord.Collection();

["command", "events"].forEach(handler => {
  require(`./handlers/${handler}`)(client);
});

client.login(token);