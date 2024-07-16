const { UserModel, OfferModel } = require("./models");

const messageHandler = (bot) => {
  try {
    bot.on("message", async (msg) => {
      const text = msg.text;
      const chatId = msg.chat.id.toString();
      const userName = msg.chat.username;

      if (text === "/start") {
        const existingUser = await UserModel.findOne({ where: { chatId, userName } });

        if (existingUser) {
          return bot.sendMessage(chatId, `Hello! You are already registered. Your role: ${existingUser.role}`);
        }

        await UserModel.create({ chatId, userName });
        return bot.sendMessage(chatId, "Welcome! Please choose your role:", startOptions);
      }

      if (text === "/role") {
        return await bot.sendMessage(chatId, `Select role :`, startOptions);
      }

      if (text === "/info") {
        const user = await UserModel.findOne({ where: { chatId, userName } });
        return bot.sendMessage(chatId, `Your role ${user.role}`);
      }

      if (text === "/test") {
        return await bot.sendMessage(chatId, `menuOptions :`, menuOptions);
      }

      return bot.sendMessage(chatId, `Команда не обнаружена.`);
    });
  } catch (e) {
    return bot.sendMessage(chatId, `ERROR: ${e}`);
  }
};

const startOptions = {
  reply_markup: JSON.stringify({
    inline_keyboard: [
      [{ text: "💸 Buyer 💸", callback_data: "/buyer" }],
      [{ text: "🎮 Booster 🎮", callback_data: "/booster" }],
      [{ text: "📋 Manager 📋 ", callback_data: "/manager" }],
    ],
  }),
};

const menuOptions = {
  reply_markup: JSON.stringify({
    inline_keyboard: [
      [{ text: "✅ ACTIVE MODE: ON ✅", callback_data: "1" }],
      [{ text: "📂 Sessions 📂", callback_data: "2" }],
      [{ text: "📥 New order 📥", callback_data: "3" }],
      [{ text: "📋 Active orders list 📋", callback_data: "4" }],
      [{ text: "⚠️ Attention orders ⚠️", callback_data: "5" }],
      [{ text: "🎮 Edit booster games 🎮", callback_data: "6" }],
      [{ text: "⚙️ Settings ⚙️", callback_data: "7" }],
      [{ text: "❔ Help ❔", callback_data: "8" }],
    ],
  }),
};

module.exports = messageHandler;
