const botCommands = (bot, role) => {
  const commandsArr = [
    { command: "/start", description: "START" },
    { command: "/info", description: "GET INFO" },
    { command: "/role", description: "SET ROLE" },
  ];

  bot.setMyCommands(commandsArr);
};

module.exports = botCommands;
