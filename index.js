const Discord = require("discord.js")
const botconfig = require("./botconfig.json");
const bot = new Discord.Client({ disableEveryone: true });

bot.on("ready", async() => {
    console.log('${bot.user.username} elindult!')

    let státuszok = [
        "Prefix: !",
        "Sub to BerryGod",
        "Extreme Gamers a legjobb szerver!",
        "Sub to BerryHUN",
        "This bot is so much fun"
    ]

    setInterval(function() {
        let status = státuszok[Math.floor(Math.random() * státuszok.length)]

        bot.user.setActivity(status, { type: "WATCHING" })
    }, 3000)
})

bot.on("message", async message => {
    let MessageArray = message.content.split(" ");
    let cmd = MessageArray[0];
    let args = MessageArray.slice(1);
    let prefix = botconfig.prefix;

   if(cmd === `${prefix}Levi_okos`){
      let TesztEmbed = new Discord.MessageEmbed()
      .setColor("RANDOM")
      .setAuthor(message.author.username)
      .setTitle("BerryGod")
      .addField("Nem")
      .setThumbnail(message.author.displayAvatarURL())
      .setImage(message.guild.iconURL())
      .setDescription("'''*Levi okos?**'''")
      .setFooter(`${botname} | ${message.createdAt}`)
      message.channel.send(TesztEmbed)
    }

  
  if(cmd === `${prefix}david_jelszava`){
      let TesztEmbed = new Discord.MessageEmbed()
      .setColor("RANDOM")
      .setAuthor(message.author.username)
      .setTitle("BerryBot")
      .addField("komolyan elhitted ")
      .setThumbnail(message.author.displayAvatarURL())
      .setImage(message.guild.iconURL())
      .setDescription("'''*Hülye vagy**'''")
      .setFooter(`${botname} | ${message.createdAt}`)
      message.channel.send(TesztEmbed)
    }


   if(cmd === `${prefix}David_buzi`){
      let TesztEmbed = new Discord.MessageEmbed()
      .setColor("RANDOM")
      .setAuthor(message.author.username)
      .setTitle("BerryBot")
      .addField(Nem de levi az ")
      .setThumbnail(message.author.displayAvatarURL())
      .setImage(message.guild.iconURL())
      .setDescription("'''*Nem**'''")
      .setFooter(`${botname} | ${message.createdAt}`)
      message.channel.send(TesztEmbed)
    }

    if(cmd === `levi`){
      let TesztEmbed = new Discord.MessageEmbed()
      .setColor("RANDOM")
      .setAuthor(message.author.username)
      .setTitle("BerryBot")
      .addField("Levi hülye ")
      .setThumbnail(message.author.displayAvatarURL())
      .setImage(message.guild.iconURL())
      .setDescription("'''*Tipp**'''")
      .setFooter(`${botname} | ${message.createdAt}`)
      message.channel.send(TesztEmbed)
    }

   

    

    if(cmd === `${prefix}help`){
      let TesztEmbed = new Discord.MessageEmbed()
      .setColor("RANDOM")
      .setAuthor(message.author.username)
      .setTitle("BerryBot")
      .addField("komolyan elhitted ")
      .setThumbnail(message.author.displayAvatarURL())
      .setImage(message.guild.iconURL())
      .setDescription("'''*Help**'''")
      .setFooter(`${botname} | ${message.createdAt}`)
      message.channel.send(TesztEmbed)
    }
    
    if (cmd === `Leviㅤlanc`) {
        message.channel.send("Leviㅤlanc");
    }

    
    
    
    if(cmd === `${prefix}test`){
      let TesztEmbed = new Discord.MessageEmbed()
      .setColor("RANDOM")
      .setAuthor(message.author.username)
      .setTitle("BerryBot")
      .addField("testápoló ")
      .setThumbnail(message.author.displayAvatarURL())
      .setImage(message.guild.iconURL())
      .setDescription("'''*Test**'''")
      .setFooter(`${botname} | ${message.createdAt}`)
      message.channel.send(TesztEmbed)
    }
    
   if(cmd === `${prefix}promo`){
      let TesztEmbed = new Discord.MessageEmbed()
      .setColor("RANDOM")
      .setAuthor(message.author.username)
      .setTitle("BerryBot")
      .addField("https://solo.to/berrygod ")
      .setThumbnail(message.author.displayAvatarURL())
      .setImage(message.guild.iconURL())
      .setDescription("'''*Promo**'''")
      .setFooter(`${botname} | ${message.createdAt}`)
      message.channel.send(TesztEmbed)
    }
    
     if (cmd === `${prefix}cigi`) {
        message.channel.send(`${message.author.username} cigi szünetet tart!`).then(async msg => {
            setTimeout(() => {
                msg.edit('🚬');
            }, 1500);
            setTimeout(() => {
                msg.edit('🚬 ☁ ');
            }, 1500);
            setTimeout(() => {
                msg.edit('🚬 ☁☁ ');
            }, 2000);
            setTimeout(() => {
                msg.edit('🚬 ☁☁☁ ');
            }, 2500);
            setTimeout(() => {
                msg.edit('🚬 ☁☁');
            }, 3000);
            setTimeout(() => {
                msg.edit('🚬 ☁');
            }, 3500);
            setTimeout(() => {
                msg.edit('🚬 ');
            }, 4000);
            setTimeout(() => {
                msg.edit(`${message.author.username} Hé figyu van még egy szál cigid `);
            }, 4500);
        });
    } 
    
    

})


bot.login(process.env.BOT_TOKEN);
