const Discord = require("discord.js");
const moment = require("moment");
require("moment-duration-format");

module.exports.run = async (bot, message, args) => {
  console.log("t!istatistik komutu " + message.author.username + '#' + message.author.discriminator + " tarafından kullanıldı.")

   const duration = moment.duration(bot.uptime).format(" D [gün], H [saat], m [dakika], s [saniye]");
   const istatistikler = new Discord.RichEmbed()
  .setColor('RANDOM')
  .setFooter('Sohbet ve Eğlence', bot.user.avatarURL)
  .addField("» Botun Sahibi", "<@488256802358558720> | Croxy#2195")
  .addField("» Bellek kullanımı", (process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2) + 'MB' + " / 32 GB", true)  
  .addField("» Çalışma süresi", duration)
  .addField("» Kullanıcılar", bot.guilds.reduce((a, b) => a + b.memberCount, 0).toLocaleString(), true)
  .addField("» Sunucular", bot.guilds.size.toLocaleString(), true)
  .addField("» Kanallar", bot.channels.size.toLocaleString(), true)
  .addField("» Discord.JS sürüm", "v"+Discord.version, true)
  .addField(`» Node.JS sürüm`, `${process.version}`, true)
  .addField("» Ping", bot.ping+" ms", true)
  .addField("**❯ Bot Davet**", " [Davet Et](https://discordapp.com/oauth2/authorize?client_id=471373119613960192&scope=bot&permissions=2146958591)", )
  .addField("**❯ Destek Sunucusu**", " [Sunucumuza Katıl](https://discord.gg/WT8c7xu)", )
  return message.channel.send(istatistikler);
  };

module.exports.help = {
  name: "istatistik"
}
