export default {
  data: {
    name: "ping",
    description: "Ping command",
  },

  async execute(interaction) {
    return interaction.reply({
      content: "Pong!",
      ephemeral: true,
    });
  },
};
