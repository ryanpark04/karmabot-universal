const Discord = require('discord.js');

module.exports = {
    name: 'about',
    description: 'get information about this bot',
    execute(message) {
        const exampleEmbed = new Discord.MessageEmbed()
        .setDescription('Developed by \*\*ryab#2058\*\*')
        .setFooter('Made with discord.js', 'https://i.imgur.com/wSTFkRM.png');
        message.channel.send(exampleEmbed);
    }
}