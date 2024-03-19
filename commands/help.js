const { EmbedBuilder, ActionRowBuilder, ButtonBuilder } = require('discord.js');
const { ButtonStyle } = require('discord.js');
const db = require("../mongodb");
module.exports = {
  name: 'help',
  aliases: ['hlp', 'h'],
  description: 'Shows a list of available commands',
  execute(message, args) {
    const botUser = message.client.user;
    const botPing = Date.now() - message.createdTimestamp;
    const serverCount = message.client.guilds.cache.size;
    const embed = new EmbedBuilder()
      .setColor('#2b71ec')
      .setAuthor({
        name: 'Tôi ở đây để trợ giúp!',
        iconURL: 'https://cdn.discordapp.com/attachments/1175487983915376662/1175667506791325706/communication.png?ex=656c10b0&is=65599bb0&hm=e378f1b355a2401bcab504b08a0766001d6b7c090c91ce0a7a7a87c868feb955&', 
        url: 'https://discord.gg/FUEHs7RCqz'
    })
     
      .setDescription(`__**STATS :**__\n\n> **📊 Bot in servers:** ${serverCount}\n> **🟢 Bot Ping:** ${botPing}ms\n> **👑 Made By [Trinho](https://www.youtube.com/channel/UC-xfqwctJQP3BDI060i15-w)**\n\n__**COMMANDS :**__ `)
      .addFields(
        // Basic commands category
        {
          name: '▶️  Basic',
          value: '`avatar`, `owner`, `support`, `invite`, `userinfo`',
          inline: true,
        },
        // Music commands category
        {
          name: '▶️  âm nhạc',
          value: '`play`, `stop`, `history`,`volume`,`pause`,`resume`,`247`',
          inline: true,
        },
        //fun category
        {
          name: '▶️  vui vẽ',
          value: ' `ascii`, `joke`, `meme`, `roll`, `animecommands`',
          inline: true,
        },
        //image category
        {
          name: '▶️  hình ảnh',
          value: '`cat`, `dog`, `panda`',
          inline: true,
        },
        //anime category
        {
          name: '▶️  trẻ con',
          value: '`hug`, `slap`, `pat`, `kiss`, `blush`,`bonk`,`bored`,`bully`,`cry`,`cuddle`,`dance`,`sad`,`stare`,`yes`,`wink`,`wave`,`thinking`,`scream`,`nervous`,`highfive`',
          inline: true,
        },
          
        // Utility commands category
        {
          name: '▶️  dành cho người cấp cao',
          value: '`kick`, `ban`, `serverinfo`, `clear`, `uptime``thaydoiprefix`',
          inline: true,
        }
      )
      .setThumbnail(botUser.avatarURL({ dynamic: true, format: 'png', size: 1024 }))
      .setImage(`https://imgt.taimienphi.vn/cf/Images/np/2022/10/12/tai-anh-dong-dep-3.gif`);

    const button1 = new ButtonBuilder()
      .setLabel('YouTube')
      .setURL('https://www.youtube.com/channel/UC-xfqwctJQP3BDI060i15-w')
      .setStyle(ButtonStyle.Link);

    const button2 = new ButtonBuilder()
      .setLabel('Discord')
      .setURL('https://discord.gg/Wx5zsTBU')
      .setStyle(ButtonStyle.Link);

    const button3 = new ButtonBuilder()
      .setLabel('FB')
      .setURL('https://www.facebook.com/trinhohades')
      .setStyle(ButtonStyle.Link);
      
    const row = new ActionRowBuilder()
      .addComponents(button1, button2, button3);
    
    message.reply({ embeds: [embed], components: [row] });
  },
};
