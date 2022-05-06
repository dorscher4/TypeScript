import { User } from "discord.js";
import { ICommand } from "wokcommands";

export default {
    category: 'Testing',
    description: 'Replies with Hello',
    
    slash: 'both',
    testOnly: true,
    
    //Note: message.member.nickname returns the nickname for a user using a legacy command

    callback: ({}) => {
        return 'Hello'
    },
} as ICommand

