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

    if (cmd === `${prefix}bkick`) {
        let kick_user = message.mentions.members.first();
        if (args[0] && kick_user) {

            if (args[1]) {

                let KickEmbed = new Discord.MessageEmbed()
                    .setTitle("KICK")
                    .setColor("RED")
                    .setDescription(`**Kickelte:** ${message.author.tag}\n**Kickelve lett:** ${kick_user.user.tag}\n**Kick indoka:** ${args.slice(1).join(" ")}`)

                message.channel.send(KickEmbed);

                kick_user.kick(args.slice(1).join(" "));

            } else {
                let parancsEmbed = new Discord.MessageEmbed()
                    .setTitle("Parancs használata:")
                    .addField(`\`${prefix}kick <@név> [indok]\``, "˘˘˘")
                    .setColor("BLUE")
                    .setDescription("HIBA: Kérlek adj meg egy indokot!!")

                message.channel.send(parancsEmbed);
            }

        } else {
            let parancsEmbed = new Discord.MessageEmbed()
                .setTitle("Parancs használata:")
                .addField(`\`${prefix}kick <@név> [indok]\``, "˘˘˘")
                .setColor("BLUE")
                .setDescription("HIBA: Kérlek említs meg egy embert!")

            message.channel.send(parancsEmbed);

        }
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
                msg.edit(`${message.author.username} A cigi finom `);
            }, 4500);
        });
    }
    
 

        
    
    


})


bot.login(process.env.BOT_TOKEN);
