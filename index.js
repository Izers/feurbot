const Discord = require('discord.js')
const client = new Discord.Client()

client.on("ready", () => {
    client.user.setPresence({ activity: { name: 'FeurBot by Izers#0667' }, status: 'idle' })
    console.log("Quoi ?")
    console.log("feur ;)")
})

client.on('message', message => {
    mseg = message.content.toLowerCase()
    /*if(message.content.endsWith("quoi"))   feur(message);
    if(message.content.endsWith("quoi "))  feur(message);
    if(message.content.endsWith("quoi ?")) feur(message);
    if(message.content.endsWith("quoi ,")) feur(message);
    if(message.content.endsWith("quoi?"))  feur(message);
    if(message.content.endsWith("quoi."))  feur(message);*/
    quoi(message, "quoi")
    quoi(message, "koa")
    quoi(message, "koua")
    quoi(message, "quoa")
})

function quoi(message, quoi) {
    if(mseg.endsWith(quoi))  feur(message, quoi)
    if(mseg.substring(0, mseg.length - 1).endsWith(quoi))  feur(message)
    if(mseg.substring(0, mseg.length - 2).endsWith(quoi))  feur(message)
    if(mseg.substring(0, mseg.length - 3).endsWith(quoi))  feur(message)
    if(mseg.substring(0, mseg.length - 3).endsWith(quoi))  feur(message)
}
function feur(message) {
    let random = Math.floor(Math.random() * 8) + 1
    let d = message.createdAt
    let date = (d.getDate() + "/" + d.getMonth() + " " + d.getHours() + ":" + d.getMinutes())
    let feur
    if(random === 1) message.channel.send("feur")
    else if(random === 2) message.channel.send({files:["https://cdn.discordapp.com/attachments/686278435273703434/789655015404863508/2.mp4"]})
    else if(random === 3) message.channel.send({files:["https://cdn.discordapp.com/attachments/686278435273703434/789655035813298176/3.mp4"]})
    else if(random === 4) message.channel.send({files:["https://cdn.discordapp.com/attachments/686278435273703434/789655047716864031/4.mp4"]})
    else if(random === 5) message.channel.send({files:["https://cdn.discordapp.com/attachments/686278435273703434/789655075550658642/5.png"]})
    else if(random === 6) message.channel.send({files:["https://cdn.discordapp.com/attachments/686278435273703434/789655083141955614/6.mp4"]})
    else if(random === 7) message.channel.send({files:["https://cdn.discordapp.com/attachments/686278435273703434/789655098539507712/7.mp4"]})
    else if(random === 8) message.channel.send({files:["https://cdn.discordapp.com/attachments/686278435273703434/789655125786361886/8.mp4"]})
    console.log(message.channel.guild.name + " | " + message.channel.name + " | " + message.author.tag + " | " + date)
    return feur
}

client.login(process.env.TOKEN)