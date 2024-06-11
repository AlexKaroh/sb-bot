const botCommands = (bot) => {
  bot.setMyCommands([
    { command: "/start", description: "START" },
    { command: "/info", description: "GET INFO" },
    { command: "/test", description: "Начальное test" },
  ]);
};

module.exports = botCommands;
