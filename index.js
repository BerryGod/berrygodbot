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

    if (cmd === `${prefix}Levi_okos`) {
        message.channel.send("Nem");
    }

    if (cmd === `${prefix}Youtube`) {
        message.channel.send("https://www.youtube.com/channel/UCk0EmNgBAdXGBCeTlDKFkwQ and https://www.youtube.com/channel/UCDkTQQVFBvekjx2WtYAyMhw");
    }
    if (cmd === `David_jelszava`) {
        message.channel.send("Nem");
    }


    if (cmd === `${prefix}Dávid_buzi?`) {
        message.channel.send("Nem de viszont levi az");
    }

    if (cmd === `levi`) {
        message.channel.send("O.Levi hülye");
    }

    if (cmd === `help`) {
        message.channel.send("O.Levi hülye");
    }

    if (cmd === `David_jelszava`) {
        message.channel.send("Nem");
    }

    if (cmd === `${prefix}help`) {
        message.channel.send("Parancsok:-!Levi_okos, !Youtube, !David_jelszava, !David_buzi?, levi, help, !help, !promo");
    }
    if (cmd === `Leviㅤlanc`) {
        message.channel.send("Leviㅤlanc");
    }

    
    
    
    if (cmd === `${prefix}test`) {
        message.channel.send("testápoló");
    }
    
  if (cmd === `${prefix}promo`) {
        message.channel.send("https://solo.to/berrygod");
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
    
    client.on("guildMemberAdd", async member => {
  if (member.user.bot) return;
  let user = member.user
  let channelID = db.get(`joinChannel_${member.guild.id}`)
 if (channelID === null) return;
 let channel = member.guild.channels.cache.get(channelID)
 if (!channel) return;
  let joinMsg = db.get(`joinmsg_${member.guild.id}`)
  if (!joinMsg) return;
  let send = joinMsg
 .split("{member-mention}").join("<@" + user.id + ">")
 .split("{member-tag}").join(user.tag)
 .split("{member-username}").join(user.username)
 .split("{member-id}").join(user.id)
 .split("{member-created:duration}").join(moment(user.createdTimestamp).fromNow())
 .split("{member-created:date}").join(moment(user.createdTimestamp).format("YYYY/MM/DD"))
 .split("{server-name}").join(member.guild.name)
 .split("{server-memberCount}").join(member.guild.members.cache.size)
 channel.send(send)
})
client.on("guildMemberRemove", async member => {
 if (member.user.bot) return;
 let user = member.user
 let channelID = db.get(`leaveChannel_${member.guild.id}`)
 if (channelID === null) return;
 let channel = member.guild.channels.cache.get(channelID)
 if (!channel) return;
 let leaveMsg = db.get(`leavemsg_${member.guild.id}`)
 if (leaveMsg === null) return;
 let send = leaveMsg
 .split("{member-tag}").join(user.tag)
 .split("{member-username}").join(user.username)
 .split("{member-id}").join(user.id)
 .split("{member-created:duration}").join(moment(user.createdTimestamp).fromNow())
 .split("{member-created:date}").join(moment(user.createdTimestamp).format("YYYY/MM/DD"))
 .split("{server-name}").join(member.guild.name)
 .split("{server-memberCount}").join(member.guild.members.cache.size)
 channel.send(send)
})
    
    

})


bot.login(process.env.BOT_TOKEN);
