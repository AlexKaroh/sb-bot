const menuHandler = (bot) => {
  bot.on("callback_query", (msg) => {
    const data = msg.data;
    const chatId = msg.message.chat.id;
    console.log(msg);
  });
};

module.exports = menuHandler;
