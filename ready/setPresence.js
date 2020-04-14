module.exports = function setPresence(client, config){
    x = parseInt(client.uptime) / 1000;
    seconds = x % 60;
    x /= 60;
    minutes = x % 60;
    x /= 60;
    hours = x % 24;
    x /= 24;
    days = x;

    client.user.setPresence({ activity: { name: config.prefix + 'help || ' 
    + client.guilds.cache.size.toString() + ' servers || ' 
    + client.users.cache.size.toString() + ' users || uptime: ' 
    + parseInt(days) + 'D ' + parseInt(hours) + 'H ' + parseInt(minutes) + 'M ' + parseInt(seconds) + 'S' + ' || ' 
    + parseInt(client.ws.ping) + ' ping || shards: ' + client.shard.count.toString(), type: 0 } });
  }