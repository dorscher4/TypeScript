import mongoose from "mongoose";
import { ICommand } from "wokcommands";
import  TestSchema  from '../test-schema'

export default {
    category: 'Testing',
    description: 'Saves name, number and level to database',
    
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
            await new TestSchema({
                name: interaction.user.toString(),
                num1: '1',
                level: '20'
            }).save()
        }, 1000)

    },


} as ICommand