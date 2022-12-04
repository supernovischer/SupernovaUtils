import { SlashCommandBuilder } from "discord.js";
import { SlashCommand } from "../types";

export const HelloCommand: SlashCommand = {
    command: new SlashCommandBuilder()
        .setName('hello')
        .setDescription('Returns a greeting'),
    async run(interaction) {
        await interaction.reply({
            //replies hello and mentions the user
            content: `Hello ${interaction.user}`,
        })
    }
}