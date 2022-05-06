import { Message, User } from "discord.js";
import { ICommand } from "wokcommands";

export default {
    category: 'Testing',
    description: 'Replies with commands for Practice bot',
    
    slash: 'both',
    testOnly: true,
    

    callback: ({}) => {
        const fs = require("fs");

        let text = "Something you want to write in";

        fs.writeFileSync("./docs/text.txt", text, function(err: any){
            if(err){
                return console.log("error");
            }
        })
    },
} as ICommand