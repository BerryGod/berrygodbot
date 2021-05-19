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

    if(cmd === `${prefix}ban`) {
        if(message.guild.member(bot.user).hasPermission("ADMINISTRATOR")) {
        if (message.member.hasPermission("KICK_MEMBERS")) {
        let kickPerson = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
        if (kickPerson) {
        if (!kickPerson.hasPermission("KICK_MEMBERS")) {
        let bicon = bot.user.displayAvatarURL;
    
        let kickEmbed = new Discord.RichEmbed()
        .setTitle("-->>Ban<<--")
        .setDescription("Ban üzenet:")
        .setColor("#ff0000")
        .setThumbnail(bicon)
        .addField(`${kickPerson.user.username} bannolva lett!`, "ˇˇˇˇ")
        .addField("Kiosztotta:", `${message.member} ezt az embert: ${kickPerson.user.username}`)
        .setTimestamp(message.createdAt)
        .setFooter(`${name}`);
    
        message.guild.member(kickPerson.id).ban();
        message.channel.send(kickEmbed);
        console.log(`${message.author.id} bannolta: ${kickPerson}!`);
    
        } else message.channel.send(`A szerver adminjait nem tudod bannolni!`);
    
        } else message.channel.send(`Kérlek adj meg egy nevet! (pl: @cenzxd)`);
    
        } else message.channel.send(`Neked nincs jogod hogy bannolj!`);
    } else message.channel.send(`Hiányzik: administrator jog.`)
    
    if(cmd === `${prefix}kick`) {
        if(message.guild.member(bot.user).hasPermission("ADMINISTRATOR")) {
        if (message.member.hasPermission("KICK_MEMBERS")) {
        let kickPerson = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
        if (kickPerson) {
        if (!kickPerson.hasPermission("KICK_MEMBERS")) {
        let bicon = bot.user.displayAvatarURL;
    
        let kickEmbed = new Discord.RichEmbed()
        .setTitle("-Kick-")
        .setDescription("Kick üzenet:")
        .setColor("#ff0000")
        .setThumbnail(bicon)
        .addField(`${kickPerson.user.username} kickelve lett!`, "ˇˇˇˇ")
        .addField("Kiosztotta:", `${message.member} ezt az embert: ${kickPerson.user.username}`)
        .setTimestamp(message.createdAt)
        .setFooter(`${name}`);
    
        message.guild.member(kickPerson.id).kick();
        message.channel.send(kickEmbed);
        console.log(`${message.author.id} kickelte ${kickPerson}!`);
    
        } else message.channel.send(`A szerver adminjait nem tudod kickelni!`);
    
        } else message.channel.send(`Kérlek adj meg egy nevet! (pl: !  SubToBerryGod#2074 csak nem admint)`);
    
        } else message.channel.send(`Neked nincs jogod hogy kickelj!`);
    } else message.channel.send(`Hiányzik: administrator jog.`)
    
    }
    
        
    }

     if (cmd === `${prefix}mute`) {
        if(message.guild.member(bot.user).hasPermission("ADMINISTRATOR")) {
        let muterang = message.guild.roles.find(`name`, `muteolva`);
        let mute = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
        if(message.member.hasPermission("KICK_MEMBERS")) {
        if(mute) {
        if(!mute.hasPermission("KICK_MEMBERS")) {
        if(!mute.roles.has(muterang.id)) {
    
        message.channel.send(`<@${mute.id}> -nak/nek a nyelvére csomó lett kötve!`)
    
        mute.addRole(muterang.id);
    
        } else message.channel.send(`Ez az ember már némítva van!`)
        } else message.channel.send(`A szerver adminjait nem tudod némítani!`);
        } else message.channel.send(`Kérlek írj be egy nevet. (pl: @nemcenz)`);
        } else message.channel.send(`Nincs jogod hogy némíts!`);
    } else message.channel.send(`Hiányzik: administrator jog.`)
    }

    let nemitottrang = message.guild.roles.find(`name`, `muteolva`);
if(message.guild.member(bot.user).hasPermission("ADMINISTRATOR")) {
if(message.member.hasPermission("KICK_MEMBERS")) {

} else if(message.member.roles.has(nemitottrang.id)) {
    message.delete();
}
}

if (cmd === `${prefix}unmute`) {
    if(message.guild.member(bot.user).hasPermission("ADMINISTRATOR")) {
    let muterang = message.guild.roles.find(`name`, `muteolva`);
    let mute = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
    if(message.member.hasPermission("KICK_MEMBERS")) {
    if(mute) {
    if(mute.roles.has(muterang.id)) {

    message.channel.send(`${emoji.done} <@${mute.id}> -nak/nek kicsomózták a nyelvét!`)

    mute.removeRole(muterang.id);

    } else message.channel.send(`Ez az ember nincs némítva!`)
    } else message.channel.send(`Kérlek írj be egy nevet. (pl: @cenzike)`);
    } else message.channel.send(`Nincs jogod hogy felnémíts!`);
} else message.channel.send(`Hiányzik: administrator jog.`)
}

    if (cmd === `${prefix}unmute`) {
    if(message.guild.member(bot.user).hasPermission("ADMINISTRATOR")) {
    let muterang = message.guild.roles.find(`name`, `muteolva`);
    let mute = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
    if(message.member.hasPermission("KICK_MEMBERS")) {
    if(mute) {
    if(mute.roles.has(muterang.id)) {

    message.channel.send(`${emoji.done} <@${mute.id}> -nak/nek kicsomózták a nyelvét!`)

    mute.removeRole(muterang.id);

    } else message.channel.send(`Ez az ember nincs némítva!`)
    } else message.channel.send(`Kérlek írj be egy nevet. (pl: @cenzike)`);
    } else message.channel.send(`Nincs jogod hogy felnémíts!`);
} else message.channel.send(`Hiányzik: administrator jog.`)
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
