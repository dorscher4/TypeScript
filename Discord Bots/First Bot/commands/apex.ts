import { ICommand } from "wokcommands";

export default {
    category: 'Testing',
    description: 'Replies with a random valorant character for you to play',
    
    slash: 'both',
    testOnly: true,
    

    callback: ({message, interaction}) => {
        var character;
        var num;
        var random = 22;
        var characters = ["whoever you want","Bloohound","Lifeline","Gibraltar","Pathfinder","Wraith",
                          "Bangalore","Caustic","Mirage","Octane","Watson","Crypto","Revenant",
                          "Loba","Rampart","Horizon","Fuse","Valkrie","Seer","Ash","Mad Maggie","New Castle"];
        if (message)
        {
            num = Math.floor(Math.random() * (random));
            character = characters[num];
            message.reply('You should pick ' + character);
        }
        if(interaction)
        {
            num = Math.floor(Math.random() * (random));
            character = characters[num];
            interaction.reply('You should pick ' + character);
        }
        
    },
} as ICommand