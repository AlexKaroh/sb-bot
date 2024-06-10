const menuHandler = (bot) => {
  bot.on("callback_query", (msg) => {
    const data = msg.data;
    const chatId = msg.message.chat.id;

    switch (data) {
      case "/buyer":
        return bot.sendMessage(chatId, "Confirmed! Now your role is: Buyer");
      case "/booster":
        return bot.sendMessage(chatId, "Confirmed! Now your role is: Booster");
      case "/manager":
        return bot.sendMessage(chatId, "Confirmed! Now your role is: Manager");
    }
  });
};

module.exports = menuHandler;
