function info(msg, discord, client, config){
    var embed;
        if(msg.mentions.users.size == 1){
            var roles = [];
            var member = msg.guild.member(msg.mentions.users.first());
            member.roles.cache.forEach((item) => { roles.push(item); });
            embed = new discord.MessageEmbed()
            //TITLE
            .setAuthor("Info On Mentioned Member")
            .setColor(0x00fff7)
        
            //INFO
            .addField('Member Name:', member.displayName)
            .addField('Highest Role:', member.roles.highest.toString())
            .addField('Member ID:', member.id.toString())
            .addField('Join Date:', member.joinedAt.toLocaleString())
            .addField('Status:', member.presence.status.toString())
            .addField('Roles:', roles.toString())
        
            //FOOTER
            .setFooter("Sent by: " + client.user.username.toString(), client.user.avatarURL)
            .setThumbnail(client.user.avatarURL)
            .setTimestamp();
            msg.channel.send({embed});
        }else{
            embed = new discord.MessageEmbed()
            //TITLE
            .setAuthor("Error:")
            .setColor('#FF0006')
        
            //INFO
            .addField(':notepad_spiral: Error Details:', 'You either didnt specify any \nusers or specified too many \nusers please only specify 1 \nmember next time!')
            .addField(':pencil: Format:', config.prefix + 'info [mentioned user]')
        
            //FOOTER
            .setFooter("Sent by: " + client.user.username.toString(), client.user.avatarURL)
            .setTimestamp();
            msg.channel.send({embed});
        }
    }
module.exports = info;