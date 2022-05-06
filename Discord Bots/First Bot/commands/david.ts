import { Message, MessageAttachment, MessageEmbed, User } from "discord.js";
import { ICommand } from "wokcommands";

export default {
    category: 'Testing',
    description: 'Replies with commands for Practice bot',
    
    slash: 'both',
    testOnly: true,
    
    callback: ({message, interaction}) => {
        var picture;
        var num;
        var random = 3;
        var pictures = ["david1.JPG","david2.JPG","david3.JPG"];
        if(message){
            num = Math.floor(Math.random() * (random));
            picture = pictures[num];
            const embed = new MessageEmbed().setImage('attachment://' + picture);
            message.reply({ embeds: [embed], files: ['./david/' + picture] });
        }
        if(interaction){
            num = Math.floor(Math.random() * (random));
            picture = pictures[num];
            const embed = new MessageEmbed().setImage('attachment://' + picture);
            interaction.reply({ embeds: [embed], files: ['./david/' + picture] });
        }
        
    },
} as ICommand