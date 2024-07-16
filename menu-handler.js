const { UserModel } = require("./models");
const roleHandler = require("./role-handler");

const menuHandler = (bot) => {
  roleHandler(bot);

  bot.on("callback_query", async (msg) => {
    const data = msg.data;
    const chatId = msg.message.chat.id;
    const messageId = msg.message.message_id; // Получаем ID сообщения с меню
    const user = await UserModel.findOne({ where: { chatId } });

    switch (data) {
      case "1":
        // Подтверждаем, что callback_query обработан
        await bot.answerCallbackQuery(msg.id);
        // Удаляем предыдущее меню и показываем новое
        await bot.editMessageText("вложенность меню 1", {
          chat_id: chatId,
          message_id: messageId,
          reply_markup: test1.reply_markup,
        });
        break;
      default:
        return;
    }
  });
};

const test1 = {
  reply_markup: JSON.stringify({
    inline_keyboard: [
      [{ text: "test1", callback_data: "1" }],
      [{ text: "test2", callback_data: "2" }],
      [{ text: "test3", callback_data: "3" }],
      [{ text: "test4", callback_data: "4" }],
    ],
  }),
};

module.exports = menuHandler;
