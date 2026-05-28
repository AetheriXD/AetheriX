import './src/app.js';
client.on("messageCreate", async (message) => {
  if (message.author.bot) return;

  const prefix = "A!";

  if (!message.content.startsWith(prefix)) return;

  const args = message.content.slice(prefix.length).trim().split(/ +/);
  const command = args.shift().toLowerCase();

  if (command === "ping") {
    message.reply("Pong!");
  }
});
