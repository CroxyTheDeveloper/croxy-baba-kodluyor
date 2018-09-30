const Discord = require('discord.js');
const request = require('request');

module.exports.run = async (bot, message, args) => {

request('https://api.eggsybot.xyz/espri', function (error, response, body) {
    if (error) return console.log('Hata:', error); // Hata olursa, konsola göndersin,
    else if (!error) { // Eğer hata yoksa;
        var info = JSON.parse(body); // info değişkeninin içerisine JSON'ı ayrıştırsın,
        message.channel.send(info.soz); // ve konsola çıktıyı versin.
}})};

module.exports.help = {
  name: 'espri'
};
