const messageHandler = (bot) => {
  bot.on("message", async (msg) => {
    const text = msg.text;
    const chatId = msg.chat.id;

    if (text === "/start") {
      return bot.sendMessage(chatId, "Добро пожаловать!", menuOptions);
    }

    return bot.sendMessage(chatId, `Команда не обнаружена.`);
  });
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
