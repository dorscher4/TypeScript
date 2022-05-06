import mongoose from "mongoose";
import { ICommand } from "wokcommands";
import  TestSchema  from '../test-schema'

export default {
    category: 'Testing',
    description: 'Updates data in database',
    
    slash: 'both',
    testOnly: true,
    

    callback: ({message, interaction}) => {
        
        if (message)
        {
            message.reply('Trying to save to database')
        }
        if(interaction)
        {
            interaction.reply('Trying to save to database')
        }
        
        setTimeout(async () => {
            await TestSchema.updateOne(
                {
                    name: interaction.user.toString()
                },
                {
                    level: '2'
                }
            )
        }, 1000)
    }



} as ICommand