const Discord = require('discord.js')
const Database = require('plasma-db')
const db = new Database('./kayıt.json')
exports.run = async(client,message,args) => {
let nicat = args[0]
if(!nicat) return message.channel.send('Lütfen Bir Argüman Belirtiniz! `aç`,`kanal`,`kapat`,`yetkili-rol`')
if(nicat !== 'aç' && nicat !== 'kanal' && nicat !== 'kapat' && !== 'yetkili-rol') return message.channel.send('Yanlış Argüman!')
if(nicat == 'aç'){
db.set(`kayitsistem_${message.guild.id}`,'açık') return message.channel.send('`Kayıt` Sistemi Bu Sunucu Için Açıldı!')
}
if(nicat == 'kapat'){
db.set(`kayitsistem_${message.guild.id}`,'kapalı') return message.channel.send('`Kayıt` Sistemi Bu Sunucu Için Kapatıldı!')
}
if(nicat == 'yetkili-rol'){
let yrol = message.mentions.roles.first()
if(!yrol) return message.channel.send('Bir Rol Belirtmedin :c')
db.set(`kayitsistemrol_${message.guild.id}`,yrol.id) return message.channel.send(`Rol <@&${yrol.id}> Olarak Kaydedildi!`)
}
if(nicat == 'kanal'){
let kkanal = message.mentions.channels.first()
if(!kkanal) return message.channel.send('Bir Kanal Etiketle Kardeşim :x')
db.set(`kayitsistemikanal_${message.guild.id}`,kkanal.id) return message.channel.send('Kanal Kaydedildi!')
}
}
exports.conf = {
enabled: true,
aliases: [],
permLevel: 4
}
exports.help = {
name: 'kayıt-ayar',
description: 'anticodes',
usage: 'anticode'
}
