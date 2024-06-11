const TelegramApi = require("node-telegram-bot-api");
const messageHandler = require("./message-handler");
const botCommands = require("./commands");
const menuHandler = require("./menu-handler");
const sequelize = require("./db");
const UserModel = require("./models");

const token = "7060393277:AAFX4gljOrbsjuSRb-cSODxERdmausDHhLY";
const bot = new TelegramApi(token, { polling: true });

const initBot = async () => {
  try {
    await sequelize.authenticate();
    await sequelize.sync();

    botCommands(bot);
    messageHandler(bot);
    menuHandler(bot);
  } catch (e) {
    return bot.sendMessage(chatId, `ERROR: ${e}`);
  }
};

initBot();
