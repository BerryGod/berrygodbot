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
    if(cmd === `${prefix}ban`){
    message.delete()

    if(!message.member.hasPermission(`BAN_MEMBERS`)) return message.reply(`Nincsen elegendő jogosultságod a parancs használatához!`);

    let mention = message.mentions.members.first();
    let indok = args.slice(1).join(" ");


    if(!mention) {
            let parancsEmbed = new Discord.MessageEmbed()
            .setTitle("Parancs használata:")
            .addField(`\`${prefix}ban <@név> [indok]\``, "˘˘˘")
            .setColor("BLUE")
            .setDescription("HIBA: Kérlek add meg a felhasználót!")
      
            message.channel.send(parancsEmbed);
        }
        if (!indok) {
            let parancsEmbed = new Discord.MessageEmbed()
            .setTitle("Parancs használata:")
            .addField(`\`${prefix}bam <@név> [indok]\``, "˘˘˘")
            .setColor("BLUE")
            .setDescription("HIBA: Kérlek add meg az indokot!")
      
            message.channel.send(parancsEmbed);
        } else {
            let BanEmbed = new Discord.MessageEmbed()
            .setTitle("BAN")
            .setColor("RED")
            .setDescription(`**Banolta:** ${message.author.tag}\n**Banolva lett:** ${ban_user.user.tag}\n**Ban indoka:** ${args.slice(1).join(" ")}`)
  
                message.channel.send(BanEmbed);

                message.guild.members.ban(banMember, {reason: `${banreason}`})

                mention.send(`Ki lettél tiltva a(z) **${message.guild.name}** szerverről **${message.author.tag}** által!\nIndokolás: **${banreason}**`)
        }
    }
  
 
    
   
    
    

})


bot.login(process.env.BOT_TOKEN);
