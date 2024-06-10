const messageHandler = (bot) => {
  bot.on("message", async (msg) => {
    const text = msg.text;
    const chatId = msg.chat.id;
    console.log(msg);
    if (text === "/start") {
      return bot.sendMessage(chatId, "Welcome! Please choose your role:", startOptions);
    }

    return bot.sendMessage(chatId, `Команда не обнаружена.`);
  });
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
