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
        var random = 20;
        var pictures = ["zelda1.jpg","zelda2.JPG","zelda3.JPG","zelda4.JPG",
                        "zelda5.JPG","zelda6.JPG","zelda7.JPG","zelda8.JPG",
                        "zelda9.JPG","zelda10.JPG","zelda11.JPG","zelda12.jpg",
                        "zelda13.JPG","zelda14.JPG","zelda15.JPG","zelda16.JPG",
                        "zelda17.jpg","zelda18.JPG","zelda19.JPG","zelda20.JPG"];
        if(message){
            num = Math.floor(Math.random() * (random));
            picture = pictures[num];
            const embed = new MessageEmbed().setImage('attachment://' + picture);
            message.reply({ embeds: [embed], files: ['./zelda/' + picture] });
        }
        if(interaction){
            num = Math.floor(Math.random() * (random));
            picture = pictures[num];
            const embed = new MessageEmbed().setImage('attachment://' + picture);
            interaction.reply({ embeds: [embed], files: ['./zelda/' + picture] });
        }
        
    },
} as ICommand