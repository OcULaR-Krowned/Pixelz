function ping(msg, discord, client){
    embed = new discord.MessageEmbed()
    //TITLE
    .setAuthor("Ping")
    .setColor(0x00fff7)

    //INFO
    .addField(':ping_pong: You Pinged ' + client.user.username, 'The bot ponged with: **' + parseInt(client.ws.ping) + 'ms**', true)

    //FOOTER
    .setFooter("Sent by: " + client.user.username.toString(), client.user.avatarURL)
    .setTimestamp();
    msg.channel.send({embed});
}
module.exports = ping;