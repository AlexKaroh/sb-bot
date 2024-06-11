const UserModel = require("./models");

const menuHandler = (bot) => {
  bot.on("callback_query", async (msg) => {
    const data = msg.data;
    const chatId = msg.message.chat.id;
    const user = await UserModel.findOne({ chatId });

    switch (data) {
      case "/buyer":
        user.role = "Buyer";
        await user.save();
        return bot.sendMessage(chatId, "Confirmed! Now your role is: Buyer");
      case "/booster":
        user.role = "Booster";
        await user.save();
        return bot.sendMessage(chatId, "Confirmed! Now your role is: Booster");
      case "/manager":
        user.role = "Manager";
        await user.save();
        return bot.sendMessage(chatId, "Confirmed! Now your role is: Manager");
    }
  });
};

module.exports = menuHandler;
