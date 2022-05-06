import { Message, User } from "discord.js";
import { ICommand } from "wokcommands";

export default {
    category: 'Testing',
    description: 'Replies with commands for Practice bot',
    
    slash: 'both',
    testOnly: true,
    

    callback: ({message, interaction}) => {
        const fs = require('fs');

        fs.readFile('./docs/text.txt', function(err: any, data: { toString: () => string; }) {
            if(err) throw err;

            const arr = data.toString().replace(/\r\n/g,'\n').split('\n');

            for(let i of arr) {
                message.reply(i);
            }
        });

        //Could create string and separate string with special character
    },
} as ICommand
