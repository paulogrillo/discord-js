const Discord = require("discord.js");
const client = new Discord.Client();
const config = require("./config.json");
const bot = new Discord.Client();

bot.on("guildMemberAdd", member => {
    member.send("Welcome to the server!");
    });
    
    bot.login("TOKEN_HERE");

client.on("ready", () => {
    console.log(`Bot foi iniciado, com ${client.users.size} usuários, em ${client.channels.size} canais, em ${client.guilds.size} servidores.`);
    client.user.setGame(`Eu estou em ${client.guilds.size} servidores`);
});

client.on("guildCreate", guild => {
    console.log(`O bot entrou no servidor: ${guild.name} (id: ${guild.id}). População: ${guild.memberCount} membros!`);
    client.user.setActivity(`Estou em ${client.guilds.size} servidores`);
});

client.on("guildDelete", guild => {
    console.log(`O Bot foi removido do servidor: ${guild.name} (id: ${guild.id})`);
    client.user.setActivity(`Serving ${client.guilds.size} servers `);

});

client.on("message", async message => {

});

client.login(config.token);