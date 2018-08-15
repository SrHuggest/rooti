exports.run = (client, message, args)  => {
    const Discord = require('discord.js');
    const ytdl = require("ytdl-core");
    ytSearch = require('yt-search');

    var video;
    ytSearch(args.join(" "), async function (err, r) {
       if ( err ) throw err
  
       const videos = r.videos
    video = videos[0]
       console.log(video)
    let musica = "www.youtube.com" + video.url
    let info2 = await ytdl.getInfo(musica)
       let voiceChannel = message.member.voiceChannel

    
       voiceChannel.join()
  
     .then(connection => {
        const stream = ytdl(musica, { filter : 'audioonly' });
        const info = videos[ 0 ]
      
        const dispatcher = connection.playStream(stream)
  let embed = new Discord.RichEmbed()
        .setAuthor(info2.author.name, info2.author.avatar)
        .setImage(info2.thumbnail_url)
        .setDescription(` 💿 | Tocando agora: [${info.title}](https://www.youtube.com${info.url}) `+'`'+videos[ 0 ].duration.timestamp+'`')
        .setFooter(`🎤 | Tocando em: ${message.member.voiceChannel.name}`)
        .setColor("#200be0")
        .setTimestamp()
        message.channel.send(embed)
     if(!voiceChannel) return voiceChannel.leave()
    
 
           

     
    });
  
})}
