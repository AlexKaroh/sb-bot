const TelegramApi = require("node-telegram-bot-api");
const messageHandler = require("./message-handler");
const botCommands = require("./commands");
const menuHandler = require("./menu-handler");
const sequelize = require("./db");
const { UserModel, OfferModel } = require("./models");

const token = "7060393277:AAFX4gljOrbsjuSRb-cSODxERdmausDHhLY";
const bot = new TelegramApi(token, { polling: true });

const initBot = async () => {
  try {
    await sequelize.authenticate();
    await sequelize.sync();
    setupHandlers();
  } catch (e) {
    console.log(`ERROR: ${e}`);
  }
};

const getUserRole = async (chatId) => {
  const existingUser = await UserModel.findOne({ where: { chatId } });
  if (existingUser) {
    return existingUser.role;
  }
  return null;
};

const setupHandlers = () => {
  bot.on("message", async (msg) => {
    console.log(msg);
    const chatId = msg.chat.id;
    const role = await getUserRole(chatId);
    if (role) {
      // bot.sendMessage(chatId, `Defined role: ${role}`);
      botCommands(bot, role);
    }
  });

  botCommands(bot, null);
  messageHandler(bot);
  menuHandler(bot);
};

initBot();

module.exports = setupHandlers;
