import { REST } from "discord.js";
import { APPLICATION_ID, GUILD_ID, TOKEN } from "./config";
import { SlashCommands } from "./slash-commands"
import { Routes } from 'discord-api-types/v10';

const registerGuildCommands = async () => {
    try {
        const commands = SlashCommands.map(({ command }) => command.toJSON()); 
        const rest =  new REST({ version: '10' }).setToken(TOKEN);
        console.log('Starting to refreh the guild commands...');
        await rest.put(Routes.applicationGuildCommands(APPLICATION_ID, GUILD_ID), {
            body: commands,
        });
        console.log('Succesfully reloaded the guild commands.')
    } catch(err) {
        console.error(err);
    }
};

registerGuildCommands();