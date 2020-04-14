module.exports = function invite(msg, Discord, client, config) {
    embed = new Discord.MessageEmbed()
    .setTitle('CLICK ME')
    .setURL(config.invite)
    .setAuthor("INVITE REQUESTED", client.user.avatarURL())
    .setColor(0x00fff7)
    .setThumbnail(client.user.avatarURL())
    .setTimestamp()
    .addField('‌‌ ', ':partying_face: Yay you want me in your server! :partying_face: \nClick the blue text that says CLICK ME. ')
    .setFooter("Sent by: " + client.user.tag, client.user.avatarURL());
  
    
    msg.channel.send({embed});

}