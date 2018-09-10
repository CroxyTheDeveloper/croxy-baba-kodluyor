//Yardım komudu ile, oyunculara komutları gösterebilirsiniz.//

const Discord = require('discord.js') //Bizim için en önemli olan, discord.js modülünü indiriyoruz.

module.exports.run = async (bot, message, args) => { //Kodlarımızı gireceğimiz yeri ayarlıyoruz.
	message.channel.send('Bekle biraz, komutları topluyorum.') //Mesaj gönderiyoruz biraz havalı gözüküyor :)
	const yardimEmbed = new Discord.RichEmbed() //Yazımızın daha havalı gözükmesi için bir EMBED oluşturuyoruz.
	.setColor('ORANGE') //Rengi turuncu olarak ayarlıyoruz.
	.addField('Botunuzun İsmi | Komutlar', 'e!yardım • Bütün komutları görüntülersiniz.\ne!avatar • Etiketlediğiniz kişinin yada kendinizin avatarını görüntülersiniz.\ne!konuştur • Botu konuşturursunuz.\ne!sil • 1-99 a kadar girdiğiniz değer kadar mesaj silersiniz.') //Bir field yani, bir alan ekliyoruz. Komutlarımızı gireceğimiz bir alan.
	message.channel.send(yardimEmbed)
}//Komudumuzu bitiriyoruz.

module.exports.help = { //Komudumuzu kullanmamıza yarayan yerleri giriyoruz.
	name: 'yardım' //Komudumuzun ismini giriyoruz.
}//Ve komudumuzu bitiriyoruz.
