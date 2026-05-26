export default (client) => {
    const fs = require("fs");
    const config = require("../config.json");

    client.commands = new Map();

    const folders = fs.readdirSync("./commands");

    for (const folder of folders) {
        const files = fs.readdirSync(`./commands/${folder}`)
        .filter(f => f.endsWith(".js"));

        for (const file of files) {
            const cmd = require(`../commands/${folder}/${file}`);
            client.commands.set(cmd.name, cmd);
        }
    }

    client.on("messageCreate", (message) => {

        if (message.author.bot) return;

        if (!message.content.startsWith(config.prefix)) return;

        const args = message.content.slice(config.prefix.length).trim().split(/ +/);
        const commandName = args.shift().toLowerCase();

        const command = client.commands.get(commandName);
        if (!command) return;

        command.execute(message, args, client);
    });
};
