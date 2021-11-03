const Discord = require("discord.js")
const botconfig = require("./botconfig.json");
const bot = new Discord.Client({ disableEveryone: true });
const { MessageEmbed } = require('discord.js');

bot.on("ready", async() => {
    console.log('${bot.user.username} A kurva anyád BerryGod!')

    let státuszok = [
        "Prefix: !",
        "Sub to BerryGod",
    ]

    setInterval(function() {
        let status = státuszok[Math.floor(Math.random() * státuszok.length)]

        bot.user.setActivity(status, { type: "STREAMING" })
    }, 3000)
})

bot.on("message", async message => {
    let MessageArray = message.content.split(" ");
    let cmd = MessageArray[0];
    let args = MessageArray.slice(1);
    let prefix = botconfig.prefix;

    

    
     if(cmd ===`${prefix}report`){
        // privát szűrése
    if(message.channel.type === 'dm') return message.reply("You cant use it here!");
    // felhasználó lekérése
    const report_usr = message.mentions.users.first();
    // csatorna id az 8020egyszerűség kedvéért
    const channel_id = "855167780851810325";
    // 6 + 24 mivel prefix levágva = 30
    const indok = message.content.slice(30);
 
    // ha nincs felhasználó
    if(!report_usr){
        return message.reply('Nah tag someont!');
    }
    
    // ha nincs indok
    if(!indok){
        return message.reply("Reason?");
    }
 
    //embed
    const embed = new Discord.MessageEmbed()
    .setTitle('Report')
    .setDescription(`*${report_usr} jelentve lett!*\n **Indoka: ${indok}**\n *Bejelentő: ${message.author.username}*\n Szerverren?: ${message.guild.name}`)
    .setFooter(bot.user.username, bot.user.displayAvatarURL())
    .setTimestamp()
    .setColor("RANDOM")
    // majd küldés
        bot.channels.cache.get(channel_id).send(embed)
     
     }
    
   if(cmd === `${prefix}calc`){

    var plus = Math.floor(Number(args[0]) + Number(args[2]));
    if (isNaN(plus)) return message.channel.send("``Error: I need more number to eat``");

    var minus = Math.floor(args[0]) - (args[2]);
    if (isNaN(minus)) return message.channel.send("``Error: I need more number to eat``");

    var multiply = Math.floor(args[0]) * (args[2]);
    if (isNaN(multiply)) message.channel.send("``Error: I need more number to eat``");

    var divide = Math.floor(args[0]) / (args[2]);
    if (isNaN(divide)) return message.channel.send("``Error: I need more number to eat``");

    if (args[1] ==  "+") return message.channel.send(args[0] + " + " + args[2] + " = **" + plus + "**");
    if (args[1] ==  "-") return message.channel.send(args[0] + " - " + args[2] + " = **" + minus + "**");
    if (args[1] ==  "*") return message.channel.send(args[0] + " * " + args[2] + " = **" + multiply + "**");
    if (args[1] ==  "x") return message.channel.send(args[0] + " x " + args[2] + " = **" + multiply + "**");
    if (args[1] ==  "/") return message.channel.send(args[0] + " / " + args[2] + " = **" + divide + "**");

    else {
        message.channel.send("``Something went wrong``");
    } 
}
    
    if(cmd === `${prefix}serverinfo`){
    
        const { guild } = message
        const icon = message.guild.iconURL()
        const roles = message.guild.roles.cache.map(e => e.toString())
        const emojis = message.guild.emojis.cache.map(e =>  e.toString())
        const emojicount = message.guild.emojis.cache 
        const members = message.guild.members.cache
        const create = message.guild.createdAt.toLocaleDateString()
    
        const szerveriEmbed = new Discord.MessageEmbed()
        .setColor('RANDOM')
        .setTitle('Server Info')
        .setThumbnail(`${icon}`)
        .addField('Server owner:-', guild.owner)
        .addField('Server ID:-', guild.id)
        .addField('server létrehozása:-', create)
        .addField('Boosts:-', guild.premiumSubscriptionCount)
        .addField('Boost Level:-', guild.premiumTier)
        .addField('Emojis count:-', `${emojicount.size}\n${emojicount.filter(emoji => !emoji.animated).size}(Non Animated)\n${emojicount.filter(emoji => emoji.animated).size}(Animated)`)
        .addField('Emojis:-', `${emojis}`, true) 
        .addField('Server Stats:-', `${guild.channels.cache.filter(channel => channel.type == 'text').size}⌨️\n${guild.channels.cache.filter(channel => channel.type == 'voice').size}🔈\n${guild.channels.cache.filter(channel => channel.type == 'news').size}📢\n${guild.channels.cache.filter(channel => channel.type == 'category').size}📁`)
        .setFooter('Server Info', icon)
 
 
        
        message.channel.send(szerveriEmbed)
        
    }
    
    
   if(cmd === `${prefix}Ping`) {
        message.channel.send(`The bots ping : **${bot.ws.ping}ms**`)
    }
    
    
    if(cmd === `${prefix}help`) {
        const helpEmbed = new MessageEmbed()
	.setColor('#0099ff')
	.setTitle('Help')
	.setURL('https://discord.gg/BMnQxqwG8K')
	.setAuthor('GamerHarcos bot by BerryGod')
    	.setDescription('Commands: ')
    	.setThumbnail('https://www.auditassistant.com/wp-content/uploads/2020/06/Help-640x263-1.jpeg')
    	.addField('Hulp', 'kelp', true)
        .addField('xd', 'xud', true)
    	.setImage('https://i.imgur.com/AfFp7pu.png')
    	.setTimestamp()
    	.setFooter('Some footer text here', 'https://i.imgur.com/AfFp7pu.png');
    channel.send({ embeds: [helpEmbed] });
    }    


    
    

})


bot.login(process.env.BOT_TOKEN);
