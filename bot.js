//Bu bot ile, eğer discord bot kodlamaya yeni başladıysanız; az da olsa bir şeyler öğrenirsiniz.//
//Yapımcı: Croxy#9873//

const Discord = require('discord.js') //Bizim için en önemli olan, discord.js modülünü indiriyoruz.
const bot = new Discord.Client() //Bizim için 2. en önemli olan şey, discord botumuz.
const fs = require('fs') //Bize bir çok yerde yardımcı olacak fs modülünü indiriyoruz.
const chalk = require('chalk');
const snekfetch = require('snekfetch');
const jsonfile = require('jsonfile');
const ayarlar = require('./ayarlar.json') //Bir çok şeyde işimize yarayacak ayarlar dosyasını kayıt ediyoruz.
bot.commands = new Discord.Collection(); //Komudu kullanmamıza yarayan modülümsü birşey.

fs.readdir("./komutlar/", (err, files) => { //komutlar klasörünü aratıyoruz.

  if(err) console.log(err); //Eğer hata verirse, konsola gönderiyoruz.

  let jsfile = files.filter(f => f.split(".").pop() === "js") //Sonu .js ile biten dosyaları arıyoruz.
  if(jsfile.length <= 0){ //Eğer içinde hiç .js olan bir dosya yoksa, 
    console.log("Hiçbir komut bulunamadı!"); //Konsola komut bulunamadı diyoruz.
    return; //Ve botu durduruyoruz.
  } //Burda bitiriyoruz.

  jsfile.forEach((f, i) =>{ //Eğer buldu ise,
    let props = require(`./komutlar/${f}`); // let jsfile = files.filter(f => f.split(".").pop() === "js") (Bu kısımda, f yi, sonu .js ile biten dosyalara ayarladık)
    console.log(`${f} yüklendi!`); //komutismi.js yüklendi! Diye log gönderir.
    bot.commands.set(props.help.name, props); //Komutları çalıştırmamız için, komudu girmemiz gerek. Onu ayarladık.
  }); //1 kez kodu kapatıyoruz.

}); //2 kez kodu kapatıyoruz.

//Komutları çalıştıracağımız yer//

bot.on("message", async message => { //Mesaj yazıldığında
  if(message.author.bot) return; //Eğer mesajı yazan bot ise, hiç bir şey yapma
  if(message.channel.type === "dm") return; //Eğer mesajın yazıldığı yer, özel mesaj ise, hiç bir şey yapma
  const prefix = ayarlar.prefix //Prefixi ayarlar.json daki prefixden çekiyoruz.
  if (!message.content.startsWith === prefix) return; //Eğer komut prefix ile başlamıyorsa hiç bir şey yapma.
  let command = message.content.split(' ')[0].slice(prefix.length) //Komudu nasıl ayarladığımızı gösteriyoruz
  let args = message.content.split(' ').slice(1) //Argları oluşturuyoruz.
  let cmd //Komuda değer veriyoruz.

  if (bot.commands.has(command)) { //Eğer botun komutlarında command var ise,
    cmd = bot.commands.get(command) //cmd yi command olarak ayarla
  } //bitir

  if (cmd) { //eğer cmd ayarlı ise
    cmd.run(bot, message, args) //cmd yi bot,message,args olarak ayarla.
  } //bitir
}) //bitir

//BOTA OYNUYOR KISMI HAZIRLAMA//
//KONSOLA BOT AKTİF DİYE LOG GÖNDERME//
//BAŞLANGIÇ//

bot.on('ready', async () => { //Bot aktif olduğunda,
  const prefix = ayarlar.prefix //ayarlar.json dosyasındaki, "prefix": "prefixiniz", şeklinde bıraktığım yerdeki, prefixiniz olan yere prefixinizi girin.
  console.log(`BOT: ${bot.user.username} aktif! Croxy#9873 tarafindan bu bot yapilmistir.`) //Botumuzun aktif olduğunu konsola gönderiyoruz. Ve reklamımı yapıyorum :)
  console.log(`BOT: ${bot.guilds.size} sunucuya ve ${bot.users.size} kullanıcıya hizmet veriyorum.`) //Botumuzun hizmet ettiği sunucu ve kullanıcı sayısını gönderiyoruz.
  bot.user.setActivity(`${prefix}yardım | ${prefix}avatar | ${bot.guilds.size} sunucu`) //Bot için önemli komutları tanıtıyoruz ve, kaç sunucuda olduğunu yazıyoruz.
}); //Komudu bitiriyoruz.

bot.login(ayarlar.token) //ayarlar.json daki, "token": "tokeniniz" olan yerdeki, tokeniniz olan yere botunuzun tokenini yapıştıracaksınız.

