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

 

   
    if (cmd === `${prefix}help`) {
        message.channel.send("https://pastebin.com/x44ySE3i");
    }
  
    
    
    
    if (cmd === `${prefix}test`) {
        message.channel.send("testápoló");
    }
    
  if (cmd === `${prefix}promo`) {
        message.channel.send("https://solo.to/berrygod");
    }
    

    
     if(cmd ===`${prefix}report`){
        // privát szűrése
    if(message.channel.type === 'dm') return message.reply("Itt nem tudod használni!");
    // felhasználó lekérése
    const report_usr = message.mentions.users.first();
    // csatorna id az 8020egyszerűség kedvéért
    const channel_id = "855167780851810325";
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
    
    
   if(cmd == `${prefix}Ping`) {
        message.channel.send(`A bot pingje a következő : **${bot.ws.ping}ms**`)
    }
    

   if(cmd === `${prefix}hack`){
  //felhasználó lékérése
  const hack_usr = message.mentions.users.first();
  //ha nincs felhasználó
if(!hack_usr){
  return message.reply('adj meg egy felhasználót, akit meg tudok hackelni!')
}
//felhasználó
let Member =
message.mentions.members.first() ||
message.guild.members.cache.get(args[0]) ||
message.member;

//embedek

 const embed_kezdes = new Discord.MessageEmbed().setDescription('A hack elkezdődik');
 consthacked = new Discord.MessageEmbed().setDescription('HACKED.')
 consthacked2 = new Discord.MessageEmbed().setDescription('HACKED..')
 consthacked3 = new Discord.MessageEmbed().setDescription('HACKED...')
  const10 = new Discord.MessageEmbed().setDescription('HACKED.\n\nA hack állapota: 10%');
 const20 = new Discord.MessageEmbed().setDescription('HACKED..\n\nA hack állapota: 20%');
const30 = new Discord.MessageEmbed().setDescription('HACKED...\n\nA hack állapota: 30%');
constserver = new Discord.MessageEmbed().setDescription('HACKED.\n`Server connections: 46%`\n\nA hack állapota: 34%');
constserver2 = new Discord.MessageEmbed().setDescription('HACKED..\n`Sever connections: 95%`\n\nA hack állapota: 39%');
constserver3 = new Discord.MessageEmbed().setDescription('HACKED...\n`Server connections: 100%`')
const40 = new Discord.MessageEmbed().setDescription('HACKED.\n`Server connections: 100%`\n\nA hack állapota: 40%');
const50 = new Discord.MessageEmbed().setDescription('HACKED..\n`Server connections: 100%`\n\nA hack állapota: 50%');
constfeldolgozas = new Discord.MessageEmbed() .setTitle("HACKED...\n`Server connections: 100%`\n**FELDOLGOZÁS:**") .setDescription('`Feldolgozás állapota: 37%`');
constfeldolgozas2 = new Discord.MessageEmbed() .setTitle("HACKED.\n`Server connections: 100%`\n**FELDOLGOZÁS:**") .setDescription('`Feldolgozás állapota: 74%`');
constfeldolgozas3 = new Discord.MessageEmbed() .setTitle("HACKED..\n`Registering to gay porn") .setDescription('`Regisztrálva`');
constfeldolgozas4 = new Discord.MessageEmbed() .setTitle(`HACKED...\nServer connections: 100%\n**Member username: ${hack_usr}**`);
const60 = new Discord.MessageEmbed().setDescription('HACKED.\n`Server connections: 100%`\n\nA hack állapota: 60%');
const70 = new Discord.MessageEmbed().setDescription('HACKED..\n`Server connections: 100%`\n\nA hack állapota: 70%');
constconnections = new Discord.MessageEmbed().setDescription("HACKED...\n`Server connections: 100%`\n`Feldolgozás állapota: 100%, kész!`\n`Check connections: 12%`\n\nA hack állapota: 72°%");
constconnections2 = new Discord.MessageEmbed().setDescription('HACKED.\n`Server connections: 100%`\n`Feldolgozás állapota: 100%, kész!`\n`Check connections: 39%`\n\nA hack állapota: 75%');
constconnections3 = new Discord.MessageEmbed().setDescription('HACKED..\n`Cracking roblox account`\n`Feldolgozás állapota: 100%, kész!`\n`Check connections: 51°%`\n\nA hack állapota: 78°%');
constconnections4 = new Discord.MessageEmbed().setDescription('HACKED...\n`Server connections: 100%`\n`Feldolgozás állapota: 100%, kész!`\n`Check connections: 86%`\n\nA hack állapota: 79%');
constconnections5 = new Discord.MessageEmbed().setDescription('HACKED.\n`Server connections: 100%`\n`Feldolgozás állapota: 100%, kész!`\n`Check connections: 100%`')
const80 = new Discord.MessageEmbed().setDescription('HACKED..\n`Server connections: 100%`\n`Feldolgozás állapota: 100%, kész!`\n`Check connections: 100%`\n\nA hack állapota: 80%');
const90 = new Discord.MessageEmbed().setDescription('HACKED...\n`Server connections: 100%`\n`Feldolgozás állapota: 100%, kész!`\n`Check connections: 100%`\n\nA hack állapota: 90%');
const100 = new Discord.MessageEmbed().setDescription('HACKED.\n`Server connections: 100%`\n`Feldolgozás állapota: 100%, kész!`\n`Check connections: 100%`\n\nA hack állapota: 100%!');
constkesz = new Discord.MessageEmbed().setDescription('HACKED:**\nA hackelés befejeződött! Az eredmény:**\n\n\n\nA hack állapota: 100%!');
consteredmeny = new Discord.MessageEmbed().setDescription(`HACKED:**\nA hackelés befejeződött! Az eredmény:**\n **USERNAME:** ${hack_usr}\n **TAG:** ${hack_usr.tag}\n **EMAIL-CÍM:** ${hack_usr}@gmail.com\n\n\n\nA hack állapota: 100%!`);
//üzenet küldése
message.channel.send({ embed: embed_kezdes }).then((msg) => {
    setTimeout(function () {
        msg.edit(consthacked);
        msg.edit(consthacked2);
        msg.edit(consthacked3);
        msg.edit(const10);
        msg.edit(const20);
        msg.edit(const30);
        msg.edit(constserver);
        msg.edit(constserver2);
        msg.edit(constserver3);
        msg.edit(const40);
        msg.edit(const50);
        msg.edit(constfeldolgozas);
        msg.edit(constfeldolgozas2);
        msg.edit(constfeldolgozas3);
        msg.edit(constfeldolgozas4);
        msg.edit(const60);
        msg.edit(const70);
        msg.edit(constconnections);
        msg.edit(constconnections2);
        msg.edit(constconnections3);
        msg.edit(constconnections4);
        msg.edit(constconnections5)
        msg.edit(const80);
        msg.edit(const90);
        msg.edit(const100);
        msg.edit(constkesz)
        msg.edit(consteredmeny);
    }, 5000)
})
}
    
    

})


bot.login(process.env.BOT_TOKEN);
