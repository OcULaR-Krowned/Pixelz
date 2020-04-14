module.exports = function help(msg, Discord, client, config) {
    embed = new Discord.MessageEmbed()
  .setAuthor("HELP REQUESTED", client.user.avatarURL())
  .setColor(0x00fff7)
  .setThumbnail(client.user.avatarURL())
  .setTimestamp()
  .addField('‌‌ ',
  '**' + 'HELP SENT :white_check_mark:' + '**' + `\n` + 'Help has been sent to: ' + msg.author.tag)
  .setFooter("Sent by: " + client.user.tag, client.user.avatarURL());

  
  msg.channel.send({embed});




  //GENERAL COMMANDS
  embed = new Discord.MessageEmbed()
  .setAuthor("GENERAL COMMANDS", client.user.avatarURL())
  .setDescription('These are all of the general commands for Pixelz.')
  .setColor(0xff0000)
  .setThumbnail(client.user.avatarURL())
  .setTimestamp()

  
  .addField('‌‌⠀',
  '**' + config.prefix + 'help' + '**' + `\n` + 'Pulls up this general help menu.')

  .setFooter("Sent by: " + client.user.tag, client.user.avatarURL());

  
  msg.author.send({embed});





  //GAME COMMANDS
  embed = new Discord.MessageEmbed()
  .setAuthor("GAME COMMANDS", client.user.avatarURL())
  .setDescription('These are all of the game commands for Pixelz.')
  .setColor(0xf7ff00)
  .setThumbnail(client.user.avatarURL())
  .setTimestamp()

  .addField('‌‌⠀',
  '**' + 'NONE' + '**' + `\n` + 'There is no game commands as of right now.')

  .setFooter("Sent by: " + client.user.tag, client.user.avatarURL());

  
  msg.author.send({embed});




    //INFO COMMANDS
    embed = new Discord.MessageEmbed()
    .setAuthor("INFO COMMANDS", client.user.avatarURL())
    .setDescription('These are all of the info commands for Pixelz.')
    .setColor(0x0cff00)
    .setThumbnail(client.user.avatarURL())
    .setTimestamp()
  
    .addField('‌‌⠀',
    '**' + config.prefix + 'info [@User]' + '**' + `\n` + 'Gets info on a specified user.')
    .addField('‌‌⠀',
    '**' + config.prefix + 'ping' + '**' + `\n` + 'Gets the ping of Pixelz to discord in milliseconds.')
    .addField('‌‌⠀',
    '**' + config.prefix + 'status' + '**' + `\n` + 'This command gives you the technical details of Pixelz.')
    .setFooter("Sent by: " + client.user.tag, client.user.avatarURL());
  
    
    msg.author.send({embed});
}