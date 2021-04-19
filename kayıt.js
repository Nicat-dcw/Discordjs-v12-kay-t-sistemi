
const Discord = require('discord.js')
const Database = require('plasma-db')
const db = new Database('./kayıt.json')
exports.run = async(client, message, args) => {
var kontrol1 = await db.fetch(`kayitsistem_${message.guild.id}`) 
var kontrol2 = await db.fetch(`kayitsistemrol_${message.guild.id}`) 
var kontrol3 = await db.get(`kayitsistemikanal_${message.guild.id}`)
if(!kontrol3) return message.channel.send('Kayıt Kanalından Kayit Olmalisin!')
if(kontrol3 == null) return message.channel.send('')
if(message.channel.id !== kontrol3) return message.channel.send('Kayıt Kanalından Kayıt Olman Lazım :c')

if(!kontrol2) return message.channel.send('Kayit Rol Ayarlanmamis!')
if(kontrol3 == true) return;
let name = message.member
let sunucu = message.guild
let ad = args[0]
let yas = args[1]
if(!ad) return message.channel.send('Ismini Belirtmeden Seni Kayıt Edemem !')
if(!yas) return message.channel.send('Yaşını Belirtmeden Seni Kayıt Edemem !')
setTimeout(function(){
name.roles.add(db.fetch(`kayıtsistemirol_${message.guild.id}`))},2000)
 name.setNickname(`${ad} \ ${yas}`)
}
/*
exports.conf =  {
enabled: true,
permLevel: 4,
aliases: []
};*/
exports.help = {
name: "kayıt",
description: "",
usage: "",
aliases: [],
kategori: "mod"
}
