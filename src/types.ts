import { CommandInteraction } from 'discord.js';
import { SlashCommandBuilder } from '@discordjs/builders'

export interface SlashCommand{
    command: SlashCommandBuilder;
    run:(interaction: CommandInteraction) => Promise<void>;
}