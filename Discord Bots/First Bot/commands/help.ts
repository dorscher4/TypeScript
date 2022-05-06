import { Message, User } from "discord.js";
import { ICommand } from "wokcommands";

export default {
    category: 'Testing',
    description: 'Replies with commands for Practice bot',
    
    slash: 'both',
    testOnly: true,
    

    callback: ({}) => {
        return 'All commands should begin with "/" or "!", like !help or /hi\n' + 
               'type help for commands\ntype hi to say hi\ntype valorant to pick ' +
               'a random valorant agent\ntype alex to get a sick photo of your ' +
               'boy\ntype zelda when you are sad and need a cute picture of a dog ' +
               '\ntype david to see a photo of some guy with glasses'
    },
} as ICommand