import mongoose from "mongoose";
import { ICommand } from "wokcommands";
import  TestSchema  from '../test-schema'

export default {
    category: 'Testing',
    description: 'Returns database entry based on the users name',
    
    slash: 'both',
    testOnly: true,
    

    callback: ({message, interaction}) => {

        if (message)
        {
            message.reply('Trying to save to database')
        }
        if(interaction)
        {
            interaction.reply('Result: ' + TestSchema.findOne({name: interaction.user}));
        }
    }



} as ICommand