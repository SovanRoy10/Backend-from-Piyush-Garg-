const { Client, GatewayIntentBits } = require("discord.js");

//GatewayIntentBits means which type of permission we will give
const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.MessageContent,
  ],
});

client.on("messageCreate", (message) => {
  if (message.author.bot) return;
  message.reply({ content: "Hi From Bot" });
});

client.on("interactionCreate", (interaction) => {
  interaction.reply("pongg!!!");
});

client.login(
  "MTIxMjEyMDE3MDc5MzgwMzgzNg.GEG728.XFvFDz4KhQA5jAotaiC3ExcdzoWL3-9pUikSBA"
);
