const { UserModel } = require("./models");
const setupHandlers = require("./bot");
const botCommands = require("./commands");

const roleHandler = (bot) => {
  bot.on("callback_query", async (msg) => {
    const data = msg.data;
    const chatId = msg.message.chat.id;
    const user = await UserModel.findOne({ chatId });

    const rolesArr = ["/buyer", "/booster", "/manager"];
    if (rolesArr.includes(data)) {
      const parsedRole = data.replace("/", "");
      const capitalizedRole = parsedRole.charAt(0).toUpperCase() + parsedRole.slice(1);
      user.role = capitalizedRole;
      setupHandlers;
      await user.save();

      // Устанавливаем новые команды на основе роли
      botCommands(bot, user.role);
      await bot.answerCallbackQuery(msg.id).then(bot.sendMessage(chatId, `Confirmed! Now your role is: ${user.role}`));
      return;
    }
  });
};

module.exports = roleHandler;
