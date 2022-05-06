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
        var random = 22;
        var pictures = ["alex1.JPG","alex2.PNG","alex3.JPG","alex4.JPG","alex5.JPG",
                        "alex6.JPG","alex7.JPG","alex8.JPG","alex9.JPG","alex10.JPG",
                        "alex11.JPG","alex12.JPG","alex13.JPG","alex14.JPG","alex15.JPG",
                        "alex16.JPG","alex17.JPG","alex18.JPG","alex19.JPG","alex20.JPG",
                        "alex21.JPG","alex22.JPG","alex23.JPG"];
        if(message){
            num = Math.floor(Math.random() * (random));
            picture = pictures[num];
            const embed = new MessageEmbed().setImage('attachment://' + picture);
            message.reply({ embeds: [embed], files: ['./alex/' + picture] });
        }
        if(interaction){
            num = Math.floor(Math.random() * (random));
            picture = pictures[num];
            const embed = new MessageEmbed().setImage('attachment://' + picture);
            interaction.reply({ embeds: [embed], files: ['./alex/' + picture] });
        }
        
    },
} as ICommand