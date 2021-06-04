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
    
    
    module.exports = (client) => {
    const channelId = "838185605329715253";
    const rulesChannel = "844285176154292225";
    client.on('guildMemberAdd', async(member) => {
      console.log(member);

      const message = BerryGod/BerryHUN üdvözöl <@${member.id}>. Érezd jól magad és tartsd be a szabályokat ${member.guild.channels.cache .get(rulesChannel).toString()} a szabályokhoz ezt a szobát csekkold le!;

      const channel = member.guild.channels.cache.get(channelId);
      channel.send(message);
    });
  };


LEAVE:

  module.exports = (client) => {
    const channelId = "847171439051538472";
    client.on('guildMemberRemove', async(member) => {
      console.log(member);

      const message = Sajnos <@${member.id}> kilépett a szerverről, remélem még találkozunk👋!;

      const channel = member.guild.channels.cache.get(channelId);
      channel.send(message);
    });
  };
    

    
    
    
    
  
 
    
   
    
    

})


bot.login(process.env.BOT_TOKEN);
