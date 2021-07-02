const Discord = require("discord.js")
const botconfig = require("./botconfig.json");
const bot = new Discord.Client({ disableEveryone: true });

bot.on("ready", async() => {
    console.log('${bot.user.username} A kurva anyád BerryGod!')

    let státuszok = [
        "Prefix: !",
        "Sub to BerryGod",
        "Extreme Gamers a legjobb szerver!",
        "Sub to BerryHUN",
        "This bot is so much fun"
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

    if (cmd === `${prefix}Levi_okos`) {
        message.channel.send("Nem");
    }

    if (cmd === `${prefix}Youtube`) {
        message.channel.send("https://www.youtube.com/channel/UCk0EmNgBAdXGBCeTlDKFkwQ and https://www.youtube.com/channel/UCDkTQQVFBvekjx2WtYAyMhw");
    }
  

  
    if (cmd === `levi`) {
        message.channel.send("O.Levi hülye");
    }

    if (cmd === `help`) {
        message.channel.send("O.Levi hülye");
    }

   
    if (cmd === `${prefix}help`) {
        message.channel.send("Parancsok:-!Levi_okos, !Youtube, !David_jelszava, !David_buzi?, levi, help, !help, !promo");
    }
  
    
    
    
    if (cmd === `${prefix}test`) {
        message.channel.send("testápoló");
    }
    
  if (cmd === `${prefix}promo`) {
        message.channel.send("https://solo.to/berrygod");
    }
    
     if (cmd === `${prefix}cigi`) {
        message.channel.send(`${message.author.username} Adj egy szál cigit!`).then(asyncmsg => {
            setTimeout(() => {
                msg.edit('Köszi!');
            }, 1000);
            setTimeout(() => {
                msg.edit('🚬');
            }, 1800);
            setTimeout(() => {
                msg.edit('🚬 ☁ ');
            }, 2500);
            setTimeout(() => {
                msg.edit('🚬 ☁☁ ');
            }, 3000);
            setTimeout(() => {
                msg.edit('🚬 ☁☁☁ ');
            }, 3500);
            setTimeout(() => {
                msg.edit('🚬 ☁☁');
            }, 4000);
            setTimeout(() => {
                msg.edit('🚬 ☁');
            }, 4500);
            setTimeout(() => {
                msg.edit('🚬 ');
            }, 5000);
            setTimeout(() => {
                msg.edit(`${message.author.username} Hé figyu van még egy szál cigid `);
            }, 5500);
        });
    } 
    
     if(cmd ==="report"){
        // privát szűrése
    if(message.channel.type === 'dm') return message.reply("Itt nem tudod használni!");
    // felhasználó lekérése
    const report_usr = message.mentions.users.first();
    // csatorna id az 8020egyszerűség kedvéért
    const channel_id = "845716352052232252";
    // 6 + 24 mivel prefix levágva = 30
    const indok = message.content.slice(30);
 
    // ha nincs felhasználó
    if(!report_usr){
        return message.reply('Nem adtad meg a felhasználót!');
    }
    
    // ha nincs indok
    if(!indok){
        return message.reply("Nem adtál meg indokot!");
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
    if (isNaN(plus)) return message.channel.send("``Hiba: Kérlek adj meg számokat!``");

    var minus = Math.floor(args[0]) - (args[2]);
    if (isNaN(minus)) return message.channel.send("``Hiba: Kérlek adj meg számokat!``");

    var multiply = Math.floor(args[0]) * (args[2]);
    if (isNaN(multiply)) message.channel.send("``Hiba: Kérlek adj meg számokat!``");

    var divide = Math.floor(args[0]) / (args[2]);
    if (isNaN(divide)) return message.channel.send("``Hiba: Kérlek adj meg számokat!``");

    if (args[1] ==  "+") return message.channel.send(args[0] + " + " + args[2] + " = **" + plus + "**");
    if (args[1] ==  "-") return message.channel.send(args[0] + " - " + args[2] + " = **" + minus + "**");
    if (args[1] ==  "*") return message.channel.send(args[0] + " * " + args[2] + " = **" + multiply + "**");
    if (args[1] ==  "x") return message.channel.send(args[0] + " x " + args[2] + " = **" + multiply + "**");
    if (args[1] ==  "/") return message.channel.send(args[0] + " / " + args[2] + " = **" + divide + "**");

    else {
        message.channel.send("``valami hiba van!``");
    } 
}
    
    if(cmd === `${prefix}szerverinfo`){
    
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
        .addField('Szerver Tulaj:-', guild.owner)
        .addField('Szerver ID:-', guild.id)
        .addField('Sezrver létrehozása:-', create)
        .addField('Boost számláló:-', guild.premiumSubscriptionCount)
        .addField('Boost Level:-', guild.premiumTier)
        .addField('Emoji számláló:-', `${emojicount.size}\n${emojicount.filter(emoji => !emoji.animated).size}(Non Animated)\n${emojicount.filter(emoji => emoji.animated).size}(Animated)`)
        .addField('Emojis:-', `${emojis}`, true) 
        .addField('Server Stats:-', `${guild.channels.cache.filter(channel => channel.type == 'text').size}⌨️\n${guild.channels.cache.filter(channel => channel.type == 'voice').size}🔈\n${guild.channels.cache.filter(channel => channel.type == 'news').size}📢\n${guild.channels.cache.filter(channel => channel.type == 'category').size}📁`)
        .setFooter('Server Info', icon)
 
 
        
        message.channel.send(szerveriEmbed)
        
    }
    
    

    
    if(cmd === `${prefix}Clear`){
    if(message.member.hasPermission("MANAGE_MESSAGES")){
        if(message.guild.member(bot.user).hasPermission("ADMINISTRATOR")){

            if(args[0] && isNaN(args[0]) && args [0] <=100 || 0 < args[0] && args[0] < 101){

                message.channel.send(Törölve lett: ${Math.round(args[0])} üzenet!)
                message.channel.bulkDelete(Math.round(args[0]))
    
            } else {
                message.reply(Használat: ${prefix}Töröl <1-100>)
            }
        } else message.reply("A BurnyBOT-nak adminnaknak kell lennie a szervren, hogy működjön ez a parancs!")
    
    } else message.reply("Ehhez a parancshoz nincs jogod")
}
   

    
    
  
 
    
   
    
    

})


bot.login(process.env.BOT_TOKEN);
