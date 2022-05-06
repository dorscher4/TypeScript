import { ICommand } from "wokcommands";

export default {
    category: 'Testing',
    description: 'Replies with a random valorant character for you to play',
    
    slash: 'both',
    testOnly: true,
    

    callback: ({message, interaction}) => {
        var character;
        var num;
        var random = 19;
        var characters = ["whoever you want","Omen","Raze","Reyna","Viper","Yoru","Breach","Brimstone","Jett","Neon","Pheonix","Sage","Skye","Sova","Astra","Chamber","Cypher","KAY/O","Killjoy","Fade"];
        if (message)
        {
            if(message.member?.nickname === 'Lancelot')
            {
                random = 9;
                characters = ["whoever you want","Breach","Brimstone","Jett","Neon","Pheonix","Sage","Skye","Sova"];
            }
            num = Math.floor(Math.random() * (random));
            character = characters[num];
            message.reply('You should pick ' + character);
        }
        if(interaction)
        {
            if(interaction.user.toString() === '<@${Lancelot}>')
            {
                random = 19;
                characters = ["whoever you want","Breach","Brimstone","Jett","Neon","Pheonix","Sage","Skye","Sova"];
            }
            num = Math.floor(Math.random() * (random));
            character = characters[num];
            interaction.reply('You should pick ' + character);
        }
        
    },
} as ICommand