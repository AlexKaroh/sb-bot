const botCommands = (bot) => {
  bot.setMyCommands([
    { command: "/start", description: "Начальное start" },
    { command: "/text", description: "Начальное text" },
    { command: "/test", description: "Начальное test" },
  ]);
};

module.exports = botCommands;
