exports.run = async (client, message, args)  => {
    if(message.guild.id != "477240886812475403") return
    if(!message.member.roles.has("477241508110794764")) {
  message.channel.send('⚠ **|** Tem certeza?\nCaso você não tiver um motivo para usar este comando pode ser punido.\nSe sim, está ciente do que está fazendo reaja com :white_check_mark:').then(newMsg => {
  
  
    newMsg.react('✅');
    const collector = newMsg.createReactionCollector((r, u) => (r.emoji.name === '✅') && u.id == message.author.id);
       collector.on('collect', r => {
          switch(r.emoji.name) {
              case '✅':
              const channel = message.guild.channels.find('name', 'rooti-modlogs');
              channel.send("👮 **|** <@&477243791846408214> Verifiquem se algo de errado está acontecendo no servidor.\n"+message.author.tag+" Caso este membro não ter um motivo para a menção puna-o, mas lembre-se pode haver uma confusão alguém pode ter feito algo já ou o causador do rebuliço tiver abandonado o servidor.")
              r.users.filter(u => r.remove(u.id !== client.user.id));
                      
            break
          }});
  
  
        })
    } else {
      const channel2 = message.guild.channels.find('name', 'rooti-modlogs');
      channel2.send("👮 **|** <@&477243791846408214> Verifiquem se algo de errado está acontecendo no servidor.\n"+message.author.tag+" Caso este membro não ter um motivo para a menção puna-o, mas lembre-se pode haver uma confusão alguém pode ter feito algo já ou o causador do rebuliço tiver abandonado o servidor.")
  
  
  };
  };