const { REST, Routes } = require("discord.js");

const commands = [
  {
    name: "ping",
    description: "Replies with Pong!",
  },
];

const rest = new REST({ version: "10" }).setToken(
  "MTIxMjEyMDE3MDc5MzgwMzgzNg.GEG728.XFvFDz4KhQA5jAotaiC3ExcdzoWL3-9pUikSBA"
);

(async () => {
  try {
    console.log("Started refreshing application (/) commands.");

    await rest.put(Routes.applicationCommands("1212120170793803836"), {
      body: commands,
    });

    console.log("Successfully reloaded application (/) commands.");
  } catch (error) {
    console.error(error);
  }
})();
