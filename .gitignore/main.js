//------------------------------------//


const Discord = require('discord.js');
var bot = new Discord.Client();
var prefix = (":::")
bot.login('NTA3NTM5OTE4MTU5ODcyMDAw.DryNqQ.AKqFgoEjSTvIZeON7iYAyZQcwTE');


//------------------------------------//

bot.on('ready', () => {
    console.log("Démarage du bot [GOOD]");
});

bot.on('ready', () => {
    bot.user.setPresence({ game: { name: ':::help', type: 0} });
});

bot.on('guildMemberAdd', member => {
    bot.channels.get('491973006348779531').send(`Bienvenue sur le discord officiel de la Hantix ${member}`);
});

bot.on('guildMemberAdd', member => {
    var role = member.guild.roles.find('name', 'Membre');
    member.addRole(role)
})

//--------------------------------------//

bot.on('message', message => {
    if (message.content === prefix + "connectionplayer") {
        var ll = new Discord.RichEmbed()
            .addField("Nombres de joueur connectées : ", message.guild.memberCount)
            .setColor("0xFF8000")
        message.channel.send(ll)
}});

bot.on('message', message => {
    if (message.content === prefix + "help") {
    var embed1 = new Discord.RichEmbed()
        .setTitle("Page d'aide du bot Habtix")
        .addField(":::connectionplayer", "pour voir combien de joueurs sont connectée")
        .addField(":::créateur", "pour voir qui ma créer :)")
        .addField(":::linkoff")
        .setColor("0xFF8000")
    message.channel.send(embed1)
    }

});


bot.on('message', message => {
    if (message.content === prefix + "linkoff") {
    var linkoff = new Discord.RichEmbed()
      .setTitle("Lien officiel de la Hantix")
      .addField("Voici le lien officiel a partagé a vos amis afin que la communautée s'agrandisse !", "( lien infini )")
      .addField("https://discord.gg/7bC6rZA", ".")
      .setColor("0xFF8000")
    message.channel.send(linkoff)
    }
});

bot.on('message', message => {
    if (message.content === prefix + "azertuip") {
        var ripoulet = new Discord.RichEmbed()
            .addField("Chaîne youtube de Azertuip", "https://www.youtube.com/channel/UCJBXUyLsEjOQ4ivpyE8eGyQ")
            .setColor("0xFD1205")
        message.channel.send(ripoulet)
}});

//--------------------------------------//


  
bot.on('message', message => {
    if (!message.guild) return;
    if (message.content.startsWith(':::ban')) {
        if (!message.member.hasPermission("KICK_MEMBERS")) return ("nop"); {
      const user = message.mentions.users.first();
      if (user) {
        const member = message.guild.member(user);
        if (member) {
          member.ban('Raison facultative à afficher dans les journaux d\'audit').then(() => {
            message.reply(`Successfully banned ${user.tag}`);
          }).catch(err => {
            message.reply('Je suis incapable de frapper le membre');
            console.error(err);
          });
        } else {
          message.reply('Cet utilisateur n\'est pas dans cette guilde!');
        }
      } else {
        message.reply('Vous n\'avez pas mentionné l\'utilisateur à qui donner un coup de pied!');
      }
    }}
  });

  bot.on('message', message => {
    if (!message.guild) return;
    if (message.content.startsWith(':::kick')) {
        if (!message.member.hasPermission("KICK_MEMBERS")) return ("nop"); {
      const user = message.mentions.users.first();
      if (user) {
        const member = message.guild.member(user);
        if (member) {
          member.kick('Raison facultative à afficher dans les journaux d\'audit').then(() => {
            message.reply(`Successfully kick ${user.tag}`);
          }).catch(err => {
            message.reply('Je suis incapable de frapper le membre');
            console.error(err);
          });
        } else {
          message.reply('Cet utilisateur n\'est pas dans cette guilde!');
        }
      } else {
        message.reply('Vous n\'avez pas mentionné l\'utilisateur à qui donner un coup de pied!');
      }
    }}
  });

//------------------------------------------//

